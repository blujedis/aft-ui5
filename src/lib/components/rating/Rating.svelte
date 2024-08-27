<script context="module" lang="ts">
	import type { Snippet } from 'svelte';
	import type { ElementProps } from '$lib/types.js';
	import { type ConfigProps } from '$lib/theme/build.svelte.js';
	import { type RatingItemProps } from './RatingItem.svelte';
	import { setContext } from 'svelte';

	export type RatingStoreValue = {
		active: number;
		readonly: boolean;
		score: number;
		selected: number;
	};

	export type RatingContext = {
		state: () => RatingStoreValue;
		props: Omit<RatingItemProps, 'index'>;
		handleCleanup: (e: Event) => void;
	};

	export interface RatingMethods {
		index: number;
		onMouseover: (index: number, e: MouseEvent) => any;
		onMouseleave: (index: number, e: MouseEvent) => any;
		onClick: (index: number, e: MouseEvent) => any;
	}

	export type RatingProps = Omit<RatingItemProps, 'index'> & {
		arrowable?: boolean;
		hoverable?: boolean;
		count?: number;
		readonly?: boolean; // when true no events presentation only.
		dropShadow?: ConfigProps['dropShadow'];
		score?: number; // > 0 and <= count.
		updatable?: boolean;
		children?: Snippet<[RatingMethods]>;
	};
</script>

<script lang="ts">
	import RatingItem from './RatingItem.svelte';
	import { clsxm } from '$lib/utils/string.js';
	import { DropShadow } from '$lib/theme/constants.js';

	let {
		arrowable = true,
		background,
		count = 5,
		fill,
		hoverable = true,
		readonly,
		score = $bindable(0),
		dropShadow,
		size,
		stroked,
		updatable = true,
		children,
		...rest
	}: RatingProps & ElementProps<'div'> = $props();

	let _state = $state({
		active: -1,
		readonly,
		score,
		selected: -1
	}) as RatingStoreValue;

	setContext<RatingContext>('Rating', {
		state: () => _state,
		props: {
			background,
			fill,
			size,
			stroked
		},
		handleCleanup
	});

	let ref: HTMLDivElement | undefined;

	const classes = $derived(
		clsxm('rating inline-flex spacing-x-0', dropShadow && DropShadow[dropShadow], rest.class)
	);

	function updateState(
		keyOrState: keyof RatingStoreValue | Partial<RatingStoreValue>,
		value?: any
	) {
		if (typeof keyOrState === 'string') keyOrState = { [keyOrState]: value };
		_state = { ..._state, ...keyOrState };
	}

	function onClick(selected: number, e: MouseEvent) {
		if (readonly) return;
		e.stopPropagation();
		(e.currentTarget as SVGElement).focus();
		updateState({
			score: updatable ? selected + 1 : _state.score,
			selected
		});
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	function onMouseover(active: number, e: MouseEvent) {
		if (readonly || !hoverable) return;
		updateState({
			active: -1
		});
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	function onMouseleave(active: number, e: MouseEvent) {
		if (readonly || !hoverable) return;
		updateState({
			active: -1
		});
	}

	function handleNavigation(up = false) {
		let active = _state.active;
		const div = ref as HTMLDivElement;
		const el = document.activeElement as HTMLElement;
		if (!div || !div.contains(el)) return;
		const items = Array.from(
			div.querySelectorAll(el.tagName.toLowerCase()) as NodeListOf<HTMLElement>
		);
		if (!items?.length) {
			console.warn(`Rating elements missing or undefined.`);
			return;
		}
		const currentIndex = items.indexOf(el as any);
		if (currentIndex > count - 1 || currentIndex < 0) {
			console.warn(`Rating index of ${currentIndex} is invalid or out of count scope.`);
			return;
		}
		active = up ? currentIndex + 1 : currentIndex - 1;
		if (active > count - 1) active = count - 1;
		if (active < 0) active = 0;
		items[_state.score && active === -1 ? _state.score - 1 : active].focus();
		updateState({
			active
		});
	}

	function handleNavigationSelect() {
		const selected = _state.active + 1;
		updateState({
			selected,
			score: updatable ? selected : _state.score
		});
	}

	function handleKeydown(e: KeyboardEvent) {
		if (readonly || !arrowable || e.repeat) return;
		if (['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'].includes(e.key)) {
			handleNavigation(e.key === 'ArrowUp' || e.key === 'ArrowRight');
		} else if (e.key === ' ') {
			handleNavigationSelect();
		}
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	function handleCleanup(e: Event & { currentTarget: any }) {
		// const currentTarget = e.currentTarget;
		// requestAnimationFrame(() => {
		// 	// if our clean up element doesn't contain the current active
		// 	// element then we can proceed with our cleanup.
		// 	if (!currentTarget.contains(document.activeElement)) {
		// 		store.update((s) => {
		// 			return { ...s, active: -1 };
		// 		});
		// 	}
		// });
	}
</script>

{#snippet rateItem({ index, onMouseover, onMouseleave, onClick }: RatingMethods)}
	<RatingItem
		{index}
		onmouseover={(e) => onMouseover(index, e)}
		onmouseleave={(e) => onMouseleave(index, e)}
		onclick={(e) => onClick(index, e)}
	/>
{/snippet}

<div
	{...rest}
	role="listbox"
	tabindex="-1"
	bind:this={ref}
	class={classes}
	onkeydown={handleKeydown}
	onfocusout={handleCleanup}
>
	{#each Array(count) as r, index}
		{#if children}
			{@render children({ index, onMouseover, onMouseleave, onClick })}
		{:else}
			{@render rateItem({ index, onMouseover, onMouseleave, onClick })}
		{/if}
	{/each}
</div>
