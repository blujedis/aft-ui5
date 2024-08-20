<script context="module" lang="ts">
	import { type ElementProps } from '$lib/types.js';
	import type { Snippet } from 'svelte';
	import { type ConfigProps } from '$lib/components/Base.svelte';
	import { AvatarSize, Size, type ThemeColor, FillColor, FillColorSoft } from '$lib/theme/types.js';

	export type AvatarProps = {
		mode?: 'icon' | 'image';
		removable?: boolean;
		rounded?: ConfigProps['rounded'];
		shadow?: ConfigProps['shadow'];
		size?: keyof typeof Size;
		stacked?: boolean;
		theme?: ThemeColor;
		variant?: 'unstyled' | 'filled' | 'soft' | 'outlined';
		children: Snippet<[{ rounded: ConfigProps['rounded']; size: keyof typeof Size }]>;
	} & Omit<ElementProps<'span'>, 'children'>;

	export const avatarVariants = [
		'unstyled',
		'filled',
		'soft',
		'outlined'
	] as AvatarProps['variant'][];
</script>

<script lang="ts">
	import Base from '$lib/components/Base.svelte';
	import t from '$lib/theme/theme.svelte.js';
	import { truthyOrDefault } from '$lib/utils/misc.js';

	let {
		mode,
		rounded,
		shadow,
		size = 'md',
		stacked,
		theme = 'light',
		variant = 'unstyled',
		children,
		...rest
	}: AvatarProps = $props();

	const _rounded = truthyOrDefault(t.globals.rounded && rounded);
	const _shadow = truthyOrDefault(t.globals.shadow && shadow);

	const base = $derived({
		classes: [
			`avatar avatar-${variant} avatar-${theme} inline-flex items-center 
			justify-center outline-none relative`,
			t.globals.transition,
			stacked &&
				`ring-2 ring-[color:rgb(var(--body-bg-light))] dark:ring-[color:rgb(var(--body-bg-dark))]`,
			AvatarSize[size],
			['filled', 'outlined'].includes(variant) && FillColor[theme],
			variant === 'soft' && FillColorSoft[theme]
		],
		fontSize: size,
		ringWidth: variant !== 'outlined' ? undefined : 'sm',
		ringOffset: variant !== 'outlined' ? undefined : 'inset',
		ringColor: variant !== 'outlined' ? undefined : theme,
		ringColorHover: variant !== 'outlined' ? undefined : theme,
		rounded: _rounded,
		shadow: _shadow
	}) as ConfigProps;
</script>

<Base {...base} {...rest} as="span">
	{@render children({ rounded: _rounded, size })}
</Base>
