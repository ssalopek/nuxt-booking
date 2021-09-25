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
  buildModules: ["@nuxtjs/tailwindcss"],
};
