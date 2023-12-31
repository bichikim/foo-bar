import {defineConfig} from 'vite'
import icons from 'unplugin-icons/vite'
import * as dotenv from 'dotenv'
import tsconfigPaths from 'vite-tsconfig-paths'
import {svelte} from '@sveltejs/vite-plugin-svelte'

// eslint-disable-next-line import/no-named-as-default-member
dotenv.config()

// eslint-disable-next-line max-lines-per-function
export default defineConfig(() => {
  return {
    build: {
      chunkSizeWarningLimit: 600,
      outDir: 'dist/spa',
    },
    define: {
      __DEV__: JSON.stringify('import.meta.env.DEV'),
      'process.env.NODE_ENV': JSON.stringify('import.meta.env.MODE'),
    },
    optimizeDeps: {
      exclude: ['vite'],
      include: [],
    },

    plugins: [
      svelte(),
      tsconfigPaths(),
      icons(),
      // https://github.com/antfu/vite-plugin-pwa
    ],

    resolve: {
      alias: {},
    },

    server: {
      // https: true,
      fs: {
        // allow: ['..', '../..'],
      },

      proxy: {
        // '/server': {
        //   changeOrigin: true,
        //   rewrite: (path) => path.replace(/^\/server/u, ''),
        //   target: process.env.API_URL,
        // },
        // '/static': {
        //   changeOrigin: true,
        //   rewrite: (path) => path.replace(/^\/static/u, ''),
        //   target: 'http://localhost:3000',
        // },
      },
    },
  }
})
