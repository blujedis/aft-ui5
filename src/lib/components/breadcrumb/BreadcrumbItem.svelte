<script context="module" lang="ts">
	import type { Size, ThemeColor } from '$lib/theme/types.js';
	import type { Snippet } from 'svelte';
	import type { IconifyIcon } from '@iconify/svelte';
	import type { ElementProps } from '$lib/types.js';
	import Icon from '../icon/Icon.svelte';

	export interface BreadcrumbItemProps {
		readonly index?: number; // only used when generated from Breadcrumb parent.
		label?: string;
		href?: string;
		icon?: string | IconifyIcon;
		sronly?: string; // when present no label is used.
		selected?: boolean;
		separator?: string | IconifyIcon;
		size?: Size;
		theme?: ThemeColor;
		children: Snippet;
	}
</script>

<script lang="ts">
	let { 
		href,
		icon,
		index,
		label,
		selected,
		separator,
		size,
		sronly,
		theme,
		children,
		...rest
	}: BreadcrumbItemProps & ElementProps<'a'> = $props();
</script>

<li>
	<div class="">
			{#if separator && index !== 0}
				{#if variant !== 'text'}
					<svg
						class:invisible={!mounted}
						class=""
						viewBox="0 0 24 44"
						preserveAspectRatio="none"
						fill="currentColor"
						aria-hidden="true"
					>
						<path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
					</svg>
				{:else}
					<Icon icon={separator} class="flex-shrink-0 pointer-events-none" />
				{/if}
			{/if}
			<a
				{...rest}
				role="tab"
				aria-current={selected ? 'location' : null}
				aria-selected={selected}
				{href}
				class=""
			>
				{#if icon}
					<Icon {icon} class="flex-shrink-0 pointer-events-none" />
				{/if}

				{#if sronly}
					<span class="sr-only">{sronly}</span>
				{:else}
					{label}
				{/if}
				
			</a>
	</div>
</li>

<!-- <div>
	{@render children()}
</div> -->
