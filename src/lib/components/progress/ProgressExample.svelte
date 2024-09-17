<script lang="ts">
	import Links from '$components/Links.svelte';

	const items = [
		['Progress Bar', '/progress-bar'],
		['Progress Circle', '/progress-circle']
	] as [string, string][];
</script>

<Links {items} />
