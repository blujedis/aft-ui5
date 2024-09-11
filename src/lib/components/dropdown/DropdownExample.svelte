<script lang="ts">
	import Button from '../button/Button.svelte';
	import Divider from '../divider/Divider.svelte';
	import Icon from '../icon/Icon.svelte';
	import Dropdown from './Dropdown.svelte';
	import DropdownItem from './DropdownItem.svelte';
</script>

<div class="mb-8">
	<p class="font-medium mb-4">Default Example</p>
	<Button theme="primary">Choose Language</Button>
	<Dropdown theme="primary">
		<DropdownItem>Angular</DropdownItem>
		<Divider />
		<DropdownItem>React</DropdownItem>
		<DropdownItem selected>SolidJS</DropdownItem>
		<DropdownItem>Svelte</DropdownItem>
		<DropdownItem>Vue</DropdownItem>
	</Dropdown>
</div>

<div class="mb-8">
	<p class="font-medium mb-4">Header/Footer Example</p>
	<Button theme="primary">Choose Language</Button>
	<Dropdown theme="primary" rounded="lg">
		{#snippet header()}
			<div>Choose your Language</div>
		{/snippet}
		<DropdownItem>Angular</DropdownItem>
		<DropdownItem>React</DropdownItem>
		<DropdownItem selected>SolidJS</DropdownItem>
		<DropdownItem>
			<div>Svelte</div>
			<Icon icon="mdi:chevron-right" roticon="90" class="text-inherit" active={focus} />
		</DropdownItem>
		<Dropdown placement="right-start" rounded="lg" class="min-w-24">
			<DropdownItem>Item one</DropdownItem>
			<DropdownItem>Item two</DropdownItem>
		</Dropdown>
		<DropdownItem>Vue</DropdownItem>
		{#snippet footer()}
			<div>Choose your Language</div>
		{/snippet}
	</Dropdown>
</div>
