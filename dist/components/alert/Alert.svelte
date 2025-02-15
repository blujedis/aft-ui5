<script module lang="ts">
	import { type ElementProps } from '../../types.js';
	import { getContext, setContext, type Snippet } from 'svelte';
	import type { IconifyIcon } from '@iconify/svelte';
	import { transitioner, type TransitionParams } from '../../utils/transitioner.js';
	import {
		type NotificationApi,
		type NotificationPosition
	} from '../notifications/notifications.svelte.js';
	import {
		type Size,
		type ThemeColor,
		BgColorSoft,
		ForeColorSoft,
		BgColor,
		ForeColorFilled,
		BorderColor,
		type RoundedSize,
		type ShadowSize
	} from '../../theme/types.js';

	export type AlertProps = {
		readonly key?: string;
		escapable?: boolean;
		icon?: boolean | string | IconifyIcon;
		position?: NotificationPosition | 'left' | 'right';
		removable?: boolean; // when true can escape or click background to abort.
		rounded?: RoundedSize | false;
		shadow?: ShadowSize | false;
		theme?: ThemeColor | 'default'; // default are optimal them for alert/notifications.
		transition?: TransitionParams;
		size?: Size;
		variant?: 'unstyled' | 'filled' | 'soft';
		visible?: any;
		children: Snippet<[]>;
	} & ElementProps<'div'>;

	export const alertVariants = ['unstyled', 'filled', 'soft'] as AlertProps['variant'][];

	const AlertIconSize = {
		unstyled: '',
		xs: 'h-4 w-4',
		sm: 'h-4.5 w-4.5',
		md: 'h-5 w-5',
		lg: 'h-6 w-6',
		xl: 'h-7 w-7',
		xl2: 'h-8 w-8'
	};

	const AlertPadding = {
		unstyled: '',
		xs: 'p-2.5',
		sm: 'p-3',
		md: 'p-4',
		lg: 'p-5',
		xl: 'p-6',
		xl2: 'p-7'
	};

	const AlertIcons = {
		danger: 'mdi:dangerous',
		warning: 'mdi:alert-outline',
		info: 'mdi:information-outline',
		success: 'mdi:check'
	};
</script>

<script lang="ts">
	import { focustrap } from '../../hooks/focustrap.js';
	import Icon from '../icon/Icon.svelte';
	import clsx from 'clsx';
	import { buildClass } from '../../theme/build.svelte.js';

	const context = getContext<NotificationApi>('Notifications');

	let {
		key,
		escapable = true,
		icon,
		position,
		removable = true,
		rounded,
		shadow,
		size = 'md',
		theme = $bindable(),
		transition,
		variant = !context ? 'soft' : undefined,
		visible = $bindable(),
		children,
		...rest
	}: AlertProps = $props();

	setContext('IconContainer', { theme });

	const [focustrapAction, focustrapHandler] = focustrap();

	const iconClasses = $derived(clsx(`alert-icon`, AlertIconSize[size]));
	const closeClasses = $derived(
		clsx(`alert-close p-1.5 rounded-full inline-flex`, 'opacity-80 hover:opacity-100')
	);

	const classes = $derived(
		buildClass({
			classes: [
				`flex z-50`,
				!context && 'alert alert-${variant} alert-${theme}',
				context && 'notification notification-${variant} notification-${theme}',
				context &&
					position?.includes('left') &&
					'border-l-none border-t-none border-b-none border-r-md',
				context &&
					!position?.includes('left') &&
					'border-r-none border-t-none border-b-none border-l-4',
				removable && `alert-removable`,
				position && 'absolute max-w-sm inline-flex',
				position === 'top' && 'top-6 transform left-1/2 -translate-x-1/2',
				position === 'right' && 'right-6 transform top-1/2 -translate-y-1/2',
				position === 'bottom' && 'bottom-6 transform left-1/2 -translate-x-1/2',
				position === 'left' && 'left-6 transform top-1/2 -translate-y-1/2',
				position === 'top-right' && 'right-6 top-6',
				position === 'bottom-right' && 'right-6 bottom-6',
				position === 'bottom-left' && 'left-6 bottom-6',
				position === 'top-left' && 'left-6 top-6',

				AlertPadding[size],
				!context && variant === 'filled' && theme && theme !== 'default' && BgColor[theme],
				!context && variant === 'filled' && theme && theme !== 'default' && ForeColorFilled[theme],

				!context && variant === 'soft' && theme && theme !== 'default' && BgColorSoft[theme],
				!context && variant === 'soft' && theme && theme !== 'default' && ForeColorSoft[theme],

				context && theme && BorderColor[theme as ThemeColor],
				(context || !theme) && 'bg-frame-600 dark:bg-frame-700 text-light', // default contrast colors.
				rest.class
			],
			fontSize: size,
			rounded,
			shadow
		})
	);

	function handleClose() {
		if (!context) {
			visible = false;
		} else {
			visible = false;
			context.remove(key + '');
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (!e.repeat && e.key === 'Escape' && visible && escapable && removable) {
			e.stopPropagation();
			handleClose();
		}
	}

	function handleEnter<E extends Event = Event, T extends EventTarget = Element>(
		event: E & { currentTarget: EventTarget & T }
	) {
		if (!context) return;
		context.lock();
	}

	function handleLeave<E extends Event = Event, T extends EventTarget = Element>(
		event: E & { currentTarget: EventTarget & T }
	) {
		if (!context) return;
		context.unlock();
	}
</script>

<svelte:window on:keydown={handleKeydown} on:keydown={focustrapHandler} />

{#if visible}
	<div
		{...rest}
		role="alert"
		tabindex="-1"
		onmouseenter={handleEnter}
		onmouseleave={handleLeave}
		class={classes}
		transition:transitioner={transition}
		use:focustrapAction
	>
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
						<button type="button" class={closeClasses} onclick={handleClose}>
							<span class="sr-only">Dismiss</span>
							<Icon icon="mdi:close" class={iconClasses} />
						</button>
					</div>
				</div>
			{/if}
		</div>
	</div>
{/if}
