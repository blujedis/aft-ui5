<script context="module" lang="ts">
	import type { Snippet } from 'svelte';
	import { page } from '$app/stores';
	import type { BreadcrumbItemProps } from './BreadcrumbItem.svelte';
	import type { Size, ThemeColor } from '$lib/theme/types.js';
	import { buildClass, type ConfigProps } from '$lib/theme/build.svelte.js';
	import BreadcrumbItem from './BreadcrumbItem.svelte';

	export interface BreadcrumbProps {
		full?: boolean;
		generate?: boolean;
		rounded?: ConfigProps['rounded'];
		shadow?: ConfigProps['shadow'];
		size?: Size;
		theme?: ThemeColor;
		children?: Snippet;
	}

	function generator(
		route: { id: string | null },
		{ size, theme }: { size?: Size; theme?: ThemeColor }
	) {
		const split = (route?.id || '')
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
				icon: i === 0 ? 'mdi:home' : undefined,
				selected: split.length - 1 === i,
				index: i,
				size,
				sronly: i === 0 ? label : undefined,
				theme
			} as any; // BreadcrumbItemProps;
		});
		return result;
	}
</script>

<script lang="ts">
	let { full, generate, rounded, shadow, size, theme, children }: BreadcrumbProps = $props();

	const navClasses = $derived(
		buildClass({
			classes: []
		})
	);

	const listClasses = $derived(
		buildClass({
			classes: []
		})
	);
</script>

<nav class={navClasses} aria-label="Breadcrumb">
	<ol class={listClasses}>
		{#if !children}
			{#each generator($page.route, { size, theme }) as item}
				<BreadcrumbItem {...item} />
			{/each}
		{:else}
			{@render children()}
		{/if}
	</ol>
</nav>
