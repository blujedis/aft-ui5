<script context="module" lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLTag, type ElementPropsWithType } from '$lib/types.js';
	import {
		BgColor,
		BgColorHover,
		BgColorSelected,
		BgColorSoft,
		BgColorSoftHover,
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
		FontColor,
		FontColorHover,
		type FocusType,
		type AriaSelectType,
		type ThemeColor
	} from '$lib/theme/types.js';

	export type ElementProps<Tag extends HTMLTag> = {
		as?: Tag;
		border?: keyof typeof Border;
		bgColor?: ThemeColor;
		bgColorHover?: ThemeColor;
		bgColorSoft?: ThemeColor;
		bgColorSoftHover?: ThemeColor;
		bgColorSelected?: ThemeColor;
		focusType?: FocusType;
		selectType?: AriaSelectType;
		fontLeading?: keyof typeof FontLeading;
		fontColor?: ThemeColor;
		fontColorHover?: ThemeColor;
		fontSize?: keyof typeof FontSize;
		fontWeight?: keyof typeof FontWeight;
		outline?: keyof typeof Outline;
		outlineOffset?: keyof typeof OutlineOffset;
		ring?: keyof typeof Ring;
		ringOffset?: keyof typeof RingOffset;
		rounded?: keyof typeof Rounded;
		shadow?: keyof typeof Shadow;
		dropShadow?: keyof typeof DropShadow;
		children: Snippet;
	};
</script>

<script lang="ts" generics="Tag extends HTMLTag = 'div'">
	import cn from 'classnames';
	import theme from '$lib/theme/theme.svelte.js';

	let {
		as = 'div' as Tag,
		border = 'unstyled',
		bgColor = 'unstyled',
		bgColorHover = 'unstyled',
		bgColorSoft = 'unstyled',
		bgColorSoftHover = 'unstyled',
		bgColorSelected = 'unstyled',
		focusType = 'unstyled',
		selectType = 'unstyled',
		fontSize = 'unstyled',
		fontColor = 'unstyled',
		fontLeading = 'unstyled',
		fontColorHover = 'unstyled',
		outline = 'unstyled',
		outlineOffset = 'unstyled',
		ring = 'unstyled',
		ringOffset = 'unstyled',
		rounded = 'unstyled',
		shadow = 'unstyled',
		dropShadow = 'unstyled',
		children,
		...rest
	}: ElementPropsWithType<Tag, ElementProps<Tag>> = $props();

	const elemClasses = $state(
		cn(
			Border[border],
			BgColor[bgColor],
			FontSize[fontSize],
			FontColor[fontColor],
			FontColorHover[fontColorHover],
			FontLeading[fontLeading],
			Outline[outline],
			OutlineOffset[outlineOffset],
			Ring[ring],
			RingOffset[ringOffset],
			Rounded[rounded || theme.rounded],
			Shadow[shadow],
			DropShadow[dropShadow],
			rest.class
		)
	);
</script>

<svelte:element this={as} {...rest} class={elemClasses}>
	{@render children()}
</svelte:element>
