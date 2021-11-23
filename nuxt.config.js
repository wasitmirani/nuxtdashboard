export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtdashboard',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel:'stylesheet', href: '/assets/libs/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.css'},
      {rel:'stylesheet', href: '/assets/css/preloader.min.css'},
      {rel:'stylesheet', href: '/assets/css/bootstrap.min.css'},
      {rel:'stylesheet', href: '/assets/css/icons.min.css'},
      {rel:'stylesheet', href: '/assets/css/app.min.css'},

    ],
    scripts: [
      { src:"/assets/libs/jquery/jquery.min.js"},
      { src:"/assets/libs/bootstrap/js/bootstrap.bundle.min.js"},
      { src:"/assets/libs/metismenu/metisMenu.min.js"},
      { src:"/assets/libs/simplebar/simplebar.min.js"},
      { src:"/assets/libs/node-waves/waves.min.js"},
      { src:"/assets/libs/feather-icons/feather.min.js"},
      { src:"/assets/libs/pace-js/pace.min.js"},
      { src:"/assets/libs/apexcharts/apexcharts.min.js"},
      { src:"/assets/libs/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.min.js"},
      { src:"/assets/libs/admin-resources/jquery.vectormap/maps/jquery-jvectormap-world-mill-en.js"},
      { src:"/assets/js/pages/dashboard.init.js"},
      { src:"/assets/js/app.js"},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
       // https://go.nuxtjs.dev/tailwindcss
    // '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
