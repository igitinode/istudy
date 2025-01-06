import { defineConfig } from "vitepress"

export const shared = defineConfig({
  title: "Vitepress",

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  themeConfig: {
    logo: { src: "/vitepress-logo-mini.svg", width: 24, height: 24 },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    carbonAds: { code: "CEBDT27Y", placement: "vuejsorg" },
  },
})
