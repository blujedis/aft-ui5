<script lang="ts">
	import Drawer from './Drawer.svelte';
	import Placeholder from './Placeholder.svelte';
	import Button from '../button/Button.svelte';

	let visible = false;
	function handleOpen() {
		visible = true;
	}
</script>

<Drawer bind:visible>
	{#snippet children({ close })}
		<Placeholder {close} />
	{/snippet}
</Drawer>

<Button onclick={handleOpen}>Show Drawer</Button>
