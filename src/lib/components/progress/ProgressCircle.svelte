<script context="module" lang="ts">
	import type { Snippet } from 'svelte';
	import type { ProgressTweenedOptions } from './ProgressBar.svelte';
	import { type ConfigProps } from '$lib/theme/build.svelte.js';
	import { type ThemeColor, type Size, StrokeColor, ProgressFillColor } from '$lib/theme/types.js';
	import { tweened } from 'svelte/motion';
	import type { ElementProps } from '$lib/types.js';
	import { clsxm } from '$lib/utils/string.js';
	import { cubicOut } from 'svelte/easing';
	import { DropShadow } from '$lib/theme/constants.js';

	export type ProgressCircleProps = {
		animate?: boolean;
		max?: number;
		shadow?: ConfigProps['shadow'];
		size?: Size | number;
		text?: boolean | string;
		textunit?: string;
		theme?: ThemeColor;
		tracksize?: Size | number; // fallback to "size"
		value?: number;
		children?: Snippet;
	} & ProgressTweenedOptions;

	export const ProgressCircleSizes = {
		unstyled: 0,
		xs: 42,
		sm: 75,
		md: 100,
		lg: 125,
		xl: 150,
		xl2: 175
	};

	export const ProgressCircleTextSizes = {
		unstyled: '',
		xs: 'text-[10px]',
		sm: 'text-sm',
		md: 'text-md',
		lg: 'text-lg',
		xl: 'text-xl',
		xl2: 'text-2xl'
	};

	// IMPORTANT: Use number or tailwind width only ONLY!!!
	export const ProgressCircleTrackSizes = {
		unstyled: 0,
		xs: 4,
		sm: 6,
		md: 8,
		lg: 10,
		xl: 12,
		xl2: 14
	};
</script>

<script lang="ts">
	let {
		animate = true,
		delay,
		duration = 400,
		easing = cubicOut,
		interpolate,
		max = 100,
		shadow,
		size = 'md',
		text = true,
		textunit = '%',
		theme,
		value = $bindable(),
		tracksize = 'md',
		children,
		...rest
	}: ProgressCircleProps & ElementProps<'svg'> = $props();

	const store = tweened(value, {
		delay,
		duration,
		easing,
		interpolate
	});

	const tvalue = $derived.by(() => {
		if (!animate) return value;
		store.set(value);
		return $store;
	});

	// const [diameter, trackwidth] = normalizeSize();
	const diameter = typeof size === 'number' ? size : ProgressCircleSizes[size];
	const trackwidth =
		typeof tracksize === 'number' ? tracksize : ProgressCircleTrackSizes[tracksize || size];
	const center = diameter / 2; // cx & cy
	const radius = center - trackwidth; // r
	const strokeArray = $derived(2 * 3.14 * radius);
	const strokeOffset = $derived(strokeArray * ((100 - tvalue) / 100));

	const progressCircleStyles = $derived(`
    height: ${diameter}; width: ${diameter}; transform: rotate(-90deg)
  `);

	const progressCircleClasses = $derived(
		clsxm(
			`progress-circle progress-circle-${theme}`,
			shadow && typeof size === 'string' && DropShadow[size],
			rest.class
		)
	);

	const progressCircleTrackClasses = $derived(
		clsxm('fill-transparent', 'stroke-frame-100 dark:stroke-frame-800/50')
	);

	const progressCircleValueClasses = $derived(
		clsxm(
			'fill-transparent',
			theme && StrokeColor[theme],
			!theme && 'stroke-frame-400 dark:stroke-frame-400'
		)
	);

	const progressCircleTextClasses = $derived(
		clsxm(
			size && typeof size === 'string' && ProgressCircleTextSizes[size],
			theme && !['light', 'dark'].includes(theme) && ProgressFillColor[theme],
			theme && ['light', 'dark'].includes(theme) && 'fill-frame-600 dark:fill-frame-400',
			!theme && 'fill-[color:rgb(var(--text-dark))] dark:fill-[color:rgb(var(--text-light))]'
		)
	);
</script>

{#snippet textNode()}
	<text
		class={progressCircleTextClasses}
		x="50%"
		y="-50%"
		dy=".1em"
		text-anchor="middle"
		alignment-baseline="middle"
		transform="rotate(90)">{Math.round(tvalue)}{textunit}</text
	>
{/snippet}

<svg
	{...rest}
	viewBox={`0 0 ${diameter} ${diameter}`}
	class={progressCircleClasses}
	style={progressCircleStyles}
>
	<circle
		class={progressCircleTrackClasses}
		cx={center}
		cy={center}
		r={radius}
		stroke-width={trackwidth}
	/>
	<circle
		class={progressCircleValueClasses}
		cx={center}
		cy={center}
		r={radius}
		stroke-width={trackwidth}
		stroke-dasharray={strokeArray}
		stroke-dashoffset={strokeOffset}
	/>
	{#if text}
		{@render textNode()}
	{/if}
</svg>
