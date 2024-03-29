import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { importAssets } from 'svelte-preprocess-import-assets';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [importAssets(), vitePreprocess({}), preprocess({})],
    kit: {
        adapter: adapter()
    },
    target: '#svelte'
};

export default config;
