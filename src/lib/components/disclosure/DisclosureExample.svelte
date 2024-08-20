<script lang="ts">
	import Disclosure from './Disclosure.svelte';
	import DisclosurePanel from './DisclosurePanel.svelte';
	import DisclosureButton from './DisclosureButton.svelte';
	import Button from '../button/Button.svelte';
	let visible = false;
</script>

<Disclosure bind:visible transition="expand">
	{#snippet children({ open, close, toggle })}
		<DisclosureButton>Disclosure Button</DisclosureButton>
		<Button variant="ghost" theme="primary" onclick={toggle}>Themed Button</Button>
		<DisclosurePanel class="mt-4 p-4 ring-1 ring-frame-500">Disclosure content.</DisclosurePanel>
	{/snippet}
</Disclosure>
