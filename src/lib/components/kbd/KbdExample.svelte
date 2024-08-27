<script lang="ts">
	import VariantList from '$components/VariantList.svelte';
	import Kbd, { badgeVariants as variants } from './Kbd.svelte';
</script>

<div class="mb-8 grid grid-cols-3 gap-4">
	<Kbd>ctrl + k</Kbd>
	<Kbd variant="soft">cmd + s</Kbd>
	<Kbd variant="outlined">esc + ~</Kbd>
</div>

<VariantList component={Kbd} {variants} label props={{ size: 'md' }} />
