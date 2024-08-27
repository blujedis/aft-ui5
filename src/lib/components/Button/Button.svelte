<script context="module" lang="ts">
	import { type ElementProps, type HTMLTag } from '$lib/types.js';
	import { type ConfigProps } from '$lib/theme/build.svelte.js';
	import { type Snippet } from 'svelte';
	import {
		BgColor,
		BgColorGhostHover,
		BgColorHover,
		BgColorSoft,
		BgColorSoftHover,
		ForeColorFilled,
		ForeColorFilledHover,
		ForeColorSoft,
		ForeColorSoftHover,
		ForeColorGhost,
		ForeColorGhostHover,
		type Size,
		type FocusType,
		type ThemeColor,
		SelectedTypes,
		SelectedSoftTypes,
		ForeColorOutline,
		ForeColorOutlineHover,
		FontColor,
		FontColorHover,
		RingColor,
		RingColorHover
	} from '$lib/theme/types.js';

	type ExtendedProps<Tag extends HTMLTag> = Tag extends 'a' ? { href: string | null } : {};

	export type ButtonProps<Tag extends HTMLTag> = {
		as?: Tag;
		focusType?: FocusType;
		focusTheme?: ThemeColor;
		full?: boolean;
		rounded?: ConfigProps['rounded'];
		selectable?: boolean;
		selected?: boolean;
		selectedTheme?: ThemeColor;
		shadow?: ConfigProps['shadow'];
		size?: Size;
		theme?: ThemeColor;
		variant?: 'unstyled' | 'filled' | 'soft' | 'outlined' | 'ghost' | 'text';
		children: Snippet;
	} & ExtendedProps<Tag>;

	export const buttonVariants = [
		'unstyled',
		'filled',
		'soft',
		'outlined',
		'ghost',
		'text'
	] as ButtonProps<any>['variant'][];

	export const ButtonPaddingX = {
		unstyled: '',
		xs: 'px-3',
		sm: 'px-3.5',
		md: 'px-5',
		lg: 'px-6',
		xl: 'px-7',
		xl2: 'px-8'
	};
</script>

<script lang="ts" generics="Tag extends HTMLTag = 'button'">
	import {
		FieldFontSize,
		FieldPaddingY,
		options,
		RingOffset,
		RingWidth
	} from '$lib/theme/constants.js';
	import { getContext } from 'svelte';
	import { buildClass } from '$lib/theme/build.svelte.js';

	let {
		as = 'button' as Tag,
		focusType = 'visible',
		focusTheme,
		full,
		rounded,
		selectable,
		selected = $bindable(),
		selectedTheme,
		shadow,
		size = 'md',
		theme,
		variant = 'filled',
		children,
		...rest
	}: ButtonProps<Tag> & ElementProps<Tag> = $props();

	const context = getContext('ButtonGroup') as any;

	if (variant === 'soft') console.log(theme, variant);

	const classes = $derived(
		buildClass({
			prepend: ['button button-${variant} button-${theme} '],
			classes: [
				`inline-flex items-center justify-center cursor-pointer outline-none`,
				variant !== 'text' ? ButtonPaddingX[size] : '',
				variant !== 'text' ? FieldPaddingY[size] : '',
				context && 'relative focus:z-10 -ml-px first:ml-0',
				context && variant === 'text' && 'px-3 first:pl-0 last:pr-0',
				context && rounded && rounded !== 'unstyled' && 'first:rounded-r-none last:rounded-l-none',
				context && rounded && rounded !== 'unstyled' && 'first:focus:z-20', // without looks like no border on first item.
				FieldFontSize[size],
				{ 'font-medium': !rest.href },
				{ 'hover:underline': variant === 'text' },
				rest.disabled && options.disabled,

				theme && variant === 'filled' && BgColor[theme],
				theme && variant === 'filled' && BgColorHover[theme],
				theme && variant === 'filled' && ForeColorFilled[theme],
				theme && variant === 'filled' && ForeColorFilledHover[theme],
				theme && variant === 'filled' && SelectedTypes.checked[selectedTheme || theme],
				!theme  &&
					(!variant || variant === 'filled') &&
					'bg-frame-200 dark:bg-frame-700 hover:bg-frame-300 dark:hover:bg-frame-800',

				theme && variant === 'soft' && BgColorSoft[theme],
				theme && variant === 'soft' && BgColorSoftHover[theme],
				theme && variant === 'soft' && ForeColorSoft[theme],
				theme && variant === 'soft' && ForeColorSoftHover[theme],
				theme && variant === 'soft' && SelectedSoftTypes.checked[selectedTheme || theme],
				!theme &&
					variant === 'soft' &&
					'bg-frame-200 dark:bg-frame-700 hover:bg-frame-300 dark:hover:bg-frame-800',

				theme && variant === 'outlined' && ForeColorOutline[theme],
				theme && variant === 'outlined' && ForeColorOutlineHover[theme],
				theme && variant === 'outlined' && SelectedSoftTypes.checked[selectedTheme || theme],
				variant === 'outlined' && RingWidth['sm'],
				variant === 'outlined' && RingOffset['inset'],
				variant === 'outlined' && RingColor[theme || 'unstyled'],
				variant === 'outlined' && RingColorHover[theme || 'unstyled'],
				variant === 'outlined' &&
					theme === 'dark' &&
					'aria-checked:text-frame-50 aria-checked:hover:text-frame-200',
				variant === 'outlined' &&
					theme === 'white' &&
					'aria-checked:text-frame-600 aria-checked:hover:text-frame-700 dark:aria-checked:text-frame-600 dark:aria-checked:hover:text-frame-700',
				!theme &&
					variant === 'outlined' &&
					'ring-frame-400 dark:ring-frame-500 hover:ring-frame-500 dark:hover:ring-frame-600',

				theme && variant === 'ghost' && ForeColorGhost[theme],
				theme && variant === 'ghost' && BgColorGhostHover[theme],
				theme && variant === 'ghost' && ForeColorGhostHover[theme],

				theme && variant === 'text' && FontColor[theme],
				theme && variant === 'text' && FontColorHover[theme],
				variant === 'text' && 'aria-checked:underline dark:aria-checked:underline',
				!theme && variant === 'text' && 'text-frame-600 dark:text-frame-600'
			],
			append: [rest.class],
			focusType: 'visible',
			focusTheme: focusTheme || theme,
			rounded,
			shadow,
			full
		})
	);
</script>

{#if !selectable}
	<button {...rest} class={classes}>
		{@render children()}
	</button>
{:else}
	<!-- svelte-ignore a11y_role_supports_aria_props_implicit -->
	<button {...rest} checked={selected} aria-checked={selected} class={classes}>
		{@render children()}
	</button>
{/if}
