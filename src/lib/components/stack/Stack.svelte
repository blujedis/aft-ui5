<script context="module" lang="ts">
	import { type ElementProps } from '$lib/types.js';
	import type { Snippet } from 'svelte';
	import { type ConfigProps } from '$lib/components/Base.svelte';
	import { Size } from '$lib/theme/types.js';

	export type StackProps = {
		size?: keyof typeof Size;
		variant?: 'default';
		vertical?: boolean;
		children: Snippet<[]>;
	} & ElementProps<'div'>;

	export const stackVariants = ['default'] as StackProps['variant'][];
</script>

<script lang="ts">
	import BaseElement from '$lib/components/Base.svelte';
	import t from '$lib/theme/theme.svelte.js';

	let { size = 'md', variant = 'default', vertical, children, ...rest }: StackProps = $props();

	const base = $derived({
		// padding should match ring size in Avatar component when stacked is enabled.
		classes: [
			`stack stack-${variant} flex overflow-hidden isolate p-2`,
			!vertical && 'flex -space-x-2',
			vertical && 'flex-col -space-y-2',
			t.globals.transition
		],
		fontSize: size
	}) as ConfigProps;
</script>

<BaseElement {...base} {...rest} as="div">
	{@render children()}
</BaseElement>
