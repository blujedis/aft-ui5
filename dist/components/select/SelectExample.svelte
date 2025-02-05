<script lang="ts">
	import Select from './Select.svelte';
	import { colors } from '../../theme/globals.js';
	import Label from '../label/Label.svelte';
	import { capitalize } from '../../utils/string.js';
	import SelectOption from './SelectOption.svelte';
</script>

<div class="mb-8">
	<Label>
		<div>Default</div>
		<Select theme="primary">
			<SelectOption placeholder value="">Please Select</SelectOption>
			<SelectOption value="angular">Angular</SelectOption>
			<SelectOption value="react">React</SelectOption>
			<SelectOption value="svelte">Svelte</SelectOption>
			<SelectOption value="vue">Vue</SelectOption>
		</Select>
	</Label>
</div>

<!-- <div class="grid grid-cols-4 gap-8 mb-6">
	{#each colors.filter((c) => c !== 'unstyled') as color}
		<div>
			<Label>
				<div>{capitalize(color)}</div>
				<Select theme={color} value={color + '1'}>
					<option value=""></option>
				</Select>
			</Label>
		</div>
	{/each}
</div> -->
