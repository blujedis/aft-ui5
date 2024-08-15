<script context="module" lang="ts">
	import { type ElementProps, type HTMLTag } from '$lib/types.js';
	import { type ConfigProps } from '$lib/components/Base.svelte';
	import {
		BgColor,
		BgColorGhostHover,
		BgColorHover,
		BgColorSoft,
		BgColorSoftHover,
		ButtonFontSize,
		ButtonPaddingX,
		FieldPaddingY,
		ForeColorText,
		ForeColorTextHover,
		ForeColorFilled,
		ForeColorFilledHover,
		ForeColorSoft,
		ForeColorSoftHover,
		ForeColorGhost,
		ForeColorGhostHover,
		Size,
		type FocusType,
		type ThemeColor
	} from '$lib/theme/types.js';

	type ExtendedProps<Tag extends HTMLTag> = Tag extends 'a'
		? { href: string | null }
		: Tag extends 'button'
			? {}
			: { role: AriaRole | null };

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
	import BaseElement from '$lib/components/Base.svelte';
	import t from '$lib/theme/theme.svelte.js';
	import type { AriaRole } from 'svelte/elements';
	import { options } from '$lib/theme/constants.js';
	import { truthyOrDefault } from '$lib/utils/misc.js';
	import type { Snippet } from 'svelte';

	let {
		as = 'button' as Tag,
		focusType = 'visible',
		focusTheme,
		rounded,
		selectable,
		selected = $bindable(),
		selectedTheme = 'primary',
		shadow,
		size = 'md',
		theme = 'light',
		variant = 'filled',
		children,
		...rest
	}: ButtonProps<Tag> & ElementProps<Tag> = $props();

	const base = $derived({
		classes: [
			`button button-${variant} button-${theme} inline-flex items-center 
			justify-center cursor-pointer outline-none`,
			t.globals.transition,
			variant !== 'text' ? ButtonPaddingX[size] : '',
			variant !== 'text' ? FieldPaddingY[size] : '',
			ButtonFontSize[size],
			variant === 'filled' ? BgColor[theme] : '',
			variant === 'filled' ? BgColorHover[theme] : '',
			variant === 'soft' ? BgColorSoft[theme] : '',
			variant === 'soft' ? BgColorSoftHover[theme] : '',
			variant === 'ghost' ? BgColorGhostHover[theme] : '',

			variant === 'filled' ? ForeColorFilled[theme] : '',
			variant === 'filled' ? ForeColorFilledHover[theme] : '',
			['outlined', 'text'].includes(variant) ? ForeColorText[theme] : '',
			['outlined', 'text'].includes(variant) ? ForeColorTextHover[theme] : '',
			variant === 'soft' ? ForeColorSoft[theme] : '',
			variant === 'soft' ? ForeColorSoftHover[theme] : '',
			variant === 'ghost' ? ForeColorGhost[theme] : '',
			variant === 'ghost' ? ForeColorGhostHover[theme] : '',
			{ 'font-medium': !rest.href },
			{ 'hover:underline': variant === 'text' },
			rest.disabled ? options.disabled : ''
		],
		focusType: 'visible',
		focusTheme: focusTheme || theme,
		fontSize: size,
		ringWidth: variant !== 'outlined' ? undefined : 'sm',
		ringOffset: variant !== 'outlined' ? undefined : 'inset',
		ringColor: variant !== 'outlined' ? undefined : theme,
		ringColorHover: variant !== 'outlined' ? undefined : theme,
		rounded: truthyOrDefault(t.globals.rounded, rounded || 'md'),
		selectedType: selectable ? 'checked' : undefined,
		selectedTheme: selectable && selectedTheme,
		shadow: truthyOrDefault(t.globals.shadow, shadow || 'sm')
	}) as ConfigProps;

	const attributes = {} as Record<string, unknown>;

	if (selectable) {
		attributes.role = 'checkbox';
		attributes['aria-checked'] = selected;
	}
</script>

<BaseElement {...base} {...rest} {...attributes} {as}>
	{@render children()}
</BaseElement>
