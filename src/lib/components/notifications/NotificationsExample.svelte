<script lang="ts">
	import Notifications from './Notifications.svelte';
	import { getNotifier } from '$lib/components/notifications/notifications.svelte.js';
	import Button from '../button/Button.svelte';

	const notifier = getNotifier();
	let counter = 1;
	function addNotification() {
		notifier.add({
			title: 'My Title',
			content: '(' + counter + ') A notification message.',
			theme: 'danger'
		});
		counter += 1;
	}
</script>

<Button onclick={addNotification}>Add Notification</Button>

<Notifications />
