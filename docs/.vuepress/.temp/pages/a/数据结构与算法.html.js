import comp from "E:/wangzhan/vuepress-starter/docs/.vuepress/.temp/pages/a/数据结构与算法.html.vue"
const data = JSON.parse("{\"path\":\"/a/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95.html\",\"title\":\"用来测试数据结构与算法文档\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"二级标题测试一\",\"slug\":\"二级标题测试一\",\"link\":\"#二级标题测试一\",\"children\":[{\"level\":3,\"title\":\"三级标题\",\"slug\":\"三级标题\",\"link\":\"#三级标题\",\"children\":[]},{\"level\":3,\"title\":\"三级标题测试二\",\"slug\":\"三级标题测试二\",\"link\":\"#三级标题测试二\",\"children\":[]}]},{\"level\":2,\"title\":\"二级标题2\",\"slug\":\"二级标题2\",\"link\":\"#二级标题2\",\"children\":[]},{\"level\":2,\"title\":\"二级标题3\",\"slug\":\"二级标题3\",\"link\":\"#二级标题3\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"a/数据结构与算法.md\",\"excerpt\":\"\\n<h2>二级标题测试一</h2>\\n<h3>三级标题</h3>\\n<div class=\\\"language-c++ line-numbers-mode\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"c++\\\" data-title=\\\"c++\\\"><pre><code><span class=\\\"line\\\">#include&lt;bits/stdc++&gt;</span>\\n<span class=\\\"line\\\">int main(){</span>\\n<span class=\\\"line\\\">\\tprintf(\\\"hello,world~\\\");</span>\\n<span class=\\\"line\\\">return 0;</span>\\n<span class=\\\"line\\\">}</span>\\n<span class=\\\"line\\\"></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\"}")
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
