<script context="module" lang="ts">
	import { type ElementProps } from '$lib/types.js';
	import { type ConfigProps } from '$lib/components/Base.svelte';
	import { ImageSize, ImageAspect } from '$lib/theme/types.js';

	export type StackProps = {
		aspect?: keyof typeof ImageAspect;
		lazy?: boolean;
		rounded?: ConfigProps['rounded'];
		size?: keyof typeof ImageSize;
		variant?: 'default';
	} & ElementProps<'img'>;

	export const imageVariants = ['default'] as StackProps['variant'][];
</script>

<script lang="ts">
	import Base from '$lib/components/Base.svelte';
	import t from '$lib/theme/theme.svelte.js';

	let {
		aspect = 'unstyled',
		lazy,
		rounded,
		size = 'unstyled',
		variant = 'default',
		...rest
	}: StackProps = $props();

	const base = $derived({
		classes: [
			`image image-${variant} object-cover`,
			t.globals.transition,
			ImageSize[size],
			ImageAspect[aspect],
			aspect === 'video' ? 'h-auto' : '',
			rounded === 'full' && 'overflow-hidden'
		],
		rounded
	}) as ConfigProps;
</script>

<Base {...base} {...rest} as="img" />
