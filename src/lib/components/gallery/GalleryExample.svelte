<script lang="ts">
	import Image from '../image/Image.svelte';
	import Gallery from './Gallery.svelte';

	const images = [
		{ alt: 'Camera', src: '/img/camera.jpg' },
		{ alt: 'Airpods', src: '/img/airpods.jpg' },
		{ alt: 'Backpack', src: '/img/backpack.jpg' },
		{ alt: 'Bike', src: '/img/bike.jpg' },
		{ alt: 'Bottle', src: '/img/bottle.jpg' },
		{ alt: 'Camera 2', src: '/img/camera2.jpg' },
		{ alt: 'Controller', src: '/img/controller.jpg' },
		{ alt: 'GoPro', src: '/img/gopro.jpg' },
		{ alt: 'Headphones', src: '/img/headphones.jpg' },
		{ alt: 'Laptop', src: '/img/laptop.jpg' },
		{ alt: 'Phone', src: '/img/phone.jpg' },
		{ alt: 'Polaroid', src: '/img/polaroid.jpg' },
		{ alt: 'Shoe', src: '/img/shoe.jpg' },
		{ alt: 'Sneaker', src: '/img/sneaker.jpg' },
		{ alt: 'Watch', src: '/img/watch.jpg' },
		{ alt: 'Watch 2', src: '/img/watch2.jpg' }
	];

	const group1 = images.slice(0, 3);
	const group2 = images.slice(3, 6);
	const group3 = images.slice(6, 9);
	const group4 = images.slice(9, 12);
	const group5 = images.slice(12, 15);
</script>

<div class="max-w-screen-md mb-12">
	<Gallery cols={4}>
		{#each images as img}
			<Image {...img} aspect="square" />
		{/each}
	</Gallery>
</div>

<div class="max-w-screen-md mb-12">
	<Gallery>
		<Image alt="Camera" src="/img/camera.jpg" aspect="video" />
		<Gallery cols="5">
			{#each images.slice(0, 5) as img}
				<Image {...img} aspect="square" />
			{/each}
		</Gallery>
	</Gallery>
</div>

<div class="max-w-screen-md">
	<Gallery cols="4">
		<Gallery>
			{#each group1 as img}
				<Image {...img} />
			{/each}
		</Gallery>

		<Gallery>
			{#each group2 as img}
				<Image {...img} />
			{/each}
		</Gallery>

		<Gallery>
			{#each group3 as img}
				<Image {...img} />
			{/each}
		</Gallery>

		<Gallery>
			{#each group4 as img}
				<Image {...img} />
			{/each}
		</Gallery>
	</Gallery>
</div>
