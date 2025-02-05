<script module lang="ts">
	import { type ElementProps } from '../../types.js';
	import { Animate } from '../../theme/constants.js';
	import {
		type Size,
		type ThemeColor,
		BgColor,
		ForeColorFilled,
		BgColorSoft,
		type RoundedSize,
		type ShadowSize
	} from '../../theme/types.js';

	export type IndicatorProps = {
		animate?: Exclude<keyof typeof Animate, 'spin'>; // spin doesn't make sense here.
		offset?: boolean;
		placement?: keyof typeof IndicatorPlacement;
		rounded?: RoundedSize | false;
		shadow?: ShadowSize | false;
		size?: Size;
		theme?: ThemeColor;
		text?: string | number;
		variant?: 'unstyled' | 'filled' | 'soft';
	} & ElementProps<'span'>;


	const IndicatorSize = {
		unstyled: '',
		xs: 'h-2 w-2',
		sm: 'h-2.5 w-2.5',
		md: 'h-3 w-3',
		lg: 'h-3.5 w-3.5',
		xl: 'h-4 w-4',
		xl2: 'h-5 w-5'
	};

	const IndicatorTextSize = {
		unstyled: '',
		xs: 'h-2.5 w-2.5',
		sm: 'h-3 w-3',
		md: 'h-3.5 w-3.5',
		lg: 'h-4 w-4',
		xl: 'h-5 w-5',
		xl2: 'h-6 w-6'
	};

	const IndicatorTextFontSize = {
		unstyled: '',
		xs: 'text-[0.45rem]',
		sm: 'text-[0.55rem]',
		md: 'text-[0.6rem]',
		lg: 'text-xs',
		xl: 'text-sm',
		xl2: 'text-md'
	};

	const IndicatorPlacement = {
		// top
		'top-left': 'top-0 start-0',
		'top-center': 'top-0 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 rtl:translate-x-1/2',
		'top-right': 'top-0 end-0',

		// center
		'center-left': 'top-1/2 -translate-y-1/2 start-0',
		center:
			'top-1/2 -translate-y-1/2 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 rtl:translate-x-1/2',
		'center-right': 'top-1/2 -translate-y-1/2 end-0',

		// bottom
		'bottom-left': 'bottom-0 start-0',
		'bottom-center': 'bottom-0 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 rtl:translate-x-1/2',
		'bottom-right': 'bottom-0 end-0'
	};

	const IndicatorOffset = {
		'top-left': '-translate-x-1/3 -translate-y-1/3',
		'top-center': '-translate-y-1/3',
		'top-right': 'translate-x-1/3 -translate-y-1/3',
		'center-left': '-translate-x-1/3',
		center: '',
		'center-right': 'translate-x-1/3',
		'bottom-left': '-translate-x-1/3 translate-y-1/3',
		'bottom-center': 'translate-y-1/3',
		'bottom-right': 'translate-x-1/3translate-y-1/3'
	};

	const IndicatorTextOffset = {
		'top-left': '-translate-x-[10%]',
		'top-center': '',
		'top-right': 'translate-x-[10%]',
		'center-left': '-translate-x-[10%]',
		center: '',
		'center-right': 'translate-x-[10%]',
		'bottom-left': '-translate-x-[10%]',
		'bottom-center': '',
		'bottom-right': 'translate-x-[10%]'
	};
</script>

<script lang="ts">
	import { buildClass } from '../../theme/build.svelte.js';

	let {
		animate = 'unstyled',
		offset = true,
		placement = 'top-right',
		rounded,
		shadow,
		size = 'md',
		theme = $bindable(),
		text,
		variant = 'filled',
		...rest
	}: IndicatorProps = $props();

	text = typeof text !== 'undefined' ? text + '' : text;

	const classes = $derived(
		buildClass({
			classes: [
				`indicator indicator-${variant} indicator-${theme} absolute rounded-full inline-flex items-center justify-center flex-shrink-0 ring-2 z-10
				ring-[color:rgb(var(--bg-light))] dark:ring-[color:rgb(var(--bg-dark))]`,
				['xl', 'xl2'].includes(size) && 'ring',
				size && IndicatorSize[size],
				size && text && IndicatorTextSize[size],
				placement && IndicatorPlacement[placement],
				placement && offset && IndicatorOffset[placement],
				text && text.length > 1 && IndicatorTextOffset[placement],
				(variant === 'filled' || !variant) && !theme && 'bg-frame-400 dark:bg-frame-600',
				variant !== 'unstyled' && theme && BgColor[theme],
				variant !== 'unstyled' && theme && ForeColorFilled[theme],
				variant === 'soft' && theme && BgColorSoft[theme],
				text && IndicatorTextFontSize[size],
				text && 'font-medium px-1',
				text && text.length >= 2 && 'w-auto',
				!text && Animate[animate],
				rest.class
			]
		})
	);
</script>

<span {...rest} class={classes}>
	{#if text}
		{text}
	{/if}
</span>
