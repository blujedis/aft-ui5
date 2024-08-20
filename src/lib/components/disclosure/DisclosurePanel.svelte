<script context="module" lang="ts">
	import type { ElementProps, HTMLTag } from '$lib/types.js';
	import { type DisclosureContext } from './Disclosure.svelte';
	import { getContext, type Snippet } from 'svelte';

	export type DisclosurePanelProps<Tag extends HTMLTag> = {
		as?: Tag;
		children: Snippet;
	};
</script>

<script lang="ts" generics="Tag extends HTMLTag = 'div'">
	import Base, { type ConfigProps } from '../Base.svelte';
	import { focustrap } from '$lib/hooks/focustrap.js';

	const context = getContext<DisclosureContext>('Disclosure');
	const [action, handler] = focustrap();

	let {
		as = 'div' as Tag,
		children,
		...rest
	}: DisclosurePanelProps<Tag> & ElementProps<Tag> = $props();

	const base = $derived({
		classes: [],
		tabindex: -1,
		transition: context.transition,
		visible: context.isVisible(),
		use: (node) => {
			context.setPanel(node);
			action(node); // handle focus trap.
		}
	}) as ConfigProps;

	function handleKeydown(e: KeyboardEvent) {
		if (!e.repeat && e.key === 'Escape' && context.isVisible() && context.escapable) {
			e.stopPropagation();
			context.close();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} on:keydown={handler} />

{#if context.isVisible()}
	<Base {...base} {...rest as any} {as}>
		{@render children()}
	</Base>
{/if}
