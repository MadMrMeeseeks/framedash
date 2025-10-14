import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			// disable strict mode so it won’t complain about “dynamic routes”
			strict: false
		}),
		alias: {
			$lib: 'src/lib'
		}
	}
};

export default config;
