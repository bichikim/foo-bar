import {defineConfig} from 'vite'
import icons from 'unplugin-icons/vite'
import {VitePWA as vitePWA} from 'vite-plugin-pwa'
import vitePluginImp from 'vite-plugin-imp'
import * as dotenv from 'dotenv'
import vue from '@vitejs/plugin-vue'
import autoImport from 'unplugin-auto-import/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import manifest from 'front-end-apps/vue-test/resource/manifest.json'
import vueJsx from '@vitejs/plugin-vue-jsx'
import components from 'unplugin-vue-components/vite'

// eslint-disable-next-line import/no-named-as-default-member
dotenv.config()

const appName = 'vue web app'
const shortName = 'vue app'

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
      include: ['vue', 'vue-router'],
    },

    plugins: [
      vue(),
      autoImport({
        imports: ['vue'],
      }),
      vueJsx(),
      components({
        resolvers: [],
      }),
      tsconfigPaths(),
      vitePluginImp(),
      // https://github.com/antfu/vite-plugin-md

      icons(),
      // https://github.com/antfu/vite-plugin-pwa
      vitePWA({
        includeAssets: ['favicon.svg', 'robots.txt', 'safari-pinned-tab.svg'],
        manifest: {
          ...manifest,
          name: appName,
          // eslint-disable-next-line camelcase
          short_name: shortName,
          // eslint-disable-next-line camelcase
          theme_color: '#ffffff',
        },
        registerType: 'autoUpdate',
      }),
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
        '/server': {
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/server/u, ''),
          target: process.env.API_URL,
        },
        '/static': {
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/static/u, ''),
          target: 'http://localhost:3000',
        },
      },
    },
  }
})
