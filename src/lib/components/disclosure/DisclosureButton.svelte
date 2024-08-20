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
	import Base, { type ConfigProps } from '../Base.svelte';
	import type { ElementProps, HTMLTag } from '$lib/types.js';

	const context = getContext<DisclosureContext>('Disclosure');

	let {
		as = 'button' as Tag,
		mode = 'toggle',
		children,
		...rest
	}: DisclosureButtonProps<Tag> & ElementProps<Tag> = $props();

	const base = $derived({
		classes: []
	}) as ConfigProps;

	function handleClick(e: Event) {
		if (mode === 'toggle') context.toggle();
		else if (mode === 'open') context.open();
		else context.close();
	}
</script>

<Base onclick={handleClick} {...base} {...rest as any} {as}>
	{@render children()}
</Base>
