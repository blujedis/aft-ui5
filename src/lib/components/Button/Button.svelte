<script context="module" lang="ts">
	import { type ElementProps, type HTMLTag } from '$lib/types.js';
	import { type ConfigProps } from '../BaseElement.svelte';
	import {
		BgColor,
		BgColorHover,
		BgColorSoft,
		BgColorSoftHover,
		ButtonFontSize,
		ButtonPaddingX,
		FieldPaddingY,
		ForeColorFilled,
		ForeColorFilledHover,
		ForeColorUnfilled,
		ForeColorUnfilledHover,
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
		rounded?: ConfigProps['rounded'];
		shadow?: ConfigProps['shadow'];
		focusType?: FocusType;
		size?: keyof typeof Size;
		theme?: ThemeColor;
		variant?: 'filled' | 'soft' | 'outlined' | 'ghost' | 'text';
	} & ExtendedProps<Tag> &
		ElementProps<Tag>;

	export const buttonVariants = ['filled', 'soft', 'outlined', 'ghost', 'text'] as const;
</script>

<script lang="ts" generics="Tag extends HTMLTag = 'button'">
	import BaseElement from '../BaseElement.svelte';
	import t from '$lib/theme/theme.svelte.js';
	import type { AriaRole } from 'svelte/elements';
	let {
		as = 'button' as Tag,
		focusType = 'visible',
		rounded = 'unstyled',
		shadow = 'unstyled',
		size = 'md',
		theme = 'light',
		variant = 'filled',
		children,
		...rest
	}: ButtonProps<Tag> = $props();

	const config = $derived({
		classes: [
			`button button-${variant} inline-flex items-center justify-center cursor-pointer outline-none transition motion-reduce:transition-none`,
			variant !== 'text' ? ButtonPaddingX[size] : '',
			variant !== 'text' ? FieldPaddingY[size] : '',
			ButtonFontSize[size],
			variant === 'filled' ? BgColor[theme] : '',
			variant === 'filled' ? BgColorHover[theme] : '',
			variant === 'soft' ? BgColorSoft[theme] : '',
			variant === 'soft' ? BgColorSoftHover[theme] : '',
			variant === 'ghost' ? BgColorSoftHover[theme] : '',
			variant === 'filled' ? BgColor[theme] : '',
			variant === 'text' ? ForeColorUnfilled[theme] : '',
			variant === 'text' ? ForeColorUnfilledHover[theme] : '',
			{ 'font-medium': !rest.href },
			{ 'hover:underline': variant === 'text' }
		],

		// bgColor: variant !== 'filled' ? 'unstyled' : theme,
		// bgColorHover: variant !== 'filled' ? 'unstyled' : theme,
		// bgColorSoft: variant !== 'soft' ? 'unstyled' : theme,
		// bgColorSoftHover: variant === 'soft' ? theme : 'unstyled',
		// bgColorGhostHover: variant === 'ghost' ? theme : 'unstyled',
		focusType: 'visible',
		fontSize: size,
		// foreColorFilled: variant !== 'filled' ? 'unstyled' : theme,
		// foreColorUnfilled: variant === 'filled' ? 'unstyled' : theme,
		// foreColorFilledHover: variant !== 'filled' ? 'unstyled' : theme,
		// foreColorUnfilledHover: variant === 'filled' ? 'unstyled' : theme,
		outline: size,
		outlineOffset: t.focusOffset,
		outlineColorFocus: theme,
		ring: variant !== 'outlined' ? 'unstyled' : 'sm',
		ringOffset: variant !== 'outlined' ? 'unstyled' : 'inset',
		ringColor: variant !== 'outlined' ? 'unstyled' : theme,
		ringColorHover: variant !== 'outlined' ? 'unstyled' : theme,
		rounded: rounded || t.rounded,
		shadow
	}) as ConfigProps;
</script>

<BaseElement {...rest} {...config} {as}>
	{@render children()}
</BaseElement>
