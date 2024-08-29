<script lang="ts">
	import Select from './Select.svelte';
	import { colors } from '$lib/theme/types.js';
	import Label from '../label/Label.svelte';
	import { capitalize } from '$lib/utils/string.js';
</script>

<div class="mb-8">
	<Label>
		<div>Default</div>
		<Select>
			<option></option>
		</Select>
	</Label>
</div>

<div class="grid grid-cols-4 gap-8 mb-6">
	{#each colors.filter((c) => c !== 'unstyled') as color}
		<div>
			<Label>
				<div>{capitalize(color)}</div>
				<Select theme={color} value={color + '1'}>
					<option></option>
				</Select>
			</Label>
		</div>
	{/each}
</div>
