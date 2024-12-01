export const categoriesMap = {"category":{"/":{"path":"/category/","map":{"History":{"path":"/category/history/","indexes":[0,1]},"CategoryA":{"path":"/category/categorya/","indexes":[2,3,4,5,6,7,8,9,10,11,12,13]},"CategoryB":{"path":"/category/categoryb/","indexes":[2,3,4,5,6,7,8,10,11,12]},"CategoryC":{"path":"/category/categoryc/","indexes":[14,15]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

