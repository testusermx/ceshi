import comp from "E:/wangzhan/vuepress-starter/docs/.vuepress/.temp/pages/category/history/index.html.vue"
const data = JSON.parse("{\"path\":\"/category/history/\",\"title\":\"分类 History\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"分类 History\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"History\",\"key\":\"category\"},\"layout\":\"Category\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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