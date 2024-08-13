<script context="module" lang="ts">
	import { type ElementProps } from '$lib/types.js';
	import type { Snippet } from 'svelte';
	import { type ConfigProps } from '$lib/components/Base.svelte';
	import { Size } from '$lib/theme/types.js';

	export type AlertProps = {
		size?: keyof typeof Size;
		variant?: 'default';
		children: Snippet<[]>;
	} & ElementProps<'div'>;

	export const alertVariants = ['default'] as AlertProps['variant'][];
</script>

<script lang="ts">
	import BaseElement from '$lib/components/Base.svelte';
	import t from '$lib/theme/theme.svelte.js';

	let { size = 'md', variant = 'default', children, ...rest }: AlertProps = $props();

	const base = $derived({
		// padding should match ring size in Avatar component when stacked is enabled.
		classes: [

			t.transition
		],
		fontSize: size
	}) as ConfigProps;
</script>

<BaseElement {...base} {...rest} as="div">
	{@render children()}
</BaseElement>
