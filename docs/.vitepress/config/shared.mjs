import { defineConfig } from "vitepress"

export const shared = defineConfig({
  base: "/istudy/", // 项目根路由，github部署后的基础路由如:xx.github.io/istudy/

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
