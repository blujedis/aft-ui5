<script lang="ts">
	import type { Snippet } from 'svelte';

	let { items = [] as [string, string][], children = undefined as Snippet | undefined } = $props();

	const classes = 'block text-sm text-primary-500 hover:text-primary-500/75 px-4 first:pl-0';
</script>

<div class="flex items-center flex-wrap mb-8 divide-x divide-frame-300 dark:divide-frame-600">
	{#each items as [label, href]}
		<a {href} class={classes}>{label}</a>
	{/each}
</div>

{#if children}
	{@render children()}
{/if}
