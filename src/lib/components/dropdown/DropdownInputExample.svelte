<script lang="ts">
	import DropdownInput from './DropdownInput.svelte';
	import Dropdown from './Dropdown.svelte';
	import { products, type Product } from '../../../data/products.js';
	import DropdownItem from './DropdownItem.svelte';
	import Button from '../button/Button.svelte';
	import Links from '$components/Links.svelte';
	import type { DropdownInputItem } from './DropdownInput.svelte';

	type Item = Product | DropdownInputItem;

	let value = $state(3); // [3, 8]
	let query = $state('');
	let items = $state(products as Item[]);
	// let filtered = $derived.by(() => {
	// 	if (!query) return items;
	// 	return items.filter((item) => {
	// 		return item.title.toLowerCase().startsWith(query);
	// 	});
	// });

	function isSelected(product: any) {
		if (Array.isArray(value)) return value.some((v) => product.id == v);
		return value == product.id;
	}

	function handleSubmit(
		e: SubmitEvent & {
			currentTarget: EventTarget & HTMLFormElement;
		}
	) {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);
		const data = [...formData.values()];
		console.log(data);
	}

	const links = [['Dropdown', '/dropdown']] as [string, string][];
</script>

<Links items={links} />

<div class="flex mb-8">
	<form onsubmit={handleSubmit} class="w-full">
		<div class="mb-8">
			<input type="text" class="form-input" />
		</div>
		<DropdownInput
			bind:value
			bind:query
			bind:items
			name="product"
			labelKey="title"
			theme="danger"
			clearable
			filterable
			creatable
		>
			<Dropdown event="none">
				{#if !items.length}
					<div class="px-4 py-2 text-frame-500">No items...</div>
				{:else}
					{#each items as product}
						<DropdownItem value={product.id} selected={isSelected(product)}
							>{product.title}</DropdownItem
						>
					{/each}
				{/if}
			</Dropdown>
		</DropdownInput>

		<div class="mt-8">
			<Button>Submit</Button>
		</div>
	</form>
</div>
