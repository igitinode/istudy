import { defineConfig } from "vitepress"
import utils from "./utils.mjs"
const { getSideBar } = utils

import { shared } from "./shared.mjs"
console.log(shared)

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/istudy/", // 项目根路由，github部署后的基础路由如:xx.github.io/istudy/
  // 站点级选项
  title: "isStudy", // 浏览器标签 title
  // 网站头部logo，不是浏览器的小logo
  // 将 favicon.ico 放在公共目录中，如果设置了 base，则使用 /base/favicon.ico
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/istudy/vitepress-logo-mini.svg",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "/istudy/vitepress-logo-mini.png",
      },
    ],
  ],
  cleanUrls: true,
  description: "vitepress + vue3 personal bolg", // 浏览器检索关键字
  // cleanUrls: true, // 路由地址隐藏.html
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // 主题级选项
    logo: "/vitepress-logo-mini.svg", // 站点标题前的icon。 会覆盖head的 href
    outline: "deep", // 文章目录显示方式，deep为完整显示，false不显示，[1,3]显示1-3级
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
      { text: "Front-end", link: "/front/engi/rule", activeMatch: "/front/" },
      { text: "Back-end", link: "/back/index", activeMatch: "/back/" },
      { text: "Others", link: "/others/operation/md", activeMatch: "/others/" },
    ],
    // 启动本地搜索功能
    search: {
      provider: "local",
    },

    // key:当路由中匹配到该项，value:返回值为对应的侧边栏，具体后边单独讲解

    // sidebar: [
    //   {
    //     text: "Examples",
    //     items: [
    //       { text: "Markdown Examples", link: "/markdown-examples" },
    //       { text: "Runtime API Examples", link: "/api-examples" },
    //     ],
    //   },
    // ],

    sidebar: {
      "/front/": getSideBar("front"),
      "/back/": getSideBar("back"),
      "/others": getSideBar("others"),
    },

    // 可以添加外部社交网站地址，如github,掘金，微博等等
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    // 底部区域，一般为版权相关
    footer: {
      message: "本站所有内容均为原创，转载请注明出处",
      copyright: "Copyright © 2024-present isStudy",
    },
  },
})
