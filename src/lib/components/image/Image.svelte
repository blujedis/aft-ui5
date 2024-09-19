<script module lang="ts">
	import { type ElementProps } from '$lib/types.js';

	export type StackProps = {
		aspect?: keyof typeof ImageAspect;
		lazy?: boolean;
		rounded?: RoundedSize | false;
		size?: keyof typeof ImageSize;
	} & ElementProps<'img'>;

	export const ImageSize = {
		unstyled: '',
		xs: 'size-8',
		sm: 'size-12',
		md: 'size-20',
		lg: 'size-28',
		xl: 'size-36',
		xl2: 'size-48',
		xl3: 'size-56',
		xl4: 'size-64',
		xl5: 'size-80',
		xl6: 'size-96',
		min: 'size-min',
		max: 'size-max',
		fit: 'size-fit',
		full: 'size-full',
		auto: 'size-auto',
		'1/4': 'size-1/4',
		'1/2': 'size-1/2',
		'1/3': 'size-1/3',
		'2/3': 'size-2/3',
		'3/4': 'size-3/4'
	};

	export const ImageAspect = {
		unstyled: '',
		auto: 'aspect-auto',
		square: 'aspect-square',
		video: 'aspect-video'
	};
</script>

<script lang="ts">
	import { buildClass } from '$lib/theme/build.svelte.js';
	import type { RoundedSize } from '$lib/theme/types.js';

	let { aspect = 'unstyled', lazy, rounded, size = 'unstyled', ...rest }: StackProps = $props();

	const classes = $derived(
		buildClass({
			classes: [
				`image object-cover`,
				ImageSize[size],
				ImageAspect[aspect],
				aspect === 'video' ? 'h-auto' : '',
				rounded === 'full' && 'overflow-hidden',
				rest.class
			],
			rounded
		})
	);
</script>

<img {...rest} class={classes} />
