<script lang="ts">
	import Radio from './Radio.svelte';
	import { colors } from '$lib/theme/globals.js';
	import Label from '../label/Label.svelte';
	import { capitalize } from '$lib/utils/string.js';
	let group = 'svelte';
</script>

<div class="mb-8">
	<div class="max-w-28 mb-4">
		<Label inline justify="between">
			<span>React</span>
			<Radio bind:group value="react" />
		</Label>
		<Label inline justify="between">
			<span>Angular</span>
			<Radio bind:group value="angular" />
		</Label>
		<Label inline justify="between">
			<span>Svelte</span>
			<Radio bind:group value="svelte" />
		</Label>
		<Label inline justify="between">
			<span>Solid</span>
			<Radio bind:group value="solid" />
		</Label>
	</div>

	<div class="text-sm text-frame-500">
		Selected: {group}
	</div>
</div>

<div class="grid grid-cols-6 gap-8 mb-6">
	{#each colors.filter((c) => c !== 'unstyled') as color}
		<div>
			<Label inline>
				<div>{capitalize(color)}</div>
				<Radio theme={color} value={color + '1'} />
			</Label>
		</div>
	{/each}
</div>
