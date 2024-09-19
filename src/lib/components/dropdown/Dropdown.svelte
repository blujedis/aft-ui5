<script module lang="ts">
	import { getContext, setContext, type Snippet } from 'svelte';
	import Popper, { type PopperApi, type PopperProps } from '../popper/Popper.svelte';
	import { buildClass } from '$lib/theme/build.svelte.js';
	import { FieldFontSize } from '$lib/theme/constants.js';
	import {
		type ElevationSize,
		type RoundedSize,
		type Size,
		type ThemeColor
	} from '$lib/theme/types.js';
	import type { ElementProps } from '$lib/types.js';
	import type { DropdownInputContext } from './DropdownInput.svelte';
	import type { DropdownGroupContext } from './DropdownGroup.svelte';

	export type DropdownApi = PopperApi & {
		handleKeydown: (e: KeyboardEvent) => void;
	};

	export type DropdownActiveItem = { el?: HTMLElement | null; index?: number };

	export type DropdownContext = {
		rounded: RoundedSize | false;
		size: Size;
		theme: ThemeColor;
		variant: DropdownProps['variant'];
		multiple: boolean;
		selectable: boolean;
		setSelected: (value: any) => void;
	};

	export type DropdownProps = Omit<PopperProps, 'children' | 'arrow' | 'arrowClass'> & {
		elevation?: ElevationSize;
		rounded?: RoundedSize | false;
		scrollable?: boolean;
		size?: Size;
		theme?: ThemeColor;
		variant?: 'unstyled' | 'filled' | 'soft';
		header?: Snippet<[{ close: (e?: Event) => any }]>;
		children: Snippet<[{ close: (e?: Event) => any }]>;
		footer?: Snippet<[{ close: (e?: Event) => any }]>;
	};
</script>

