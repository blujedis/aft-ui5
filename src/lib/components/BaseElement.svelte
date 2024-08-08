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
		// FontColor,
		// FontColorHover,
		// ForeColorFilled,
		// ForeColorUnfilled,
		// ForeColorFilledHover,
		// ForeColorUnfilledHover,
		OutlineColorFocus,
		RingColor,
		RingColorHover
		// BgColor,
		// BgColorHover,
		// BgColorSelected,
		// BgColorSoftHover,
		// BgColorSoft,
		// BgColorGhostHover
	} from '$lib/theme/types.js';

	export type ConfigProps = {
		classes?: string | ArgumentArray;
		removes?: string[]; // classes that should be removed.
		border?: keyof typeof Border;
		// bgColor?: ThemeColor;
		// bgColorHover?: ThemeColor;
		// bgColorSoft?: ThemeColor;
		// bgColorSoftHover?: ThemeColor;
		// bgColorGhostHover?: ThemeColor;
		// bgColorSelected?: ThemeColor;
		dropShadow?: keyof typeof DropShadow;
		focusType?: FocusType;
		fontLeading?: keyof typeof FontLeading;
		fontSize?: keyof typeof FontSize;
		fontWeight?: keyof typeof FontWeight;
		// fontColor?: ThemeColor;
		// fontColorHover?: ThemeColor;
		// foreColorFilled?: ThemeColor;
		// foreColorUnfilled?: ThemeColor;
		// foreColorFilledHover?: ThemeColor;
		// foreColorUnfilledHover?: ThemeColor;
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
		// bgColor = 'unstyled',
		// bgColorHover = 'unstyled',
		// bgColorSoft = 'unstyled',
		// bgColorSoftHover = 'unstyled',
		// bgColorGhostHover = 'unstyled',
		// bgColorSelected = 'unstyled',
		dropShadow = 'unstyled',
		focusType = 'unstyled',
		selectType = 'unstyled',
		fontSize = 'unstyled',
		fontWeight = 'unstyled',
		fontLeading = 'unstyled',
		// fontColor = 'unstyled',
		// fontColorHover = 'unstyled',
		// foreColorFilled = 'unstyled',
		// foreColorUnfilled = 'unstyled',
		// foreColorFilledHover = 'unstyled',
		// foreColorUnfilledHover = 'unstyled',
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
				// BgColor[bgColor],
				// BgColorHover[bgColorHover],
				// BgColorSelected[bgColorSelected],
				// BgColorSoft[bgColorSoft],
				// BgColorSoftHover[bgColorSoftHover],
				// BgColorGhostHover[bgColorGhostHover],
				DropShadow[dropShadow],
				FontSize[fontSize],
				FontLeading[fontLeading],
				FontWeight[fontWeight],
				// FontColor[fontColor],
				// FontColorHover[fontColorHover],
				// ForeColorFilled[foreColorFilled],
				// ForeColorUnfilled[foreColorUnfilled],
				// ForeColorFilledHover[foreColorFilledHover],
				// ForeColorUnfilledHover[foreColorUnfilledHover],
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
