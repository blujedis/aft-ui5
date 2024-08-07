---
title: Example
description: Example post.
date: '2024/5/16'
categories:
  - component
  - button
published: true
---

<script>
  import ButtonExample from './ButtonExample.svelte';
</script>

### Component

Button component example.

<ButtonExample />

### Implementation

How to implement the Button component.

```svelte
<script lang="ts">
	let count = $state(0)
</script>

<button onclick={() => count++}>
	{count}
</button>
```

### Images

Media inside the **static** folder is served from `/`.

![Svelte](favicon.png)