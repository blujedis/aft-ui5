<script lang="ts">
	import Tabs from './Tabs.svelte';
	import TabItem from './TabItem.svelte';

	const tabs = [
		{
			value: 'java',
			label: 'Java',
			description:
				'Java is a multi-platform, object-oriented, and network-centric language that can be used as a platform in itself. It is a fast, secure, reliable programming language for coding everything from mobile apps and enterprise software to big data applications and server-side technologies.',
			visible: false
		},
		{
			value: 'javascript',
			label: 'JavaScript',
			description:
				'JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.',
			visible: false
		},
		{
			value: 'python',
			label: 'Python',
			description:
				'Python is an interpreted, object-oriented, high-level programming language with dynamic semantics developed by Guido van Rossum. It was originally released in 1991. Designed to be easy as well as fun, the name "Python" is a nod to the British comedy group Monty Python.',
			visible: true
		},
		{
			value: 'react',
			label: 'React',
			description:
				'React is a JavaScript-based UI development library. Facebook and an open-source developer community run it. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development.',
			visible: false
		}
	];
</script>

<div class="mb-8">
	<Tabs>
		{#each tabs as tab}
			<TabItem label={tab.label} selected={tab.visible}>
				{tab.description}
			</TabItem>
		{/each}
	</Tabs>
</div>

<div class="mb-8">
	<Tabs variant="grouped" rounded="md">
		{#each tabs as tab}
			<TabItem label={tab.label} selected={tab.visible}>
				{tab.description}
			</TabItem>
		{/each}
	</Tabs>
</div>

<div class="mb-8">
	<Tabs variant="tabs" rounded="md">
		{#each tabs as tab}
			<TabItem label={tab.label} selected={tab.visible}>
				{tab.description}
			</TabItem>
		{/each}
	</Tabs>
</div>

<div class="mb-8">
	<Tabs variant="pills" rounded="md">
		{#each tabs as tab}
			<TabItem label={tab.label} selected={tab.visible}>
				{tab.description}
			</TabItem>
		{/each}
	</Tabs>
</div>
