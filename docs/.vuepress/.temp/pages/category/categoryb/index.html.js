import comp from "E:/wangzhan/vuepress-starter/docs/.vuepress/.temp/pages/category/categoryb/index.html.vue"
const data = JSON.parse("{\"path\":\"/category/categoryb/\",\"title\":\"分类 CategoryB\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"分类 CategoryB\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"CategoryB\",\"key\":\"category\"},\"layout\":\"Category\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
