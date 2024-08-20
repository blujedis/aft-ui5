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

	export type BadgeProps = {
		removable?: boolean;
		rounded?: boolean | ConfigProps['rounded'];
		shadow?: boolean | ConfigProps['shadow'];
		size?: keyof typeof Size;
		theme?: ThemeColor;
		variant?: 'unstyled' | 'filled' | 'soft' | 'outlined';
		children: Snippet<[]>;
	} & ElementProps<'span'>;

	export const badgeVariants = [
		'unstyled',
		'filled',
		'soft',
		'outlined'
	] as BadgeProps['variant'][];
</script>

<script lang="ts">
	import Base from '$lib/components/Base.svelte';
	import t from '$lib/theme/theme.svelte.js';
	import type { Snippet } from 'svelte';

	let {
		removable,
		rounded,
		shadow,
		size = 'md',
		theme = 'light',
		variant = 'filled',
		children,
		...rest
	}: BadgeProps = $props();

	const base = $derived({
		classes: [
			`badge badge-${variant} badge-${theme} inline-flex items-center 
			justify-center outline-none`,
			t.globals.transition,
			removable && 'badge-removable',
			BadgeFontSize[size],
			BadgePaddingX[size],
			variant === 'filled' ? BgColor[theme] : '',
			variant === 'soft' ? BgColorSoft[theme] : '',
			variant === 'filled' ? BgColor[theme] : '',
			variant === 'filled' ? ForeColorFilled[theme] : '',
			variant === 'soft' ? ForeColorSoft[theme] : '',
			variant === 'soft' ? ForeColorSoftHover[theme] : ''
		],
		fontSize: size,
		ringWidth: variant !== 'outlined' ? undefined : 'sm',
		ringOffset: variant !== 'outlined' ? undefined : 'inset',
		ringColor: variant !== 'outlined' ? undefined : theme,
		ringColorHover: variant !== 'outlined' ? undefined : theme,
		rounded: t.globals.rounded && rounded,
		shadow: t.globals.shadow && shadow
	}) as ConfigProps;
</script>

<Base {...base} {...rest} as="span">
	<div class="mb-0.5">
		<!-- helps alignment a litte -->
		{@render children()}
	</div>
	{#if removable}
		<svg
			class="w-2 h-2 ml-1"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 14 14"
		>
			<path
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
			/>
		</svg>

		<span class="sr-only">Remove badge</span>
	{/if}
</Base>
