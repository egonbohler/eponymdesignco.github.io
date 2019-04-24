// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": () => import("/Users/egonbohler/Documents/GitHub/eponymdesignco.github.io/src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---src-pages-404-js": () => import("/Users/egonbohler/Documents/GitHub/eponymdesignco.github.io/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-contact-js": () => import("/Users/egonbohler/Documents/GitHub/eponymdesignco.github.io/src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-index-js": () => import("/Users/egonbohler/Documents/GitHub/eponymdesignco.github.io/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-studio-js": () => import("/Users/egonbohler/Documents/GitHub/eponymdesignco.github.io/src/pages/studio.js" /* webpackChunkName: "component---src-pages-studio-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/egonbohler/Documents/GitHub/eponymdesignco.github.io/.cache/data.json")

