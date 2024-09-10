<script context="module" lang="ts">
	import type { Snippet } from 'svelte';
	import Popper, { type PopperProps } from '../popper/Popper.svelte';
	import { buildClass, type ConfigProps } from '$lib/theme/build.svelte.js';
	import { Border, FieldFontSize } from '$lib/theme/constants.js';
	import {
		BgColor,
		BgColorSoft,
		BorderColor,
		ForeColorFilled,
		ForeColorSoft,
		type Size,
		type ThemeColor
	} from '$lib/theme/types.js';
	import type { ElementProps } from '$lib/types.js';
	import { clsxm } from '$lib/utils/string.js';

	export type TooltipProps = PopperProps & {
		elevation?: ConfigProps['elevation'];
		rounded?: ConfigProps['rounded'];
		size?: Size;
		theme?: ThemeColor;
		variant?: 'untyled' | 'filled' | 'soft' | 'outlined';
		children: Snippet;
	};

	export const TooltipSize = {
		unstyled: '',
		xs: 'px-1.5 text-[10px]',
		sm: 'px-2 py-1',
		md: 'px-2.5 py-1.5',
		lg: 'px-3 py-2',
		xl: 'px-3.5 py-2.5',
		xl2: 'px-4 py-3'
	};
</script>

<script lang="ts">
	let {
		arrow = true,
		elevation = 'md',
		rounded,
		size = 'sm',
		theme,
		variant,
		visible = $bindable(),
		children,
		...rest
	}: TooltipProps & ElementProps<'div'> = $props();

	const classes = $derived(
		buildClass({
			prepend: [`tooltip tooltip-${variant} tooltip-${theme}`],
			classes: [
				size && TooltipSize[size],
				size && FieldFontSize[size],

				theme && variant === 'filled' && BgColor[theme],
				theme && variant === 'filled' && BgColor[theme],
				theme && variant === 'filled' && ForeColorFilled[theme],
				!theme && (!variant || variant === 'filled') && 'bg-frame-600 dark:bg-frame-600 text-light',

				theme && variant === 'soft' && BgColorSoft[theme],
				theme && variant === 'soft' && ForeColorSoft[theme],
				!theme && variant === 'soft' && 'bg-frame-200 dark:bg-frame-700',

				variant === 'outlined' && Border['sm'],
				variant === 'outlined' && 'body-light dark:body-dark',
				theme && variant === 'outlined' && BorderColor[theme],
				!theme && variant === 'outlined' && 'border-frame-400 dark:border-frame-600',

				'z-40',
				rest.class
			],
			rounded,
			elevation
		})
	);

	const arrowClasses = $derived(
		clsxm('tooltip-arrow', variant === 'outlined' && Border['sm'], rest.arrowClass)
	);
</script>

<Popper
	border={variant === 'outlined' ? 1 : 0}
	{...rest}
	{arrow}
	class={classes}
	arrowClass={arrowClasses}
	bind:visible
>
	{@render children()}
</Popper>
