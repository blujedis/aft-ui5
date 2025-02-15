<script module lang="ts">
	import { type ElementProps, type HTMLTag } from '$lib/types.js';
	import { setContext, type Snippet } from 'svelte';
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
		RingColorHover,
		type RoundedSize,
		type ShadowSize
	} from '$lib/theme/types.js';

	type ExtendedProps<Tag extends HTMLTag> = Tag extends 'a' ? { href: string | null } : {};

	export type ButtonProps<Tag extends HTMLTag> = {
		as?: Tag;
		focusType?: FocusType;
		focusTheme?: ThemeColor;
		full?: boolean;
		role?: AriaRole;
		rounded?: RoundedSize | false;
		selected?: boolean;
		selectedTheme?: ThemeColor;
		shadow?: ShadowSize | false;
		size?: Size;
		textblock?: boolean; // when true preserves padding for text variant.
		theme?: ThemeColor;
		variant?: 'unstyled' | 'filled' | 'soft' | 'outlined' | 'ghost' | 'text';
		children: Snippet;
	} & ExtendedProps<Tag>;

const ButtonPaddingX = {
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
	import { FieldFontSize, FieldPaddingY, RingOffset, RingWidth } from '$lib/theme/constants.js';
	import t from '$lib/theme/theme.svelte.js';
	import { getContext } from 'svelte';
	import { buildClass } from '$lib/theme/build.svelte.js';
	import type { AriaRole } from 'svelte/elements';

	const context = getContext('ButtonGroup') as any;

	let {
		as = 'button' as Tag,
		focusType = 'visible',
		focusTheme,
		full,
		role = context?.role,
		rounded,
		selected = $bindable(),
		selectedTheme,
		shadow,
		size = 'md',
		textblock,
		theme = $bindable(),
		variant = $bindable('filled'),
		children,
		...rest
	}: ButtonProps<Tag> & ElementProps<Tag> = $props();

	setContext('IconContainer', { theme });

	const classes = $derived(
		buildClass({
			prepend: [
				`button button-${variant || 'default'} button-${theme || 'unthemed'}`,
				as === 'a' && 'button-link'
			],
			classes: [
				`inline-flex items-center justify-center cursor-pointer outline-none`,
				variant !== 'text' || textblock ? ButtonPaddingX[size] : '',
				variant !== 'text' || textblock ? FieldPaddingY[size] : '',
				context && 'relative focus:z-10 -ml-px first:ml-0',
				context && variant === 'text' && 'px-3 first:pl-0 last:pr-0',
				context && rounded && rounded !== 'unstyled' && 'first:rounded-r-none last:rounded-l-none',
				context && rounded && rounded !== 'unstyled' && 'first:focus:z-20', // without looks like no border on first item.
				FieldFontSize[size],
				!rest.href && 'font-medium',
				rest.disabled && t.options.disabled,
				selected && 'button-selected',

				theme && variant === 'filled' && BgColor[theme],
				theme && variant === 'filled' && BgColorHover[theme],
				theme && variant === 'filled' && ForeColorFilled[theme],
				theme && variant === 'filled' && ForeColorFilledHover[theme],
				theme && variant === 'filled' && SelectedTypes.checked[selectedTheme || theme],
				!theme &&
					(!variant || variant === 'filled' || variant === 'soft') &&
					'bg-frame-200 dark:bg-frame-600 hover:bg-frame-300 dark:hover:bg-frame-700',
				!theme &&
					(!variant || ['filled', 'soft'].includes(variant)) &&
					'aria-checked:bg-frame-500 aria-checked:text-white dark:aria-checked:bg-frame-800 dark:aria-checked:text-white',
				!theme &&
					(!variant || variant === 'outlined') &&
					'aria-checked:bg-frame-200 dark:aria-checked:bg-frame-800 dark:aria-checked:text-white',

				theme && variant === 'soft' && BgColorSoft[theme],
				theme && variant === 'soft' && BgColorSoftHover[theme],
				theme && variant === 'soft' && ForeColorSoft[theme],
				theme && variant === 'soft' && ForeColorSoftHover[theme],
				theme && variant === 'soft' && SelectedSoftTypes.checked[selectedTheme || theme],
				!theme && variant === 'soft' && 'hover:bg-frame-200 dark:hover:bg-frame-700',

				theme && variant === 'outlined' && ForeColorOutline[theme],
				theme && variant === 'outlined' && ForeColorOutlineHover[theme],
				theme && variant === 'outlined' && SelectedSoftTypes.checked[selectedTheme || theme],
				variant === 'outlined' && RingWidth['sm'],
				variant === 'outlined' && RingOffset['inset'],
				theme && variant === 'outlined' && RingColor[theme],
				theme && variant === 'outlined' && RingColorHover[theme],
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
				!theme && variant === 'ghost' && 'hover:bg-frame-200 dark:hover:bg-frame-600',

				theme && variant === 'text' && FontColor[theme],
				theme && variant === 'text' && FontColorHover[theme],
				variant === 'text' && 'aria-checked:underline dark:aria-checked:underline',
				variant === 'text' && 'hover:underline underline-offset-4 decoration-2',
				!theme &&
					variant === 'text' &&
					'text-frame-600 dark:text-frame-600 aria-checked:bg-frame-200 dark:aria-checked:bg-frame-600',
				!theme && 'focus-visible:outline-frame-500/50'
			],
			append: [rest.class],
			focusType,
			focusTheme: focusTheme || theme,
			rounded,
			shadow,
			full
		})
	);
</script>

<svelte:element
	this={as}
	{role}
	{...rest}
	checked={selected}
	aria-checked={selected}
	class={classes}
>
	{@render children()}
</svelte:element>
