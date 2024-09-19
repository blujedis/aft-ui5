<script module lang="ts">
	import { StrokeColor, type ThemeColor } from '$lib/theme/types.js';
	import { clsxm } from '$lib/utils/string.js';

	export type LoaderProps = {
		size?: number | keyof typeof LoaderSize; // overall size
		speed?: 'slow' | 'medium' | 'fast'; // speed of spinner
		theme?: ThemeColor;
		trackSize?: number | keyof typeof LoaderSize; // width of circle's track.
		distance?: number; // the distance around circle that is filled w/ theme color.
	};

	const LoaderSize = {
		xs: 20,
		sm: 26,
		md: 32,
		lg: 38,
		xl: 44,
		xl2: 50
	};

	const TrackSize = {
		xs: 1,
		sm: 2,
		md: 4,
		lg: 6,
		xl: 8,
		xl2: 10
	};
</script>

<script lang="ts">
	let {
		size = 'md',
		speed = 'medium',
		theme = $bindable(),
		trackSize = 'sm',
		distance = 33
	}: LoaderProps = $props();

	const diameter = typeof size === 'number' ? size : LoaderSize[size];
	const trackwidth = typeof trackSize === 'number' ? trackSize : TrackSize[trackSize];
	const center = diameter / 2; // cx & cy
	const radius = center - trackwidth; // r
	const strokeArray = $derived(2 * 3.14 * radius);
	const strokeOffset = $derived(strokeArray * ((100 - distance) / 100));

	const classes = $derived(
		clsxm('animate-spin', speed === 'medium' && 'medium', speed === 'fast' && 'fast')
	);

	const trackClasses = $derived(
		clsxm('fill-transparent', 'stroke-frame-100 dark:stroke-frame-800/50')
	);

	const circleClasses = $derived(
		clsxm(
			'fill-transparent',
			theme && StrokeColor[theme],
			!theme && 'stroke-frame-500 dark:stroke-frame-500'
		)
	);

	const styles = $derived(`
    height: ${diameter}; width: ${diameter}; 
  `);
</script>

<svg
	class={classes}
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox={`0 0 ${diameter} ${diameter}`}
	style={styles}
>
	<circle class={trackClasses} cx={center} cy={center} r={radius} stroke-width={trackwidth}>
	</circle>

	<circle
		class={circleClasses}
		cx={center}
		cy={center}
		r={radius}
		stroke-width={trackwidth}
		stroke-dasharray={strokeArray}
		stroke-dashoffset={strokeOffset}
	>
	</circle>
</svg>

<style>
	svg.fast {
		animation: spin 0.4s linear infinite;
	}
	svg.medium {
		animation: spin 0.65s linear infinite;
	}
</style>
