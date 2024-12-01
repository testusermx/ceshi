export const themeData = JSON.parse("{\"logo\":\"https://vuejs.press/images/hero.png\",\"navbar\":[\"/\",{\"text\":\"文档 A\",\"link\":\"/a/\"},{\"text\":\"文档 B\",\"link\":\"/b/\"},{\"text\":\"文章\",\"link\":\"/article/\"},{\"text\":\"分类\",\"link\":\"/category/\"},{\"text\":\"标签\",\"link\":\"/tag/\"},{\"text\":\"时间线\",\"link\":\"/timeline/\"}],\"sidebar\":{\"/a/\":[{\"title\":\"数据结构与算法\",\"collapsable\":false,\"children\":[\"/a/数据结构与算法.md\",\"/a/README.md\"]}],\"/b/\":[{\"title\":\"深度学习\",\"collapsable\":false,\"children\":[\"/b/深度学习.md\"]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
