<script lang="ts">
	import { type Snippet } from 'svelte';
	let { color = 'red', children }: { color: 'red' | 'blue'; children: Snippet } = $props();
</script>

<button
	class:bg-rose-600={color === 'red'}
	class:bg-blue-600={color === 'blue'}
	class="text-white px-3 py-1.5"
>
	{@render children()}
</button>
