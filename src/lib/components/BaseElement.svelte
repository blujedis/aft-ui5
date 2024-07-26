<script context="module" lang="ts">
	import { type Snippet } from 'svelte';
	import { type ElementProps, type HTMLTag } from '$lib/types.js';
	import { type ArgumentArray } from 'classnames';
	import {
		BgColor,
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
		FontColor,
		FontColorHover,
		TextColorFilled,
		TextColorUnfilled,
		OutlineColorFocus,
		BgColorHover,
		BgColorSelected
	} from '$lib/theme/types.js';

	export type ConfigProps = {
		border?: keyof typeof Border;
		bgColor?: ThemeColor;
		bgColorHover?: ThemeColor;
		bgColorSoft?: ThemeColor;
		bgColorSoftHover?: ThemeColor;
		bgColorSelected?: ThemeColor;
		classes?: string | ArgumentArray;
		focusType?: FocusType;
		fontLeading?: keyof typeof FontLeading;
		fontColor?: ThemeColor;
		fontColorHover?: ThemeColor;
		textColorFilled?: ThemeColor;
		textColorUnfilled?: ThemeColor;
		textHover?: boolean;
		fontSize?: keyof typeof FontSize;
		fontWeight?: keyof typeof FontWeight;
		outline?: keyof typeof Outline;
		outlineOffset?: keyof typeof OutlineOffset;
		outlineColorFocus?: ThemeColor;
		ring?: keyof typeof Ring;
		ringOffset?: keyof typeof RingOffset;
		rounded?: keyof typeof Rounded;
		selectType?: AriaSelectType;
		shadow?: keyof typeof Shadow;
		dropShadow?: keyof typeof DropShadow;
		removes?: string[]; // classes that should be removed.
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
		bgColor = 'unstyled',
		bgColorHover = 'unstyled',
		bgColorSoft = 'unstyled',
		bgColorSoftHover = 'unstyled',
		bgColorSelected = 'unstyled',
		classes = '',
		dropShadow = 'unstyled',
		focusType = 'unstyled',
		selectType = 'unstyled',
		fontSize = 'unstyled',
		fontColor = 'unstyled',
		fontColorHover = 'unstyled',
		fontWeight = 'unstyled',
		fontLeading = 'unstyled',
		outline = 'unstyled',
		outlineOffset = 'unstyled',
		outlineColorFocus = 'unstyled',
		ring = 'unstyled',
		ringOffset = 'unstyled',
		rounded = 'unstyled',
		shadow = 'unstyled',
		textColorFilled = 'unstyled',
		textColorUnfilled = 'unstyled',
		removes = [],
		children,
		...rest
	}: BaseProps<Tag> = $props();

	const elemClasses = $state(
		classNames(
			[
				Border[border],
				BgColor[bgColor],
				BgColorHover[bgColorHover],
				BgColorSelected[bgColorSelected],
				DropShadow[dropShadow],
				FontSize[fontSize],
				FontColor[fontColor],
				FontColorHover[fontColorHover],
				FontLeading[fontLeading],
				Outline[outline],
				OutlineOffset[outlineOffset],
				OutlineColorFocus[outlineColorFocus],
				Ring[ring],
				RingOffset[ringOffset],
				Rounded[rounded],
				Shadow[shadow],
				TextColorFilled[textColorFilled],
				TextColorUnfilled[textColorUnfilled],
				classes,
				rest.class
			],
			removes
		)
	);
</script>

<svelte:element this={as} >
	{@render children()}
</svelte:element>
