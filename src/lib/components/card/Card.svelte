<script context="module" lang="ts">
	import type { ElementProps } from '$lib/types.js';
	import type { Snippet } from 'svelte';
	import { type ConfigProps } from '$lib/theme/build.svelte.js';

	export interface CardProps {
		horizontal?: boolean;
		href?: string;
		image?: string | Snippet<[{ classes: string }]>;
		reverse?: boolean;
		rounded?: ConfigProps['rounded'];
		shadow?: ConfigProps['shadow'];
		size?: keyof typeof CardSize;
		spacing?: boolean; // adds x or y spaceing for block elements.
		children: Snippet;
	}

	const CardPadding = {
		unstyled: '',
		xs: 'p-6',
		sm: 'p-6',
		md: 'p-6',
		lg: 'p-6',
		xl: 'p-6 sm:p-8',
		xl2: 'p-6 sm:p-8',
		full: 'p-6 sm:p-8'
	};

	const CardSize = {
		unstyled: '',
		xs: 'max-w-64',
		sm: 'max-w-xs',
		md: 'max-w-lg',
		lg: 'max-w-xl',
		xl: 'max-w-2xl',
		xl2: 'max-w-screen-xl',
		full: 'max-w-full'
	};
</script>

<script lang="ts">
	import t from '$lib/theme/theme.svelte.js';
	import { clsxm } from '$lib/utils/string.js';
	import { buildClass } from '$lib/theme/build.svelte.js';

	let {
		horizontal = false,
		href,
		image,
		reverse = false,
		rounded = 'sm',
		shadow = 'lg',
		size = 'xs',
		spacing = true,
		children,
		...rest
	}: CardProps & ElementProps<'div'> = $props();

	const innerDiv = $derived(
		clsxm(
			size && CardPadding[size],
			// image && spacing && !horizontal && 'space-y-4',
			image && spacing && 'space-y-4'
		)
	);

	const classes = $derived(
		buildClass({
			classes: [
				'flex w-full flex-col border overflow-hidden',
				reverse && 'flex-col-reverse',
				horizontal && reverse && 'md:flex-row-reverse',
				horizontal && !reverse && 'md:flex-row',
				!image && spacing && !horizontal && 'space-y-4',
				!image && spacing && horizontal && 'space-x-5',
				href && 'hover:bg-frame-50 dark:hover:bg-frame-600',
				size && !image && CardPadding[size],
				size && CardSize[size],
				t.options.card,
				t.options.border,
				rest.class
			],
			rounded,
			shadow
		})
	);

	const imgClasses = $derived(clsxm(horizontal && 'object-cover w-full h-96 md:h-auto md:w-48'));
</script>

<div {...rest} class={classes}>
	{#if image}
		{#if typeof image === 'string'}
			<img src={image} alt={image} />
		{:else}
			{@render image({ classes: imgClasses })}
		{/if}
		<div class={innerDiv}>
			{@render children()}
		</div>
	{:else}
		{@render children()}
	{/if}
</div>
