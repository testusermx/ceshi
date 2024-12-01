import comp from "E:/wangzhan/vuepress-starter/docs/.vuepress/.temp/pages/dl/index.html.vue"
const data = JSON.parse("{\"path\":\"/dl/\",\"title\":\"DL_test\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"dl/README.md\",\"excerpt\":\"\\n<p>一个深度学习的测试仓库</p>\\n\"}")
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
