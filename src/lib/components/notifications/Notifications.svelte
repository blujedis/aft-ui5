<script context='module' lang='ts'>
  import type { Snippet } from 'svelte';
 
  export interface NotificationsProps {
    children: Snippet;
  }
</script>
<script lang='ts'>
  let { children }: NotificationsProps = $props();
</script>
 
<div>
  {@render children()}
</div>