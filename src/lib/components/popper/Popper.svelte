<script module lang="ts">
	import type {
		Placement,
		Middleware,
		ComputePositionReturn,
		Side,
		Coords
	} from '@floating-ui/dom';
	import {
		flip,
		shift,
		autoUpdate,
		computePosition,
		arrow as uiArrow,
		offset as uiOffset
	} from '@floating-ui/dom';
	import { onMount, type Snippet } from 'svelte';
	import type { AriaRole } from 'svelte/elements';
	import type { ElementProps } from '$lib/types.js';

	export type PopperEvent = 'hover' | 'click' | 'focus' | 'touch' | 'none';

	export interface PopperApi {
		triggers: HTMLElement[];
		panel: HTMLElement;
		open: (e?: Event) => void;
		close: (e?: Event) => void;
	}

	export interface PopperProps {
		api?: PopperApi;
		abortable?: boolean;
		active?: boolean;
		arrow?: boolean;
		arrowClass?: ClassValue | ClassValue[];
		arrowPlacement?: 'start' | 'end' | 'auto';
		arrowOffset?: number;
		border?: number;
		escapable?: boolean;
		event?: PopperEvent;
		middleware?: Middleware[];
		offset?: number;
		placement?: Placement;
		role?: AriaRole;
		strategy?: 'absolute' | 'fixed';
		target?: string | HTMLElement;
		trigger?: string;
		visible?: boolean;
		onClosed?: () => any;
		children: Snippet;
	}

	const ArrowPosition: Record<Side, Side> = {
		left: 'right',
		right: 'left',
		bottom: 'top',
		top: 'bottom'
	};
</script>

