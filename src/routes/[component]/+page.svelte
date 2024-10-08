<script lang="ts">
	let { data } = $props();
</script>

<!-- svelte-ignore svelte_component_deprecated -->
<svelte:component this={data.content} />
