<script context="module" lang="ts">
	import { type ElementProps } from '$lib/types.js';
	import { type ConfigProps } from '$lib/components/Base.svelte';
	import { ImageSize, ImageAspect } from '$lib/theme/types.js';

	export type StackProps = {
		aspect?: keyof typeof ImageAspect;
		lazy?: boolean;
		size?: keyof typeof ImageSize;
		variant?: 'default';
	} & ElementProps<'img'>;

	export const imageVariants = ['default'] as StackProps['variant'][];
</script>

<script lang="ts">
	import BaseElement from '$lib/components/Base.svelte';
	import t from '$lib/theme/theme.svelte.js';

	let {
		aspect = 'unstyled',
		lazy,
		size = 'unstyled',
		variant = 'default',
		children,
		...rest
	}: StackProps = $props();

	const base = $derived({
		classes: [
			`image image-${variant} object-cover`,
			t.transition,
			ImageSize[size],
			ImageAspect[aspect],
			aspect === 'video' ? 'h-auto' : ''
		]
	}) as ConfigProps;
</script>

<BaseElement {...base} {...rest} as="img" />
