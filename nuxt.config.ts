// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: [
    '~/assets/css/fonts.css',
    '~/assets/css/root.css',
    '~/assets/css/global.css'
  ],
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxt/ui'],
  runtimeConfig: {}
})