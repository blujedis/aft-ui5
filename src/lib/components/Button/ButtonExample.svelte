<script lang="ts">
	import { capitalize } from '$lib/utils/string.js';
	import Button, { type ButtonProps } from './Button.svelte';
	import { colors } from '$lib/theme/globals.js';
	let selected = true;
	const variants = [
		'unstyled',
		'filled',
		'soft',
		'outlined',
		'ghost',
		'text'
	] as ButtonProps<any>['variant'][];
</script>

<div class="mb-4">
	<Button>Default</Button>
	<Button variant="soft">Default Soft</Button>
	<Button variant="outlined">Default Outlined</Button>
	<Button variant="ghost">Default Ghost</Button>
	<Button variant="text">Default Text</Button>
</div>

{#each variants as v}
	{#if v && v !== 'unstyled'}
		<div class="font-semibold mb-4 text-sm">{capitalize(v)}</div>
		<div class="flex flex-wrap -mt-2 -mr-2 items-center space-x-4 mb-8 w-full">
			{#each colors.filter((c) => !['unstyled'].includes(c)) as c}
				<Button variant={v} theme={c}>{capitalize(c)}</Button>
			{/each}
		</div>
	{/if}
{/each}
