<script lang="ts">
	import Links from '$components/Links.svelte';
	import Button from '../button/Button.svelte';
	import Icon from '../icon/Icon.svelte';
	import Dropdown from './Dropdown.svelte';
	import DropdownFooter from './DropdownFooter.svelte';
	import DropdownGroup from './DropdownGroup.svelte';
	import DropdownHeader from './DropdownHeader.svelte';
	import DropdownItem from './DropdownItem.svelte';

	let group = [] as string[];
	const links = [['Dropdown Input', '/dropdown-input']] as [string, string][];
</script>

<Links items={links} />

<div class="grid grid-cols-4 mb-8 gap-4">
	<div>
		<Button theme="primary">Default Hover</Button>
		<Dropdown event="hover" theme="primary">
			<DropdownItem>Angular</DropdownItem>
			<DropdownItem disabled>React</DropdownItem>
			<DropdownItem>SolidJS</DropdownItem>
			<DropdownItem>Svelte</DropdownItem>
			<DropdownItem>Vue</DropdownItem>
		</Dropdown>
	</div>

	<div>
		<Button theme="primary">Header Footer</Button>
		<Dropdown event="focus" theme="primary">
			{#snippet header()}
				<DropdownHeader>Languages</DropdownHeader>
			{/snippet}
			<DropdownItem>Angular</DropdownItem>
			<DropdownItem>React</DropdownItem>
			<DropdownItem>SolidJS</DropdownItem>
			<DropdownItem>Svelte</DropdownItem>
			<DropdownItem>Vue</DropdownItem>
			{#snippet footer()}
				<DropdownFooter>More info</DropdownFooter>
			{/snippet}
		</Dropdown>
	</div>

	<div>
		<DropdownGroup bind:group>
			<Button theme="primary">Multi Level</Button>
			<Dropdown id="one" event="focus" theme="primary">
				<DropdownItem>Angular</DropdownItem>
				<DropdownItem>React</DropdownItem>
				<DropdownItem>SolidJS</DropdownItem>
				<DropdownItem>
					<div>Svelte</div>
					<Icon icon="mdi:chevron-right" rotate={group.includes('two') ? 90 : 0} class="-mb-0.5" />
				</DropdownItem>
				<Dropdown id="two" event="focus" placement="right-start">
					<DropdownItem>Item one</DropdownItem>
					<DropdownItem>Item two</DropdownItem>
					<Dropdown id="three" event="focus" placement="right-start">
						<DropdownItem>Level two one</DropdownItem>
						<DropdownItem disabled>Level two two</DropdownItem>
					</Dropdown>
				</Dropdown>
				<DropdownItem>Vue</DropdownItem>
			</Dropdown>
		</DropdownGroup>
	</div>
</div>
