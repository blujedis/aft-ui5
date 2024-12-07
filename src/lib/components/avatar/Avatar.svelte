<script module lang="ts">
	import { type ElementProps } from '$lib/types.js';
	import { getContext, setContext, type Snippet } from 'svelte';
	import {
		type Size,
		type ThemeColor,
		FillColor,
		FillColorSoft,
		FillColorHover,
		FillColorSoftHover,
		RingColor,
		RingColorHover,
		type RoundedSize,
		type ShadowSize
	} from '$lib/theme/types.js';

	export type AvatarProps = {
		hoverable?: boolean;
		mode?: 'icon' | 'image';
		removable?: boolean;
		rounded?: RoundedSize | false;
		shadow?: ShadowSize | false;
		size?: Size;
		stacked?: boolean;
		theme?: ThemeColor;
		variant?: 'unstyled' | 'filled' | 'soft' | 'outlined';
		children: Snippet<[{ rounded?: RoundedSize | false; size?: Size }]>;
	} & Omit<ElementProps<'span'>, 'children'>;



	const AvatarSize = {
		unstyled: '',
		xs: 'h-8 w-8',
		sm: 'h-10 w-10',
		md: 'h-12 w-12',
		lg: 'h-16 w-16',
		xl: 'h-20 w-20',
		xl2: 'h-28 w-28'
	};
</script>

<script lang="ts">
	import { buildClass } from '$lib/theme/build.svelte.js';
	import { RingOffset, RingWidth } from '$lib/theme/constants.js';

	let {
		hoverable,
		mode,
		rounded,
		shadow,
		size = 'md',
		theme = $bindable(),
		variant,
		children,
		...rest
	}: AvatarProps = $props();

	const stacked = getContext('Stack') as boolean;

	setContext('IconContainer', { size: 'full', theme, variant, hoverable });

	const classes = $derived(
		buildClass({
			classes: [
				`avatar avatar-${variant} avatar-${theme} inline-flex items-center 
			justify-center outline-none relative`,
				stacked && `ring-2 ring-[color:rgb(var(--bg-light))] dark:ring-[color:rgb(var(--bg-dark))]`,
				AvatarSize[size],

				theme && variant && ['filled', 'outlined'].includes(variant) && FillColor[theme],
				theme && variant === 'soft' && FillColorSoft[theme],
				theme &&
					variant &&
					['filled', 'outlined'].includes(variant) &&
					hoverable &&
					FillColorHover[theme],

				variant === 'soft' && hoverable && FillColorSoftHover[theme || 'light'],
				variant === 'outlined' && RingWidth['sm'],
				variant === 'outlined' && RingOffset['inset'],
				variant === 'outlined' && RingColor[theme || 'light'],
				variant === 'outlined' && hoverable && RingColorHover[theme || 'light'],

				!theme && 'text-frame-400 dark:text-frame-500',
				!theme && hoverable && 'hover:text-frame-500 dark:hover:text-frame-600',
				rest.class
			],
			// fontSize: size,
			// ringWidth: variant === 'outlined' && 'sm',
			// ringOffset: variant === 'outlined' && 'inset',
			// ringColor: variant === 'outlined' && (theme || 'light'),
			// ringColorHover: variant === 'outlined' && hoverable && (theme || 'light'),
			rounded,
			shadow
		})
	);
</script>

<span {...rest} class={classes}>
	{@render children({ rounded, size })}
</span>
