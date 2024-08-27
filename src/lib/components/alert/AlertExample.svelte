<script lang="ts">
	import Alert from './Alert.svelte';
	let visible = $state(true);
</script>

<button onclick={() => (visible = true)}>Show Alert</button>
<Alert bind:visible icon theme="danger" transition="zoom">Whoops! that didn't work...</Alert>

<Alert bind:visible icon transition="zoom">Whoops! that didn't work...</Alert>
