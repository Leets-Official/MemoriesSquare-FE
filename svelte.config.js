import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-node'
import { vitePreprocess } from '@sveltejs/kit/vite'

const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    preprocess: [
        vitePreprocess(),
        preprocess({
            postcss: true
        })
    ],

    kit: {
        prerender: {
            handleHttpError: () => {
                return
            }
        },
        adapter: adapter()
    }
}

export default config