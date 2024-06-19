export default defineNuxtConfig({
  modules: [
    "@nuxt/ui",
    "shadcn-nuxt",
    "@nuxt/image",
    "nuxt-icon",
    "@pinia/nuxt",
    [
      "@vee-validate/nuxt",
      {
        autoImports: true,
      },
    ],
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Lato: {
            wght: [300, 400, 700],
            ital: [300],
          },
        },
      },
    ],
    "@nuxt/ui",
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "Ui",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "@/components/ui",
  },
  imports: {
    dirs: ["stores"],
  },
  pinia: {
    storesDirs: ["./store/**"],
  },
});
