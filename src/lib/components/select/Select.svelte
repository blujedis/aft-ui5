<script context="module" lang="ts">
	import type { ElementProps } from '$lib/types.js';
	import { type ConfigProps } from '$lib/theme/build.svelte.js';
	import {
		BgColorHint,
		FillColor,
		RingColor,
		type FocusType,
		type Size,
		type ThemeColor
	} from '$lib/theme/types.js';

	export interface SelectProps {
		chars?: number;
		disabled?: boolean;
		focusType?: FocusType;
		focusTheme?: ThemeColor;
		focusOffset?: Size | 'none';
		full?: boolean;
		rounded?: ConfigProps['rounded'];
		shadow?: ConfigProps['shadow'];
		size?: Size;
		theme?: ThemeColor;
		variant?: 'untyled' | 'filled' | 'soft' | 'outlined';
		children: Snippet;
	}
</script>

<script lang="ts">
	import t from '$lib/theme/theme.svelte.js';
	import { buildClass } from '$lib/theme/build.svelte.js';
	import { FieldFontSize, FieldPaddingX, FieldPaddingY } from '$lib/theme/constants.js';
	import type { Snippet } from 'svelte';
	import { toColorVar } from '$lib/utils/string.js';

	let {
		disabled,
		focusType = 'focus',
		focusTheme,
		focusOffset = 'none',
		full,
		rounded,
		shadow,
		size = 'md',
		theme,
		value = $bindable(),
		variant,
		children,
		...rest
	}: SelectProps & Omit<ElementProps<'select'>, 'size'> = $props();

	const classes = $derived(
		buildClass({
			prepend: [`select select-${variant} select-${theme}`],
			classes: [
				`form-select inline-flex items-center justify-center border-none`,
				t.options.input,
				'ring-1 ring-inset focus:ring-offset-0 focus:ring-inset pr-8',
				size && FieldFontSize[size],
				size && FieldPaddingX[size],
				size && FieldPaddingY[size],
				theme && FillColor[theme],
				theme && BgColorHint[theme],
				theme && RingColor[theme],
				!theme &&
					'ring-frame-300 focus:ring-frame-300 dark:ring-frame-700 dark:focus:ring-frame-700 focus:outline-frame-500/50',
				(!theme || theme === 'light') && 'focus:ring-frame-500 dark:focus:ring-frame-400',
				theme === 'dark' && 'dark:focus:ring-frame-500',
				theme && ['light', 'dark', 'white'].includes(theme) && 'text-dark dark:text-light'
			],
			disabled,
			focusType,
			focusTheme: focusTheme || theme,
			focusOffset,
			focusRingColor: theme,
			full,
			rounded,
			shadow
		})
	);
</script>

<span style={toColorVar('--caret-color', 'secondary-500')}>
	<select {...rest} bind:value class={classes}>
		{@render children()}
	</select>
</span>
