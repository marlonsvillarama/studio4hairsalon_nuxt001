// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: [
    '~/assets/css/fonts.css',
    '~/assets/css/root.css',
    '~/assets/css/logo.css',
    '~/assets/css/global.css',
    '~/assets/css/layout.css',
    '~/assets/css/section.css',
    '~/assets/css/hero.css',
    '~/assets/css/buttons.css',
    '~/assets/css/tile.css',
    '~/assets/css/reviews.css',
    '~/assets/css/form.css',
  ],
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxt/ui'],
  runtimeConfig: {}
})