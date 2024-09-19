<script context="module" lang="ts">
	import type { Snippet } from 'svelte';
	import type { BreadcrumbItemProps } from './BreadcrumbItem.svelte';
	import type { Size, ThemeColor, RoundedSize, ShadowSize } from '$lib/theme/types.js';
	import BreadcrumbItem from './BreadcrumbItem.svelte';

	export interface BreadcrumbProps {
		full?: boolean;
		generate?: boolean;
		rounded?: RoundedSize | false;
		shadow?: ShadowSize | false;
		size?: Size;
		theme?: ThemeColor;
		children?: Snippet;
	}

	const BreadcrumbSpacings = {
		unstyled: '',
		xs: 'space-x-1',
		sm: 'space-x-2',
		md: 'space-x-2',
		lg: 'space-x-2',
		xl: 'space-x-2',
		xl2: 'space-x-2'
	};

	function generator(route: string, { size, theme }: { size?: Size; theme?: ThemeColor }) {
		const split = route
			.slice(1)
			.split('/')
			.filter((v) => v !== '');
		if (!split.length) return [] as BreadcrumbItemProps[];
		const segments = [] as string[];
		const result = split.map((s, i) => {
			s = s.replace(/\(.+\)$/, ''); // convert /(app) to /
			segments.push(s);
			const label = s.charAt(0).toUpperCase() + s.slice(1);
			const href = [...segments].join('/');
			return {
				label,
				href: href.startsWith('/') ? href : '/' + href,
				selected: split.length - 1 === i,
				size,
				sronly: i === 0 ? label : undefined,
				theme
			} as BreadcrumbItemProps;
		});

		return [{ icon: 'mdi:home', home: true, size, theme, sronly: 'Home', href: '/' }, ...result];
	}
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import { buildClass } from '$lib/theme/build.svelte.js';

	let {
		full,
		generate,
		rounded,
		shadow,
		size = 'md',
		theme = $bindable(),
		children
	}: BreadcrumbProps = $props();

	const navClasses = $derived(
		buildClass({
			prepend: [`breadcrumb breadcrumb-${theme}`],
			classes: ['flex items-center'],
			full,
			rounded,
			shadow
		})
	);

	const listClasses = $derived(
		buildClass({
			classes: ['inline-flex items-center', size && BreadcrumbSpacings[size]]
		})
	);
</script>

<nav class={navClasses} aria-label="Breadcrumb">
	<ol role="list" class={listClasses}>
		{#if generate}
			{#each generator($page.url.pathname, { size, theme }) as item}
				<BreadcrumbItem {...item} focusType="visible" focusTheme={theme || 'unstyled'} />
			{/each}
		{:else if children}
			{@render children()}
		{/if}
	</ol>
</nav>
