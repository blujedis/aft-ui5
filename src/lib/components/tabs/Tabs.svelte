<script module lang='ts'>
  import type { Snippet } from 'svelte';
 
  export interface TabsProps {
    children: Snippet;
  }
</script>
<script lang='ts'>
  let { children }: TabsProps = $props();
</script>
 
<div>
  {@render children()}
</div>