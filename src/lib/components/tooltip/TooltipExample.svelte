<script lang="ts">
	import Button from '../button/Button.svelte';
	import Tooltip from './Tooltip.svelte';
</script>

<div class="mb-8">
	<Button theme="primary">Hover Me</Button>
	<Tooltip  variant="filled" rounded="md" event="click">Primary tooltip</Tooltip>

	<!-- <Button theme="secondary">Hover Me</Button>
	<Tooltip escapable>Secondary tooltip.</Tooltip> -->
</div>
