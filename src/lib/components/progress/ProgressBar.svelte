<script module lang="ts">
	import {
		MozillaProgressBarBg,
		WebkitProgressValue,
		type RoundedSize,
		type ShadowSize,
		type ThemeColor
	} from '$lib/theme/types.js';
	import type { Snippet } from 'svelte';
	import { clsxm } from '$lib/utils/string.js';
	import type { ElementProps } from '$lib/types.js';

	export type ProgressTweenedOptions<T extends number = any> = {
		delay?: number;
		duration?: number | ((from: T, to: T) => number);
		easing?: (t: number) => number;
		interpolate?: (a: T, b: T) => (t: number) => T;
	};

	export type ProgressBarProps<T extends number = any> = ProgressTweenedOptions<T> & {
		animate?: boolean;
		max?: number;
		rounded?: RoundedSize | false;
		shadow?: ShadowSize | false;
		size?: keyof typeof ProgressBarSizes;
		theme?: ThemeColor;
		value?: T;
		children?: Snippet;
	};

	export const ProgressBarSizes = {
		unstyled: '',
		xs: 'h-0.5',
		sm: 'h-1',
		md: 'h-1.5',
		lg: 'h-2.5',
		xl: 'h-3',
		xl2: 'h-4'
	};

	// Firefox requires default rounding without pseudo selector.
	// merge it with webkit pseudos.
	export const ProgressBarRoundedBar = {
		unstyled: '',
		none: 'rounded-none',
		xs: '[&::-webkit-progress-bar]:rounded-small',
		sm: '[&::-webkit-progress-bar]:rounded',
		md: '[&::-webkit-progress-bar]:rounded-md',
		lg: '[&::-webkit-progress-bar]:rounded-lg',
		xl: '[&::-webkit-progress-bar]:rounded-xl',
		xl2: '[&::-webkit-progress-bar]:rounded-2xl',
		full: '[&::-webkit-progress-bar]:rounded-full'
	};

	// webkit requires pseudo selector to round values.
	export const ProgressBarRoundedValue = {
		unstyled: '',
		none: 'rounded-none',
		xs: '[&::-webkit-progress-value]:rounded-small',
		sm: '[&::-webkit-progress-value]:rounded',
		md: '[&::-webkit-progress-value]:rounded-md',
		lg: '[&::-webkit-progress-value]:rounded-lg',
		xl: '[&::-webkit-progress-value]:rounded-xl',
		xl2: '[&::-webkit-progress-value]:rounded-2xl',
		full: '[&::-webkit-progress-value]:rounded-full'
	};
</script>

<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { Rounded, Shadow } from '$lib/theme/constants.js';

	let {
		animate = true,
		delay,
		duration = 400,
		easing = cubicOut,
		interpolate,
		max = 100,
		rounded = 'md',
		shadow,
		size = 'md',
		theme = $bindable(),
		value = $bindable(),
		children,
		...rest
	}: ProgressBarProps & ElementProps<'progress'> = $props();

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

	const classes = $derived(
		clsxm(
			`progress-bar progress-bar-${theme} appearance-none bg-frame-100 [&::-webkit-progress-bar]:bg-frame-100 dark:bg-frame-800/50 dark:[&::-webkit-progress-bar]:bg-frame-800/50`,
			theme && WebkitProgressValue[theme],
			theme && MozillaProgressBarBg[theme],
			rounded && ProgressBarRoundedValue[rounded],
			rounded && ProgressBarRoundedBar[rounded],
			size && ProgressBarSizes[size],
			shadow && Shadow[shadow],
			rounded && Rounded[rounded],
			!theme &&
				'[&::-webkit-progress-value]:bg-frame-400 dark:[&::-webkit-progress-value]:bg-frame-400 [&::-moz-progress-bar]:bg-frame-400 dark:[&::-moz-progress-bar]:bg-frame-400',
			rest.class
		)
	);
</script>

{#if animate}
	<progress {...rest} class={classes} {max} value={tvalue}></progress>
{:else}
	<progress {...rest} class={classes} {max} value={tvalue}></progress>
{/if}
