<script module lang="ts">
	import type { Snippet } from 'svelte';
	import {
		transitioner,
		TransitionOptions,
		type TransitionParams
	} from '$lib/utils/transitioner.js';
	import { fade } from 'svelte/transition';
	import { clsxm } from '$lib/utils/string.js';

	export type ModalPosition =
		| 'top'
		| 'center'
		| 'bottom'
		| 'top-right'
		| 'bottom-right'
		| 'top-left'
		| 'bottom-left'
		| 'top-center'
		| 'center-center'
		| 'bottom-center';

	export type ModalProps = {
		abortable?: boolean; // when true can escape or click background to abort.
		backdrop?: string | boolean;
		escapable?: boolean;
		labelby?: string;
		position?: ModalPosition;
		rounded?: RoundedSize | false;
		shadow?: ShadowSize | false;
		transition?: TransitionParams;
		visible?: boolean | number;
		onClose?: () => void;
		children: Snippet;
	};

	export const ModalTransitions = {
		...TransitionOptions,
		zoom: { duration: 200, start: 0.925, type: 'scale' },
		swipe: { duration: 200, axis: 'y', type: 'slide' },
		dissolve: { duration: 200, start: 0.8, type: 'fade' }
	};
</script>

<script lang="ts">
	import { focustrap } from '$lib/hooks/focustrap.js';
	import t from '$lib/theme/theme.svelte.js';
	import { Rounded, Shadow } from '$lib/theme/constants.js';
	import type { RoundedSize, ShadowSize } from '$lib/theme/types.js';

	let {
		abortable,
		backdrop,
		escapable,
		labelby,
		position = 'center-center',
		rounded = 'sm',
		shadow = 'lg',
		transition = 'zoom',
		visible = $bindable(),
		children,
		...rest
	}: ModalProps = $props();

	const [focustrapAction, focustrapHandler] = focustrap();

	let panel = $state() as HTMLDivElement;

	const containerClasses = $derived(
		clsxm(
			'modal-container flex min-h-full items-end justify-center p-4 text-center items-center sm:p-0',
			['top', 'top-center'].includes(position) && 'items-start',
			['bottom', 'bottom-center'].includes(position) && 'items-end',
			position === 'top-right' && 'items-start justify-end',
			position === 'bottom-right' && 'items-end justify-end',
			position === 'top-left' && 'items-start justify-start',
			position === 'bottom-left' && 'items-end justify-start'
		)
	);
	const contentClasses = $derived(
		clsxm(
			'modal-content z-50 bg-white relative transform overflow-hidden text-left transition-all my-4 mx-4 sm:my-8 sm:mx-8 sm:w-full sm:max-w-sm',
			t.settings.rounded && rounded && Rounded[rounded],
			t.settings.shadow && shadow && Shadow[shadow]
		)
	);

	function handleClose() {
		visible = false;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (!e.repeat && e.key === 'Escape' && escapable) {
			e.stopPropagation();
			handleClose();
		}
	}

	function handleClick(e: any) {
		if (visible && abortable && !panel?.contains(e.target)) handleClose();
	}
</script>

<svelte:window on:keydown={handleKeydown} on:keydown={focustrapHandler} />

{#if visible}
	<div
		role="button"
		tabindex="-1"
		class="modal-wrapper relative z-10"
		onclick={handleClick}
		onkeydown={handleKeydown}
	>
		{#if backdrop}
			<div
				class="modal-backdrop fixed inset-0 bg-frame-600 bg-opacity-50 transition-opacity"
				transition:fade={{ duration: 100 }}
			></div>
		{/if}
		<div role="dialog" aria-modal="true" class="modal fixed inset-0 z-10 overflow-y-auto">
			<div class={containerClasses}>
				<div
					bind:this={panel}
					transition:transitioner={transition}
					use:focustrapAction
					class={contentClasses}
				>
					{@render children()}
				</div>
			</div>
		</div>
	</div>
{/if}
