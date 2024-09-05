<script context="module" lang="ts">
	import type { Placement, Middleware, ComputePositionReturn, Side } from '@floating-ui/dom';
	import { flip, shift, autoUpdate, computePosition } from '@floating-ui/dom';
	import type { Snippet } from 'svelte';

	export type PopperEvent = 'hover' | 'click' | 'focus';

	export interface PopperProps {
		active?: boolean;
		arrow?: boolean;
		border?: number;
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
</script>

<script lang="ts">
	import { documentEvent } from '$lib/utils/events.js';
	import type { AriaRole } from 'svelte/elements';

	let {
		active = false,
		arrow,
		border = 1,
		event = 'hover',
		middleware = [flip(), shift()],
		offset = 8,
		placement = 'top',
		role = 'tooltip',
		strategy = 'absolute',
		target,
		trigger,
		visible = $bindable(),
		children,
		...rest
	}: PopperProps = $props();

	let targetEl = $state() as Element;
	let uiEl: HTMLElement;
	let arrowEl: HTMLElement | null;
	let contentEl = $state() as HTMLElement;
	let triggerEls = $state([]) as HTMLElement[];
	let destroys = [] as ((...args: any[]) => void)[];
	let arrowSide: Side;
	let blocked: boolean = false;

	const hoverable = $derived(event === 'hover');
	const clickable = $derived(event === 'click');

	const arrowPositionMap: Record<Side, Side> = {
		left: 'right',
		right: 'left',
		bottom: 'top',
		top: 'bottom'
	};

	const block = () => ((blocked = true), setTimeout(() => (blocked = false)), 250);
	const hasHover = (el: Element) => el.matches(':hover');
	const hasFocus = (el: Element) => el.contains(document.activeElement);
	const px = (n: number | undefined) => (n != null ? `${n}px` : '');
	const clickOutside = documentEvent('click', handleClickOutside);

	function createDestroy(el: Element, name: string, fn: (...args: any[]) => void) {
		destroys.push(() => el.removeEventListener(name, fn));
	}

	function handleClickOutside(e: Event & { target: HTMLElement }, node: HTMLElement) {
		const shouldClose =
			(node && !node.contains(e.target) && !e.defaultPrevented && visible) || false;
		if (!shouldClose) return;
		handleClose(e);
	}

	function optional(pred: boolean, func: (ev: Event) => void) {
		return pred ? func : () => undefined;
	}

	function handleClose(e: Event) {
		if (active) {
			setTimeout(() => {
				const elements = [targetEl, uiEl, ...triggerEls].filter(Boolean);
				if (e.type === 'mouseleave' && elements.some(hasHover)) return;
				if (e.type === 'focusout' && elements.some(hasFocus)) return;
				visible = false;
			}, 100);
		} else visible = false;
	}

	function handleOpen(e: Event) {
		if (targetEl === undefined) console.error('trigger undefined');
		if (!target && triggerEls.includes(e.target as HTMLElement) && targetEl !== e.target) {
			targetEl = e.target as HTMLElement;
			block();
		}
		if (clickable && e.type === 'focusin' && !visible) block();
		visible = clickable && e.type === 'click' && !blocked ? !visible : true;
	}

	function getEvents() {
		return [
			['focusin', handleOpen, true],
			['focusout', handleClose, true],
			['click', handleOpen, clickable],
			['mouseenter', handleOpen, hoverable],
			['mouseleave', handleClose, hoverable]
		] as [string, (...args: any[]) => void, boolean][];
	}

	function bindEvents() {
		const events = getEvents();
		triggerEls.forEach((el) => {
			if (el.tabIndex < 0) el.tabIndex = 0; // must receive focus.
			for (const [name, handler, enabled] of events) {
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
			throw new Error(`Cannot init Popper component using Trigger Element(s) of undefined.`);
	}

	function initTarget() {
		if (target) {
			targetEl = target as Element;
			if (typeof target === 'string') {
				const tempEl = document.querySelector(target);
				if (!tempEl) throw new Error(`Popper cannot init using target of null or undefined.`);
				targetEl = tempEl;
				targetEl.addEventListener('focusout', handleClose);
				createDestroy(targetEl, 'focusout', handleClose);
				if (hoverable) {
					targetEl.addEventListener('mouseleave', handleClose);
					createDestroy(targetEl, 'mouseleave', handleClose);
				}
			}
		} else {
			targetEl = triggerEls[0];
		}
	}

	function updatePosition() {
		computePosition(targetEl, uiEl, { placement, strategy, middleware }).then(
			({ x, y, middlewareData, placement, strategy }: ComputePositionReturn) => {
				uiEl.style.position = strategy;
				uiEl.style.left = px(x); // yOnly ? '0' : px(x);
				uiEl.style.top = px(y);
				if (middlewareData.arrow && arrowEl instanceof HTMLDivElement) {
					arrowEl.style.left = px(middlewareData.arrow.x);
					arrowEl.style.top = px(middlewareData.arrow.y);
					arrowSide = arrowPositionMap[placement.split('-')[0] as Side];
					arrowEl.style[arrowSide] = px(-arrowEl.offsetWidth / 2 - (border ? 1 : 0));
				}
			}
		);
	}

	function initEl(node: HTMLElement) {
		uiEl = node;
		// uiEl.tabIndex = activeContent ? -1 : undefined as any;
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

	$effect(() => {
		initTriggers();
		bindEvents();
		initTarget();
		return () => {
			destroys.forEach((d) => d());
		};
	});
</script>

{#if !targetEl}
	<div bind:this={contentEl}></div>
{/if}

{#if targetEl}
	<div
		{role}
		use:initEl
		tabindex="-1"
		onfocusin={optional(active, handleOpen)}
		onfocusout={optional(active, handleClose)}
		onmouseenter={optional(active && hoverable, handleOpen)}
		onmouseleave={optional(active && hoverable, handleClose)}
		{...rest}
	>
		{@render children()}
		{#if arrow}<div use:initArrow class="arrow-class"></div>{/if}
	</div>
{/if}
