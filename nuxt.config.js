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
  plugins: ["~/plugins/maps.client", "~/plugins/dataApi"],
  modules: [],
  buildModules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/sass/app.scss"],
  build: {
    extractCSS: true,
    loaders: {
      limit: 0,
    },
  },
};
