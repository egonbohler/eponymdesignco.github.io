const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/egonbohler/Documents/GitHub/eponymdesignco.github.io/src/templates/blog-post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/egonbohler/Documents/GitHub/eponymdesignco.github.io/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/egonbohler/Documents/GitHub/eponymdesignco.github.io/src/pages/404.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/egonbohler/Documents/GitHub/eponymdesignco.github.io/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/egonbohler/Documents/GitHub/eponymdesignco.github.io/src/pages/index.js"))),
  "component---src-pages-services-js": hot(preferDefault(require("/Users/egonbohler/Documents/GitHub/eponymdesignco.github.io/src/pages/services.js"))),
  "component---src-pages-studio-js": hot(preferDefault(require("/Users/egonbohler/Documents/GitHub/eponymdesignco.github.io/src/pages/studio.js"))),
  "component---src-pages-work-js": hot(preferDefault(require("/Users/egonbohler/Documents/GitHub/eponymdesignco.github.io/src/pages/work.js"))),
  "component---src-pages-form-submitted-js": hot(preferDefault(require("/Users/egonbohler/Documents/GitHub/eponymdesignco.github.io/src/pages/form-submitted.js")))
}

