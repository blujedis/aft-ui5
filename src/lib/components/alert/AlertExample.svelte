<script lang="ts">
	import Alert from './Alert.svelte';
	let visible = $state(true);
</script>

<button onclick={() => (visible = true)}>Show Alert</button>
<Alert bind:visible theme="danger" icon>Whoops! that didn't work...</Alert>
