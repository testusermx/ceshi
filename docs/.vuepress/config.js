import { blogPlugin } from '@vuepress/plugin-blog'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',

  title: 'VuePress',
  description: '我的个人网站',
  base: '/ceshi/',
  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: [
      '/',
      {
        text: '文档 A',
        link: '/a/',  // 指向 A 仓库的内容
      },
      {
        text: '文档 B',
        link: '/b/',  // 指向 B 仓库的内容
      },
      {
        text: '文章',
        link: '/article/',
      },
      {
        text: '分类',
        link: '/category/',
      },
      {
        text: '标签',
        link: '/tag/',
      },
      {
        text: '时间线',
        link: '/timeline/',
      },
    ],

    sidebar: {
      '/a/': [
        {
          title: '数据结构与算法',
          collapsable: false,
          children: [
            '/a/数据结构与算法.md',  // 假设这是 A 仓库中的文档文件
            '/a/README.md',  // 这里可以是 A 仓库中的其他文档
          ],
        },
      ],
      '/b/': [
        {
          title: '深度学习',
          collapsable: false,
          children: [
            '/b/深度学习.md',  // 假设这是 B 仓库中的文档文件
          ],
        },
      ],
    },
  }),

  plugins: [
    blogPlugin({
      filter: ({ filePathRelative }) =>
          filePathRelative ? filePathRelative.startsWith('posts/') : false,
      getInfo: ({ frontmatter, title, data }) => ({
        title,
        author: frontmatter.author || '',
        date: frontmatter.date || null,
        category: frontmatter.category || [],
        tag: frontmatter.tag || [],
        excerpt:
            typeof frontmatter.excerpt === 'string'
                ? frontmatter.excerpt
                : data?.excerpt || '',
      }),
      excerptFilter: ({ frontmatter }) =>
          !frontmatter.home &&
          frontmatter.excerpt !== false &&
          typeof frontmatter.excerpt !== 'string',
      category: [
        {
          key: 'category',
          getter: (page) => page.frontmatter.category || [],
          layout: 'Category',
          itemLayout: 'Category',
          frontmatter: () => ({
            title: '分类',
            sidebar: false,
          }),
          itemFrontmatter: (name) => ({
            title: `分类 ${name}`,
            sidebar: false,
          }),
        },
      ],
      type: [
        {
          key: 'article',
          filter: (page) => !page.frontmatter.archive,
          layout: 'Article',
          frontmatter: () => ({
            title: '文章',
            sidebar: false,
          }),
          sorter: (pageA, pageB) => {
            if (pageA.frontmatter.sticky && pageB.frontmatter.sticky)
              return pageB.frontmatter.sticky - pageA.frontmatter.sticky
            if (pageA.frontmatter.sticky && !pageB.frontmatter.sticky) return -1
            if (!pageA.frontmatter.sticky && pageB.frontmatter.sticky) return 1
            if (!pageB.frontmatter.date) return 1
            if (!pageA.frontmatter.date) return -1
            return (
                new Date(pageB.frontmatter.date).getTime() -
                new Date(pageA.frontmatter.date).getTime()
            )
          },
        },
        {
          key: 'timeline',
          filter: (page) => page.frontmatter.date instanceof Date,
          sorter: (pageA, pageB) =>
              new Date(pageB.frontmatter.date).getTime() -
              new Date(pageA.frontmatter.date).getTime(),
          layout: 'Timeline',
          frontmatter: () => ({
            title: '时间线',
            sidebar: false,
          }),
        },
      ],
      hotReload: true,
    }),
  ],

  bundler: viteBundler(),
})
