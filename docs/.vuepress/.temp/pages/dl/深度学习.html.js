import comp from "E:/wangzhan/vuepress-starter/docs/.vuepress/.temp/pages/dl/深度学习.html.vue"
const data = JSON.parse("{\"path\":\"/dl/%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0.html\",\"title\":\"深度学习\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"二级标题\",\"slug\":\"二级标题\",\"link\":\"#二级标题\",\"children\":[]},{\"level\":2,\"title\":\"二级标题2\",\"slug\":\"二级标题2\",\"link\":\"#二级标题2\",\"children\":[{\"level\":3,\"title\":\"三级标题\",\"slug\":\"三级标题\",\"link\":\"#三级标题\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"dl/深度学习.md\",\"excerpt\":\"\\n<h2>二级标题</h2>\\n<p>深度学习测试</p>\\n<h2>二级标题2</h2>\\n<h3>三级标题</h3>\\n<h4>四级标题</h4>\\n<h4>四级标题2</h4>\\n\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
