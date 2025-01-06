---
# https://vitepress.dev/reference/default-theme-home-page
layout: home # 声明当前页面的模块结构为首页，默认为 page

title: istudy
titleTemplate: 学习永远在路上

hero: # banner 部分
  name: "首页Vitepress" # 主标题
  text: "vitepress + vue3 personal bolg" #副标题
  tagline: My great project tagline #内容区
  image: #图片区
    src: /logo.png # 图片加载位置
    alt: "加载失败" # 图片加载失败提示语
  actions: # 按钮区域
    - theme: brand # todo:这个字段的值有哪些
      text: Markdown Examples # 按钮文案
      link: /markdown-examples # 跳转连接，以 docs 为根路径
    - theme: alt
      text: API Examples # 按钮文案
      link: /api-examples # 跳转连接，以 docs 为根路径

features: # 功能区
  - title: 专注内容 # 标题
    icon: 📝 # 图标
    link: /markdown-examples # 跳转连接
    details: 只需 Markdown 即可轻松创建美观的文档站点。 # 文案描述
  - title: 享受 Vite 无可比拟的体验 # 标题
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 256 256.32"><defs><linearGradient id="a" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF"/><stop offset="100%" stop-color="#BD34FE"/></linearGradient><linearGradient id="b" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83"/><stop offset="8.333%" stop-color="#FFDD35"/><stop offset="100%" stop-color="#FFA800"/></linearGradient></defs><path fill="url(#a)" d="M255.153 37.938 134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"/><path fill="url(#b)" d="M185.432.063 96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028 72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"/></svg> # 图标
    link: /markdown-examples # 跳转连接
    details: 服务器即时启动，闪电般的热更新，还可以使用基于 Vite 生态的插件。 # 文案描述
  - title: 使用 Vue 自定义 # 标题
    icon: # 图标
      src: /home/front-end-icon.svg # 图标地址
    link: /markdown-examples # 跳转连接
    details: 直接在 Markdown 中使用 Vue 语法和组件，或者使用 Vue 组件构建自定义主题。 # 文案描述
  - icon: 🚀
    title: 速度真的很快！
    details: 采用静态 HTML 实现快速的页面初次加载，使用客户端路由实现快速的页面切换导航。
---

<style>
/* 首页自定义样式 */
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
