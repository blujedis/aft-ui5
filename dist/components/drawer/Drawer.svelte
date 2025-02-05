<script module lang="ts">
	import { type ShadowSize } from '../../theme/types.js';
	import type { Snippet } from 'svelte';
	import { clsxm } from '../../utils/string.js';
	import { fade, fly, type FlyParams } from 'svelte/transition';

	export type DrawerProps = {
		abortable?: boolean;
		backdrop?: boolean;
		escapable?: boolean;
		flyParams?: FlyParams | [FlyParams, FlyParams];
		position?: 'left' | 'right';
		shadow?: ShadowSize | false;
		size?: keyof typeof DrawerSizeMap;
		speed?: keyof typeof DrawerSpeedMap;
		visible?: boolean | number;
		children: Snippet<[{ close: (...args: any[]) => any }]>;
	};

	const DrawerPositionMap = {
		left: 'left-0 pr-10',
		right: 'right-0 pl-10'
	};

	const DrawerSizeMap = {
		unstyled: '',
		none: 'max-w-none',
		xs: 'max-w-56', // 'max-w-xs',
		sm: 'max-w-64', // 'max-w-sm',
		md: 'max-w-xs', // 'max-w-md',
		lg: 'max-w-sm', // 'max-w-lg',
		xl: 'max-w-md', // 'max-w-xl',
		xl2: 'max-w-lg', // 'max-w-2xl'
		xl3: 'max-w-xl',
		xl4: 'max-w-2xl'
	};

	const DrawerSpeedMap = {
		unstyled: 0,
		slow: 600,
		medium: 375,
		fast: 225
	};

	const DrawerOffsetMap = {
		unstyled: {} as any,
		none: { left: 0, right: '100%' },
		xs: { left: -224, right: '100%' }, //  { left: -320, right: '100%' },
		sm: { left: -256, right: '100%' }, // { left: -384, right: '100%' },
		md: { left: -320, right: '100%' }, // { left: -448, right: '100%' },
		lg: { left: -384, right: '100%' }, // { left: -512, right: '100%' },
		xl: { left: -448, right: '100%' }, // { left: -576, right: '100%' },
		xl2: { left: -512, right: '100%' }, // { left: -672, right: '100%' }
		xl3: { left: -576, right: '100%' },
		xl4: { left: -672, right: '100%' }
	};
</script>

<script lang="ts">
	import { documentEvent } from '../../utils/events.js';
	import { focustrap } from '../../hooks/focustrap.js';
	import type { ElementProps } from '../../types.js';
	import { ensureArray } from '../../utils/array.js';
	import { Shadow } from '../../theme/constants.js';

	let {
		abortable = true,
		backdrop = true,
		escapable = true,
		flyParams,
		position = 'right',
		shadow = 'md',
		size = 'md',
		speed = 'fast',
		visible = $bindable(),
		children,
		...rest
	}: DrawerProps & ElementProps<'div'> = $props();

	let panel = $state() as HTMLDivElement;
	const outsideClick = documentEvent('click', handleClickOutside);
	const [focustrapAction, focustrapHandler] = focustrap();

	flyParams = ensureArray(flyParams) as [FlyParams, FlyParams];

	let flyIn = $state({
		x: DrawerOffsetMap[size || 'unstyled'][position],
		duration: DrawerSpeedMap[speed || 'unstyled'],
		...flyParams[0]
	});

	let flyOut = $state({
		x: DrawerOffsetMap[size || 'unstyled'][position],
		duration: DrawerSpeedMap[speed || 'unstyled'] * 0.9,
		opacity: 0.75,
		...(flyParams[1] || flyParams[0])
	});

	function initNode(node: HTMLElement) {
		const destroyFocustrap = focustrapAction(node);
		const destroyOutsideClick = outsideClick(node);
		node.focus();
		return {
			destroy: () => {
				destroyFocustrap.destroy();
				if (typeof destroyOutsideClick.destroy === 'function') destroyOutsideClick.destroy();
			}
		};
	}

	const drawerSizeClasses = $derived(
		clsxm('drawer-size pointer-events-auto outline-none w-screen', size && DrawerSizeMap[size])
	);

	const drawerPositionClasses = $derived(
		clsxm(
			'drawer-position pointer-events-none outline-none fixed inset-y-0 flex',
			position && DrawerPositionMap[position]
		)
	);

	const drawerClasses = $derived(
		clsxm(
			'drawer outline-none inset-y-0 flex h-full z-40',
			'body-light dark:body-dark',
			shadow && Shadow[shadow],
			rest.class
		)
	);

	function handleClose() {
		visible = false;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (!e.repeat && e.key === 'Escape' && visible && escapable) {
			e.stopPropagation();
			handleClose();
		}
	}

	function handleClickOutside(e: Event & { target: HTMLElement }, node: HTMLElement) {
		const shouldClose =
			(node && !node.contains(e.target) && !e.defaultPrevented && abortable && visible) || false;
		if (!shouldClose) return;
		handleClose();
	}

	function handleClick(e: any) {
		if (!panel?.contains(e.target)) handleClose();
	}
</script>

<svelte:window on:keydown={handleKeydown} on:keydown={focustrapHandler} />

{#if visible}
	<div class="drawer-container relative" role="dialog" aria-modal="true" {...rest}>
		{#if backdrop}
			<div
				bind:this={panel}
				role="button"
				tabindex="-1"
				class="drawer-backdrop fixed inset-0 bg-frame-600 bg-opacity-50 transition-opacity"
				transition:fade={{ duration: 100 }}
				onclick={handleClick}
				onkeydown={handleKeydown}
			></div>
		{/if}
		<div class="fixed inset-0 overflow-hidden">
			<div class="absolute inset-0 overflow-hidden">
				<div class={drawerPositionClasses}>
					<div in:fly={flyIn} out:fly={flyOut} class={drawerSizeClasses}>
						<div class={drawerClasses}>
							<div class="relative outline-none" use:initNode tabindex="-1">
								{@render children({ close: handleClose })}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
