<script lang="ts">
	import Pager from './Pager.svelte';
	import PagerPage from './PagerPage.svelte';
	import { products } from '../../../data/products.js';
	import { getParam, getUrl, paginator } from '$lib/components/pager/paginator.svelte.js';
	import { page } from '$app/stores';
	import Select from '../select/Select.svelte';
	import SelectOption from '../select/SelectOption.svelte';

	let current = $state(1);

	const { pages, pagesRaw, nextPage, prevPage, totalPages, firstIndex, lastIndex, range } =
		$derived(
			paginator({
				rows: products.length,
				current,
				displayed: 3,
				buttons: 5,
				ellipsis: true
			})
		);

	$effect(() => {
		current = getParam($page.url.searchParams);
	});
</script>

<div class="max-w-screen-md">
	<div class="mb-8 flex-col space-y-4">
		{#each products.filter((p, i) => i >= firstIndex && i <= lastIndex) as product}
			<div class="grid auto-cols-fr grid-cols-[10%_5%_15%_55%_5%] gap-x-4">
				<div class="text-center">
					<img src="https://picsum.photos/seed/picsum/100/100" alt={product.title} width={75} />
				</div>
				<div class="text-center">{product.id}</div>
				<div class="text-left">{product.title}</div>
				<div class="text-left">{product.description}</div>
				<div class="text-right">{product.price}</div>
			</div>
		{/each}
	</div>

	<div class="mb-8">
		<div class="flex justify-between">
			<Select bind:value={current}>
				{#each pagesRaw as pg}
					<SelectOption value={pg}>{pg}</SelectOption>
				{/each}
			</Select>

			<Pager>
				<PagerPage href={getUrl($page.url.href, prevPage)} disabled={current === 1}>
					<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24"
						><path fill="currentColor" d="M10.05 16.94v-4h8.92l.03-2.01h-8.95V6.94l-5 5Z" /></svg
					>
				</PagerPage>
				<PagerPage>{range}</PagerPage>
				<PagerPage href={getUrl($page.url.href, nextPage)} disabled={current === totalPages}>
					<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24"
						><path fill="currentColor" d="M14 16.94v-4H5.08l-.03-2.01H14V6.94l5 5Z" /></svg
					>
				</PagerPage>
			</Pager>
		</div>
	</div>

	<div class="mb-8 flex justify-end">
		<Pager>
			<PagerPage href={getUrl($page.url.href, prevPage)} disabled={current === 1}
				>Previous</PagerPage
			>

			{#each pages as pg}
				<PagerPage href={getUrl($page.url.href, pg)} current={pg === current}>
					{pg}
				</PagerPage>
			{/each}

			<PagerPage href={getUrl($page.url.href, nextPage)} disabled={current === totalPages}>
				Next
			</PagerPage>
		</Pager>
	</div>
</div>
