<script context="module" lang="ts">
	import { type ElementProps } from '$lib/types.js';
	import { type ConfigProps } from '$lib/components/Base.svelte';
	import {
		BgColor,
		BgColorSoft,
		BadgeFontSize,
		ForeColorFilled,
		ForeColorSoft,
		ForeColorSoftHover,
		Size,
		type ThemeColor,
		BadgePaddingX
	} from '$lib/theme/types.js';

	export type KbdProps = {
		removable?: boolean;
		rounded?: boolean | ConfigProps['rounded'];
		shadow?: boolean | ConfigProps['shadow'];
		size?: keyof typeof Size;
		theme?: ThemeColor;
		variant?: 'unstyled' | 'filled' | 'soft' | 'outlined';
		children: Snippet<[]>;
	} & ElementProps<'span'>;

	export const badgeVariants = ['unstyled', 'filled', 'soft', 'outlined'] as KbdProps['variant'][];
</script>

<script lang="ts">
	import Base from '$lib/components/Base.svelte';
	import t from '$lib/theme/theme.svelte.js';
	import type { Snippet } from 'svelte';

	let {
		removable,
		rounded,
		shadow = 'md',
		size = 'md',
		theme = 'light',
		variant = 'filled',
		children,
		...rest
	}: KbdProps = $props();

	const base = $derived({
		classes: [
			`kbd kbd-${variant} kdb-${theme} inline-flex items-center 
			justify-center outline-none font-mono`,
			t.globals.transition,
			removable && 'badge-removable',
			BadgeFontSize[size],
			BadgePaddingX[size],
			variant === 'filled' && BgColor[theme],
			variant === 'soft' && BgColorSoft[theme],
			variant === 'filled' && BgColor[theme],
			variant === 'filled' && ForeColorFilled[theme],
			variant === 'soft' && ForeColorSoft[theme],
			variant === 'soft' && ForeColorSoftHover[theme]
		],
		fontSize: size,
		ringWidth: variant === 'outlined' && 'sm',
		ringOffset: variant === 'outlined' && 'inset',
		ringColor: variant === 'outlined' && theme,
		ringColorHover: variant === 'outlined' && theme,
		rounded: t.globals.rounded && rounded,
		shadow: t.globals.shadow && shadow
	}) as ConfigProps;
</script>

<Base {...base} {...rest} as="kbd">
	<div>
		{@render children()}
	</div>
</Base>
