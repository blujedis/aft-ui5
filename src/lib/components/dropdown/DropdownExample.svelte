<script lang="ts">
	import Button from '../button/Button.svelte';
	import Divider from '../divider/Divider.svelte';
	import Icon from '../icon/Icon.svelte';
	import Dropdown from './Dropdown.svelte';
	import DropdownFooter from './DropdownFooter.svelte';
	import DropdownHeader from './DropdownHeader.svelte';
	import DropdownItem from './DropdownItem.svelte';

	let visible = false;
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
	<Dropdown theme="primary" class="min-w-28">
		{#snippet header()}
			<DropdownHeader>Header</DropdownHeader>
		{/snippet}
		<DropdownItem>Angular</DropdownItem>
		<DropdownItem>React</DropdownItem>
		<DropdownItem selected>SolidJS</DropdownItem>

		<DropdownItem>
			<div>Svelte</div>
			<Icon icon="mdi:chevron-right" rotate={visible ? 90 : 0} class="-mb-0.5" />
		</DropdownItem>
		<Dropdown bind:visible placement="right-start" class="min-w-28">
			<DropdownItem>Item one</DropdownItem>
			<Dropdown placement="right-start" class="min-w-28">
				<DropdownItem>Level two one</DropdownItem>
				<DropdownItem disabled>Level two two</DropdownItem>
			</Dropdown>

			<DropdownItem>Item two</DropdownItem>
		</Dropdown>

		<DropdownItem>Vue</DropdownItem>
		{#snippet footer()}
			<DropdownFooter>Footer</DropdownFooter>
		{/snippet}
	</Dropdown>
</div>
