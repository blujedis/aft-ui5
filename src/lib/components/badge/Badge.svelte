<script context="module" lang="ts">
	import { type ElementProps } from '$lib/types.js';
	import { type ConfigProps } from '$lib/theme/build.svelte.js';
	import {
		BgColor,
		BgColorSoft,
		ForeColorFilled,
		ForeColorSoft,
		ForeColorSoftHover,
		type Size,
		type ThemeColor,
		RingColor
	} from '$lib/theme/types.js';

	export type BadgeProps = {
		full?: boolean;
		removable?: boolean;
		rounded?: ConfigProps['rounded'];
		shadow?: ConfigProps['shadow'];
		size?: Size;
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

	export const BadgeFontSize = {
		unstyled: '',
		xs: 'text-[10px]', // leading-3
		sm: 'text-xs',
		md: 'text-sm',
		lg: 'text-md',
		xl: 'text-lg',
		xl2: 'text-xl'
	};

	export const BadgePaddingX = {
		unstyled: '',
		xs: 'px-1',
		sm: 'px-1.5 ',
		md: 'px-1.5',
		lg: 'px-2',
		xl: 'px-2 ',
		xl2: 'px-2.5'
	};
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';
	import { buildClass } from '$lib/theme/build.svelte.js';
	import { RingOffset, RingWidth } from '$lib/theme/constants.js';

	let {
		full,
		removable,
		rounded,
		shadow,
		size = 'md',
		theme,
		variant = 'filled',
		children,
		...rest
	}: BadgeProps = $props();

	const classes = $derived(
		buildClass({
			classes: [
				`badge badge-${variant} badge-${theme} inline-flex items-center 
			justify-center outline-none`,
				removable && 'badge-removable',
				BadgeFontSize[size],
				BadgePaddingX[size],
				theme && variant === 'filled' && BgColor[theme],
				theme && variant === 'filled' && BgColor[theme],
				theme && variant === 'filled' && ForeColorFilled[theme],
				!theme && (!variant || variant === 'filled') && 'bg-frame-200 dark:bg-frame-600',

				theme && variant === 'soft' && BgColorSoft[theme],
				theme && variant === 'soft' && ForeColorSoft[theme],
				theme && variant === 'soft' && ForeColorSoftHover[theme],
				!theme && variant === 'soft' && 'bg-frame-200 dark:bg-frame-800',

				variant === 'outlined' && RingWidth['sm'],
				variant === 'outlined' && RingOffset['inset'],
				theme && variant === 'outlined' && RingColor[theme || 'light'],
				!theme && variant === 'outlined' && 'ring-frame-300 dark:ring-frame-600',

				rest.class
			],
			full,
			rounded,
			shadow
		})
	);
</script>

<span {...rest} class={classes}>
	<div class="mb-px">
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
</span>
