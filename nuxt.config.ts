// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass', '/assets/main.css',],
  build: {
    transpile: ['vuetify'],
  },
  modules: ["@nuxtjs/tailwindcss"],
  devtools: { enabled: false },
  typescript: {
    typeCheck: true,
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
});
// export default {
//   buildModules: ['@nuxtjs/tailwindcss']
// }
