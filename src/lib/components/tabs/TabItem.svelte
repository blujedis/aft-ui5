<script module lang="ts">
	import type { Snippet } from 'svelte';

	export interface TabItemProps {
		children: Snippet;
	}
</script>

<script lang="ts">
	let { children }: TabItemProps = $props();
</script>

<li>
	{@render children()}
</li>
