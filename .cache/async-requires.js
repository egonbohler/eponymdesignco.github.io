// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": () => import("/Users/egonbohler/Documents/GitHub/eponymdesignco.github.io/src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/egonbohler/Documents/GitHub/eponymdesignco.github.io/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/egonbohler/Documents/GitHub/eponymdesignco.github.io/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("/Users/egonbohler/Documents/GitHub/eponymdesignco.github.io/src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-index-js": () => import("/Users/egonbohler/Documents/GitHub/eponymdesignco.github.io/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-my-files-js": () => import("/Users/egonbohler/Documents/GitHub/eponymdesignco.github.io/src/pages/my-files.js" /* webpackChunkName: "component---src-pages-my-files-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/egonbohler/Documents/GitHub/eponymdesignco.github.io/.cache/data.json")