<script lang="ts">
	import { documentEvent } from '$lib/utils/events.js';
	import { ensureArray } from '$lib/utils/array.js';
	import { clsxm } from '$lib/utils/string.js';
	import type { ClassValue } from 'clsx';
	import { getBrowser } from '$lib/utils/dom.js';
	import { optevent } from '$lib/utils/helpers.js';

	let {
		api = $bindable(),
		abortable = true, // only applies to click event.
		active = true,
		arrow,
		arrowClass,
		arrowPlacement = 'auto',
		arrowOffset = 8,
		border = 1,
		escapable,
		event = 'hover',
		middleware: initMiddleware = [flip(), shift()],
		offset = 8,
		placement = 'top',
		role = 'tooltip',
		strategy = 'absolute',
		target,
		trigger,
		visible = $bindable(),
		onClosed,
		children,
		...rest
	}: PopperProps & ElementProps<'div'> = $props();

	let targetEl = $state() as Element;
	let element: HTMLElement;
	let arrowEl = $state(null) as HTMLElement | null;
	let contentEl = $state() as HTMLElement;
	let triggerEls = $state([]) as HTMLElement[];
	let destroys = [] as ((...args: any[]) => void)[];
	let arrowSide: Side;

	const isSafari = $derived(getBrowser() === 'safari');

	const middleware = $derived([
		...initMiddleware,
		uiOffset(+offset),
		arrowEl && uiArrow({ element: arrowEl, padding: 10 })
	]);

	const arrowClasses = $derived(
		clsxm([
			'absolute pointer-events-none w-2 h-2 rotate-45 bg-inherit border-inherit',
			...ensureArray(arrowClass)
		])
	);

	const pixels = (n: number | undefined) => (typeof n === 'number' ? `${n}px` : '');

	const clickOutside = documentEvent(
		'click',
		handleClickOutside,
		() => event === 'click' && abortable
	);

	const touchOutside = documentEvent(
		'touchstart',
		handleClickOutside,
		() => event === 'touch' && abortable
	);

	function getEvents() {
		return [
			['none', () => {}, event === 'none'],
			['click', handleOpen, event === 'click'],
			['focusin', handleOpen, event === 'focus'],
			['focusout', handleClose, event === 'focus'],
			['touchstart', handleOpen, event === 'touch'],
			['focusout', handleClose, event === 'touch'],
			['mouseenter', handleOpen, event === 'hover'],
			['mouseleave', handleClose, event === 'hover']
		] as [PopperEvent, (...args: any[]) => void, boolean][];
	}

	function handleClickOutside(e: Event & { target: HTMLElement }, node: HTMLElement) {
		const shouldClose =
			(node && !node.contains(e.target) && !e.defaultPrevented && visible) || false;
		if (!shouldClose) return;
		handleClose(e);
	}

	function handleEscape(e: KeyboardEvent) {
		const shouldEscape =
			(['click', 'focus'] as PopperEvent[]).includes(event) &&
			(escapable || typeof escapable === 'undefined') &&
			visible;
		if (!shouldEscape || e.key !== 'Escape') return;
		e.preventDefault();
		handleClose(e);
	}

	function createDestroy(el: Element, name: string, fn: (...args: any[]) => void) {
		destroys.push(() => el.removeEventListener(name, fn));
	}

	function handleClose(e?: Event) {
		if (active && e) {
			setTimeout(() => {
				const elements = [targetEl, element, ...triggerEls].filter(Boolean);
				if (e.type === 'mouseleave' && elements.some((el) => el?.matches(':hover'))) return;
				if (e.type === 'focusout' && elements.some((el) => el?.contains(document.activeElement)))
					return;
				visible = false;
			}, 100);
		} else visible = false;
		if (onClosed) onClosed();
	}

	function handleOpen(e?: Event) {
		if (targetEl === undefined) console.error('trigger undefined');
		if (!target && e && triggerEls.includes(e.target as HTMLElement) && targetEl !== e.target) {
			targetEl = e.target as HTMLElement;
		}
		visible = true;
	}

	function bindEvents() {
		triggerEls.forEach((el) => {
			// if (el.tabIndex < 0) el.tabIndex = 0; // must receive focus.
			for (const [name, handler, enabled] of getEvents()) {
				if (enabled && name !== 'none') {
					el.addEventListener(name, handler);
					createDestroy(el, name, handler);
				}
			}
		});
	}

	function initTriggers() {
		if (trigger) triggerEls = [...document.querySelectorAll<HTMLElement>(trigger)];
		else
			triggerEls = contentEl.previousElementSibling
				? [contentEl.previousElementSibling as HTMLElement]
				: [];
		if (!triggerEls.length) console.error(`Cannot init Popper using unknown trigger(s).`);
		triggerEls.forEach((t) => {
			t.classList.add('popover-trigger');
		});
	}

	function clickFocus(e: Event & { target?: EventTarget | null }) {
		(e.target as HTMLElement)?.focus();
	}

	function initTarget() {
		if (target) {
			targetEl = target as Element;
			if (typeof target === 'string') {
				const tempEl = document.querySelector(target);
				if (!tempEl) return console.error(`Popper cannot init using target of null or undefined.`);
				targetEl = tempEl;
				targetEl.addEventListener('focusout', handleClose);
				createDestroy(targetEl, 'focusout', handleClose);
				if (event === 'hover') {
					targetEl.addEventListener('mouseleave', handleClose);
					createDestroy(targetEl, 'mouseleave', handleClose);
				}
			}
		} else {
			targetEl = triggerEls[0];
		}
		// safari doesn't set focus on button.
		if (targetEl.tagName.toLowerCase() === 'button' && isSafari) {
			targetEl.addEventListener('click', clickFocus);
			createDestroy(targetEl, 'click', clickFocus);
		}
	}

	function getArrowPlacement(containerSize: number, arrowSize: number, value?: number) {
		const suffix = placement.split('-')[1];
		if (['start', 'end'].includes(arrowPlacement)) {
			if (arrowPlacement !== 'end') return pixels(arrowOffset);
			return pixels(containerSize - arrowSize - arrowOffset);
		} else if (arrowPlacement === 'auto' && ['start', 'end'].includes(suffix)) {
			if (suffix !== 'end') return pixels(arrowOffset);
			return pixels(containerSize - arrowSize - arrowOffset);
		} else {
			return pixels(value);
		}
	}

	function updatePosition() {
		if (!element) return;
		computePosition(targetEl, element, { placement, strategy, middleware }).then(
			({ x, y, middlewareData, placement, strategy }: ComputePositionReturn) => {
				if (!element) return;
				element.style.position = strategy;
				element.style.left = pixels(x);
				element.style.top = pixels(y);
				if (middlewareData.arrow && arrowEl instanceof HTMLDivElement) {
					const { x: ax, y: ay } = middlewareData.arrow as Coords & { centerOffset: number };
					const uiSide = placement.split('-')[0] as Side;
					arrowSide = ArrowPosition[uiSide];
					arrowEl.style.left =
						uiSide !== 'left'
							? getArrowPlacement(element.clientWidth, arrowEl.clientWidth, ax)
							: pixels(ax);
					arrowEl.style.top =
						uiSide !== 'top'
							? getArrowPlacement(element.clientHeight, arrowEl.clientHeight, ay)
							: pixels(ay);
					arrowEl.style[arrowSide] = pixels(-arrowEl.offsetWidth / 2 - (border ? 1 : 0));
					arrowEl.style.borderTop = ['bottom', 'left'].includes(arrowSide) ? '0px' : '';
					arrowEl.style.borderLeft = ['bottom', 'right'].includes(arrowSide) ? '0px' : '';
					arrowEl.style.borderRight = ['top', 'left'].includes(arrowSide) ? '0px' : '';
					arrowEl.style.borderBottom = ['top', 'right'].includes(arrowSide) ? '0px' : '';
				}
			}
		);
	}

	function initEl(node: HTMLElement) {
		element = node;
		element.tabIndex = active ? -1 : (undefined as any);
		let cleanup = autoUpdate(targetEl, element, updatePosition);
		if (event === 'hover') element.focus();
		return {
			update(targetEl: HTMLElement) {
				cleanup();
				cleanup = autoUpdate(targetEl, element as HTMLElement, updatePosition);
			},
			destroy() {
				cleanup();
			}
		};
	}

	function initArrow(node: HTMLElement) {
		arrowEl = node;
		return {
			destroy() {
				arrowEl = null;
			}
		};
	}

	$effect(() => {
		if (visible) {
			triggerEls.forEach((t) => t.setAttribute('aria-expanded', 'true'));
		} else {
			triggerEls.forEach((t) => t.setAttribute('aria-expanded', 'false'));
		}
	});

	onMount(() => {
		initTriggers();
		bindEvents();
		initTarget();
		api = {
			// update Api for parent.
			triggers: triggerEls,
			panel: element,
			open: handleOpen,
			close: handleClose
		};
		return () => {
			destroys.forEach((d) => d());
		};
	});
</script>

<svelte:window onkeydown={handleEscape} />

{#if !targetEl}
	<div bind:this={contentEl}></div>
{/if}

{#if targetEl && visible}
	<div
		{role}
		{...rest}
		use:initEl
		use:clickOutside
		use:touchOutside
		onfocusin={optevent(active && event === 'focus', handleOpen)}
		onfocusout={optevent(active && event === 'focus', handleClose)}
		onmouseenter={optevent(active && event === 'hover', handleOpen)}
		onmouseleave={optevent(active && event === 'hover', handleClose)}
	>
		{@render children()}
		{#if arrow}<div use:initArrow class={arrowClasses}></div>{/if}
	</div>
{/if}
