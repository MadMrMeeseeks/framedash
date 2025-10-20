<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();

	// Register the service worker when running in the browser
	if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
		navigator.serviceWorker
			.register('/sw.js')
			.then(() => console.log('Service Worker registered'))
			.catch((err) => console.error('Service Worker registration failed:', err));
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="manifest" href="/manifest.webmanifest" />
	<meta name="theme-color" content="#000000" />
</svelte:head>

{@render children?.()}
