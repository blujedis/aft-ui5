<script context="module" lang="ts">
	import { type ElementProps } from '$lib/types.js';
	import type { Snippet } from 'svelte';
	import { type ConfigProps } from '$lib/components/Base.svelte';
	import { AvatarSize, Size, type ThemeColor, FillColor, FillColorSoft } from '$lib/theme/types.js';

	export type AvatarProps = {
		removable?: boolean;
		rounded?: ConfigProps['rounded'];
		shadow?: ConfigProps['shadow'];
		size?: keyof typeof Size;
		stacked?: boolean;
		theme?: ThemeColor;
		variant?: 'unstyled' | 'filled' | 'soft' | 'outlined';
		children: Snippet<[]>;
	} & ElementProps<'span'>;

	export const avatarVariants = [
		'unstyled',
		'filled',
		'soft',
		'outlined'
	] as AvatarProps['variant'][];
</script>

<script lang="ts">
	import BaseElement from '$lib/components/Base.svelte';
	import t from '$lib/theme/theme.svelte.js';
	import { boolToValue } from '$lib/utils/misc.js';

	let {
		rounded,
		shadow,
		size = 'md',
		stacked,
		theme = 'light',
		variant = 'unstyled',
		children,
		...rest
	}: AvatarProps = $props();

	const base = $derived({
		classes: [
			`avatar avatar-${variant} avatar-${theme} inline-flex items-center 
			justify-center outline-none relative overflow-hidden`,
			t.transition,
			stacked && ``,
			AvatarSize[size],
			['filled', 'outlined'].includes(variant) ? FillColor[theme] : '',
			variant === 'soft' ? FillColorSoft[theme] : ''
		],
		fontSize: size,
		ringWidth: variant !== 'outlined' ? undefined : 'sm',
		ringOffset: variant !== 'outlined' ? undefined : 'inset',
		ringColor: variant !== 'outlined' ? undefined : theme,
		ringColorHover: variant !== 'outlined' ? undefined : theme,
		rounded: boolToValue(t.rounded, rounded || 'md'),
		shadow: boolToValue(t.shadows, shadow || 'sm')
	}) as ConfigProps;
</script>

<BaseElement {...base} {...rest} as="span">
	{@render children()}
</BaseElement>