<script lang="ts">
	import t from '$lib/theme/theme.svelte.js';
	import { uniqid } from '$lib/utils/misc.js';

	const contextGroup = getContext('DropdownController') as DropdownGroupContext;
	const contextInput = getContext('DropdownInput') as DropdownInputContext;

	let {
		elevation = 'lg',
		escapable = contextInput?.escapable,
		event = 'focus',
		id = uniqid(),
		offset = 4,
		scrollable = typeof contextInput !== 'undefined',
		placement = 'bottom-start',
		rounded,
		size = 'md',
		target,
		theme = $bindable(contextInput?.theme),
		trigger,
		variant,
		visible = $bindable(),
		header,
		children,
		footer,
		...rest
	}: DropdownProps & ElementProps<'div'> = $props();

	let list = $state() as HTMLDivElement | undefined;
	let elements = $state() as HTMLElement[];
	let activeItem = $state() as DropdownActiveItem;
	let popper = $state() as PopperApi | undefined;

	setContext('Dropdown', {
		rounded,
		size,
		theme,
		variant,
		multiple: contextInput?.multiple,
		selectable: typeof contextInput !== 'undefined',
		setSelected: (value: any) => {
			contextInput?.setSelected(value);
			if (!contextInput?.multiple) handleClose();
		}
	} as DropdownContext);

	const classes = $derived(
		buildClass({
			prepend: [`dropdown dropdown-${theme || 'default'}`],
			classes: [
				size && FieldFontSize[size],
				scrollable && 'overflow-y-scroll max-h-64 scrollbar-sm',
				t.options.card,
				'z-40 relative min-w-28 outline-none',
				rest.class
			],
			elevation,
			rounded
		})
	);

	function onInit() {
		if (!elements.length) return;

		// Get active element.
		activeItem = elements.reduce(
			(a, c, i) => {
				if (c?.classList.contains('dropdown-item-selected')) {
					a.el = c;
					a.index = Math.max(0, i - 1);
				}
				return a;
			},
			{ el: undefined, index: undefined } as DropdownActiveItem
		);

		contextGroup?.setConf(id as string, { last: activeItem.el });

		if (activeItem.el) activeItem.el.focus();
		else list?.focus();
	}

	function onNavigate(el: HTMLElement | undefined, index: number) {
		activeItem = { el, index };
		// stores the last position only used when creating multi menu dropdowns.
		// does not apply to DropdownInput component.
		contextGroup?.setConf(id as string, { last: el });
	}

	function onSelect(node: HTMLElement | null, e: KeyboardEvent) {
		if (!node) return;
		const el = node as HTMLElement & { value?: any };
		const value = typeof el.value !== 'undefined' ? el.value : el.dataset.value;
		contextInput?.setSelected(value);
		if (!contextInput?.multiple) handleClose(e);
	}

	function onFind(items: HTMLElement[], key: KeyboardEvent['key']) {
		let found = items.find((el) => el.classList.contains('dropdown-item-selected'));
		if (!found) {
			if (key === 'ArrowDown') found = items.find((el) => el.classList.contains('dropdown-item'));
			else found = items[items.length - 1];
		}
		return found as HTMLElement;
	}

	function getNextNode(index: number, dir: 1 | -1): [HTMLElement | null, number] {
		if (index < 0 || index > elements.length - 1) return [null, index];
		const nextNode = elements[index] as
			| HTMLButtonElement
			| (HTMLAnchorElement & { disabled?: boolean });
		if (nextNode.disabled || nextNode.getAttribute('aria-disabled') === 'true')
			return getNextNode(index + dir, dir);
		return [nextNode, index];
	}

	function handleKeydown(e: KeyboardEvent) {
		if (!['ArrowUp', 'ArrowDown', ' ', 'Enter'].includes(e.key) || !elements?.length || !list)
			return;

		e.stopPropagation();
		e.preventDefault();

		const max = elements.length - 1;
		const activeNode = document.activeElement as HTMLElement | null;

		//////////////////////////////////////////////
		// User is selecting current value.
		//////////////////////////////////////////////

		if ((e.key === ' ' || e.key === 'Enter') && list.contains(activeNode)) {
			console.log(activeNode);
			onSelect(activeNode, e);
		}

		//////////////////////////////////////////////
		// User is navigating options.
		//////////////////////////////////////////////
		else if (activeNode) {
			let currentNode: HTMLElement | undefined;

			// Active node is within the container.
			if (list.contains(activeNode)) {
				// already navigating child nodes.
				const currentIndex = elements.indexOf(activeNode);
				const dir = e.key === 'ArrowDown' ? 1 : -1;
				const nextIndex = e.key === 'ArrowDown' ? currentIndex + dir : currentIndex + dir;

				let [nextNode, nodeIndex] = getNextNode(nextIndex, dir);
				if (!nextNode) return;

				// At top redirect to bottom.
				if (nodeIndex === 0 && e.key === 'ArrowUp') {
					nextNode = elements[elements.length - 1];
					nodeIndex = max;
				}
				// At bottom redirect to top.
				else if (nodeIndex === max && e.key === 'ArrowDown') {
					nextNode = elements[0];
					nodeIndex = 0;
				}

				currentNode = nextNode;
				onNavigate(currentNode, Math.max(0, nodeIndex - 1));
			}

			// Can't find active node lookup selected or first node.
			else {
				currentNode = onFind(elements, e.key);
				onNavigate(currentNode, e.key === 'ArrowDown' ? 0 : elements.length - 1);
			}

			if (currentNode) currentNode.focus();
		}
	}

	function useInit(node: HTMLDivElement) {
		list = node;
		elements = (Array.from(node.children) || []).filter((el) =>
			el.classList.contains('dropdown-item')
		) as HTMLElement[];
		contextGroup?.setActive(id as string);
		contextGroup?.setConf(id as string, { event });
		onInit();
		return {
			destroy: () => contextGroup?.delActive(id as string)
		};
	}

	function handleClose(e?: Event) {
		// visible = false;
		popper?.close(e);
	}

	function getApi() {
		return {
			...popper,
			handleKeydown
		} as DropdownApi;
	}

	$effect(() => {
		contextInput?.setVisibility(visible as boolean);
		contextInput?.setPopper(getApi());
	});
</script>

<Popper
	{...rest}
	bind:api={popper}
	bind:visible
	{id}
	{escapable}
	{offset}
	{placement}
	class={classes}
	event={contextInput?.event || event}
	target={contextInput?.target || target}
	trigger={contextInput?.trigger || trigger}
>
	{#if header}
		{@render header({ close: handleClose })}
	{/if}

	<div
		role="listbox"
		tabindex="-1"
		use:useInit
		onkeydown={handleKeydown}
		class="dropdown-container py-1 outline-none overflow-hidden transition-transform"
	>
		{@render children({ close: handleClose })}
	</div>

	{#if footer}
		{@render footer({ close: handleClose })}
	{/if}
</Popper>
