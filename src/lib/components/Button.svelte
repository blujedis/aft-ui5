<script context="module" lang="ts">
	import { type ElementProps, type HTMLTag } from '$lib/types.js';
	import { type ConfigProps } from './BaseElement.svelte';
	import {
		ButtonFontSize,
		ButtonPaddingX,
		FieldPaddingY,
		Size,
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
		size?: keyof typeof Size;
		theme?: ThemeColor;
		variant?: 'filled' | 'soft' | 'outlined' | 'ghost' | 'text';
	} & ExtendedProps<Tag> &
		ElementProps<Tag>;
</script>

<script lang="ts" generics="Tag extends HTMLTag = 'button'">
	import BaseElement from './BaseElement.svelte';
	import t from '$lib/theme/theme.svelte.js';
	import type { AriaRole } from 'svelte/elements';
	import { focusRemoveMap } from '$lib/theme/constants.js';

	let {
		as = 'button' as Tag,
		rounded = 'unstyled',
		shadow = 'unstyled',
		size = 'md',
		theme = 'frame',
		variant = 'filled',
		children,
		...rest
	}: ButtonProps<Tag> = $props();

	const config = {
		classes: [
			`button button-${variant} inline-flex items-center justify-center cursor-pointer outline-none transition motion-reduce:transition-none`,
			ButtonPaddingX[size],
			FieldPaddingY[size],
			ButtonFontSize[size],
			{ 'font-medium': !rest.href },
			{ 'ring-1': variant === 'outlined' }
		],
		removes: [...focusRemoveMap.visible],

		bgColor: variant !== 'filled' ? 'unstyled' : theme,
		bgColorHover: variant !== 'filled' ? 'unstyled' : theme,
		bgSoftColor: variant !== 'soft' ? 'unstyled' : theme,
		bgSoftColorHover: ['soft', 'ghost'].includes(variant) ? theme : 'unstyled',
		focusType: 'visible',
		fontSize: size,
		outline: size,
		outlineOffset: t.focusOffset,
		outlineColorFocus: theme,
		ring: variant !== 'outlined' ? 'unstyled' : 'inset',
		ringColor: variant !== 'outlined' ? 'unstyled' : theme,
		ringColorHover: variant !== 'outlined' ? 'unstyled' : theme,
		rounded: rounded || t.rounded,
		shadow,
		foreColorFilled: variant !== 'filled' ? 'unstyled' : theme,
		foreColorUnfilled: variant === 'filled' ? 'unstyled' : theme
	} as ConfigProps;
</script>

<BaseElement {...rest} {...config} {as}>
	{@render children()}
</BaseElement>
