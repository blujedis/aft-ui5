<script context="module" lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLTag, Rounded, Ring, type ThemeColor, type ElementPropsWithType } from '$lib/types.js';

	export type BoxProps<Tag extends HTMLTag> = {
		as?: Tag;
		color?: ThemeColor;
		ringed?: keyof typeof Ring;
		rounded?: keyof typeof Rounded;
		children: Snippet;
	};
</script>

<script lang="ts" generics="Tag extends HTMLTag = 'div'">
	import cn from 'classnames';
	import c from '$lib/config.js';

	let {
		as = 'div' as Tag,
		class: classes,
		rounded = 'unstyled',
		color = 'unstyled',
		children,
		...rest
	}: ElementPropsWithType<Tag, BoxProps<Tag>> = $props();

	const boxClasses = $state(
		cn(Rounded[rounded || c.options.rounded], 
		classes)
	);
</script>

<svelte:element this={as} class={boxClasses} {...rest}>
	{@render children()}
</svelte:element>>
