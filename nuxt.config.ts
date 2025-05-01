// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",

  devtools: { enabled: true },
  css: ["bootstrap/dist/css/bootstrap.min.css"],
  modules: ["@nuxt/eslint"],

  runtimeConfig: {
    public: {
      BASE_URL: process.env.NUXT_PUBLIC_BASE_URL,
    },
  },

  imports: {
    presets: [
      {
        from: "@vue/apollo-composable",
        imports: ["useMutation", "useQuery"],
      },
      {
        from: "graphql-tag",
        imports: ["gql"],
      },
    ],
  },

  eslint: {
    config: {
      stylistic: {
        semi: true,
        quotes: "double",
        commaDangle: "always-multiline",
        indent: "tab",
      },
    },
  },

  nitro: { preset: "vercel" },
});
