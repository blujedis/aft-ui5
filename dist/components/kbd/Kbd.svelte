<script module lang="ts">
	import { type ElementProps } from '../../types.js';
	import {
		BgColor,
		BgColorSoft,
		ForeColorFilled,
		ForeColorSoft,
		ForeColorSoftHover,
		RingColor,
		type RoundedSize,
		type ShadowSize,
		type Size,
		type ThemeColor
	} from '../../theme/types.js';

	export type KbdProps = {
		full?: boolean;
		removable?: boolean;
		rounded?: RoundedSize | false;
		shadow?: ShadowSize | false;
		size?: Size;
		theme?: ThemeColor;
		variant?: 'unstyled' | 'filled' | 'soft' | 'outlined';
		children: Snippet<[]>;
	} & ElementProps<'span'>;

	const BadgeFontSize = {
		unstyled: '',
		xs: 'text-[10px]', // leading-3
		sm: 'text-xs',
		md: 'text-sm',
		lg: 'text-md',
		xl: 'text-lg',
		xl2: 'text-xl'
	};

	const BadgePaddingX = {
		unstyled: '',
		xs: 'px-1',
		sm: 'px-1.5 ',
		md: 'px-1.5',
		lg: 'px-2',
		xl: 'px-2 ',
		xl2: 'px-2.5'
	};
</script>

<script lang="ts">
	import { buildClass } from '../../theme/build.svelte.js';
	import type { Snippet } from 'svelte';
	import { RingOffset, RingWidth } from '../../theme/constants.js';

	let {
		full,
		removable,
		rounded,
		shadow,
		size = 'md',
		theme = $bindable(),
		variant,
		children,
		...rest
	}: KbdProps = $props();

	const classes = $derived(
		buildClass({
			classes: [
				`kbd kbd-${variant} kdb-${theme} inline-flex items-center 
			justify-center outline-none font-mono`,
				removable && 'badge-removable',
				BadgeFontSize[size],
				BadgePaddingX[size],

				theme && variant === 'filled' && BgColor[theme],
				theme && variant === 'filled' && BgColor[theme],
				theme && variant === 'filled' && ForeColorFilled[theme],
				!theme && (!variant || variant === 'filled') && 'bg-frame-200 dark:bg-frame-600',

				theme && variant === 'soft' && BgColorSoft[theme],
				theme && variant === 'soft' && ForeColorSoft[theme],
				theme && variant === 'soft' && ForeColorSoftHover[theme],
				!theme && variant === 'soft' && 'bg-frame-200 dark:bg-frame-800',

				variant === 'outlined' && RingWidth['sm'],
				variant === 'outlined' && RingOffset['inset'],
				theme && variant === 'outlined' && RingColor[theme || 'light'],
				!theme && variant === 'outlined' && 'ring-frame-300 dark:ring-frame-600',

				rest.class
			],
			fontSize: size,
			rounded,
			shadow,
			full
		})
	);
</script>

<kbd {...rest} class={classes}>
	<div>
		{@render children()}
	</div>
</kbd>
