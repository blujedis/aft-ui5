<script context="module" lang="ts">
	import { type Snippet } from 'svelte';
	import { type ElementProps, type HTMLTag, type UseFn } from '$lib/types.js';
	import { clsx, type ClassValue } from 'clsx';
	import { twMerge } from 'tailwind-merge';
	import { transitioner, type TransitionOptions } from '$lib/utils/transitioner.js';
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
		style?: string | null;
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

	let {
		as,
		borderSize,
		borderColor = 'unstyled',
		dropShadow = 'unstyled',
		focusType = 'unstyled',
		focusWidth = t.globals.focusWidth,
		focusOffset = t.globals.focusOffset,
		focusTheme = 'unstyled',
		fontLeading = 'unstyled',
		fontSize = 'unstyled',
		fontWeight = 'unstyled',
		node = $bindable(),
		ringWidth = 'unstyled',
		ringColor = 'unstyled',
		ringOffset = 'unstyled',
		ringColorHover = 'unstyled',
		rounded = 'unstyled',
		shadow = 'unstyled',
		transition,
		use: initUse,
		useParams = {},
		visible = $bindable(),
		classes: parentClasses = '',
		class: userClasses,
		children,
		...rest
	}: BaseProps<Tag> & ElementProps<Tag> = $props();

	const use = (node: HTMLElement, params: Record<string, unknown>) => {
		if (initUse) initUse(node, params);
	};

	const classes = $derived(
		twMerge(
			clsx([
				borderSize && Border[borderSize],
				BorderColor[borderColor],
				DropShadow[dropShadow],
				FontLeading[fontLeading],
				FontSize[fontSize],
				FontWeight[fontWeight],
				FocusTypes[focusType][focusTheme],
				focusType !== 'unstyled' && OutlineWidth[focusWidth],
				focusType !== 'unstyled' && OutlineOffset[focusOffset],
				RingWidth[ringWidth],
				RingColor[ringColor],
				RingColorHover[ringColorHover],
				RingOffset[ringOffset],
				Rounded[rounded],
				Shadow[shadow],
				parentClasses,
				userClasses || ''
			])
		)
	);
</script>

{#if transition && visible}
	{#if children}
		<svelte:element
			this={as}
			bind:this={node}
			use:use={useParams}
			class={classes}
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
			{...rest}
		/>
	{/if}
{:else if children}
	<svelte:element this={as} bind:this={node} use:use={useParams} class={classes} {...rest}>
		{@render children()}
	</svelte:element>
{:else}
	<svelte:element this={as} bind:this={node} use:use={useParams} class={classes} {...rest} />
{/if}
