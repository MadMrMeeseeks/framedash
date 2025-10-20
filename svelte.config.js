import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			strict: false
		}),
		prerender: {
			entries: [],       // disables prerendering
			handleHttpError: 'warn', // prevent build failure if something 404s
			handleMissingId: 'warn',
			handleUnseenRoutes: 'ignore'
		},
		alias: {
			$lib: 'src/lib'
		}
	}
};

export default config;
