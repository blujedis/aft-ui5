<script context="module" lang="ts">
	import { type ElementProps } from '$lib/types.js';
	import { type ConfigProps } from '$lib/theme/build.svelte.js';
	import {
		BgColor,
		BgColorSoft,
		BadgeFontSize,
		ForeColorFilled,
		ForeColorSoft,
		ForeColorSoftHover,
		type Size,
		type ThemeColor,
		BadgePaddingX
	} from '$lib/theme/types.js';

	export type KbdProps = {
		full?: boolean;
		removable?: boolean;
		rounded?: ConfigProps['rounded'];
		shadow?: ConfigProps['shadow'];
		size?: Size;
		theme?: ThemeColor;
		variant?: 'unstyled' | 'filled' | 'soft' | 'outlined';
		children: Snippet<[]>;
	} & ElementProps<'span'>;

	export const badgeVariants = ['unstyled', 'filled', 'soft', 'outlined'] as KbdProps['variant'][];
</script>

<script lang="ts">
	import { buildClass } from '$lib/theme/build.svelte.js';
	import t from '$lib/theme/theme.svelte.js';
	import type { Snippet } from 'svelte';

	let {
		full,
		removable,
		rounded,
		shadow = 'md',
		size = 'md',
		theme = 'light',
		variant = 'filled',
		children,
		...rest
	}: KbdProps = $props();

	const classes = $derived(
		buildClass({
			classes: [
				`kbd kbd-${variant} kdb-${theme} inline-flex items-center 
			justify-center outline-none font-mono`,
				removable && 'badge-removable',
				BadgeFontSize[size],
				BadgePaddingX[size],
				variant === 'filled' && BgColor[theme],
				variant === 'soft' && BgColorSoft[theme],
				variant === 'filled' && BgColor[theme],
				variant === 'filled' && ForeColorFilled[theme],
				variant === 'soft' && ForeColorSoft[theme],
				variant === 'soft' && ForeColorSoftHover[theme],
				rest.class
			],
			fontSize: size,
			ringWidth: variant === 'outlined' && 'sm',
			ringOffset: variant === 'outlined' && 'inset',
			ringColor: variant === 'outlined' && theme,
			ringColorHover: variant === 'outlined' && theme,
			rounded,
			shadow,
			full
		})
	);
</script>

<kbd {...rest} class={classes}>
	<div>
		{@render children()}
	</div>
</kbd>
