<script lang="ts">
	import Button from '../button/Button.svelte';
	import Image from '../image/Image.svelte';
	import Popover from './Popover.svelte';
</script>

<div class="mb-8">
	<p class="font-medium mb-4">Close Button Example</p>
	<Button theme="primary">Click Me</Button>
	<Popover rounded="md" class="max-w-44">
		{#snippet children({ close })}
			<div>Example content with Close Button</div>
			<button
				onclick={() => close()}
				class="mt-3 bg-danger-500 text-danger-200 px-3 py-1 rounded-md">Close</button
			>
		{/snippet}
	</Popover>
</div>

<div class="mb-8">
	<p class="font-medium mb-4">Remote Trigger Example</p>
	<p class="text-frame-500">
		After a sluggish start, the Dolphins put together a shutout in the second half and mount a
		fourth-quarter comeback to beat Jacksonville. We'll cover the entire game with all the key
		moments, break those down, give you five takeaways and hear from Mike McDaniel, Tua Tagovailoa
		and <Button id="tyreek-hill" variant="text" theme="primary" class="text-base"
			>Tyreek Hill</Button
		>.
	</p>
	<Popover
		trigger="#tyreek-hill"
		rounded="lg"
		class="w-32 h-32"
		placement="right"
		title="Tyreek Hill"
		unpadded
	>
		<div class="flex shrink-0 max-h-24 overflow-hidden">
			<Image src="/img/thill.png" class="rounded-b-lg" />
		</div>
	</Popover>
</div>
