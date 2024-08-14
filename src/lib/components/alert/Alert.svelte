<script context="module" lang="ts">
	import { type ElementProps } from '$lib/types.js';
	import type { Snippet } from 'svelte';
	import { type ConfigProps } from '$lib/components/Base.svelte';
	import { Size, type ThemeColor } from '$lib/theme/types.js';

	export type AlertProps = {
		escapable?: boolean;
		focustrap?: boolean;
		icon?: boolean | string | IconifyIcon;
		position?: 'top' | 'bottom' | 'left' | 'right' | 'unstyled';
		removable?: boolean; // when true can escape or click background to abort.
		rounded?: ConfigProps['rounded'];
		shadow?: ConfigProps['shadow'];
		theme?: ThemeColor;
		transition?: TransitionOptions;
		size?: keyof typeof Size;
		variant?: 'default';
		visible?: any;
		children: Snippet<[]>;
	} & ElementProps<'div'>;

	export const alertVariants = ['default'] as AlertProps['variant'][];
</script>

<script lang="ts">
	import BaseElement from '$lib/components/Base.svelte';
	import t from '$lib/theme/theme.svelte.js';
	import { focustrap as trap } from '$lib/hooks/focustrap.js';
	import type { IconifyIcon } from '@iconify/svelte';
	import ConditionalElement from '../conditional/ConditionalElement.svelte';
	import type { TransitionOptions } from '$lib/utils/transitioner.js';
	import Icon from '../icon/Icon.svelte';

	let {
		escapable = true,
		focustrap = true,
		position = 'unstyled',
		removable = true,
		size = 'md',
		transition,
		variant = 'default',
		visible = $bindable(),
		children,
		...rest
	}: AlertProps = $props();

	let alert;

	const [action, handler] = trap(focustrap);

	const base = $derived({
		classes: ['z-50', t.transition],
		fontSize: size,
		use: action,
		transition
	}) as ConfigProps;

	function handleClose() {
		visible = !visible;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (!e.repeat && e.key === 'Escape' && visible && escapable && removable) {
			e.stopPropagation();
			handleClose();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} on:keydown={handler} />

<div bind:this={alert} role="presentation" tabindex="-1">
	<ConditionalElement as="div" condition={position !== 'unstyled'} class="wrapper">
		<BaseElement {...base} {...rest} as="div">

			<div class="flex w-full items-start space-x-3">
				<div class="flex-shrink-0">
					{#if icon !== false}
						<Icon
							icon={typeof icon === 'undefined' || icon === true ? alertIcons[theme] : icon}
							class="alert-icon"
						/>
					{/if}
				</div>

				<div class="flex-1 font-medium">
					{@render children()}
				</div>

				{#if removable}
					<div class="ml-auto">
						<div class="-mx-1.5 -my-1.5">
							<button type="button" class="alert" on:click={() => (visible = false)}>
								<span class="sr-only">Dismiss</span>
								<Icon icon="mdi:close" class="alert-close" />
							</button>
						</div>
					</div>
				{/if}




		</BaseElement>
	</ConditionalElement>
</div>
