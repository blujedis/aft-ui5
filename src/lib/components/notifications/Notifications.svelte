<script module lang="ts">
	import { setContext, type Snippet } from 'svelte';
	import type {
		NotificationApi,
		NotificationInternalProps,
		NotificationOptions,
		NotificationPosition
	} from '$lib/hooks/notifications.svelte.js';
	import { clsxm } from '$lib/utils/string.js';
	import { flip } from 'svelte/animate';
	import { fly, scale } from 'svelte/transition';

	export type NotificationsProps = {
		group?: string;
		transition?: 'reveal' | 'zoom';
		children?: Snippet<[NotificationInternalProps, NotificationApi]>;
	} & Omit<NotificationOptions, 'group'>;

	export const notificationsPosition = {
		'bottom-right': { x: 400, y: 0 },
		'top-right': { x: 400, y: 0 },
		'bottom-left': { x: -400, y: 0 },
		'top-left': { x: -400, y: 0 },
		bottom: { x: 0, y: 0 },
		top: { x: 0, y: 0 }
	} as Record<NotificationPosition, { x: number; y: number }>;
</script>

<script lang="ts">
	import { initNotifier } from '$lib/hooks/notifications.svelte.js';
	import Alert from '../alert/Alert.svelte';

	let {
		group = 'default',
		position = 'top-right',
		transition = 'zoom',
		children,
		...rest
	}: NotificationsProps = $props();

	const notifier = initNotifier({ group, position, ...rest });
	const items = $derived(notifier.getItems());
	const delay = $derived(items.length <= 1 ? 0 : 150);

	setContext('Notifications', notifier);

	const containerClasses = $derived(
		clsxm(
			'fixed inset-0 p-6 sm:p-4 pointer-events-none',
			position.startsWith('top') && 'sm:items-start items-start',
			position.startsWith('bottom') && 'sm:items-end items-end'
		)
	);
	const listClasses = $derived(
		clsxm(
			'notifications flex w-full flex-col space-y-2 items-center sm:items-end space-y-3',
			['top-left', 'bottom-left', 'left'].includes(position) && 'sm:items-start',
			['top', 'bottom'].includes(position) && 'sm:items-center'
		)
	);
</script>

{#snippet notification(item: NotificationInternalProps)}
	{#if children}
		{@render children(item, notifier)}
	{:else}
		<Alert
			theme={item.theme}
			key={item.key}
			visible={true}
			escapable={false}
			removable={item.dismissible}
			size="sm"
			class={`notification notification-${item.theme} pointer-events-auto`}
		>
			{#if item.title}
				<div class="font-medium text-md mb-px">{item.title}</div>
				<div class="text-frame-400">{@html item.content}</div>
			{:else}
				<div class="text-frame-400">{@html item.content}</div>
			{/if}
		</Alert>
	{/if}
{/snippet}

<div aria-live="assertive" class={containerClasses}>
	<div class={listClasses}>
		{#if transition === 'reveal'}
			{#each items as i (i.key)}
				<div
					animate:flip
					in:fly={{ x: notificationsPosition[position].x, duration: 400 }}
					out:fly={{ x: notificationsPosition[position].x, duration: 400 }}
				>
					{@render notification(i)}
				</div>
			{/each}
		{:else if transition === 'zoom'}
			{#each items as i (i.key)}
				<div
					animate:flip
					in:scale={{ delay, start: 0.7, opacity: 0.1, duration: 200 }}
					out:scale={{ start: 0.5, opacity: 0.5, duration: 100 }}
				>
					{@render notification(i)}
				</div>
			{/each}
		{:else}
			{#each items as i (i.key)}
				{@render notification(i)}
			{/each}
		{/if}
	</div>
</div>
