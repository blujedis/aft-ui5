<script context="module" lang="ts">
	import { Size } from '$lib/theme/types.js';
	import { getContext } from 'svelte';
	import type { RatingContext } from './Rating.svelte';
	import { uniqid } from '$lib/utils/misc.js';
	import type { ElementProps } from '$lib/types.js';
	import { clsxm, getColor, joinStyles } from '$lib/utils/string.js';

	export type RatingItemProps = {
		background?: string; // transparent will show container page bg or set to white etc.
		fill?: string;
		index: number;
		size?: keyof typeof Size;
		stroked?: boolean; // if true use fill for stroke color.
	};

	const RatingSize = {
		unstyled: '',
		xs: 'h-3 w-3',
		sm: 'h-4 w-4',
		md: 'h-5 w-5',
		lg: 'h-6 w-6',
		xl: 'h-8 w-8',
		xl2: 'h-10 w-10'
	};
</script>

<script lang="ts">
	const context = getContext('Rating') as RatingContext;

	let {
		background,
		fill = '#FFA41C',
		index,
		size = 'sm',
		stroked = true,
		...rest
	}: RatingItemProps & ElementProps<'button'> = $props();

	// let ref: SVGElement | undefined;
	const id = uniqid();
	const initFill = getColor(fill, '#FFA41C'); // accepts color or theme color ex: danger-600

	const strokeColor = stroked ? initFill : undefined;

	const percentage = $derived(
		index > context.state().score
			? 0
			: index < Math.trunc(context.state().score)
				? 1
				: context.state().score % 1
	);

	const isActive = $derived(context.state().active > -1);
	const fillColor = $derived(
		isActive
			? index <= context.state().active
				? initFill
				: 'currentColor'
			: percentage === 1
				? initFill
				: percentage === 0
					? 'currentColor'
					: `url(#${id})`
	); // SVG Pattern references Linear Gradient by ID

	const stops = $derived([
		{ offset: `0%`, 'stop-color': initFill, 'stop-opacity': '1' },
		{ offset: `${percentage * 100}%`, 'stop-color': initFill, 'stop-opacity': '1' },
		{ offset: `${percentage * 100}%`, 'stop-color': 'currentColor', 'stop-opacity': '1' }
	]);

	const styles = $derived(
		joinStyles(['color:transparent;', `outline-color:${initFill}`], rest.style as string)
	);

	const classes = $derived(
		clsxm(
			`raiting-item z-10 focus-visible:outline outline-2 hover:scale-125`,
			context.state().readonly && 'pointer-events-none',
			size && RatingSize[size],
			rest.class
		)
	);
</script>

<button {...rest} class={classes} style={styles}>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img">
		<defs>
			<linearGradient {id}>
				{#each stops as stop}
					<stop {...stop} />
				{/each}
			</linearGradient>
		</defs>

		<path
			stroke={strokeColor}
			fill={fillColor}
			fill-rule="evenodd"
			d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
			clip-rule="evenodd"
		>
			<desc>Rating image {index}</desc>
		</path>
	</svg>
</button>
