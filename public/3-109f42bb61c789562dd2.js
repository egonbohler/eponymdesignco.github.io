(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{152:function(e,t,a){"use strict";a.d(t,"b",function(){return o});var M=a(0),i=a.n(M),n=a(4),r=a.n(n),s=a(33),L=a.n(s);a.d(t,"a",function(){return L.a});a(153);var u=i.a.createContext({}),o=function(e){return i.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};o.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},153:function(e,t,a){var M;e.exports=(M=a(160))&&M.default||M},154:function(e,t,a){"use strict";var M=a(0),i=a.n(M),n=a(7),r=a.n(n),s=a(152),L=function(e){function t(){for(var t,a=arguments.length,M=new Array(a),i=0;i<a;i++)M[i]=arguments[i];return(t=e.call.apply(e,[this].concat(M))||this).state={hamburgerActive:!1},t.handleToggle=function(){t.setState(function(e){return{hamburgerActive:!e.hamburgerActive}}),t.props.toggleMenu(t.state.hamburgerActive)},t}return r()(t,e),t.prototype.render=function(){return i.a.createElement("button",{"aria-label":"Open Navigation Menu",role:"navigation",id:"toggle-main-menu-mobile",className:"hamburger hamburger--3dx "+(this.state.hamburgerActive?"is-active":""),type:"button",onClick:this.handleToggle},i.a.createElement("span",{className:"hamburger-box"},i.a.createElement("span",{className:"/"===this.props.currentPath&&this.props.isTop||this.state.hamburgerActive?"hamburger-inner-inverted":"hamburger-inner"})))},t}(M.Component),u=(a(157),a(158),a(161)),o=a(155),l=a(156),c=function(e){var t=e.data.site.siteMetadata.menuLinks;return i.a.createElement("div",null,i.a.createElement("div",{id:"main-menu-mobile","aria-label":"Navigation Menu",role:"navigation",className:"main-menu-mobile "+(e.active?"open":"")},i.a.createElement("ul",null,t.map(function(e){return i.a.createElement("li",{key:e.name},i.a.createElement(s.a,{to:e.link,"aria-label":e.link},e.name))})),i.a.createElement(o.b.Provider,{value:{color:"white",className:"global-class-name",size:"2em"}},i.a.createElement("div",{style:{marginTop:"3em"}},i.a.createElement("a",{href:"https://www.facebook.com/eponym.design","aria-label":"Link to Facebook Page",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(l.c,{style:{margin:"1em"}})),i.a.createElement("a",{href:"https://dribbble.com/","aria-label":"Link to Dribbble Page",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(l.b,{style:{margin:"1em"}})),i.a.createElement("a",{href:"https://www.instagram.com/eponym.design/","aria-label":"Link to Instagram Page",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(l.d,{style:{margin:"1em"}}))))),i.a.createElement("div",{id:"overlay",className:"overlay "+(e.active?"open":"")}))},j=function(e){return i.a.createElement(s.b,{query:"709782962",render:function(t){return i.a.createElement(c,{active:e.active,data:t})},data:u})},N=a(162),w=a.n(N),d=function(e){function t(){for(var t,a=arguments.length,M=new Array(a),i=0;i<a;i++)M[i]=arguments[i];return(t=e.call.apply(e,[this].concat(M))||this).state={menuActive:!1,isTop:!0},t.toggleMenu=function(){t.setState(function(e){return{menuActive:!e.menuActive}})},t.checkScroll=function(){window.addEventListener("scroll",function(){var e=window.scrollY<100;e!==t.state.isTop&&t.setState({isTop:e})})},t}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.checkScroll()},a.render=function(){return i.a.createElement("div",{id:"nav",className:"header sticky"},i.a.createElement("div",{className:"container "+(this.state.isTop?"nav-top":"nav-scrolled")},i.a.createElement("div",{className:"logo"},i.a.createElement(s.a,{to:"/","aria-label":"Link to Home"},i.a.createElement("img",{alt:"logo",src:w.a,className:"/"===this.props.currentPath?"logo-inverted":""}))),i.a.createElement(j,{active:this.state.menuActive,toggleMenu:this.toggleMenu}),i.a.createElement(L,{className:"hamburger",toggleMenu:this.toggleMenu,currentPath:this.props.currentPath,isTop:this.state.isTop})))},t}(M.Component),g=a(163),T=function(e){var t=e.data.site.siteMetadata.menuLinks;return i.a.createElement("div",{className:"footer-strip"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"footer"},i.a.createElement("ul",{className:"footer-menu"},t.map(function(e){return i.a.createElement("li",{key:e.name},i.a.createElement(s.a,{to:e.link,"aria-label":e.link},e.name))})),i.a.createElement(o.b.Provider,{value:{color:"white",className:"global-class-name",size:"1.5rem"},style:{margin:"0 auto"}},i.a.createElement("div",null,i.a.createElement("a",{href:"https://www.facebook.com/eponym.design","aria-label":"Link to Facebook Page",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(l.c,{style:{marginRight:"1em"}})),i.a.createElement("a",{href:"https://dribbble.com/","aria-label":"Link to Dribbble Page",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(l.a,{style:{marginRight:"1em"}})),i.a.createElement("a",{href:"https://www.instagram.com/eponym.design/","aria-label":"Link to Instagram Page",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(l.d,null))))),i.a.createElement("div",null,i.a.createElement("div",{className:"copyright"},"© "+(new Date).getFullYear()+" "+e.data.site.siteMetadata.title))))},y=function(e){return i.a.createElement(s.b,{query:"3401424843",render:function(e){return i.a.createElement(T,{data:e})},data:g})};a(165),t.a=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"page"+(e.bodyClass?" "+e.bodyClass:"")},i.a.createElement("div",{id:"wrapper",className:"wrapper"},i.a.createElement(d,{currentPath:e.currentPath}),e.children),i.a.createElement(y,null)))}},159:function(e,t,a){"use strict";var M=a(164),i=a(0),n=a.n(i),r=a(4),s=a.n(r),L=a(168),u=a.n(L),o=a(152);function l(e){var t=e.description,a=e.lang,i=e.meta,r=e.keywords,s=e.title;return n.a.createElement(o.b,{query:c,render:function(e){var M=t||e.site.siteMetadata.description;return n.a.createElement(u.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:M},{property:"og:title",content:s},{property:"og:description",content:M},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:M}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(i)})},data:M})}l.defaultProps={lang:"en",meta:[],keywords:["Eponym","Eponym Design","Eponym Design Company","Eponym Design Collective","Eponym Design Company Cleveland","Eponym Design Collective Cleveland","Eponym Design Company Cleveland Ohio","Eponym Design Collective Cleveland Ohio","design","design cleveland","design cleveland ohio","designer","designer near me","designer cleveland","designer cleveland ohio","designers","designers near me","designers cleveland","designers cleveland ohio","graphic design","graphic design cleveland","graphic design cleveland ohio","graphic designer near me","graphic designers near me","web design","web design cleveland","web design cleveland ohio","web designer near me","web designers near me","web developer","web developer cleveland","web developer cleveland ohio","web developer near me","web developers near me","web development","web development cleveland","web development cleveland ohio","web development near me","creative agency","creative agency near me","creative agency cleveland","creative agency cleveland ohio","design agency","design agency near me","design agency cleveland","design agency cleveland ohio","digital advertising","digital advertising near me","digital advertising cleveland","digital advertising cleveland ohio","print advertising","print advertising near me","print advertising cleveland","print advertising cleveland ohio","logo design","logo design near me","logo design cleveland","logo design cleveland ohio","brand identity","brand identity near me","brand identity cleveland","brand identity cleveland ohio","rebrand","rebrand near me","rebrand cleveland","rebrand cleveland ohio"]},l.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=l;var c="1315885718"},160:function(e,t,a){"use strict";a.r(t);a(34);var M=a(0),i=a.n(M),n=a(4),r=a.n(n),s=a(55),L=a(2),u=function(e){var t=e.location,a=L.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};u.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=u},161:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Work",link:"/work"},{name:"Services",link:"/services"},{name:"Our Studio",link:"/studio"},{name:"Contact",link:"/contact"}]}}}}},162:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuNCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIzMzBweCIgaGVpZ2h0PSIzMzBweCIgdmlld0JveD0iMCAwIDMzMCAzMzAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMzMCAzMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik02NS40MDEsMTg1LjYyNWg0LjExMnYtMzcuNDRoNi4zNjh2NDMuMjY0aC0xNi44NVY5MC44NjloMTYuODV2NDMuMjY2aC02LjM2OHYtMzcuNDRoLTQuMTEydjQxLjU1NWwxMC40ODEtMC4wMDN2NS44MwoJCQlINjUuNDAzTDY1LjQwMSwxODUuNjI1eiIvPgoJCTxwYXRoIGQ9Ik0xMDAuMjQ5LDE5MS40NDloLTYuMzY3VjkwLjg2N2g4LjQyNGM0LjY0NiwwLDguNDI0LDMuNzc5LDguNDI0LDguNDI0djM5Ljc5NWMwLDQuNjQzLTMuNzc3LDguNDI0LTguNDI0LDguNDI0aC0yLjA1NwoJCQlWMTkxLjQ0OXogTTEwMi4zMDcsMTQxLjY4MmMxLjEzMiwwLDIuMDU1LTAuOTIzLDIuMDU1LTIuMDU3Vjk4Ljc1YzAtMS4xMzMtMC45MjMtMi4wNTctMi4wNTctMi4wNTdoLTIuMDU3djQ0Ljk4OAoJCQlMMTAyLjMwNywxNDEuNjgyeiIvPgoJCTxwYXRoIGQ9Ik0xNDUuNTc1LDk4Ljc2MXY4NC44MDdjMCw0LjY0Ni0zLjc3Nyw4LjQ2MS04LjQyMiw4LjQ2MWMtNC42NDYsMC04LjQyNS0zLjgxNC04LjQyNS04LjQ2MVY5OC43NjEKCQkJYzAtNC42NDYsMy43NzktOC40MjYsOC40MjMtOC40MjZDMTQxLjc5Nyw5MC4zMzUsMTQ1LjU3NSw5NC4xMTYsMTQ1LjU3NSw5OC43NjF6IE0xMzkuMjA5LDk4LjIxNwoJCQljMC0xLjEzMi0wLjkyNC0yLjA1Ni0yLjA1OS0yLjA1NmMtMS4xMzMsMC0yLjA1NSwwLjkyNC0yLjA1NSwyLjA1NnY4NS44OWMwLDEuMTM3LDAuOTIyLDIuMDU3LDIuMDU3LDIuMDU3CgkJCWMxLjEzMywwLDIuMDU3LTAuOTIsMi4wNTctMi4wNTdWOTguMjE3eiIvPgoJCTxwYXRoIGQ9Ik0xOTAuOTA4LDE4My41NjhjMCw0LjY0Ni0zLjc3OSw4LjQ2MS04LjQyNCw4LjQ2MWMtNC42NDYsMC04LjQyNi0zLjgxNC04LjQyNi04LjQ2MVY5OC4yMTcKCQkJYzAtMS4xMzItMC45MjItMi4wNTQtMi4wNTctMi4wNTRjLTEuMTMzLDAtMi4wNTcsMC45MjItMi4wNTcsMi4wNTR2OTMuMjMyaC02LjM2N1Y5OC43NjFjMC00LjY0NiwzLjc3OS04LjQyNSw4LjQyMy04LjQyNQoJCQljNC42NDYsMCw4LjQyNCwzLjc3OSw4LjQyNCw4LjQyNXY4NS4zNDZjMCwxLjEzNywwLjkyMiwyLjA1NywyLjA1NywyLjA1N2MxLjEzMywwLDIuMDU3LTAuOTIsMi4wNTctMi4wNTdWOTAuODc2aDYuMzY5VjE4My41Njh6IgoJCQkvPgoJCTxwYXRoIGQ9Ik0yMjUuNjM5LDEzOS42NTZjMCwzLjUyMS0yLjE2OCw2LjUzNy01LjIzOCw3Ljc5N3Y0My45OTdoLTYuMzY5di00My45OTdjLTMuMDctMS4yNjItNS4yNDQtNC4yNzctNS4yNDQtNy43OTdWOTAuODY5CgkJCWg2LjM2OVYxNDAuMmMwLDEuMTMyLDAuOTI2LDIuMDU0LDIuMDU3LDIuMDU0YzEuMTM3LDAsMi4wNTctMC45MjIsMi4wNTctMi4wNTRWOTAuODY5aDYuMzY5VjEzOS42NTZ6Ii8+CgkJPHBhdGggZD0iTTI3MC45NjcsOTguNzU5djkyLjY5aC02LjM2OVY5OC4yMTdjMC0xLjEzNC0wLjkyLTIuMDU2LTIuMDU3LTIuMDU2Yy0xLjEzMSwwLTIuMDU3LDAuOTIyLTIuMDU3LDIuMDU2djkzLjIzMmgtNi4zNjMKCQkJVjk4LjIxN2MwLTEuMTM0LTAuOTI2LTIuMDU2LTIuMDYyLTIuMDU2Yy0xLjEzMSwwLTIuMDUxLDAuOTIyLTIuMDUxLDIuMDU2djkzLjIzMmgtNi4zNjl2LTkyLjY5YzAtNC42NDUsMy43NzktOC40MjQsOC40Mi04LjQyNAoJCQljMS45ODYsMCwzLjgwMywwLjY5Miw1LjI0NCwxLjg0YzEuNDQxLTEuMTQ3LDMuMjU4LTEuODQsNS4yMzgtMS44NEMyNjcuMTg4LDkwLjMzNSwyNzAuOTY3LDk0LjExNSwyNzAuOTY3LDk4Ljc1OXoiLz4KCTwvZz4KCTxnPgoJCTxwYXRoIGQ9Ik0xMTAuOTU5LDIzOS40NDlWMjEzLjgyaDUuNDM2YzIuMTExLDAsMy43MTQsMC41NzQsNC44MDcsMS43MjljMS4wOTIsMS4xNDgsMS42MzgsMi43ODMsMS42MzgsNC44OTN2MTEuOTg4CgkJCWMwLDIuNDAyLTAuNTgzLDQuMTcyLTEuNzQ2LDUuMzA5Yy0xLjE2NSwxLjE0My0yLjgzOSwxLjcxMS01LjAyMiwxLjcxMUgxMTAuOTU5eiBNMTE0LjYzLDIxNy4yNzF2MTguNzIxaDEuNjkyCgkJCWMxLjAzMiwwLDEuNzY1LTAuMjU4LDIuMTk3LTAuNzczYzAuNDMyLTAuNTE2LDAuNjQ2LTEuMzI0LDAuNjQ2LTIuNDMydi0xMi4zNDZjMC0xLjAwOC0wLjIwMy0xLjc4Ny0wLjYxMS0yLjMzOAoJCQljLTAuNDA5LTAuNTUxLTEuMTUyLTAuODMyLTIuMjMyLTAuODMySDExNC42M3oiLz4KCQk8cGF0aCBkPSJNMTI2LjI5NSwyMzkuNDQ5VjIxMy44MmgxMC45NDN2My40NTFoLTcuMjczdjcuNTI5aDYuMzM4djMuNDUxaC02LjMzOHY3LjUyM2g3LjI3M3YzLjY3NEgxMjYuMjk1eiIvPgoJCTxwYXRoIGQ9Ik0xNTEuNDk1LDIyMS4xOTdoLTMuNjcydi0wLjgyNmMwLTAuODQ0LTAuMTk4LTEuNTY0LTAuNTk2LTIuMThjLTAuMzk1LTAuNjA5LTEuMDYyLTAuOTItMS45OTYtMC45MgoJCQljLTAuNTA2LDAtMC45MTIsMC4xLTEuMjI1LDAuMjkzYy0wLjMxMiwwLjE4OC0wLjU2NCwwLjQyOC0wLjc1NiwwLjcxNWMtMC4xOTMsMC4zMTYtMC4zMjQsMC42NjgtMC4zOTYsMS4wNjYKCQkJYy0wLjA3MiwwLjM5My0wLjEwNywwLjgwOS0wLjEwNywxLjI0MmMwLDAuNTA0LDAuMDE4LDAuOTIsMC4wNTUsMS4yNmMwLjAzNSwwLjMzNCwwLjEyNSwwLjYzMywwLjI3LDAuODk2CgkJCWMwLjE0MywwLjI2NCwwLjM1MywwLjQ5MiwwLjYyOSwwLjY4NmMwLjI3NSwwLjE5MywwLjY1NCwwLjM4NywxLjEzNSwwLjU3NGwyLjgwOCwxLjExOWMwLjgxNSwwLjMxMSwxLjQ3NywwLjY4LDEuOTgsMS4wOTYKCQkJYzAuNTA0LDAuNDIyLDAuODk5LDAuOTA4LDEuMTg4LDEuNDU5YzAuMjY0LDAuNTc0LDAuNDQzLDEuMjMsMC41MzksMS45NjNzMC4xNDUsMS41NjQsMC4xNDUsMi41MDIKCQkJYzAsMS4wNzgtMC4xMDgsMi4wOC0wLjMyNCwzLjAwNmMtMC4yMTcsMC45MjYtMC41NjQsMS43MTEtMS4wNDQsMi4zNTVjLTAuNTA0LDAuNjc0LTEuMTY1LDEuMjAxLTEuOTgsMS41ODgKCQkJYy0wLjgxNSwwLjM4MS0xLjgxMiwwLjU3NC0yLjk4OCwwLjU3NGMtMC44ODgsMC0xLjcxNi0wLjE1OC0yLjQ4My0wLjQ2OWMtMC43NjktMC4zMTEtMS40MjgtMC43NDQtMS45OC0xLjI5NQoJCQljLTAuNTUyLTAuNTUxLTAuOTktMS4xOTUtMS4zMTMtMS45MjhzLTAuNDg2LTEuNTI5LTAuNDg2LTIuMzkxdi0xLjM3MWgzLjY3M3YxLjE1NGMwLDAuNjc0LDAuMTk3LDEuMjc3LDAuNTkzLDEuODE2CgkJCWMwLjM5NywwLjUzOSwxLjA2MiwwLjgwOSwxLjk5OCwwLjgwOWMwLjYyNCwwLDEuMTEtMC4wODgsMS40NTktMC4yN2MwLjM0Ny0wLjE3NiwwLjYxNi0wLjQzNCwwLjgxLTAuNzczCgkJCWMwLjE5Mi0wLjMzNCwwLjMwNy0wLjczOCwwLjM0Mi0xLjIwN2MwLjAzNy0wLjQ2OSwwLjA1NS0wLjk5LDAuMDU1LTEuNTY0YzAtMC42NzQtMC4wMjUtMS4yMjUtMC4wNzItMS42NTgKCQkJYy0wLjA0OS0wLjQyOC0wLjE0NC0wLjc3OS0wLjI4OS0xLjA0M2MtMC4xNjgtMC4yNjQtMC4zODktMC40OC0wLjY2NC0wLjY0NWMtMC4yNzctMC4xNy0wLjY0NC0wLjM1Mi0xLjEtMC41NDVsLTIuNjI3LTEuMDc4CgkJCWMtMS41ODQtMC42NDUtMi42NDYtMS41MDYtMy4xODctMi41NzJzLTAuODEtMi40MDgtMC44MS00LjAxNGMwLTAuOTYxLDAuMTMxLTEuODc1LDAuMzk1LTIuNzM2CgkJCWMwLjI2NC0wLjg2NywwLjY2MS0xLjYwNSwxLjE4OC0yLjIzMmMwLjUwNC0wLjYyNywxLjE0Ny0xLjExOSwxLjkyNy0xLjQ5NGMwLjc3OS0wLjM2OSwxLjcxMS0wLjU1NywyLjc5LTAuNTU3CgkJCWMwLjkxMSwwLDEuNzQ2LDAuMTY0LDIuNTAyLDAuNTA0YzAuNzU2LDAuMzM0LDEuNDA5LDAuNzc5LDEuOTYyLDEuMzNjMS4xMDQsMS4xNTQsMS42NTYsMi40NzMsMS42NTYsMy45NjFWMjIxLjE5N3oiLz4KCQk8cGF0aCBkPSJNMTU0LjMzOCwyMzkuNDQ5VjIxMy44MmgzLjY3MnYyNS42MjlIMTU0LjMzOHoiLz4KCQk8cGF0aCBkPSJNMTYxLjM1OCwyMTkuODY3YzAtMS4wMzEsMC4xOC0xLjk0NSwwLjU0LTIuNzM2czAuODM5LTEuNDUzLDEuNDQtMS45OGMwLjU3NS0wLjUwNCwxLjIyOS0wLjg5MSwxLjk2MS0xLjE1NAoJCQljMC43MzItMC4yNjQsMS40Ny0wLjM5MywyLjIxNC0wLjM5M3MxLjQ4MiwwLjEyOSwyLjIxNSwwLjM5M3MxLjM5NSwwLjY1LDEuOTk4LDEuMTU0YzAuNTc0LDAuNTI3LDEuMDQzLDEuMTg5LDEuNDA0LDEuOTgKCQkJYzAuMzU5LDAuNzkxLDAuNTM5LDEuNzA1LDAuNTM5LDIuNzM2djEuMjk1aC0zLjY3MnYtMS4yOTVjMC0wLjg5MS0wLjI0Ni0xLjU0MS0wLjczOC0xLjk2M3MtMS4wNzQtMC42MzMtMS43NDYtMC42MzMKCQkJcy0xLjI1NiwwLjIxMS0xLjc0NiwwLjYzM2MtMC40OTIsMC40MjItMC43MzgsMS4wNzItMC43MzgsMS45NjN2MTMuNTM1YzAsMC44OTEsMC4yNDYsMS41NDEsMC43MzgsMS45NjMKCQkJYzAuNDksMC40MTYsMS4wNzQsMC42MjcsMS43NDYsMC42MjdzMS4yNTQtMC4yMTEsMS43NDYtMC42MjdjMC40OTItMC40MjIsMC43MzgtMS4wNzIsMC43MzgtMS45NjN2LTQuODIyaC0yLjkxNnYtMy4yNGg2LjU4OAoJCQl2OC4wNjJjMCwxLjA3OC0wLjE4LDIuMDA0LTAuNTM5LDIuNzcxYy0wLjM2MSwwLjc2OC0wLjgzLDEuNDA2LTEuNDA0LDEuOTFjLTAuNjA0LDAuNTI3LTEuMjY2LDAuOTItMS45OTgsMS4xODQKCQkJcy0xLjQ3MSwwLjM5OC0yLjIxNSwwLjM5OHMtMS40ODItMC4xMzUtMi4yMTQtMC4zOThjLTAuNzMyLTAuMjY0LTEuMzg2LTAuNjU2LTEuOTYxLTEuMTg0Yy0wLjYwMi0wLjUwNC0xLjA4LTEuMTQzLTEuNDQtMS45MQoJCQlzLTAuNTQtMS42OTMtMC41NC0yLjc3MVYyMTkuODY3eiIvPgoJCTxwYXRoIGQ9Ik0xNzYuNzY2LDIzOS40NDlWMjEzLjgyaDMuNTI3bDUuNTQzLDE1LjQzOWgwLjA3NFYyMTMuODJoMy42N3YyNS42MjloLTMuNDU3bC01LjYxMy0xNS40MWgtMC4wNzJ2MTUuNDFIMTc2Ljc2NnoiLz4KCQk8cGF0aCBkPSJNMjExLjI1NCwyMzIuMTQzdjEuNTgyYzAsMC43OTEtMC4xNTIsMS41NDEtMC40NTEsMi4yNXMtMC43MTUsMS4zNDItMS4yNDIsMS44OTNzLTEuMTQzLDAuOTktMS44NTIsMS4zMTIKCQkJcy0xLjQ3MSwwLjQ4Ni0yLjI4NSwwLjQ4NmMtMC42OTcsMC0xLjQwNi0wLjA5NC0yLjEyNy0wLjI4N3MtMS4zNjctMC41MjctMS45NDUtMS4wMDhjLTAuNTc0LTAuNDgtMS4wNDktMS4xMDItMS40Mi0xLjg1NwoJCQljLTAuMzczLTAuNzU2LTAuNTYxLTEuNzE3LTAuNTYxLTIuODk1di0xNC4xMTVjMC0wLjgzOCwwLjE0Ni0xLjYxNywwLjQzNC0yLjMzOHMwLjY5Ny0xLjM0MiwxLjIyNS0xLjg2OQoJCQljMC41MjctMC41MzMsMS4xNTgtMC45NDMsMS44OTEtMS4yNDJjMC43MzItMC4zMDUsMS41NDMtMC40NTEsMi40MjgtMC40NTFjMS43MjksMCwzLjEzNSwwLjU2Miw0LjIxMywxLjY5MwoJCQljMC41MjcsMC41NTEsMC45NDMsMS4yMDEsMS4yNDIsMS45NTdzMC40NTEsMS41ODIsMC40NTEsMi40Njd2MS40NDFoLTMuNjc0di0xLjIyNWMwLTAuNzIxLTAuMjA1LTEuMzQyLTAuNjA5LTEuODY5CgkJCWMtMC40MS0wLjUyNy0wLjk2MS0wLjc5Ny0xLjY1OC0wLjc5N2MtMC45MTQsMC0xLjUxOCwwLjI4Ny0xLjgxNiwwLjg1Yy0wLjMwMSwwLjU2Mi0wLjQ1MSwxLjI3Ny0wLjQ1MSwyLjEzOXYxMy4xMDcKCQkJYzAsMC43NDQsMC4xNjQsMS4zNjUsMC40ODYsMS44NjlzMC45MDgsMC43NTYsMS43NDYsMC43NTZjMC4yNCwwLDAuNDk4LTAuMDQxLDAuNzczLTAuMTIzYzAuMjc1LTAuMDg4LDAuNTMzLTAuMjIzLDAuNzczLTAuNDE2CgkJCWMwLjIxNy0wLjE5MywwLjM5OC0wLjQ1NywwLjUzOS0wLjc5MWMwLjE0Ni0wLjMzNCwwLjIxNy0wLjc1NiwwLjIxNy0xLjI2di0xLjI2SDIxMS4yNTR6Ii8+CgkJPHBhdGggZD0iTTIxNC4wMjUsMjE5Ljg2N2MwLTEuMDMxLDAuMTgyLTEuOTQ1LDAuNTM5LTIuNzM2YzAuMzYzLTAuNzkxLDAuODM4LTEuNDUzLDEuNDQxLTEuOTgKCQkJYzAuNTc0LTAuNTA0LDEuMjMtMC44OTEsMS45NjMtMS4xNTRzMS40NzEtMC4zOTMsMi4yMTUtMC4zOTNjMC43MzgsMCwxLjQ3NywwLjEyOSwyLjIwOSwwLjM5M3MxLjQsMC42NSwxLjk5OCwxLjE1NAoJCQljMC41OCwwLjUyNywxLjA0OSwxLjE4OSwxLjQwNiwxLjk4czAuNTM5LDEuNzA1LDAuNTM5LDIuNzM2djEzLjUzNWMwLDEuMDc4LTAuMTgyLDIuMDA0LTAuNTM5LDIuNzcxcy0wLjgyNiwxLjQwNi0xLjQwNiwxLjkxCgkJCWMtMC41OTgsMC41MjctMS4yNjYsMC45Mi0xLjk5OCwxLjE4NHMtMS40NzEsMC4zOTgtMi4yMDksMC4zOThjLTAuNzQ0LDAtMS40ODItMC4xMzUtMi4yMTUtMC4zOThzLTEuMzg5LTAuNjU2LTEuOTYzLTEuMTg0CgkJCWMtMC42MDQtMC41MDQtMS4wNzgtMS4xNDMtMS40NDEtMS45MWMtMC4zNTctMC43NjgtMC41MzktMS42OTMtMC41MzktMi43NzFWMjE5Ljg2N3ogTTIxNy42OTksMjMzLjQwMgoJCQljMCwwLjg5MSwwLjI0NiwxLjU0MSwwLjczOCwxLjk2M2MwLjQ4NiwwLjQxNiwxLjA3MiwwLjYyNywxLjc0NiwwLjYyN2MwLjY2OCwwLDEuMjU0LTAuMjExLDEuNzQ2LTAuNjI3CgkJCWMwLjQ4Ni0wLjQyMiwwLjczMi0xLjA3MiwwLjczMi0xLjk2M3YtMTMuNTM1YzAtMC44OTEtMC4yNDYtMS41NDEtMC43MzItMS45NjNjLTAuNDkyLTAuNDIyLTEuMDc4LTAuNjMzLTEuNzQ2LTAuNjMzCgkJCWMtMC42NzQsMC0xLjI2LDAuMjExLTEuNzQ2LDAuNjMzYy0wLjQ5MiwwLjQyMi0wLjczOCwxLjA3Mi0wLjczOCwxLjk2M1YyMzMuNDAyeiIvPgoJCTxwYXRoIGQ9Ik0yMjkuMzU5LDIzOS40NDl2LTMuNjc0aDMuNjc0djMuNjc0SDIyOS4zNTl6Ii8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg=="},163:function(e){e.exports={data:{site:{siteMetadata:{title:"Eponym Design Co.",menuLinks:[{name:"Work",link:"/work"},{name:"Services",link:"/services"},{name:"Our Studio",link:"/studio"},{name:"Contact",link:"/contact"}]}}}}},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Eponym Design Co.",description:"Eponym Design Collective. A Cleveland, Ohio based creative studio."}}}}},167:function(e,t,a){"use strict";var M=a(8);t.__esModule=!0,t.default=void 0;var i,n=M(a(7)),r=M(a(36)),s=M(a(75)),L=M(a(76)),u=M(a(0)),o=M(a(4)),l=function(e){var t=(0,L.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},c=Object.create({}),j=function(e){var t=l(e),a=t.fluid?t.fluid.src:t.fixed.src;return c[a]||!1},N=new WeakMap;var w=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(N.has(e.target)){var t=N.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),N.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),N.set(e,t)),function(){a.unobserve(e),N.delete(e)}},d=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",M=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+M+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+a+i+t+r+n+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},g=u.default.forwardRef(function(e,t){var a=e.sizes,M=e.srcSet,i=e.src,n=e.style,r=e.onLoad,o=e.onError,l=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return u.default.createElement("img",(0,L.default)({sizes:a,srcSet:M,src:i},l,{onLoad:r,onError:o,ref:t,style:(0,L.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});g.propTypes={style:o.default.object,onError:o.default.func,onLoad:o.default.func};var T=function(e){function t(t){var a;a=e.call(this,t)||this;var M=!0,i=!1,n=t.fadeIn,s=j(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(M=!1,i=!0),"undefined"==typeof window&&(M=!1),t.critical&&(M=!0,i=!1);var L=!(t.critical&&!t.fadeIn);return a.state={isVisible:M,imgLoaded:!1,imgCached:!1,IOSupported:i,fadeIn:n,hasNoScript:L,seenBefore:s},a.imageRef=u.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,r.default)((0,r.default)(a))),a.handleRef=a.handleRef.bind((0,r.default)((0,r.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:j(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=w(e,function(){var e=j(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=l(e),a=t.fluid?t.fluid.src:t.fixed.src,c[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=l(this.props),t=e.title,a=e.alt,M=e.className,i=e.style,n=void 0===i?{}:i,r=e.imgStyle,s=void 0===r?{}:r,o=e.placeholderStyle,c=void 0===o?{}:o,j=e.placeholderClassName,N=e.fluid,w=e.fixed,T=e.backgroundColor,y=e.Tag,C=e.itemProp,D=this.state.imgLoaded||!1===this.state.fadeIn,z=!0===this.state.fadeIn&&!this.state.imgCached,m=(0,L.default)({opacity:D?1:0,transition:z?"opacity 0.5s":"none"},s),E="boolean"==typeof T?"lightgray":T,S={transitionDelay:"0.5s"},p=(0,L.default)({opacity:this.state.imgLoaded?0:1},z&&S,s,c),I={title:t,alt:this.state.isVisible?"":a,style:p,className:j};if(N){var x=N;return u.default.createElement(y,{className:(M||"")+" gatsby-image-wrapper",style:(0,L.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(x.srcSet)},u.default.createElement(y,{style:{width:"100%",paddingBottom:100/x.aspectRatio+"%"}}),E&&u.default.createElement(y,{title:t,style:(0,L.default)({backgroundColor:E,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&S)}),x.base64&&u.default.createElement(g,(0,L.default)({src:x.base64},I)),x.tracedSVG&&u.default.createElement(g,(0,L.default)({src:x.tracedSVG},I)),this.state.isVisible&&u.default.createElement("picture",null,x.srcSetWebp&&u.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),u.default.createElement(g,{alt:a,title:t,sizes:x.sizes,src:x.src,crossOrigin:this.props.crossOrigin,srcSet:x.srcSet,style:m,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:C})),this.state.hasNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:d((0,L.default)({alt:a,title:t},x))}}))}if(w){var f=w,A=(0,L.default)({position:"relative",overflow:"hidden",display:"inline-block",width:f.width,height:f.height},n);return"inherit"===n.display&&delete A.display,u.default.createElement(y,{className:(M||"")+" gatsby-image-wrapper",style:A,ref:this.handleRef,key:"fixed-"+JSON.stringify(f.srcSet)},E&&u.default.createElement(y,{title:t,style:(0,L.default)({backgroundColor:E,width:f.width,opacity:this.state.imgLoaded?0:1,height:f.height},z&&S)}),f.base64&&u.default.createElement(g,(0,L.default)({src:f.base64},I)),f.tracedSVG&&u.default.createElement(g,(0,L.default)({src:f.tracedSVG},I)),this.state.isVisible&&u.default.createElement("picture",null,f.srcSetWebp&&u.default.createElement("source",{type:"image/webp",srcSet:f.srcSetWebp,sizes:f.sizes}),u.default.createElement(g,{alt:a,title:t,width:f.width,height:f.height,sizes:f.sizes,src:f.src,crossOrigin:this.props.crossOrigin,srcSet:f.srcSet,style:m,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:C})),this.state.hasNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:d((0,L.default)({alt:a,title:t},f))}}))}return null},t}(u.default.Component);T.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var y=o.default.shape({width:o.default.number.isRequired,height:o.default.number.isRequired,src:o.default.string.isRequired,srcSet:o.default.string.isRequired,base64:o.default.string,tracedSVG:o.default.string,srcWebp:o.default.string,srcSetWebp:o.default.string}),C=o.default.shape({aspectRatio:o.default.number.isRequired,src:o.default.string.isRequired,srcSet:o.default.string.isRequired,sizes:o.default.string.isRequired,base64:o.default.string,tracedSVG:o.default.string,srcWebp:o.default.string,srcSetWebp:o.default.string});T.propTypes={resolutions:y,sizes:C,fixed:y,fluid:C,fadeIn:o.default.bool,title:o.default.string,alt:o.default.string,className:o.default.oneOfType([o.default.string,o.default.object]),critical:o.default.bool,crossOrigin:o.default.oneOfType([o.default.string,o.default.bool]),style:o.default.object,imgStyle:o.default.object,placeholderStyle:o.default.object,placeholderClassName:o.default.string,backgroundColor:o.default.oneOfType([o.default.string,o.default.bool]),onLoad:o.default.func,onError:o.default.func,onStartLoad:o.default.func,Tag:o.default.string,itemProp:o.default.string};var D=T;t.default=D}}]);
//# sourceMappingURL=3-109f42bb61c789562dd2.js.map