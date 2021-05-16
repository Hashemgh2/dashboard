import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'dashboard',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/main.scss',
    // "~/assets/scss/pages/main.scss"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src : '@/plugins/vue-apexchart.js', ssr : false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    // '@nuxtjs/axios',
    // Doc: https://github.com/nuxt/content
    // '@nuxt/content',
    '@nuxtjs/svg',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',

    // '@nuxtjs/proxy',
  ],
  auth: {
    // Options
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor : ['vue-apexchart']
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    // rtl: true,
    theme: {
      dark: false,
      default: 'light',
      disable: false,
      options: {
        cspNonce: 'dQw4w9WgXcQ',
        customProperties: true,
        variations: true,
      },
      themes: {
        light: {
          primary: '#5050a0',
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: '#dddcec',
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
        custom: {
          color: {
            background: {
              default: '#fff',
              paper: '#fff',
              paperOverlay: '#fff',
            },
            text: {
              primary: '#000',
              secondary: 'rgba(0, 0, 0, 0.7)',
              disabled: 'rgba(0, 0, 0, 0.5)',
              hint: 'rgba(0, 0, 0, 0.5)',
              icon: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      },
    },
  },
}
