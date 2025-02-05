<script lang="ts">
	import Modal from './Modal.svelte';
	import Button from '../button/Button.svelte';
	import { type ConfigProps } from '../../theme/build.svelte.js';
	import type { ThemeColor } from '../../theme/types.js';
	import type { TransitionParams } from '../../utils/transitioner.js';

	const props = {
		abortable: true,
		backdrop: true,
		escapable: true,
		rounded: 'sm' as ConfigProps['rounded'],
		shadow: 'xl' as ConfigProps['shadow'],
		transition: 'zoom' as TransitionParams
	};

	let visible = false;
</script>

<Button
	onclick={() => {
		visible = !visible;
	}}>Show/Hide Modal</Button
>

<Modal bind:visible {...props}>
	<div class="p-4 text-dark">Just a modal</div>
</Modal>
