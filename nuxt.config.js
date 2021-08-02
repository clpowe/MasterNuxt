export default {
  rootUrl:
    process.env.NODE_ENV === "production"
      ? "https://master-nuxt.vercel.app"
      : "http://localhost:3000",
  components: true,
  head: {
    titleTemplate: "Mastering Nuxt: %s",
    htmlAttrs: {
      lang: "en"
    },
    bodyAttrs: {
      class: ["my-style"]
    },
    meta: [
      {
        charset: "utf8"
      }
    ]
  },
  router: {
    prefetchLinks: false
  },
  plugins: [
    "~/plugins/maps.client",
    "~/plugins/dataApi",
    "~/plugins/auth.client",
    "~/plugins/vCalendar.client",
    "~/plugins/stripe.client"
  ],
  modules: [
    "~/modules/auth",
    "~/modules/algolia",
    "~/modules/cloudinary",
    "@nuxtjs/cloudinary",
    "@nuxt/image",
    "~/modules/stripe"
  ],
  cloudinary: {
    cloudName: "dakmxbppg"
  },
  buildModules: ["@nuxtjs/tailwindcss", "@nuxt/image"],

  css: ["~/assets/sass/app.scss"],
  build: {
    extractCSS: true,
    loaders: {
      limit: 0
    }
  },
  env: {},
  publicRuntimeConfig: {
    auth: {
      cookieName: "idToken",
      clientId:
        "365161380031-rssm5k6t8qi8citgens91dc2rgv5iri4.apps.googleusercontent.com"
    },
    algolia: {
      appId: "YARTXA3F22",
      apiKey: "7f922ab3dcba8774e2cae22a7f1031dd"
    },
    cloudinary: {
      apiKey: "725444293859858"
    },
    stripe: {
      key:
        "pk_test_51JJqoVEMghZEwVaEaOKP8mWZLSQ0yVg6PGmiGkkKBa0sz9iCsWlb2MVUccuMvLktBOJqfzpMilILbC9xouyt6HY200iRIHprse"
    }
  },
  privateRuntimeConfig: {
    algolia: {
      appId: "YARTXA3F22",
      apiKey: "f42d12ed7b1cc36f04c4e79a57eb5e6a"
    },
    cloudinary: {
      apiSecret: "VWJn8QjDdZ8nWecbc-zDoZeA3fg"
    },
    stripe: {
      secretKey: process.env.STRIPE_SECRET_KEY
    }
  },
  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/dakmxbppg/image/upload/"
    }
  }
};
