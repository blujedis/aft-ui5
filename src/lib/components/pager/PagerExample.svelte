<script lang="ts">
	import Pager from './Pager.svelte';
	import PagerPage from './PagerPage.svelte';
	import { products, type Product } from '../../../data/products.js';
	import { getParam, getUrl, paginator } from '$lib/hooks/paginator.js';
	import { page } from '$app/stores';

	const {
		current,
		pages,
		nextPage,
		prevPage,
		totalPages,
		firstIndex,
		lastIndex
	} = $derived.by(() =>
		paginator({
			items: products.length,
			current: getParam($page.url.searchParams),
			size: 5,
			buttons: 4,
			ellipsis: true
		})
	);
</script>

<div class="mb-8 flex-col space-y-4 max-w-screen-md">
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
	<Pager>
		<PagerPage href={getUrl($page.url.href, prevPage)} disabled={current === 1}>Previous</PagerPage>
		{#each pages as pg}
			<PagerPage href={getUrl($page.url.href, pg)} current={pg === current}>{pg}</PagerPage>
		{/each}
		<PagerPage href={getUrl($page.url.href, nextPage)} disabled={current === totalPages}>Next</PagerPage
		>
	</Pager>
</div>

<div class="mb-8">
	<Pager {current} {pages} {totalPages} {prevPage} {nextPage} previous next />
</div>
