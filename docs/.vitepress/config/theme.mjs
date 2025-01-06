import { defineConfig } from "vitepress"
import utils from "./utils.mjs"
const { getSideBar } = utils

import { sidebarGuide } from "./sidebarGuide.mjs"

export const theme = defineConfig({
  themeConfig: {
    // 导航栏上显示的 Logo，位于站点标题前。
    logo: { src: "/vitepress-logo-mini.svg", width: 24, height: 24 },

    // 在导航栏中展示带有图标的社交帐户链接。
    /* prettier-ignore */
    socialLinks: [
    { icon: "github", link: "https://github.com/igitinode" },
    { icon: 'twitter', link: '...' }
  ],

    // 文章目录显示方式，deep为完整显示，false不显示，[1,3]显示1-3级
    outline: "deep",

    // 导航菜单项的配置
    nav: nav(),

    // 侧边栏是文档的主要导航块
    sidebar: {
      "/guide/": { base: "/guide/", items: sidebarGuide() },
    },

    // 本地搜索
    search: {
      provider: "local",
    },

    // 自定义 lastUpdated
    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },

    // 页脚配置。可以添加 message 和 copyright。由于设计原因，仅当页面不包含侧边栏时才会显示页脚。
    footer: {
      message: "本站所有内容均为原创，转载请注明出处",
      copyright: "Copyright © 2024-present iStudy",
    },

    // 内置了对 Carbon Ads 的原生支持
    // carbonAds: { code: "", placement: "" },
  },
})

// 顶部导航栏菜单
function nav() {
  return [
    { text: "指南", link: "/guide/what-is-vitepress", activeMatch: "/guide/" },
  ]
}
