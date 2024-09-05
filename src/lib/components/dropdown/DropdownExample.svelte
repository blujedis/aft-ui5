<script lang="ts">
	import Dropdown from './Dropdown.svelte';
	import { colors } from '$lib/theme/types.js';
	import Label from '../label/Label.svelte';
	import { capitalize } from '$lib/utils/string.js';
</script>

<div class="mb-8">
	<Label>
		<div>Default</div>
		<Dropdown value="default" />
	</Label>
</div>

<div class="grid grid-cols-4 gap-8 mb-6">
	{#each colors.filter((c) => c !== 'unstyled') as color}
		<div>
			<Label>
				<div>{capitalize(color)}</div>
				<Dropdown theme={color} value={color + '1'} />
			</Label>
		</div>
	{/each}
</div>
