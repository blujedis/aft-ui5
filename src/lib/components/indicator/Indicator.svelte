<script context="module" lang="ts">
	import { type ElementProps } from '$lib/types.js';
	import { type ConfigProps } from '$lib/components/Base.svelte';
	import {
		IndicatorSize,
		IndicatorCounterSize,
		IndicatorCounterFontSize,
		IndicatorOffset,
		IndicatorOffsetRound
	} from './options.js';
	import { Size, type ThemeColor, Animate, BgColor, ForeColorFilled } from '$lib/theme/types.js';

	export type IndicatorProps = {
		animate?: keyof typeof Animate;
		rounded?: ConfigProps['rounded'];
		shadow?: ConfigProps['shadow'];
		size?: keyof typeof Size;
		theme?: ThemeColor;
		text?: string | number;
		variant?: 'unstyled' | 'filled' | 'soft' | 'outlined';
	} & ElementProps<'span'>;

	export const indicatorVariants = [
		'unstyled',
		'filled',
		'soft',
		'outlined'
	] as IndicatorProps['variant'][];
</script>

<script lang="ts">
	import BaseElement from '$lib/components/Base.svelte';
	import t from '$lib/theme/theme.svelte.js';
	import { truthyOrDefault } from '$lib/utils/misc.js';

	let {
		animate = 'ping',
		rounded,
		shadow,
		size = 'md',
		theme = 'primary',
		text,
		variant = 'filled',
		...rest
	}: IndicatorProps = $props();

	text = typeof text !== 'undefined' ? text + '' : text;

	console.log(text);

	const base = $derived({
		classes: [
			`indicator indicator-${variant} indicator-${theme} absolute rounded-full inline-flex items-center justify-center ring-2 ring-[color:rgb(var(--body-bg-light))] dark:ring-[color:rgb(var(--body-bg-dark))] z-10`,
			variant === 'filled' ? BgColor[theme] : '',
			variant === 'filled' ? ForeColorFilled[theme] : '',
			!text && IndicatorSize[size],
			text && IndicatorCounterSize[size],
			text && IndicatorCounterFontSize[size],
			text && 'w-auto font-medium',
			text && text.length > 2 && 'px-1',
			IndicatorOffset[size],
			rounded && rounded !== 'unstyled' && IndicatorOffsetRound[size],
			Animate[animate],
			t.transition
		]
		// ringWidth: variant !== 'outlined' ? undefined : 'sm',
		// ringOffset: variant !== 'outlined' ? undefined : 'inset',
		// ringColor: variant !== 'outlined' ? undefined : theme,
		// ringColorHover: variant !== 'outlined' ? undefined : theme,
		// rounded: boolToValue(t.rounded, rounded, 'full'),
		// shadow: boolToValue(t.shadows, shadow, 'sm')
	}) as ConfigProps;
</script>

<BaseElement {...base} {...rest} as="span">
	{#if text}
		<span class="-mt-0.5">
			{text}
		</span>
	{/if}
</BaseElement>
