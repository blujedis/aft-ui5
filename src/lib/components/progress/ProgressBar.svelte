<script context="module" lang="ts">
	import {
		MozillaProgressBarBg,
		Rounded,
		Shadow,
		WebkitProgressValue,
		type ThemeColor
	} from '$lib/theme/types.js';
	import type { Snippet } from 'svelte';
	import type { ConfigProps } from '../Base.svelte';
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
		rounded?: ConfigProps['rounded'];
		shadow?: ConfigProps['shadow'];
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

	let {
		animate = true,
		delay,
		duration,
		easing,
		interpolate,
		max = 100,
		rounded = 'md',
		shadow,
		size = 'md',
		theme = 'light',
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
			`progress-bar progress-bar-${theme} appearance-none bg-frame-100 [&::-webkit-progress-bar]:bg-frame-100 dark:bg-frame-600 dark:[&::-webkit-progress-bar]:bg-frame-600`,
			theme && WebkitProgressValue[theme],
			theme && MozillaProgressBarBg[theme],
			size && ProgressBarSizes[size],
			rounded && ProgressBarRoundedValue[rounded],
			rounded && ProgressBarRoundedBar[rounded],
			shadow && Shadow[shadow],
			rounded && Rounded[rounded],
			rest.class
		)
	);
</script>

{#if animate}
	<progress {...rest} class={classes} {max} value={tvalue}></progress>
{:else}
	<progress {...rest} class={classes} {max} value={tvalue}></progress>
{/if}
