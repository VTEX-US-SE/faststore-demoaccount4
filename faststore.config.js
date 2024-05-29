
module.exports = {
  seo: {
  "title": "Lamps Plus",
  "description": "Lamps Plus Store - Powered by VTEX",
  "titleTemplate": "%s | Lamps Plus",
  "author": "Lamps Plus"
},

  // Theming
  theme: 'custom-theme',

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: "demoaccount4",
    workspace: 'master',
    environment: 'vtexcommercestable',
    hideUnavailableItems: false,
    incrementAddress: false,
  },

  // Default session
  session: {
    currency: {
      code: "USD",
      symbol: "$",
    },
    locale: "en-US",
    channel: '{"salesChannel":1,"regionId":""}',
    country: "USA",
    deliveryMode: null,
    addressType: null,
    postalCode: null,
    geoCoordinates: null,
    person: null,
  },

  cart: {
    id: '',
    items: [],
    messages: [],
    shouldSplitItem: true,
  },

  // Production URLs
  storeUrl: "https://lp2.vtexb2c.com/",
  secureSubdomain: "https://secure.lp2.vtexb2c.com/",
  checkoutUrl: "https://secure.lp2.vtexb2c.com/checkout",
  loginUrl: "https://secure.lp2.vtexb2c.com/login",
  accountUrl: "https://secure.lp2.vtexb2c.com/account",

  previewRedirects: {
    home: '/',
    plp: "/chandeliers",
    search: "/s?q=Possini%20Euro%20Design",
    pdp: "/possini-euro-castille-22-inch-wide-bronze-rustic-modern-pendant-light__1g894/p",
  },

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:3000',
    pages: {
      home: '/',
      pdp: "/possini-euro-castille-22-inch-wide-bronze-rustic-modern-pendant-light__1g894/p",
      collection: "/chandeliers",
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: "/possini-euro-castille-22-inch-wide-bronze-rustic-modern-pendant-light__1g894/p",
      collection: "/chandeliers",
      collection_filtered: "/chandeliers/?category-1=chandeliers&brand=Possini%20Euro%20Design&facets=category-1%2Cbrand%27",
      search: "/s?q=Possini%20Euro%20Design",
    },
    browser: 'electron',
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: "GTM-1234567",
  },

  experimental: {
    nodeVersion: 18,
    cypressVersion: 12,
  },

  vtexHeadlessCms: {
    webhookUrls: [
      "https://demoaccount4.myvtex.com/cms-releases/webhook-releases",
    ],
  },
}
