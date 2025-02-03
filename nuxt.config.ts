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
    '@nuxtjs/seo', '@nuxt/image', '@nuxt/icon', '@nuxt/fonts', '@nuxtjs/tailwindcss', 'nuxt-viewport'
  ],
  compatibilityDate: '2024-11-01',
})