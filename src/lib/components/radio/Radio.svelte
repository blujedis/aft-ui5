<script context="module" lang="ts">
	import type { ElementProps } from '$lib/types.js';
	import {
		FillColor,
		type FocusType,
		type RoundedSize,
		type ShadowSize,
		type Size,
		type ThemeColor
	} from '$lib/theme/types.js';

	export interface RadioProps {
		disabled?: boolean;
		focusType?: FocusType;
		focusTheme?: ThemeColor;
		group?: any;
		rounded?: RoundedSize | false;
		shadow?: ShadowSize | false;
		size?: Size;
		theme?: ThemeColor;
	}

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
		group = $bindable(),
		rounded,
		shadow,
		size = 'md',
		theme = $bindable(),
		...rest
	}: RadioProps & Omit<ElementProps<'input'>, 'size'> = $props();

	const classes = $derived(
		buildClass({
			classes: [
				`radio radio-${theme} appearance-none rounded-full focus:ring-0 focus:ring-offset-0 bg-transparent border border-frame-400 dark:border-frame-700 [&:not(:checked)]:bg-frame-100 dark:[&:not(:checked)]:bg-frame-800/50 form-radio`,
				size && RadioSize[size],
				theme && FillColor[theme],
				!theme && 'text-frame-500 dark:text-frame-500',
				rest.class
			],
			focusType,
			focusTheme: focusTheme || theme,
			rounded,
			shadow
		})
	);
</script>

<input {...rest} bind:group class={classes} type="radio" />
