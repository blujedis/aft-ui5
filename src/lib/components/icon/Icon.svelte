<script context="module" lang="ts">
	import {
		type ThemeColor,
		FillColor,
		FillColorHover,
		FillColorSoft,
		FillColorSoftHover,
		type Size
	} from '$lib/theme/types.js';
	import type { TypeOrValue } from '$lib/types.js';
	import { clsxm } from '$lib/utils/string.js';
	import type { IconProps as IconifyIconProps } from '@iconify/svelte';
	import Icon from '@iconify/svelte';
	import { getContext } from 'svelte';

	export type IconProps = IconifyIconProps & {
		active?: boolean;
		roticon?: TypeOrValue<keyof typeof IconRotate>;
		class?: string | null;
		hoverable?: boolean;
		size?: keyof typeof IconSize;
		theme?: ThemeColor;
		stroke?: ThemeColor;
		variant?: 'unstyled' | 'filled' | 'soft';
	};
	export const iconVariants = ['filled', 'soft'] as IconProps['variant'][];

	export const IconSize = {
		unstyled: '',
		xs: 'h-4 w-4',
		sm: 'h-5 w-5',
		md: 'h-6 w-6',
		lg: 'h-8 w-8',
		xl: 'h-10 w-10',
		xl2: 'h-12 w-12',
		full: 'w-full h-full'
	};

	const IconRotate = {
		unstyled: '',
		'45': 'rotate-45',
		'90': 'rotate-90',
		'180': 'rotate-180',
		'-45': '-rotate-45',
		'-90': '-rotate-90',
		'-180': '-rotate-180'
	};
</script>

<script lang="ts">
	const context = getContext<{ theme: ThemeColor; size: Size; variant: string }>('IconContainer');

	let {
		active = $bindable(),
		hoverable,
		icon,
		roticon = '-180',
		size = (context && context.size) || 'sm',
		stroke,
		theme,
		variant = 'filled',
		...rest
	}: IconProps = $props();

	const iconClasses = $derived(
		clsxm(
			`icon icon-${theme} inline-flex pointer-events-none transition-transform duration-300 origin-center`,
			hoverable && 'pointer-events-auto',
			theme && ['filled'].includes(variant) && FillColor[theme],
			theme && ['filled'].includes(variant) && hoverable && FillColorHover[theme],
			theme && variant === 'soft' && hoverable && FillColorSoftHover[theme],
			theme && variant === 'soft' && FillColorSoft[theme],
			!theme && 'text-inherit',
			// !theme && !context && 'text-frame-400 dark:text-frame-400',
			// !theme && context && 'text-inherit',
			active && roticon && IconRotate[roticon as keyof typeof IconRotate],
			IconSize[size],
			rest.class
		)
	);
</script>

<Icon {...rest} {icon} class={iconClasses} aria-hidden={true} />
