<script context="module" lang="ts">
	import { type Snippet } from 'svelte';
	import { type ElementProps, type HTMLTag } from '$lib/types.js';
	import { type ArgumentArray } from 'classnames';
	import { twMerge } from 'tailwind-merge';
	import {
		Rounded,
		Ring,
		Border,
		Outline,
		RingOffset,
		OutlineOffset,
		Shadow,
		DropShadow,
		FontSize,
		FontWeight,
		FontLeading,
		type FocusType,
		type AriaSelectType,
		type ThemeColor,
		OutlineColorFocus,
		RingColor,
		RingColorHover
	} from '$lib/theme/types.js';

	export type ConfigProps = {
		classes?: string | ArgumentArray;
		removes?: string[]; // classes that should be removed.
		border?: keyof typeof Border;
		dropShadow?: keyof typeof DropShadow;
		focusType?: FocusType;
		fontLeading?: keyof typeof FontLeading;
		fontSize?: keyof typeof FontSize;
		fontWeight?: keyof typeof FontWeight;
		outline?: keyof typeof Outline;
		outlineOffset?: keyof typeof OutlineOffset;
		outlineColorFocus?: ThemeColor;
		ring?: keyof typeof Ring;
		ringColor?: ThemeColor;
		ringColorHover?: ThemeColor;
		ringOffset?: keyof typeof RingOffset;
		rounded?: keyof typeof Rounded;
		selectType?: AriaSelectType;
		shadow?: keyof typeof Shadow;
	};

	export type BaseProps<Tag extends HTMLTag> = {
		as: Tag;
		children: Snippet;
	} & ConfigProps &
		ElementProps<Tag>;
</script>

<script lang="ts" generics="Tag extends HTMLTag">
	import { classNames } from '$lib/theme/theme.svelte.js';

	let {
		as,
		border = 'unstyled',
		dropShadow = 'unstyled',
		focusType = 'unstyled',
		selectType = 'unstyled',
		fontSize = 'unstyled',
		fontWeight = 'unstyled',
		fontLeading = 'unstyled',
		outline = 'unstyled',
		outlineOffset = 'unstyled',
		outlineColorFocus = 'unstyled',
		ring = 'unstyled',
		ringColor = 'unstyled',
		ringOffset = 'unstyled',
		ringColorHover = 'unstyled',
		rounded = 'unstyled',
		shadow = 'unstyled',
		classes = '',
		children,
		...rest
	}: BaseProps<Tag> = $props();

	const _classes = $derived(
		twMerge(
			classNames([
				Border[border],
				DropShadow[dropShadow],
				FontSize[fontSize],
				FontLeading[fontLeading],
				FontWeight[fontWeight],
				Outline[outline],
				OutlineOffset[outlineOffset],
				OutlineColorFocus[outlineColorFocus],
				Ring[ring],
				RingColor[ringColor],
				RingColorHover[ringColorHover],
				RingOffset[ringOffset],
				Rounded[rounded],
				Shadow[shadow],
				classes,
				rest.class
			])
		)
	);
</script>

<svelte:element this={as} class={_classes}>
	{@render children()}
</svelte:element>
