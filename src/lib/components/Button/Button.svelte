<script context="module" lang="ts">
	import { type ElementProps, type HTMLTag } from '$lib/types.js';
	import { type ConfigProps } from '$lib/components/Base.svelte';
	import { type Snippet } from 'svelte';
	import {
		BgColor,
		BgColorGhostHover,
		BgColorHover,
		BgColorSoft,
		BgColorSoftHover,
		ButtonFontSize,
		ButtonPaddingX,
		FieldPaddingY,
		ForeColorFilled,
		ForeColorFilledHover,
		ForeColorSoft,
		ForeColorSoftHover,
		ForeColorGhost,
		ForeColorGhostHover,
		Size,
		type FocusType,
		type ThemeColor,
		SelectedTypes,
		SelectedSoftTypes,
		ForeColorOutline,
		ForeColorOutlineHover,
		FontColor,
		FontColorHover
	} from '$lib/theme/types.js';

	type ExtendedProps<Tag extends HTMLTag> = Tag extends 'a' ? { href: string | null } : {};

	export type ButtonProps<Tag extends HTMLTag> = {
		as?: Tag;
		focusType?: FocusType;
		focusTheme?: ThemeColor;
		rounded?: ConfigProps['rounded'];
		selectable?: boolean;
		selected?: boolean;
		selectedTheme?: ThemeColor;
		shadow?: ConfigProps['shadow'];
		size?: keyof typeof Size;
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
</script>

<script lang="ts" generics="Tag extends HTMLTag = 'button'">
	import Base from '$lib/components/Base.svelte';
	import t from '$lib/theme/theme.svelte.js';
	import { options } from '$lib/theme/constants.js';
	import { getContext } from 'svelte';

	let {
		as = 'button' as Tag,
		focusType = 'visible',
		focusTheme,
		rounded,
		selectable,
		selected = $bindable(),
		selectedTheme,
		shadow,
		size = 'md',
		theme = 'light',
		variant = 'filled',
		children,
		...rest
	}: ButtonProps<Tag> & ElementProps<Tag> = $props();

	const context = getContext('ButtonGroup') as any;

	const base = $derived({
		classes: [
			`button button-${variant} button-${theme} inline-flex items-center 
			justify-center cursor-pointer outline-none`,
			t.globals.transition,
			variant !== 'text' ? ButtonPaddingX[size] : '',
			variant !== 'text' ? FieldPaddingY[size] : '',
			ButtonFontSize[size],
			variant === 'filled' && BgColor[theme],
			variant === 'filled' && BgColorHover[theme],
			variant === 'soft' && BgColorSoft[theme],
			variant === 'soft' && BgColorSoftHover[theme],
			variant === 'ghost' && BgColorGhostHover[theme],
			variant === 'filled' && ForeColorFilled[theme],
			variant === 'filled' && ForeColorFilledHover[theme],
			variant === 'text' && FontColor[theme],
			variant === 'text' && FontColorHover[theme],
			variant === 'soft' && ForeColorSoft[theme],
			variant === 'soft' && ForeColorSoftHover[theme],
			variant === 'ghost' && ForeColorGhost[theme],
			variant === 'ghost' && ForeColorGhostHover[theme],
			variant === 'outlined' && ForeColorOutline[theme],
			variant === 'outlined' && ForeColorOutlineHover[theme],
			['filled'].includes(variant) && SelectedTypes.checked[selectedTheme || theme],
			['soft', 'outlined'].includes(variant) && SelectedSoftTypes.checked[selectedTheme || theme],
			variant === 'text' && 'aria-checked:underline dark:aria-checked:underline',
			variant === 'outlined' &&
				theme === 'dark' &&
				'aria-checked:text-frame-50 aria-checked:hover:text-frame-200',
			variant === 'outlined' &&
				theme === 'white' &&
				'aria-checked:text-frame-600 aria-checked:hover:text-frame-700 dark:aria-checked:text-frame-600 dark:aria-checked:hover:text-frame-700',
			context && 'relative focus:z-10 -ml-px first:ml-0',
			context && variant === 'text' && 'px-3 first:pl-0 last:pr-0',
			context && rounded && rounded !== 'unstyled' && 'first:rounded-r-none last:rounded-l-none',
			context && rounded && rounded !== 'unstyled' && 'first:focus:z-20', // without looks like no border on first item.
			{ 'font-medium': !rest.href },
			{ 'hover:underline': variant === 'text' },
			rest.disabled && options.disabled
		],
		focusType: 'visible',
		focusTheme: focusTheme || theme,
		fontSize: size,
		ringWidth: variant === 'outlined' && 'sm',
		ringOffset: variant === 'outlined' && 'inset',
		ringColor: variant === 'outlined' && theme,
		ringColorHover: variant !== 'outlined' && theme,
		rounded: rounded,
		shadow: shadow
	}) as ConfigProps;
</script>

{#if !selectable}
	<Base {...base} {...rest as any} {as}>
		{@render children()}
	</Base>
{:else}
	<Base {...base} {...rest as any} role="checked" aria-checked={selected} {as}>
		{@render children()}
	</Base>
{/if}
