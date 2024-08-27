<script lang="ts">
	import { colors } from '$lib/theme/types.js';
	import Divider from './Divider.svelte';
</script>

<div class="max-w-lg mb-8">
	<Divider>options</Divider>
</div>

<div class="max-w-lg mb-8 h-40">
	<Divider vertical>options</Divider>
</div>

{#each colors.filter((c) => c !== 'unstyled') as color}
	<div class="max-w-lg mb-2">
		<Divider theme={color}>options</Divider>
	</div>
{/each}

<div class="grid grid-cols-4 gap-4">
	{#each colors.filter((c) => c !== 'unstyled') as color}
		<div class="h-40">
			<Divider theme={color} vertical>options</Divider>
		</div>
	{/each}
</div>
