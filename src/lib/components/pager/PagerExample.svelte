<script lang="ts">
	import Pager from './Pager.svelte';
	import PagerPage from './PagerPage.svelte';
	import { products } from '../../../data/products.js';
	import { type Paginator } from '$lib/hooks/paginator.js';

	let pager = $state() as Paginator;
	let items = $state(products.length);

	// let current = parseInt($page.url.searchParams.get('page') || '1');
	// let size = 3;
	// let shown = 5;
	// let current = $state($page.url.searchParams.get('page')) as string | number;

	// const pager = $derived.by(() => {
	// 	return paginator({
	// 		items: products?.length, // can be count or array
	// 		current,
	// 		buttons: shown,
	// 		count: size,
	// 		ellipsis: true
	// 	});
	// });

	// function getUrl(value: string | number) {
	// 	const params = $page.url.searchParams;
	// 	params.set('page', value + '');
	// 	return `?${params.toString()}`;
	// }
</script>

<div class="mb-8">
	<div class="mb-4 font-medium text-sm">Default Example</div>
	<Pager bind:items bind:pager>
		<PagerPage previous>Previous</PagerPage>
		{#each pager?.displayed || [] as value}
			<PagerPage {value}>
				{value}
			</PagerPage>
		{/each}
		<PagerPage next>Next</PagerPage>
	</Pager>
</div>

<!-- <div class="mb-8">
	<div class="mb-4 font-medium text-sm">Button Example</div>
	<Pager>
		<PagerPage previous onclick={() => (current = pager.previous)} disabled={current == 1}
			>Previous</PagerPage
		>
		{#each pager.displayed as value}
			<PagerPage current={pager.current === value} onclick={() => (current = value)}
				>{value}</PagerPage
			>
		{/each}
		<PagerPage next onclick={() => (current = pager.next)} disabled={current == pager.lastPage}
			>Next</PagerPage
		>
	</Pager>
</div> -->

<!-- <div class="mb-8">
	<div class="mb-4 font-medium text-sm">Anchor Example</div>
	<Pager>
		<PagerPage previous href={getUrl(pager.previous)} target="_blank">Previous</PagerPage>
		{#each pager.displayed as value}
			<PagerPage current={pager.current === value} href={getUrl(value)} target="_blank">
				{value}
			</PagerPage>
		{/each}
		<PagerPage next href={getUrl(pager.next)} target="_blank">Next</PagerPage>
	</Pager>
</div> -->

Collared shirts or mock turtleneck shirts. Slacks or bermuda length shorts are permitted.

Collared golf shirts with or without sleeves. Slacks or bermuda length shorts, skorts and skirts are permitted.

Jeans, athletic clothing, swimwear t-shirts or tank tops are NOT permitted.

<p>Phone: 760.345.2791</p>