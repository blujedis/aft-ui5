<script lang="ts">
	import ButtonExample from '$lib/components/Button/ButtonExample.svelte';
</script>

<a href="/Button">View Button</a>

<!-- <div class="flex space-x-2">
	{#each colors as color}
		<button onclick={() => changeTheme(color)}>{color}</button>
	{/each}
</div>
<div class="my-4">
	<button
		class="bg-frame-100 text-sm px-4 py-1.5 shadow-sm hover:bg-frame-200/70 transition-all"
		onclick={() => (active = !active)}>Toggle Element</button
	>
</div> -->

<ButtonExample />
