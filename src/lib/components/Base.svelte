<script context="module" lang="ts">
	import { type Snippet } from 'svelte';
	import { type ElementProps, type HTMLTag, type UseFn } from '$lib/types.js';
	import { clsx, type ClassValue } from 'clsx';
	import { twMerge } from 'tailwind-merge';
	import { transitioner, type TransitionOptions } from '$lib/utils/transitioner.js';
	import {
		type SelectType,
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
		RingColorHover
	} from '$lib/theme/types.js';

	export type ConfigProps = {
		classes?: string | ClassValue | ClassValue[];
		removes?: string[]; // classes that should be removed.
		border?: keyof typeof Border;
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
		selectedType?: SelectType;
		selectedTheme?: ThemeColor;
		shadow?: keyof typeof Shadow;
		transition?: TransitionOptions;
		use?: UseFn;
		useParams?: Record<string, unknown>;
		visible?: boolean;
	};

	export type BaseProps<Tag extends HTMLTag> = {
		as: Tag;
		children?: Snippet;
	} & ConfigProps &
		ElementProps<Tag>;
</script>

<script lang="ts" generics="Tag extends HTMLTag">
	import t from '$lib/theme/theme.svelte.js';
	import { FocusTypes, SelectTypes } from '$lib/theme/types.js';

	let {
		as,
		border = 'unstyled',
		dropShadow = 'unstyled',
		focusType = 'unstyled',
		focusWidth = t.focusWidth,
		focusOffset = t.focusOffset,
		focusTheme = 'unstyled',
		fontLeading = 'unstyled',
		fontSize = 'unstyled',
		fontWeight = 'unstyled',
		node,
		ringWidth = 'unstyled',
		ringColor = 'unstyled',
		ringOffset = 'unstyled',
		ringColorHover = 'unstyled',
		rounded = 'unstyled',
		selectedType = 'unstyled',
		selectedTheme = 'unstyled',
		shadow = 'unstyled',
		transition,
		use = (node: HTMLElement, params: Record<string, unknown>) => {},
		useParams = {},
		visible = $bindable(),
		classes: parentClasses = '',
		class: userClasses = '',
		children,
		...rest
	}: BaseProps<Tag> = $props();

	const classes = $derived(
		twMerge(
			clsx([
				Border[border],
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
				t.rounded && Rounded[rounded],
				SelectTypes[selectedType][selectedTheme],
				t.shadows && Shadow[shadow],
				parentClasses,
				userClasses
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
