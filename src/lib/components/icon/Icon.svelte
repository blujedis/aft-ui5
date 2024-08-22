<script context="module" lang="ts">
	import {
		type ThemeColor,
		FillColor,
		FillColorHover,
		FillColorSoft,
		FillColorSoftHover,
		IconSize
	} from '$lib/theme/types.js';
	import { clsxm } from '$lib/utils/string.js';
	import type { IconProps as IconifyIconProps } from '@iconify/svelte';
	import Icon from '@iconify/svelte';

	export type IconProps = IconifyIconProps & {
		class?: string | null;
		hoverable?: boolean;
		size?: keyof typeof IconSize;
		theme?: ThemeColor;
		stroke?: ThemeColor;
		variant?: 'unstyled' | 'filled' | 'soft';
	};
	export const iconVariants = ['filled', 'soft'] as IconProps['variant'][];
</script>

<script lang="ts">
	let {
		class: initClass = '',
		hoverable,
		icon,
		size = 'sm',
		stroke,
		theme = 'unstyled', // by default will inherit from parent.
		variant = 'filled',
		...rest
	}: IconProps = $props();

	const iconClasses = $derived(
		clsxm(
			`icon icon-${theme} inline-flex pointer-events-none`,
			hoverable && 'pointer-events-auto',
			['filled'].includes(variant) && FillColor[theme],
			['filled'].includes(variant) && hoverable && FillColorHover[theme],
			variant === 'soft' && FillColorSoft[theme],
			variant === 'soft' && hoverable && FillColorSoftHover[theme],
			IconSize[size]
		)
	);
</script>

<Icon {...rest} {icon} class={iconClasses} aria-hidden={true} />
