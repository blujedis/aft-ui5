<script module lang="ts">
	import type { ElementProps, HTMLTag } from '../../types.js';
	import type { Snippet } from 'svelte';

	export type ConditionalElementProps<Tag extends HTMLTag> = {
		as: Tag;
		children: Snippet;
		condition: boolean | ((...args: any[]) => boolean);
	};
</script>

<script lang="ts" generics="Tag extends HTMLTag">
	let { as, condition, children, ...rest }: ConditionalElementProps<Tag> & ElementProps<Tag> =
		$props();
	const shouldRender = $derived.by(() => {
		if (as === 'user') return false;
		if (typeof condition === 'function') return condition();
		return condition;
	});
</script>

{#if shouldRender}
	<svelte:element this={as} {...rest}>
		{@render children()}
	</svelte:element>
{:else}
	{@render children()}
{/if}
