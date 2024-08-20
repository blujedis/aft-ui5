<script context="module" lang="ts">
	import type { HTMLTag } from '$lib/types.js';
	import type { TransitionOptions } from '$lib/utils/transitioner.js';
	import { setContext, type Snippet } from 'svelte';

	interface SnippetMethods {
		open: () => void;
		close: () => void;
		toggle: () => void;
	}

	export type DisclosureProps<Tag extends HTMLTag> = {
		as?: Tag;
		abortable?: boolean;
		escapable?: boolean;
		visible?: boolean;
		transition?: TransitionOptions;
		children: Snippet<[SnippetMethods]>;
	};

	export interface DisclosureContext {
		setPanel: (node: HTMLElement) => void;
		escapable: boolean;
		isVisible: () => boolean;
		transition: TransitionOptions;
		open: () => void;
		close: () => void;
		toggle: () => void;
	}
</script>

<script lang="ts" generics="Tag extends HTMLTag = 'div'">
	import Base, { type ConfigProps } from '../Base.svelte';
	import { documentEvent } from '$lib/utils/events.js';

	let {
		as = 'div' as Tag,
		abortable,
		escapable,
		visible = $bindable(),
		transition,
		children,
		...rest
	}: DisclosureProps<Tag> = $props();

	let panel = $state() as HTMLElement;

	setContext('Disclosure', {
		setPanel: (node: HTMLElement) => (panel = node),
		escapable,
		isVisible: () => visible,
		transition,
		open: handleOpen,
		close: handleClose,
		toggle: handleToggle
	}) as DisclosureContext;

	const base = $derived({
		classes: [],
		use: documentEvent('click', handleClickOutside)
	}) as ConfigProps;

	function handleClickOutside(e: Event & { target: HTMLElement }, node: HTMLElement) {
		const shouldClose =
			(node && !node.contains(e.target) && !e.defaultPrevented && abortable && visible) || false;
		if (!shouldClose) return;
		handleClose();
	}

	function handleClose() {
		visible = false;
	}

	function handleOpen() {
		visible = true;
	}

	function handleToggle() {
		visible = !visible;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (!visible || e.repeat) return;
		const target = e.target as HTMLElement;
		if (e.key === 'Escape' && escapable && (target.matches('body') || target === panel)) {
			e.preventDefault();
			handleClose();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<Base {...base} {...rest as any} {as} role="presentation">
	{@render children({ open: handleOpen, close: handleClose, toggle: handleToggle })}
</Base>
