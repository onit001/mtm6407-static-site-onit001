export default defineNuxtConfig({
  ssr: true,
  
  app: {
    baseURL: '/mtm6407-static-site-onit001/',
    buildAssetsDir: 'assets',
    head: {
      title: 'Jollof Secrets - Master Perfect Jollof Rice',
      meta: [
        { name: 'description', content: 'Learn authentic jollof rice recipes and cooking techniques' }
      ]
    }
  },

  compatibilityDate: '2024-11-24'
})