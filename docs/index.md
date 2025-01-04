---
# https://vitepress.dev/reference/default-theme-home-page
layout: home # 声明当前页面的模块结构为首页，默认为 page

hero: # banner 部分
  name: "vitepress-blog" # 主标题
  text: "vitepress + vue3 personal bolg" #副标题
  tagline: My great project tagline #内容区
  image: #图片区
    src: /public/logo.png # 图片加载位置
    alt: "加载失败" # 图片加载失败提示语
  actions: # 按钮区域
    - theme: brand # todo:这个字段的值有哪些
      text: Markdown Examples # 按钮文案
      link: /markdown-examples # 跳转连接，以 docs 为根路径
    - theme: alt
      text: API Examples # 按钮文案
      link: /api-examples # 跳转连接，以 docs 为根路径

features: # 功能区
  - title: Feature A # 标题
    icon: # 图标
      src: /home/front-end-icon.svg # 图标地址
    link: /markdown-examples # 跳转连接
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit # 文案描述
  - title: Feature B # 标题
    icon: # 图标
      src: /home/front-end-icon.svg # 图标地址
    link: /markdown-examples # 跳转连接
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit # 文案描述
  - title: Feature C # 标题
    icon: # 图标
      src: /home/front-end-icon.svg # 图标地址
    link: /markdown-examples # 跳转连接
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit # 文案描述
---
