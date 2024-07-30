<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	let color = 'red' as 'red' | 'blue';
	function toggle() {
		if (color === 'red') color = 'blue';
		else color = 'red';
	}
</script>

<main class="px-4 py-6">
	<Button variant="outlined" theme="primary">Click Me</Button>
	<button onclick={toggle}>toggle</button>
</main>
