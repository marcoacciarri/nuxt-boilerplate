// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineOrganization } from 'nuxt-schema-org/schema'

export default defineNuxtConfig({
  site: { 
    url: 'https://example.com', 
    name: 'Update site URL in nuxt config' 
  }, 
  devtools: { enabled: true },
  schemaOrg: {
    identity: defineOrganization({
      name: 'Pulsi',
      logo: '/images/pulsi-know-people-vertical.png',
      sameAs: [
        'https://pulsi.com.au',
        'https://www.instagram.com/Pulsi_au',
        'https://www.linkedin.com/company/pulsi'
      ]
    })
  }, 
  sitemap: {
    enabled: true,
    debug: false,
    exclude: [
      '/checkout**'
    ]
  },
  $production: {
    routeRules: {
      '/**': { isr: true }
    }
  },
  $development: {
    //
  },
  $env: {
    staging: {
      // To select an environment when running a Nuxt CLI command, simply pass the name to the --envName flag, like so: nuxi build --envName staging.
    }
  }, 
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
    layoutTransition: { 
      name: 'layout', 
      mode: 'out-in' 
    }
  },
  nitro: {
    prerender: {
      ignore: [ '/manager' ],
      routes: ['/sitemap.xml']
    }
  },
  icon: {
    //serverBundle: 'remote',
    clientBundle: {
      scan: {
        // note that when you specify those values, the default behavior will be overridden
        globInclude: ['components/**/*.vue', /* ... */],
        globExclude: ['node_modules', 'dist', /* ... */],
      },
    },
  },
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    mailgunApiKey: process.env.MAILGUN_API_KEY,
    mailgunDomain: process.env.MAILGUN_DOMAIN,
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    },
  },
  modules: [
    '@nuxtjs/seo', '@nuxt/image', '@nuxt/icon', '@nuxt/fonts', '@nuxtjs/tailwindcss', 'nuxt-viewport', 'nuxt-booster'
  ],
  booster: {

    detection: {
      performance: true,
      browserSupport: true
    },

    performanceMetrics: {
      device: {
        hardwareConcurrency: { min: 2, max: 48 },
        deviceMemory: { min: 2 }
      },
      timing: {
        fcp: 800,
        dcl: 1200
      }
    },

    fonts: [{
      family: 'Font A',
      locals: ['Font A'],
      fallback: ['Arial', 'sans-serif'],
      variances: [
        {
          style: 'normal',
          weight: 400,
          sources: [
            { src: '@/assets/fonts/font-a-regular.woff', type:'woff' },
            { src: '@/assets/fonts/font-a-regular.woff2', type:'woff2' }
          ]
        }, {
          style: 'italic',
          weight: 400,
          sources: [
            { src: '@/assets/fonts/font-a-regularItalic.woff', type:'woff' },
            { src: '@/assets/fonts/font-a-regularItalic.woff2', type:'woff2' }
          ]
        }, {
          style: 'normal',
          weight: 700,
          sources: [
            { src: '@/assets/fonts/font-a-700.woff', type:'woff' },
            { src: '@/assets/fonts/font-a-700.woff2', type:'woff2' }
          ]
        }
      ]
    }],

    targetFormats: ['webp', 'avif', 'jpg|jpeg|png|gif'],

    componentAutoImport: false,
    componentPrefix: undefined,

    /**
     * IntersectionObserver rootMargin for Compoennts and Assets
     */
    lazyOffset: {
      component: '0%',
      asset: '0%'
    }
    
  },
  image: {
    quality: 80,
    format: ['webp'],
    screens: {
      default: 320,
      xxs: 480,
      xs: 576,
      sm: 768,
      md: 996,
      lg: 1200,
      xl: 1367,
      xxl: 1600,
      '4k': 1921
    },

    domains: ['img.youtube.com', 'i.vimeocdn.com'],

    alias: {
      youtube: 'https://img.youtube.com',
      vimeo: 'https://i.vimeocdn.com',
    }
  },
  compatibilityDate: '2024-11-01',
})