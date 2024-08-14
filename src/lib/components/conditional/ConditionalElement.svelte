<script context="module" lang="ts">
	import type { ElementProps, HTMLTag } from '$lib/types.js';
	import type { Snippet } from 'svelte';

	export type ConditionalElementProps<Tag extends HTMLTag> = {
		as: Tag;
		children: Snippet;
		condition: boolean | ((...args: any[]) => boolean);
	} & ElementProps<Tag>;
</script>

<script lang="ts" generics="Tag extends HTMLTag">
	let { as, condition, children, ...rest }: ConditionalElementProps<Tag> = $props();
</script>

{#if typeof condition === 'function' ? condition() : condition}
	<svelte:element this={as} {...rest}>
		{@render children()}
	</svelte:element>
{:else}
	{@render children()}
{/if}
