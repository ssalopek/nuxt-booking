export default {
  components: true, //autoimport components so you don't need to do it manually
  head: {
    titleTemplate: "Nuxt Booking: %s",
    htmlAttrs: {
      //head attributes
      lang: "en",
    },
    bodyAttrs: {
      //body attributes
      class: ["my-style"],
    },
    meta: [
      {
        charset: "utf-8",
      },
    ],
  },
  router: {
    prefetchLinks: false,
  },
  plugins: [
    "~/plugins/maps.client",
    "~/plugins/dataApi",
    "~/plugins/auth.client",
  ],
  modules: [],
  buildModules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/sass/app.scss"],
  build: {
    extractCSS: true,
    loaders: {
      limit: 0,
    },
  },
  publicRuntimeConfig: {
    auth: {
      cookieName: "idToken",
      clientId:
        "215688638562-qsbi7fcc9u70a4h5i21bv7a32toqf0jq.apps.googleusercontent.com",
    },
  },
};
