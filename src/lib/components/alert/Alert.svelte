<script context="module" lang="ts">
	import { type ElementProps } from '$lib/types.js';
	import type { Snippet } from 'svelte';
	import { type ConfigProps } from '$lib/components/Base.svelte';
	import {
		Size,
		type ThemeColor,
		AlertIcons,
		AlertPadding,
		AlertIconSize,
		BgColorSoft,
		ForeColorText,
		ForeColorTextHover
	} from '$lib/theme/types.js';

	export type AlertProps = {
		escapable?: boolean;
		focustrap?: boolean;
		icon?: boolean | string | IconifyIcon;
		position?:
			| 'top'
			| 'right'
			| 'bottom'
			| 'left'
			| 'top-right'
			| 'bottom-right'
			| 'bottom-left'
			| 'top-left'
			| 'unstyled';
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
	import { type TransitionOptions } from '$lib/utils/transitioner.js';
	import Icon from '../icon/Icon.svelte';
	import clsx from 'clsx';
	import { truthyOrDefault } from '$lib/utils/misc.js';

	let {
		escapable = true,
		focustrap = true,
		icon,
		position = 'unstyled',
		removable = true,
		rounded = 'unstyled',
		shadow = 'unstyled',
		size = 'md',
		theme = 'unstyled',
		transition,
		variant = 'default',
		visible = $bindable(),
		children,
		...rest
	}: AlertProps = $props();

	const [action, handler] = trap(focustrap);

	const wrapperClasses = $derived(
		clsx(
			'alert-wrapper absolute',
			position === 'top' && 'top-6 transform left-1/2 -translate-x-1/2',
			position === 'right' && 'right-6 transform top-1/2 -translate-y-1/2',
			position === 'bottom' && 'bottom-6 transform left-1/2 -translate-x-1/2',
			position === 'left' && 'left-6 transform top-1/2 -translate-y-1/2',
			position === 'top-right' && 'right-6 top-6',
			position === 'bottom-right' && 'right-6 bottom-6',
			position === 'bottom-left' && 'left-6 bottom-6',
			position === 'top-left' && 'left-6 top-6',
			'max-w-sm'
		)
	);

	const iconClasses = $derived(clsx(`alert-icon`, AlertIconSize[size]));

	const closeClasses = $derived(
		clsx(
			`alert-close p-1.5 rounded-full inline-flex`,
			'opacity-80 hover:opacity-100',
			ForeColorTextHover[theme]
		)
	);

	const base = $derived({
		classes: [
			`alert alert-${variant} alert-${theme} flex z-50`,
			removable && `alert-removable`,
			position !== 'unstyled' && 'absolute max-w-sm inline-flex',
			position === 'top' && 'top-6 transform left-1/2 -translate-x-1/2',
			position === 'right' && 'right-6 transform top-1/2 -translate-y-1/2',
			position === 'bottom' && 'bottom-6 transform left-1/2 -translate-x-1/2',
			position === 'left' && 'left-6 transform top-1/2 -translate-y-1/2',
			position === 'top-right' && 'right-6 top-6',
			position === 'bottom-right' && 'right-6 bottom-6',
			position === 'bottom-left' && 'left-6 bottom-6',
			position === 'top-left' && 'left-6 top-6',
			AlertPadding[size],
			BgColorSoft[theme],
			ForeColorText[theme],
			t.transition
		],
		fontSize: size,
		rounded: truthyOrDefault(t.rounded, rounded, 'full'),
		shadow: truthyOrDefault(t.shadow, shadow, 'sm'),
		visible,
		use: action,
		transition: position !== 'unstyled' ? transition : undefined
	}) as ConfigProps;

	function handleKeydown(e: KeyboardEvent) {
		if (!e.repeat && e.key === 'Escape' && visible && escapable && removable) {
			e.stopPropagation();
			visible = !visible;
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} on:keydown={handler} />

{#if visible}
	<!-- <ConditionalElement
		as="div"
		condition={position !== 'unstyled'}
		class={wrapperClasses}
		tabindex={-1}
	> -->
	<BaseElement {...base} {...rest} as="div" tabindex={-1}>
		<div class="flex w-full items-start space-x-3">
			<div class="flex-shrink-0 -mt-0.5">
				{#if icon}
					<Icon
						icon={typeof icon === 'undefined' || icon === true
							? AlertIcons[theme as 'danger' | 'warning' | 'info' | 'success']
							: icon}
						class={iconClasses}
					/>
				{/if}
			</div>

			<div class="flex-1 font-medium">
				{@render children()}
			</div>

			{#if removable}
				<div class="ml-auto">
					<div class="-mx-1.5 -my-1.5">
						<button type="button" class={closeClasses} onclick={() => (visible = false)}>
							<span class="sr-only">Dismiss</span>
							<Icon icon="mdi:close" class={iconClasses} />
						</button>
					</div>
				</div>
			{/if}
		</div>
	</BaseElement>
	<!-- </ConditionalElement> -->
{/if}
