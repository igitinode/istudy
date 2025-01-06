// 参考 数据源
export const sidebarReference = () => {
  return [
    {
      text: "参考",
      items: [
        { text: "站点配置", link: "site-config" },
        { text: "frontmatter 配置", link: "frontmatter-config" },
        { text: "运行时 API", link: "runtime-api" },
        { text: "CLI", link: "cli" },
        {
          text: "默认主题",
          base: "/zh/reference/default-theme-",
          items: [
            { text: "概览", link: "config" },
            { text: "导航栏", link: "nav" },
            { text: "侧边栏", link: "sidebar" },
            { text: "主页", link: "home-page" },
            { text: "页脚", link: "footer" },
            { text: "布局", link: "layout" },
            { text: "徽章", link: "badge" },
            { text: "团队页", link: "team-page" },
            { text: "上下页链接", link: "prev-next-links" },
            { text: "编辑链接", link: "edit-link" },
            { text: "最后更新时间戳", link: "last-updated" },
            { text: "搜索", link: "search" },
            { text: "Carbon Ads", link: "carbon-ads" },
          ],
        },
      ],
    },
  ]
}
