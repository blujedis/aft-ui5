<script lang="ts">
	import Disclosure from './Disclosure.svelte';
	import DisclosurePanel from './DisclosurePanel.svelte';
	import DisclosureButton from './DisclosureButton.svelte';
	import Button from '../button/Button.svelte';
	let visible = false;
</script>

<!-- <Disclosure bind:visible transition="expand">
	{#snippet children({ open, close, toggle })}
		<DisclosureButton>Disclosure Button</DisclosureButton>
	<Button variant="ghost" theme="primary" onclick={toggle}>Themed Button</Button> 
		<DisclosurePanel class="mt-4 p-4 ring-1 ring-frame-500">Disclosure content.</DisclosurePanel>
	{/snippet}
</Disclosure> -->

<Disclosure bind:visible transition="expand">
	<DisclosureButton>Show Disclosure</DisclosureButton>
	<DisclosurePanel
		class="mt-4 p-4 ring-1 ring-frame-300 dark:ring-frame-700 absolute bg-white dark:bg-frame-700 dark:text-white"
		>Disclosure content.</DisclosurePanel
	>
</Disclosure>

<p class="py-8">Just some text.</p>
