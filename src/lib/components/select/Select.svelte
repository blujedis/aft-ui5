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
				'ring-1 ring-inset focus:ring-offset-0 focus:ring-inset',
				!theme &&
					'ring-frame-300 focus:ring-frame-300 dark:ring-frame-700 dark:focus:ring-frame-700 focus:outline-frame-500/50',
				(!theme || theme === 'light') && 'focus:ring-frame-500 dark:focus:ring-frame-400',
				theme === 'dark' && 'dark:focus:ring-frame-500',
				size && FieldFontSize[size],
				size && FieldPaddingX[size],
				size && FieldPaddingY[size],
				theme && FillColor[theme],
				theme && BgColorHint[theme],
				theme && RingColor[theme],
				'pr-8'
			],
			disabled,
			focusType,
			focusTheme: focusTheme || theme,
			focusOffset: 'none',
			focusRingColor: theme,
			full,
			rounded,
			shadow
		})
	);
</script>

<select {...rest} bind:value class={classes} style={toColorVar('--caret-color', 'secondary-500')}>
	{@render children()}
</select>

<style>
	select {
		--svg: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24" ><path style="fill:var(--caret-color);" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"></path></svg>');
		background: var(--svg) no-repeat right 0.6em center;
	}
</style>
