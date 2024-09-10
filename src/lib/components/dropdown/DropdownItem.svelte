<script context='module' lang='ts'>
	import { type ElementProps, type HTMLTag } from '$lib/types.js';
	import { clsxm } from '$lib/utils/string.js';
  import type { Snippet } from 'svelte';
 
  export interface DropdownItemProps<Tag extends HTMLTag> {
    as?: Tag;
    children: Snippet;
  }

  const DropdownItemSize = {
		unstyled: '',
		xs: 'px-2 py-1',
		sm: 'px-2 py-1',
		md: 'px-2 py-1',
		lg: 'px-2 py-1',
		xl: 'px-2 py-1',
		xl2: 'px-2 py-1'
  };
</script>


<script lang='ts' generics="Tag extends HTMLTag = 'div'">
  let { 
    as = 'div' as Tag, 
    children,
    ...rest
  }: DropdownItemProps<Tag> & ElementProps<Tag> = $props();

	const classes = $derived(
		clsxm(
			'dropdown-item',
		)
	);

</script>
 
<svelte:element {...rest} this={as} class={classes}>
  {@render children()}
</svelte:element>