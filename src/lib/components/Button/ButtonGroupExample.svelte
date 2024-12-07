<script lang="ts">
	import { colors } from '$lib/theme/globals.js';
	import { capitalize } from '$lib/utils/string.js';
	import Button from './Button.svelte';
	import ButtonGroup from './ButtonGroup.svelte';

	let _selected = ['svelte'];

	const variants = ['unstyled', 'filled', 'soft', 'outlined', 'ghost', 'text'];
</script>

<div class="mb-4">
	<ButtonGroup bind:selected={_selected} multiple>
		{#snippet children(props)}
			<Button {...props} value="react" selected={_selected.includes('react')}>React</Button>
			<Button {...props} value="python" selected={_selected.includes('python')}>Python</Button>
			<Button {...props} value="svelte" selected={_selected.includes('svelte')}>Svelte</Button>
		{/snippet}
	</ButtonGroup>
</div>

<div class="mb-4">
	<ButtonGroup bind:selected={_selected} variant="soft" multiple>
		{#snippet children(props)}
			<Button {...props} value="react" selected={_selected.includes('react')}>React</Button>
			<Button {...props} value="python" selected={_selected.includes('python')}>Python</Button>
			<Button {...props} value="svelte" selected={_selected.includes('svelte')}>Svelte</Button>
		{/snippet}
	</ButtonGroup>
</div>

<div class="mb-4">
	<ButtonGroup bind:selected={_selected} variant="outlined" multiple>
		{#snippet children(props)}
			<Button {...props} value="react" selected={_selected.includes('react')}>React</Button>
			<Button {...props} value="python" selected={_selected.includes('python')}>Python</Button>
			<Button {...props} value="svelte" selected={_selected.includes('svelte')}>Svelte</Button>
		{/snippet}
	</ButtonGroup>
</div>

{#each variants.filter((v) => typeof v !== 'undefined' && !['unstyled', 'ghost'].includes(v)) as v}
	{#if (v as any) !== 'default'}
		<div class="font-semibold mb-3 text-sm">{capitalize(v as string)}</div>
	{/if}
	<div class="grid grid-cols-4 gap-2 mb-8">
		{#each colors.filter((c) => c !== 'unstyled') as theme}
			<ButtonGroup bind:selected={_selected} variant={v as any} {theme} multiple>
				{#snippet children(props)}
					<Button {...props} value="react" selected={_selected.includes('react')}>React</Button>
					<Button {...props} value="python" selected={_selected.includes('python')}>Python</Button>
					<Button {...props} value="svelte" selected={_selected.includes('svelte')}>Svelte</Button>
				{/snippet}
			</ButtonGroup>
		{/each}
	</div>
{/each}
