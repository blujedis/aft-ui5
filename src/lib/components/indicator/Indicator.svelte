<script context="module" lang="ts">
	import { type ElementProps } from '$lib/types.js';
	import { type ConfigProps } from '$lib/components/Base.svelte';
	import { IndicatorCounterFontSize, IndicatorCounterSize } from './options.js';
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
		diameter?: number | undefined; // em size indicator will be sized with component.
		rounded?: ConfigProps['rounded'];
		shadow?: ConfigProps['shadow'];
		size?: keyof typeof Size;
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
	import Base from '$lib/components/Base.svelte';

	let {
		animate = 'unstyled',
		diameter: diameter,
		rounded,
		shadow,
		size = 'md',
		theme = 'primary',
		text,
		variant = 'filled',
		...rest
	}: IndicatorProps = $props();

	diameter = typeof text === 'undefined' ? 0.6 : undefined;
	text = typeof text !== 'undefined' ? text + '' : text;

	console;
	const offset = !diameter ? 0 : '-' + diameter * 0.25;
	const style = !diameter
		? ''
		: `width: ${diameter}em; height: ${diameter}em; top: ${offset}em; right: ${offset}em;`;

	const base = $derived({
		classes: [
			`indicator indicator-${variant} indicator-${theme} absolute rounded-full inline-flex items-center justify-center ring-2 z-10`,
			rounded === 'full' && 'ring-frame-300 dark:ring-frame-600',
			rounded !== 'full' &&
				'ring-[color:rgb(var(--body-bg-light))] dark:ring-[color:rgb(var(--body-bg-dark))]',
			variant !== 'unstyled' && BgColor[theme],
			variant !== 'unstyled' && ForeColorFilled[theme],
			variant === 'soft' && BgColorSoft[theme],
			text && IndicatorCounterSize[size],
			text && IndicatorCounterFontSize[size],
			text && 'font-medium -top-2 -right-1',
			text && 'px-1',
			text && text.length > 1 && 'px-1.5',
			text && text.length >= 2 && 'w-auto',
			!text && Animate[animate]
		]
	}) as ConfigProps;
</script>

<Base {...base} {...rest} as="span" {style}>
	{#if text}
		<div class="mb-px">
			{text}
		</div>
	{/if}
</Base>
