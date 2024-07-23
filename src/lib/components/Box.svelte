<script context="module" lang="ts">
	import { type Snippet } from 'svelte';
	import {
		type HTMLTag,
		type ElementPropsWithType
	} from '$lib/types.js';
	import { Rounded, Ring,  type ThemeColor} from '$lib/theme/index.js';

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
	import theme from '$lib/theme/theme.svelte.js';

	console.log(theme);
	let {
		as = 'div' as Tag,
		class: classes,
		rounded = 'unstyled',
		color = 'unstyled',
		children,
		...rest
	}: ElementPropsWithType<Tag, BoxProps<Tag>> = $props();

	const boxClasses = $state(cn(Rounded[rounded || theme.rounded], classes));
</script>

<svelte:element this={as} class={boxClasses} {...rest}>
	{@render children()}
</svelte:element>
