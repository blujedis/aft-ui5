<script context="module" lang="ts">
	import { type Snippet } from 'svelte';
	import { type ElementProps, type HTMLTag, type UseFn } from '$lib/types.js';
	import { clsxm, joinStyles } from '$lib/utils/string.js';
	import { transitioner, type TransitionOptions } from '$lib/utils/transitioner.js';
	import type { ClassValue } from 'clsx';
	import {
		type FocusType,
		type ThemeColor,
		Rounded,
		RingWidth,
		Border,
		OutlineWidth,
		RingOffset,
		OutlineOffset,
		Shadow,
		DropShadow,
		FontSize,
		FontWeight,
		FontLeading,
		RingColor,
		RingColorHover,
		BorderColor
	} from '$lib/theme/types.js';

	export type ConfigProps = {
		classes?: string | ClassValue | ClassValue[];
		styles?: string | null | false | (string | null | false)[];
		borderSize?: keyof typeof Border;
		borderColor?: ThemeColor;
		dropShadow?: keyof typeof DropShadow;
		focusType?: FocusType;
		focusTheme?: ThemeColor;
		focusWidth?: keyof typeof OutlineWidth;
		focusOffset?: keyof typeof OutlineOffset;
		fontLeading?: keyof typeof FontLeading;
		fontSize?: keyof typeof FontSize;
		fontWeight?: keyof typeof FontWeight;
		node?: HTMLElement;
		ringWidth?: keyof typeof RingWidth;
		ringColor?: ThemeColor;
		ringColorHover?: ThemeColor;
		ringOffset?: keyof typeof RingOffset;
		rounded?: keyof typeof Rounded;
		shadow?: keyof typeof Shadow;

		transition?: TransitionOptions;
		use?: UseFn;
		useParams?: Record<string, unknown>;
		visible?: boolean;
		onclickoutside?: (...args: any[]) => any;
	};

	export type BaseProps<Tag extends HTMLTag> = {
		as: Tag;
		children?: Snippet;
	} & ConfigProps;
</script>

<script lang="ts" generics="Tag extends HTMLTag">
	import t from '$lib/theme/theme.svelte.js';
	import { FocusTypes } from '$lib/theme/types.js';
	import { ensureArray } from '$lib/utils/array.js';

	let {
		as,
		borderSize,
		borderColor,
		dropShadow,
		focusType,
		focusWidth = t.globals.focusWidth,
		focusOffset = t.globals.focusOffset,
		focusTheme,
		fontLeading,
		fontSize,
		fontWeight,
		node = $bindable(),
		ringWidth,
		ringColor,
		ringOffset,
		ringColorHover,
		rounded,
		shadow,
		transition,
		use: initUse,
		useParams = {},
		visible = $bindable(),
		classes: parentClasses = '',
		styles: parentStyles = '',
		class: userClasses,
		style: userStyles,
		children,
		...rest
	}: BaseProps<Tag> & ElementProps<Tag> = $props();

	const use = (node: HTMLElement, params: Record<string, unknown>) => {
		if (!initUse) return {};
		return initUse(node, params);
	};

	const classes = $derived(
		clsxm(
			borderSize && Border[borderSize],
			borderColor && BorderColor[borderColor],
			dropShadow && DropShadow[dropShadow],
			fontLeading && FontLeading[fontLeading],
			fontSize && FontSize[fontSize],
			fontWeight && FontWeight[fontWeight],
			focusType && focusTheme && FocusTypes[focusType][focusTheme],
			focusWidth && focusType !== 'unstyled' && OutlineWidth[focusWidth],
			focusOffset && focusType !== 'unstyled' && OutlineOffset[focusOffset],
			ringWidth && RingWidth[ringWidth],
			ringColor && RingColor[ringColor],
			ringColorHover && RingColorHover[ringColorHover],
			ringOffset && RingOffset[ringOffset],
			rounded && Rounded[rounded],
			shadow && Shadow[shadow],
			parentClasses,
			userClasses || ''
		)
	);

	const styles = $derived(joinStyles(parentStyles, userStyles));
</script>

{#if transition && visible}
	{#if children}
		<svelte:element
			this={as}
			bind:this={node}
			use:use={useParams}
			class={classes}
			style={styles}
			transition:transitioner|global={transition}
			{...rest}
		>
			{@render children()}
		</svelte:element>
	{:else}
		<svelte:element
			this={as}
			bind:this={node}
			use:use={useParams}
			transition:transitioner|global={transition}
			class={classes}
			style={styles}
			{...rest}
		/>
	{/if}
{:else if children}
	<svelte:element
		this={as}
		bind:this={node}
		use:use={useParams}
		class={classes}
		style={styles}
		{...rest}
	>
		{@render children()}
	</svelte:element>
{:else}
	<svelte:element
		this={as}
		bind:this={node}
		use:use={useParams}
		class={classes}
		style={styles}
		{...rest}
	/>
{/if}
