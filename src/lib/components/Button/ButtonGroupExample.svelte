<script lang="ts">
	import Button, { buttonVariants as variants } from './Button.svelte';
	import ButtonGroup from './ButtonGroup.svelte';
</script>

<ButtonGroup selected={['svelte']} multiple>
	{#snippet children(props, selected)}
		<Button {...props} value="react" selected={selected.includes('react')}>React</Button>
		<Button {...props} value="python" selected={selected.includes('python')}>Python</Button>
		<Button {...props} value="svelte" selected={selected.includes('svelte')}>Svelte</Button>
	{/snippet}
</ButtonGroup>
