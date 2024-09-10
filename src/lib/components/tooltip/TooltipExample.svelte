<script lang="ts">
	import Button from '../button/Button.svelte';
	import Tooltip from './Tooltip.svelte';
</script>

<div class="mb-8">
	<Button theme="primary">Hover Me</Button>
	<Tooltip variant="filled" rounded="full">Primary tooltip.</Tooltip>

	<!-- <Button theme="secondary">Hover Me</Button>
	<Tooltip escapable>Secondary tooltip.</Tooltip> -->
</div>
