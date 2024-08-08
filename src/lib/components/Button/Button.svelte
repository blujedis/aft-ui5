<script context="module" lang="ts">
	import { type ElementProps, type HTMLTag } from '$lib/types.js';
	import { type ConfigProps } from '../BaseElement.svelte';
	import {
		BgColor,
		BgColorGhostHover,
		BgColorHover,
		BgColorSoft,
		BgColorSoftHover,
		ButtonFontSize,
		ButtonPaddingX,
		FieldPaddingY,
		FontColor,
		FontColorHover,
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
			variant === 'ghost' ? BgColorGhostHover[theme] : '',
			variant === 'filled' ? BgColor[theme] : '',
			variant === 'filled'  ? ForeColorFilled[theme] : '',
			variant === 'filled'  ? ForeColorFilledHover[theme] : '',
			['outlined', 'text'].includes(variant) ? FontColor[theme] : '',
			['outlined', 'text'].includes(variant) ? FontColorHover[theme] : '',
			variant === 'soft' ? ForeColorSoft[theme] : '',
			variant === 'soft'  ? ForeColorSoftHover[theme] : '',
			variant === 'ghost' ? ForeColorGhost[theme] : '',
			variant === 'ghost'  ? ForeColorGhostHover[theme] : '',
			{ 'font-medium': !rest.href },
			{ 'hover:underline': variant === 'text' }
		],

		focusType: 'visible',
		fontSize: size,
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
