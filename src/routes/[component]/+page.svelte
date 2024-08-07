<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>{data?.meta?.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data?.meta?.title} />
</svelte:head>

<article>
	<hgroup>
		<h1 class="text-4xl font-medium">{data?.meta?.title}</h1>
		<p class="text-gray-400">Updated: {data?.meta?.date}</p>
	</hgroup>

	<div class="prose mt-8">
		<svelte:component this={data.content} />
	</div>
</article>
