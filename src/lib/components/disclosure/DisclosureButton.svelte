<script context="module" lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import { type DisclosureContext } from './Disclosure.svelte';

	export interface DisclosureButtonProps<Tag extends HTMLTag> {
		as?: Tag;
		mode?: 'open' | 'close' | 'toggle';
		children: Snippet;
	}
</script>

<script lang="ts" generics="Tag extends HTMLTag = 'button'">
	import type { ElementProps, HTMLTag } from '$lib/types.js';
	import { buildClass } from '$lib/theme/build.svelte.js';

	const context = getContext<DisclosureContext>('Disclosure');

	let {
		as = 'button' as Tag,
		mode = 'toggle',
		children,
		...rest
	}: DisclosureButtonProps<Tag> & ElementProps<Tag> = $props();

	const classes = $derived(
		buildClass({
			classes: [rest.class]
		})
	);

	function handleClick(e: Event) {
		if (mode === 'toggle') context.toggle();
		else if (mode === 'open') context.open();
		else context.close();
	}
</script>

<svelte:element
	this={as}
	role="button"
	tabindex="-1"
	onclick={handleClick}
	{...rest}
	class={classes}
>
	{@render children()}
</svelte:element>
