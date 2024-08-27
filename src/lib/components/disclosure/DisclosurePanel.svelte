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
	import { focustrap } from '$lib/hooks/focustrap.js';
	import { buildClass } from '$lib/theme/build.svelte.js';
	import { transitioner } from '$lib/utils/transitioner.js';

	const context = getContext<DisclosureContext>('Disclosure');
	const [focustrapAction, focustrapHandler] = focustrap();

	let {
		as = 'div' as Tag,
		children,
		...rest
	}: DisclosurePanelProps<Tag> & ElementProps<Tag> = $props();

	const classes = $derived(
		buildClass({
			classes: [rest.class]
		})
	);

	function usePanel(node: HTMLElement) {
		context.setPanel(node);
		return focustrapAction(node); // handle focus trap.
	}

	function handleKeydown(e: KeyboardEvent) {
		if (!e.repeat && e.key === 'Escape' && context.isVisible() && context.escapable) {
			e.stopPropagation();
			context.close();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} on:keydown={focustrapHandler} />

{#if context.isVisible()}
	<svelte:element
		this={as}
		role="alert"
		tabindex="-1"
		{...rest}
		use:usePanel
		transition:transitioner={context.transition}
		class={classes}
	>
		{@render children()}
	</svelte:element>
{/if}
