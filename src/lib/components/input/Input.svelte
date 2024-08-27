<script context="module" lang="ts">
	import type { ElementProps } from '$lib/types.js';
	import { type ConfigProps } from '$lib/theme/build.svelte.js';
	import {
		FieldFontSize,
		FieldPaddingX,
		FieldPaddingY,
		FillColor,
		type FocusType,
		type Size,
		type ThemeColor
	} from '$lib/theme/types.js';

	export interface InputProps {
		chars?: number;
		disabled?: boolean;
		focusType?: FocusType;
		focusTheme?: ThemeColor;
		full?: boolean;
		group?: any;
		rounded?: ConfigProps['rounded'];
		shadow?: ConfigProps['shadow'];
		size?: Size;
		theme?: ThemeColor;
		variant?: 'filled' | 'soft' | 'outlined';
	}

	export const inputVariants = [
		'unstyled',
		'filled',
		'soft',
		'outlined'
	] as InputProps['variant'][];

	export const RadioSize = {
		unstyled: '',
		xs: 'h-2.5 w-2.5',
		sm: 'h-3 w-3',
		md: 'h-4 w-4',
		lg: 'h-5 w-5',
		xl: 'h-6 w-6',
		xl2: 'h-7 w-7'
	};
</script>

<script lang="ts">
	import { buildClass } from '$lib/theme/build.svelte.js';

	let {
		disabled,
		focusType = 'focus',
		focusTheme,
		full,
		rounded,
		shadow,
		size = 'md',
		theme,
		value = $bindable(),
		variant,
		...rest
	}: InputProps & Omit<ElementProps<'input'>, 'size'> = $props();

	// focus:ring-0 focus:ring-offset-0 bg-transparent border border-frame-400 dark:border-frame-700 [&:not(:checked)]:bg-frame-100 dark:[&:not(:checked)]:bg-frame-700

	const classes = $derived(
		buildClass({
			classes: [
				`input input-${variant} input-${theme}  inline-flex items-center justify-center border-none`,
				'bg-frame-50 dark:bg-frame-800',
				'ring-1 ring-inset focus:ring-offset-0 focus:ring-inset',
				!theme &&
					'ring-frame-300 focus:ring-frame-300 dark:ring-frame-700 dark:focus:ring-frame-700 focus:outline-frame-500/50',
				(!theme || theme === 'light') && 'focus:ring-frame-500 dark:focus:ring-frame-400',
				theme === 'dark' && 'dark:focus:ring-frame-500',
				size && FieldFontSize[size],
				size && FieldPaddingX[size],
				size && FieldPaddingY[size]
			],
			disabled,
			focusType,
			focusTheme: focusTheme || theme,
			focusOffset: 'none',
			ringColor: theme,
			focusRingColor: theme,
			full,
			rounded,
			shadow
		})
	);
</script>

<input {...rest} class={classes} type="text" />

<div class=""></div>
