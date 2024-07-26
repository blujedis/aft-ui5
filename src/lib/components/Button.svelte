<script context="module" lang="ts">
	import { type ElementProps, type HTMLTag } from '$lib/types.js';
	import { type ConfigProps } from './BaseElement.svelte';
	import { ButtonPaddingX, FieldPaddingY, Size, type ThemeColor } from '$lib/theme/types.js';

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
		bgColor: variant !== 'filled' ? 'unstyled' : theme,
		bgColorHover: variant !== 'filled' ? 'unstyled' : theme,
		bgSoftColor: variant !== 'soft' ? 'unstyled' : theme,
		bgSoftColorHover: ['soft', 'ghost'].includes(variant) ? theme : 'unstyled',
		classes: [
			'inline-flex items-center justify-center cursor-pointer outline-none transition motion-reduce:transition-none',
			ButtonPaddingX[size],
			FieldPaddingY[size]
		],
		focusType: 'visible',
		fontSize: size,
		textColorFilled: variant !== 'filled' ? 'unstyled' : theme,
		textColorUnfilled: variant === 'filled' ? 'unstyled' : theme,
		outline: size,
		outlineOffset: t.focusOffset,
		outlineColorFocus: theme,
		rounded: rounded || t.rounded,
		shadow,
		removes: [...focusRemoveMap.visible]
	} as ConfigProps;
</script>

<BaseElement {...rest} {...config} {as}>
	{@render children()}
</BaseElement>
