<script context="module" lang="ts">
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

	export type PopperEvent = 'hover' | 'click' | 'focus';

	export interface PopperProps {
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

	let {
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
		children,
		...rest
	}: PopperProps & ElementProps<'div'> = $props();

	let targetEl = $state() as Element;
	let uiEl: HTMLElement;
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

	const clickOutside = documentEvent('click', handleClickOutside, event === 'click' && abortable);

	function getEvents() {
		return [
			['click', handleOpen, event === 'click'],
			['focusin', handleOpen, event === 'focus'],
			['focusout', handleClose, event === 'focus'],
			['mouseenter', handleOpen, event === 'hover'],
			['mouseleave', handleClose, event === 'hover']
		] as [string, (...args: any[]) => void, boolean][];
	}

	function optional(predicate: boolean, fn: (ev: Event) => void) {
		return predicate ? fn : () => undefined;
	}

	function handleClickOutside(e: Event & { target: HTMLElement }, node: HTMLElement) {
		const shouldClose =
			(node && !node.contains(e.target) && !e.defaultPrevented && visible) || false;
		if (!shouldClose) return;
		handleClose(e);
	}

	function handleEscape(e: KeyboardEvent) {
		const shouldEscape =
			['click', 'focus'].includes(event) &&
			(escapable || typeof escapable === 'undefined') &&
			visible;
		if (!shouldEscape) return;
		// if (!['click', 'focus'].includes(event) || !escapable || !visible) return;
		if (e.key === 'Escape') {
			e.preventDefault();
			handleClose(e);
		}
	}

	function createDestroy(el: Element, name: string, fn: (...args: any[]) => void) {
		destroys.push(() => el.removeEventListener(name, fn));
	}

	function handleClose(e?: Event) {
		if (active && e) {
			setTimeout(() => {
				const elements = [targetEl, uiEl, ...triggerEls].filter(Boolean);
				if (e.type === 'mouseleave' && elements.some((el) => el.matches(':hover'))) return;
				if (e.type === 'focusout' && elements.some((el) => el.contains(document.activeElement)))
					return;
				visible = false;
			}, 100);
		} else visible = false;
	}

	function handleOpen(e: Event) {
		if (targetEl === undefined) console.error('trigger undefined');
		if (!target && triggerEls.includes(e.target as HTMLElement) && targetEl !== e.target) {
			targetEl = e.target as HTMLElement;
		}
		visible = true;
	}

	function bindEvents() {
		triggerEls.forEach((el) => {
			if (el.tabIndex < 0) el.tabIndex = 0; // must receive focus.
			for (const [name, handler, enabled] of getEvents()) {
				if (enabled) {
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
		if (!triggerEls.length)
			console.error(
				`Cannot init Popper unknown trigger. Did you forget to prepend the selector with "#" or "."?`
			);
	}

	function clickFocus(e: Event & { target?: EventTarget | null }) {
		const target = e.target as HTMLElement;
		target?.focus();
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
		computePosition(targetEl, uiEl, { placement, strategy, middleware }).then(
			({ x, y, middlewareData, placement, strategy }: ComputePositionReturn) => {
				uiEl.style.position = strategy;
				uiEl.style.left = pixels(x);
				uiEl.style.top = pixels(y);
				if (middlewareData.arrow && arrowEl instanceof HTMLDivElement) {
					const { x: ax, y: ay } = middlewareData.arrow as Coords & { centerOffset: number };
					const uiSide = placement.split('-')[0] as Side;
					arrowSide = ArrowPosition[uiSide];
					arrowEl.style.left =
						uiSide !== 'left'
							? getArrowPlacement(uiEl.clientWidth, arrowEl.clientWidth, ax)
							: pixels(ax);
					arrowEl.style.top =
						uiSide !== 'top'
							? getArrowPlacement(uiEl.clientHeight, arrowEl.clientHeight, ay)
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
		uiEl = node;
		uiEl.tabIndex = active ? -1 : (undefined as any);
		let cleanup = autoUpdate(targetEl, uiEl, updatePosition);
		return {
			update(targetEl: HTMLElement) {
				cleanup();
				cleanup = autoUpdate(targetEl, uiEl, updatePosition);
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

	onMount(() => {
		initTriggers();
		bindEvents();
		initTarget();
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
		onfocusin={optional(active && event === 'focus', handleOpen)}
		onfocusout={optional(active && event === 'focus', handleClose)}
		onmouseenter={optional(active && event === 'hover', handleOpen)}
		onmouseleave={optional(active && event === 'hover', handleClose)}
	>
		{@render children()}
		{#if arrow}<div use:initArrow class={arrowClasses}></div>{/if}
	</div>
{/if}
