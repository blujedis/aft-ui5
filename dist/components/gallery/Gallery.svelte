<script module lang="ts">
	import type { ElementProps, KeysOf, KeysOfSource } from '../../types.js';
	import type { Snippet } from 'svelte';

	export interface GalleryProps {
		cols?: KeysOfSource<typeof GalleryCols>;
		gap?: KeysOfSource<typeof GalleryGap>;
		children: Snippet;
	}

	const GalleryCols = {
		unstyled: '',
		none: 'grid-cols-none',
		2: 'grid-cols-1 sm:grid-cols-2',
		3: 'grid-cols-1 sm:grid-cols-3',
		4: 'grid-cols-1 sm:grid-cols-4',
		5: 'grid-cols-1 sm:grid-cols-5',
		6: 'grid-cols-1 sm:grid-cols-6',
		7: 'grid-cols-1 sm:grid-cols-7',
		8: 'grid-cols-1 sm:grid-cols-8',
		9: 'grid-cols-1 sm:grid-cols-9',
		10: 'grid-cols-1 sm:grid-cols-10',
		12: 'grid-cols-1 sm:grid-cols-12'
	};

	const GalleryGap = {
		unstyled: '',
		1: 'gap-1',
		2: 'gap-2',
		4: 'gap-4',
		6: 'gap-6',
		7: 'gap-7',
		8: 'gap-8',
		9: 'gap-9',
		10: 'gap-10',
		12: 'gap-12',
		14: 'gap-14',
		16: 'gap-16',
		20: 'gap-20',
		24: 'gap-24',
		28: 'gap-28',
		32: 'gap-32'
	};
</script>

<script lang="ts">
	import { clsxm } from '../../utils/string.js';

	let { cols, gap = 4, children, ...rest }: GalleryProps & ElementProps<'div'> = $props();

	const classes = $derived(
		clsxm('grid items-start', cols && GalleryCols[cols], gap && GalleryGap[gap], rest.class)
	);

	// ensures gap when wrapped in parent gap
	function init(node: HTMLDivElement) {
		if (getComputedStyle(node).gap === 'normal') node.style.gap = 'inherit';
	}
</script>

<div use:init class={classes}>
	{@render children()}
</div>
