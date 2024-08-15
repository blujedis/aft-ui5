<script context="module" lang="ts">
	import { type ElementProps } from '$lib/types.js';
	import { type ConfigProps } from '$lib/components/Base.svelte';
	import {
		IndicatorSize,
		IndicatorCounterSize,
		IndicatorCounterFontSize,
		IndicatorOffset,
		IndicatorOffsetRoundFull,
		IndicatorOffsetRoundXLarge,
		IndicatorOffsetRoundMed
	} from './options.js';
	import {
		Size,
		type ThemeColor,
		Animate,
		BgColor,
		ForeColorFilled,
		BgColorSoft
	} from '$lib/theme/types.js';

	export type IndicatorProps = {
		animate?: keyof typeof Animate;
		rounded?: ConfigProps['rounded'];
		shadow?: ConfigProps['shadow'];
		size?: number; // em size indicator will be sized with component.
		theme?: ThemeColor;
		text?: string | number;
		variant?: 'unstyled' | 'filled' | 'soft';
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

	let {
		animate = 'unstyled',
		rounded,
		shadow,
		size = 0.7,
		theme = 'primary',
		text,
		variant = 'filled',
		...rest
	}: IndicatorProps = $props();

	text = typeof text !== 'undefined' ? text + '' : text;
	const offset = '-' + size * 0.25;
	const style = `width: ${size}em; height: ${size}em; top: ${offset}em; right: ${offset}em;`;

	const base = $derived({
		classes: [
			`indicator indicator-${variant} indicator-${theme} absolute rounded-full inline-flex items-center justify-center ring-2 ring-[color:rgb(var(--body-bg-light))] dark:ring-[color:rgb(var(--body-bg-dark))] z-10`,
			variant !== 'unstyled' && BgColor[theme],
			variant !== 'unstyled' && ForeColorFilled[theme],
			variant === 'soft' && BgColorSoft[theme],
			// !text && IndicatorSize[size],
			// text && IndicatorCounterSize[size],
			// text && IndicatorCounterFontSize[size],
			text && 'w-auto font-medium',
			text && text.length > 2 && 'px-1',
			// !t.globals.rounded || !rounded || rounded !== 'full' ? IndicatorOffset[size] : '',
			// t.globals.rounded && ['md', 'lg'].includes(rounded + '') ? IndicatorOffsetRoundMed[size] : '',
			// t.globals.rounded && ['xl', 'xl2'].includes(rounded + '') ? IndicatorOffsetRoundXLarge[size] : '',
			// t.globals.rounded && rounded === 'full' ? IndicatorOffsetRoundFull[size] : '',
			Animate[animate],
			t.globals.transition
		]
		// ringWidth: variant !== 'outlined' ? undefined : 'sm',
		// ringOffset: variant !== 'outlined' ? undefined : 'inset',
		// ringColor: variant !== 'outlined' ? undefined : theme,
		// ringColorHover: variant !== 'outlined' ? undefined : theme,
		// rounded: boolToValue(t.globals.rounded, rounded, 'full'),
		// shadow: boolToValue(t.globals.shadows, shadow, 'sm')
	}) as ConfigProps;
</script>

<BaseElement {...base} {...rest} as="span" {style}>
	{#if text}
		{text}
	{/if}
</BaseElement>

<style>
</style>
