<script context="module" lang="ts">
	import { type ElementProps } from '$lib/types.js';
	import { IndicatorCounterFontSize, IndicatorCounterSize } from './options.js';
	import { Animate } from '$lib/theme/constants.js';
	import {
		type Size,
		type ThemeColor,
		BgColor,
		ForeColorFilled,
		BgColorSoft,
		type RoundedSize,
		type ShadowSize
	} from '$lib/theme/types.js';

	export type IndicatorProps = {
		animate?: keyof typeof Animate;
		diameter?: number | undefined; // em size indicator will be sized with component.
		rounded?: RoundedSize | false;
		shadow?: ShadowSize | false;
		size?: Size;
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
	import { buildClass } from '$lib/theme/build.svelte.js';

	let {
		animate = 'unstyled',
		diameter: diameter,
		rounded,
		shadow,
		size = 'md',
		theme = $bindable(),
		text,
		variant = 'filled',
		...rest
	}: IndicatorProps = $props();

	diameter = typeof text === 'undefined' ? 0.6 : undefined;
	text = typeof text !== 'undefined' ? text + '' : text;

	const offset = !diameter ? 0 : '-' + diameter * 0.25;
	const style = !diameter
		? ''
		: `width: ${diameter}em; height: ${diameter}em; top: ${offset}em; right: ${offset}em;`;

	const classes = $derived(
		buildClass({
			classes: [
				`indicator indicator-${variant} indicator-${theme} absolute rounded-full inline-flex items-center justify-center flex-shrink-0 ring-2 z-10`,
				rounded === 'full' && 'ring-frame-300 dark:ring-frame-600',
				rounded !== 'full' &&
					'ring-[color:rgb(var(--bg-light))] dark:ring-[color:rgb(var(--bg-dark))]',
				variant !== 'unstyled' && theme && BgColor[theme],
				variant !== 'unstyled' && theme &&  ForeColorFilled[theme],
				variant === 'soft' && theme && BgColorSoft[theme],
				text && IndicatorCounterSize[size],
				text && IndicatorCounterFontSize[size],
				text && 'font-medium -top-2 -right-1',
				text && 'px-1',
				text && text.length > 1 && 'px-1.5',
				text && text.length >= 2 && 'w-auto',
				!text && Animate[animate],
				rest.class
			]
		})
	);
</script>

<span {...rest} class={classes} {style}>
	{#if text}
		<div class="mb-px">
			{text}
		</div>
	{/if}
</span>
