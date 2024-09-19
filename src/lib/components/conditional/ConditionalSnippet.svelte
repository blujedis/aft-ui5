<script module lang="ts">
	import type { Snippet } from 'svelte';

	export interface ConditionalSnippetProps {
		user?: Snippet;
		children?: Snippet;
	}
</script>

<script lang="ts">
	let { user, children }: ConditionalSnippetProps = $props();
</script>

{#if user}
	{@render user()}
{:else if children}
	{@render children()}
{/if}
