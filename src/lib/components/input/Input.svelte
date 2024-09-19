<script module lang="ts">
	import type { ElementProps } from '$lib/types.js';
	import {
		BgColorHint,
		FillColor,
		RingColor,
		type FocusType,
		type RoundedSize,
		type ShadowSize,
		type Size,
		type ThemeColor
	} from '$lib/theme/types.js';

	export interface InputProps {
		chars?: number;
		disabled?: boolean;
		focusType?: FocusType;
		focusTheme?: ThemeColor;
		focusOffset?: Size | 'none';
		full?: boolean;
		group?: any;
		rounded?: RoundedSize | false;
		shadow?: ShadowSize | false;
		size?: Size;
		theme?: ThemeColor;
		variant?: 'unstyled' | 'outlined';
	}
</script>

<script lang="ts">
	import t from '$lib/theme/theme.svelte.js';
	import { buildClass } from '$lib/theme/build.svelte.js';
	import { FieldFontSize, FieldPaddingX, FieldPaddingY } from '$lib/theme/constants.js';

	let {
		disabled,
		focusType = 'focus',
		focusTheme,
		focusOffset = 'none',
		full,
		rounded,
		shadow,
		size = 'md',
		theme = $bindable(),
		value = $bindable(),
		variant,
		...rest
	}: InputProps & Omit<ElementProps<'input'>, 'size'> = $props();

	const classes = $derived(
		buildClass({
			classes: [
				`input input-${variant} input-${theme}  inline-flex items-center justify-center border-none`,
				t.options.input,
				'ring-1 ring-inset focus:ring-offset-0 focus:ring-inset',
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

<input {...rest} bind:value class={classes} type="text" />
