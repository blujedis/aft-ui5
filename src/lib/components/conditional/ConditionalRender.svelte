<script context="module" lang="ts">
	/**
	 * @see https://stackblitz.com/edit/svelte5-kit-iscomp-d8sd?file=src%2Froutes%2F%2Bpage.svelte
	 */
	import type { Component as SvelteComponent, Snippet } from 'svelte';

	export type ConditionalRenderProps<P extends Record<string, unknown>> = {
		props: P;
		Component: SvelteComponent<P> | Snippet;
	};
</script>

<script lang="ts" generics="P extends Record<string, unknown> = Record<string, unknown>">
	import { isComponent, isSnippet } from '$lib/utils/helpers.js';
	let { props, Component }: ConditionalRenderProps<P> = $props();
</script>

{#if isComponent(Component)}
	<Component {...props} />
{:else if isSnippet(Component)}
	{@render Component()}
{:else if typeof Component === 'string'}
	{@html Component}
{/if}
