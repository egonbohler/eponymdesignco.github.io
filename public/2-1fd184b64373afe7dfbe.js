(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{149:function(e,t,M){"use strict";M.d(t,"b",function(){return j});var a=M(0),i=M.n(a),L=M(4),r=M.n(L),u=M(33),s=M.n(u);M.d(t,"a",function(){return s.a});M(150);var n=i.a.createContext({}),j=function(e){return i.a.createElement(n.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};j.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},150:function(e,t,M){var a;e.exports=(a=M(156))&&a.default||a},151:function(e,t,M){"use strict";var a=M(0),i=M.n(a),L=M(7),r=M.n(L),u=M(149),s=function(e){function t(){for(var t,M=arguments.length,a=new Array(M),i=0;i<M;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={hamburgerActive:!1},t.handleToggle=function(){t.setState(function(e){return{hamburgerActive:!e.hamburgerActive}}),t.props.toggleMenu(t.state.hamburgerActive)},t}return r()(t,e),t.prototype.render=function(){return i.a.createElement("button",{id:"toggle-main-menu-mobile",className:"hamburger hamburger--3dx "+(this.state.hamburgerActive?"is-active":""),type:"button",onClick:this.handleToggle},i.a.createElement("span",{className:"hamburger-box"},i.a.createElement("span",{className:"/"===this.props.currentPath&&this.props.isTop||this.state.hamburgerActive?"hamburger-inner-inverted":"hamburger-inner"})))},t}(a.Component),n=(M(153),M(154),M(157)),j=M(152),N=M(155),c=function(e){var t=e.data.site.siteMetadata.menuLinks;return i.a.createElement("div",null,i.a.createElement("div",{id:"main-menu-mobile",className:"main-menu-mobile "+(e.active?"open":"")},i.a.createElement("ul",null,t.map(function(e){return i.a.createElement("li",{key:e.name},i.a.createElement(u.a,{to:e.link},e.name))})),i.a.createElement(j.b.Provider,{value:{color:"white",className:"global-class-name",size:"2em"}},i.a.createElement("div",{style:{marginTop:"3em"}},i.a.createElement("a",{href:"https://www.facebook.com/eponym.design",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(N.c,{style:{margin:"1em"}})),i.a.createElement("a",{href:"https://dribbble.com/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(N.b,{style:{margin:"1em"}})),i.a.createElement("a",{href:"https://www.instagram.com/eponym.design/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(N.d,{style:{margin:"1em"}}))))),i.a.createElement("div",{id:"overlay",className:"overlay "+(e.active?"open":"")}))},o=function(e){return i.a.createElement(u.b,{query:"709782962",render:function(t){return i.a.createElement(c,{active:e.active,data:t})},data:n})},l=M(158),w=M.n(l),T=M(159),d=M(163),C=M.n(d),y=M(4),D=M.n(y),g=function(e){var t=e.title,M=void 0===t?null:t,a=e.description,L=void 0===a?null:a,r=(e.image,e.pathname),s=void 0===r?null:r;e.article;return i.a.createElement(u.b,{query:"1485129425",render:function(e){var t=e.site.siteMetadata,a=t.defaultTitle,r=t.titleTemplate,u=t.defaultDescription,n=t.siteUrl,j=(t.defaultImage,t.twitterUsername,t.facebookAppID,{title:M||a,description:L||u,url:""+n+(s||"/")});return i.a.createElement(i.a.Fragment,null,i.a.createElement(C.a,{title:j.title,titleTemplate:r},i.a.createElement("meta",{name:"description",content:j.description})))},data:T})};g.propTypes={title:D.a.string,description:D.a.string,image:D.a.string,pathname:D.a.string,article:D.a.bool};var z=g,E=function(e){function t(){for(var t,M=arguments.length,a=new Array(M),i=0;i<M;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={menuActive:!1,isTop:!0},t.toggleMenu=function(){t.setState(function(e){return{menuActive:!e.menuActive}})},t.checkScroll=function(){window.addEventListener("scroll",function(){var e=window.scrollY<100;e!==t.state.isTop&&t.setState({isTop:e})})},t}r()(t,e);var M=t.prototype;return M.componentDidMount=function(){this.checkScroll()},M.render=function(){return i.a.createElement("div",{id:"nav",className:"header sticky"},i.a.createElement(z,null),i.a.createElement("div",{className:"container "+(this.state.isTop?"nav-top":"nav-scrolled")},i.a.createElement("div",{className:"logo"},i.a.createElement(u.a,{to:"/"},i.a.createElement("img",{alt:"logo",src:w.a,className:"/"===this.props.currentPath?"logo-inverted":""}))),i.a.createElement(o,{active:this.state.menuActive,toggleMenu:this.toggleMenu}),i.a.createElement(s,{className:"hamburger",toggleMenu:this.toggleMenu,currentPath:this.props.currentPath,isTop:this.state.isTop})))},t}(a.Component),S=M(160),m=function(e){var t=e.data.site.siteMetadata.menuLinks;return i.a.createElement("div",{className:"footer-strip"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"footer"},i.a.createElement("ul",{className:"footer-menu"},t.map(function(e){return i.a.createElement("li",{key:e.name},i.a.createElement(u.a,{to:e.link},e.name))})),i.a.createElement(j.b.Provider,{value:{color:"white",className:"global-class-name",size:"1rem"},style:{margin:"0 auto"}},i.a.createElement("div",null,i.a.createElement("a",{href:"https://www.facebook.com/eponym.design",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(N.c,{style:{marginRight:"1em"}})),i.a.createElement("a",{href:"https://dribbble.com/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(N.a,{style:{marginRight:"1em"}})),i.a.createElement("a",{href:"https://www.instagram.com/eponym.design/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(N.d,null))))),i.a.createElement("div",null,i.a.createElement("div",{className:"copyright"},"© "+(new Date).getFullYear()+" "+e.data.site.siteMetadata.title))))},I=function(e){return i.a.createElement(u.b,{query:"3401424843",render:function(e){return i.a.createElement(m,{data:e})},data:S})};M(164),t.a=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"page"+(e.bodyClass?" "+e.bodyClass:"")},i.a.createElement("div",{id:"wrapper",className:"wrapper"},i.a.createElement(E,{currentPath:e.currentPath}),e.children),i.a.createElement(I,null)))}},156:function(e,t,M){"use strict";M.r(t);M(34);var a=M(0),i=M.n(a),L=M(4),r=M.n(L),u=M(55),s=M(2),n=function(e){var t=e.location,M=s.default.getResourcesForPathnameSync(t.pathname);return M?i.a.createElement(u.a,Object.assign({location:t,pageResources:M},M.json)):null};n.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=n},157:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Work",link:"/work"},{name:"Services",link:"/services"},{name:"Our Studio",link:"/studio"},{name:"Contact",link:"/contact"}]}}}}},158:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuNCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIzMzBweCIgaGVpZ2h0PSIzMzBweCIgdmlld0JveD0iMCAwIDMzMCAzMzAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMzMCAzMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik02NS40MDEsMTg1LjYyNWg0LjExMnYtMzcuNDRoNi4zNjh2NDMuMjY0aC0xNi44NVY5MC44NjloMTYuODV2NDMuMjY2aC02LjM2OHYtMzcuNDRoLTQuMTEydjQxLjU1NWwxMC40ODEtMC4wMDN2NS44MwoJCQlINjUuNDAzTDY1LjQwMSwxODUuNjI1eiIvPgoJCTxwYXRoIGQ9Ik0xMDAuMjQ5LDE5MS40NDloLTYuMzY3VjkwLjg2N2g4LjQyNGM0LjY0NiwwLDguNDI0LDMuNzc5LDguNDI0LDguNDI0djM5Ljc5NWMwLDQuNjQzLTMuNzc3LDguNDI0LTguNDI0LDguNDI0aC0yLjA1NwoJCQlWMTkxLjQ0OXogTTEwMi4zMDcsMTQxLjY4MmMxLjEzMiwwLDIuMDU1LTAuOTIzLDIuMDU1LTIuMDU3Vjk4Ljc1YzAtMS4xMzMtMC45MjMtMi4wNTctMi4wNTctMi4wNTdoLTIuMDU3djQ0Ljk4OAoJCQlMMTAyLjMwNywxNDEuNjgyeiIvPgoJCTxwYXRoIGQ9Ik0xNDUuNTc1LDk4Ljc2MXY4NC44MDdjMCw0LjY0Ni0zLjc3Nyw4LjQ2MS04LjQyMiw4LjQ2MWMtNC42NDYsMC04LjQyNS0zLjgxNC04LjQyNS04LjQ2MVY5OC43NjEKCQkJYzAtNC42NDYsMy43NzktOC40MjYsOC40MjMtOC40MjZDMTQxLjc5Nyw5MC4zMzUsMTQ1LjU3NSw5NC4xMTYsMTQ1LjU3NSw5OC43NjF6IE0xMzkuMjA5LDk4LjIxNwoJCQljMC0xLjEzMi0wLjkyNC0yLjA1Ni0yLjA1OS0yLjA1NmMtMS4xMzMsMC0yLjA1NSwwLjkyNC0yLjA1NSwyLjA1NnY4NS44OWMwLDEuMTM3LDAuOTIyLDIuMDU3LDIuMDU3LDIuMDU3CgkJCWMxLjEzMywwLDIuMDU3LTAuOTIsMi4wNTctMi4wNTdWOTguMjE3eiIvPgoJCTxwYXRoIGQ9Ik0xOTAuOTA4LDE4My41NjhjMCw0LjY0Ni0zLjc3OSw4LjQ2MS04LjQyNCw4LjQ2MWMtNC42NDYsMC04LjQyNi0zLjgxNC04LjQyNi04LjQ2MVY5OC4yMTcKCQkJYzAtMS4xMzItMC45MjItMi4wNTQtMi4wNTctMi4wNTRjLTEuMTMzLDAtMi4wNTcsMC45MjItMi4wNTcsMi4wNTR2OTMuMjMyaC02LjM2N1Y5OC43NjFjMC00LjY0NiwzLjc3OS04LjQyNSw4LjQyMy04LjQyNQoJCQljNC42NDYsMCw4LjQyNCwzLjc3OSw4LjQyNCw4LjQyNXY4NS4zNDZjMCwxLjEzNywwLjkyMiwyLjA1NywyLjA1NywyLjA1N2MxLjEzMywwLDIuMDU3LTAuOTIsMi4wNTctMi4wNTdWOTAuODc2aDYuMzY5VjE4My41Njh6IgoJCQkvPgoJCTxwYXRoIGQ9Ik0yMjUuNjM5LDEzOS42NTZjMCwzLjUyMS0yLjE2OCw2LjUzNy01LjIzOCw3Ljc5N3Y0My45OTdoLTYuMzY5di00My45OTdjLTMuMDctMS4yNjItNS4yNDQtNC4yNzctNS4yNDQtNy43OTdWOTAuODY5CgkJCWg2LjM2OVYxNDAuMmMwLDEuMTMyLDAuOTI2LDIuMDU0LDIuMDU3LDIuMDU0YzEuMTM3LDAsMi4wNTctMC45MjIsMi4wNTctMi4wNTRWOTAuODY5aDYuMzY5VjEzOS42NTZ6Ii8+CgkJPHBhdGggZD0iTTI3MC45NjcsOTguNzU5djkyLjY5aC02LjM2OVY5OC4yMTdjMC0xLjEzNC0wLjkyLTIuMDU2LTIuMDU3LTIuMDU2Yy0xLjEzMSwwLTIuMDU3LDAuOTIyLTIuMDU3LDIuMDU2djkzLjIzMmgtNi4zNjMKCQkJVjk4LjIxN2MwLTEuMTM0LTAuOTI2LTIuMDU2LTIuMDYyLTIuMDU2Yy0xLjEzMSwwLTIuMDUxLDAuOTIyLTIuMDUxLDIuMDU2djkzLjIzMmgtNi4zNjl2LTkyLjY5YzAtNC42NDUsMy43NzktOC40MjQsOC40Mi04LjQyNAoJCQljMS45ODYsMCwzLjgwMywwLjY5Miw1LjI0NCwxLjg0YzEuNDQxLTEuMTQ3LDMuMjU4LTEuODQsNS4yMzgtMS44NEMyNjcuMTg4LDkwLjMzNSwyNzAuOTY3LDk0LjExNSwyNzAuOTY3LDk4Ljc1OXoiLz4KCTwvZz4KCTxnPgoJCTxwYXRoIGQ9Ik0xMTAuOTU5LDIzOS40NDlWMjEzLjgyaDUuNDM2YzIuMTExLDAsMy43MTQsMC41NzQsNC44MDcsMS43MjljMS4wOTIsMS4xNDgsMS42MzgsMi43ODMsMS42MzgsNC44OTN2MTEuOTg4CgkJCWMwLDIuNDAyLTAuNTgzLDQuMTcyLTEuNzQ2LDUuMzA5Yy0xLjE2NSwxLjE0My0yLjgzOSwxLjcxMS01LjAyMiwxLjcxMUgxMTAuOTU5eiBNMTE0LjYzLDIxNy4yNzF2MTguNzIxaDEuNjkyCgkJCWMxLjAzMiwwLDEuNzY1LTAuMjU4LDIuMTk3LTAuNzczYzAuNDMyLTAuNTE2LDAuNjQ2LTEuMzI0LDAuNjQ2LTIuNDMydi0xMi4zNDZjMC0xLjAwOC0wLjIwMy0xLjc4Ny0wLjYxMS0yLjMzOAoJCQljLTAuNDA5LTAuNTUxLTEuMTUyLTAuODMyLTIuMjMyLTAuODMySDExNC42M3oiLz4KCQk8cGF0aCBkPSJNMTI2LjI5NSwyMzkuNDQ5VjIxMy44MmgxMC45NDN2My40NTFoLTcuMjczdjcuNTI5aDYuMzM4djMuNDUxaC02LjMzOHY3LjUyM2g3LjI3M3YzLjY3NEgxMjYuMjk1eiIvPgoJCTxwYXRoIGQ9Ik0xNTEuNDk1LDIyMS4xOTdoLTMuNjcydi0wLjgyNmMwLTAuODQ0LTAuMTk4LTEuNTY0LTAuNTk2LTIuMThjLTAuMzk1LTAuNjA5LTEuMDYyLTAuOTItMS45OTYtMC45MgoJCQljLTAuNTA2LDAtMC45MTIsMC4xLTEuMjI1LDAuMjkzYy0wLjMxMiwwLjE4OC0wLjU2NCwwLjQyOC0wLjc1NiwwLjcxNWMtMC4xOTMsMC4zMTYtMC4zMjQsMC42NjgtMC4zOTYsMS4wNjYKCQkJYy0wLjA3MiwwLjM5My0wLjEwNywwLjgwOS0wLjEwNywxLjI0MmMwLDAuNTA0LDAuMDE4LDAuOTIsMC4wNTUsMS4yNmMwLjAzNSwwLjMzNCwwLjEyNSwwLjYzMywwLjI3LDAuODk2CgkJCWMwLjE0MywwLjI2NCwwLjM1MywwLjQ5MiwwLjYyOSwwLjY4NmMwLjI3NSwwLjE5MywwLjY1NCwwLjM4NywxLjEzNSwwLjU3NGwyLjgwOCwxLjExOWMwLjgxNSwwLjMxMSwxLjQ3NywwLjY4LDEuOTgsMS4wOTYKCQkJYzAuNTA0LDAuNDIyLDAuODk5LDAuOTA4LDEuMTg4LDEuNDU5YzAuMjY0LDAuNTc0LDAuNDQzLDEuMjMsMC41MzksMS45NjNzMC4xNDUsMS41NjQsMC4xNDUsMi41MDIKCQkJYzAsMS4wNzgtMC4xMDgsMi4wOC0wLjMyNCwzLjAwNmMtMC4yMTcsMC45MjYtMC41NjQsMS43MTEtMS4wNDQsMi4zNTVjLTAuNTA0LDAuNjc0LTEuMTY1LDEuMjAxLTEuOTgsMS41ODgKCQkJYy0wLjgxNSwwLjM4MS0xLjgxMiwwLjU3NC0yLjk4OCwwLjU3NGMtMC44ODgsMC0xLjcxNi0wLjE1OC0yLjQ4My0wLjQ2OWMtMC43NjktMC4zMTEtMS40MjgtMC43NDQtMS45OC0xLjI5NQoJCQljLTAuNTUyLTAuNTUxLTAuOTktMS4xOTUtMS4zMTMtMS45MjhzLTAuNDg2LTEuNTI5LTAuNDg2LTIuMzkxdi0xLjM3MWgzLjY3M3YxLjE1NGMwLDAuNjc0LDAuMTk3LDEuMjc3LDAuNTkzLDEuODE2CgkJCWMwLjM5NywwLjUzOSwxLjA2MiwwLjgwOSwxLjk5OCwwLjgwOWMwLjYyNCwwLDEuMTEtMC4wODgsMS40NTktMC4yN2MwLjM0Ny0wLjE3NiwwLjYxNi0wLjQzNCwwLjgxLTAuNzczCgkJCWMwLjE5Mi0wLjMzNCwwLjMwNy0wLjczOCwwLjM0Mi0xLjIwN2MwLjAzNy0wLjQ2OSwwLjA1NS0wLjk5LDAuMDU1LTEuNTY0YzAtMC42NzQtMC4wMjUtMS4yMjUtMC4wNzItMS42NTgKCQkJYy0wLjA0OS0wLjQyOC0wLjE0NC0wLjc3OS0wLjI4OS0xLjA0M2MtMC4xNjgtMC4yNjQtMC4zODktMC40OC0wLjY2NC0wLjY0NWMtMC4yNzctMC4xNy0wLjY0NC0wLjM1Mi0xLjEtMC41NDVsLTIuNjI3LTEuMDc4CgkJCWMtMS41ODQtMC42NDUtMi42NDYtMS41MDYtMy4xODctMi41NzJzLTAuODEtMi40MDgtMC44MS00LjAxNGMwLTAuOTYxLDAuMTMxLTEuODc1LDAuMzk1LTIuNzM2CgkJCWMwLjI2NC0wLjg2NywwLjY2MS0xLjYwNSwxLjE4OC0yLjIzMmMwLjUwNC0wLjYyNywxLjE0Ny0xLjExOSwxLjkyNy0xLjQ5NGMwLjc3OS0wLjM2OSwxLjcxMS0wLjU1NywyLjc5LTAuNTU3CgkJCWMwLjkxMSwwLDEuNzQ2LDAuMTY0LDIuNTAyLDAuNTA0YzAuNzU2LDAuMzM0LDEuNDA5LDAuNzc5LDEuOTYyLDEuMzNjMS4xMDQsMS4xNTQsMS42NTYsMi40NzMsMS42NTYsMy45NjFWMjIxLjE5N3oiLz4KCQk8cGF0aCBkPSJNMTU0LjMzOCwyMzkuNDQ5VjIxMy44MmgzLjY3MnYyNS42MjlIMTU0LjMzOHoiLz4KCQk8cGF0aCBkPSJNMTYxLjM1OCwyMTkuODY3YzAtMS4wMzEsMC4xOC0xLjk0NSwwLjU0LTIuNzM2czAuODM5LTEuNDUzLDEuNDQtMS45OGMwLjU3NS0wLjUwNCwxLjIyOS0wLjg5MSwxLjk2MS0xLjE1NAoJCQljMC43MzItMC4yNjQsMS40Ny0wLjM5MywyLjIxNC0wLjM5M3MxLjQ4MiwwLjEyOSwyLjIxNSwwLjM5M3MxLjM5NSwwLjY1LDEuOTk4LDEuMTU0YzAuNTc0LDAuNTI3LDEuMDQzLDEuMTg5LDEuNDA0LDEuOTgKCQkJYzAuMzU5LDAuNzkxLDAuNTM5LDEuNzA1LDAuNTM5LDIuNzM2djEuMjk1aC0zLjY3MnYtMS4yOTVjMC0wLjg5MS0wLjI0Ni0xLjU0MS0wLjczOC0xLjk2M3MtMS4wNzQtMC42MzMtMS43NDYtMC42MzMKCQkJcy0xLjI1NiwwLjIxMS0xLjc0NiwwLjYzM2MtMC40OTIsMC40MjItMC43MzgsMS4wNzItMC43MzgsMS45NjN2MTMuNTM1YzAsMC44OTEsMC4yNDYsMS41NDEsMC43MzgsMS45NjMKCQkJYzAuNDksMC40MTYsMS4wNzQsMC42MjcsMS43NDYsMC42MjdzMS4yNTQtMC4yMTEsMS43NDYtMC42MjdjMC40OTItMC40MjIsMC43MzgtMS4wNzIsMC43MzgtMS45NjN2LTQuODIyaC0yLjkxNnYtMy4yNGg2LjU4OAoJCQl2OC4wNjJjMCwxLjA3OC0wLjE4LDIuMDA0LTAuNTM5LDIuNzcxYy0wLjM2MSwwLjc2OC0wLjgzLDEuNDA2LTEuNDA0LDEuOTFjLTAuNjA0LDAuNTI3LTEuMjY2LDAuOTItMS45OTgsMS4xODQKCQkJcy0xLjQ3MSwwLjM5OC0yLjIxNSwwLjM5OHMtMS40ODItMC4xMzUtMi4yMTQtMC4zOThjLTAuNzMyLTAuMjY0LTEuMzg2LTAuNjU2LTEuOTYxLTEuMTg0Yy0wLjYwMi0wLjUwNC0xLjA4LTEuMTQzLTEuNDQtMS45MQoJCQlzLTAuNTQtMS42OTMtMC41NC0yLjc3MVYyMTkuODY3eiIvPgoJCTxwYXRoIGQ9Ik0xNzYuNzY2LDIzOS40NDlWMjEzLjgyaDMuNTI3bDUuNTQzLDE1LjQzOWgwLjA3NFYyMTMuODJoMy42N3YyNS42MjloLTMuNDU3bC01LjYxMy0xNS40MWgtMC4wNzJ2MTUuNDFIMTc2Ljc2NnoiLz4KCQk8cGF0aCBkPSJNMjExLjI1NCwyMzIuMTQzdjEuNTgyYzAsMC43OTEtMC4xNTIsMS41NDEtMC40NTEsMi4yNXMtMC43MTUsMS4zNDItMS4yNDIsMS44OTNzLTEuMTQzLDAuOTktMS44NTIsMS4zMTIKCQkJcy0xLjQ3MSwwLjQ4Ni0yLjI4NSwwLjQ4NmMtMC42OTcsMC0xLjQwNi0wLjA5NC0yLjEyNy0wLjI4N3MtMS4zNjctMC41MjctMS45NDUtMS4wMDhjLTAuNTc0LTAuNDgtMS4wNDktMS4xMDItMS40Mi0xLjg1NwoJCQljLTAuMzczLTAuNzU2LTAuNTYxLTEuNzE3LTAuNTYxLTIuODk1di0xNC4xMTVjMC0wLjgzOCwwLjE0Ni0xLjYxNywwLjQzNC0yLjMzOHMwLjY5Ny0xLjM0MiwxLjIyNS0xLjg2OQoJCQljMC41MjctMC41MzMsMS4xNTgtMC45NDMsMS44OTEtMS4yNDJjMC43MzItMC4zMDUsMS41NDMtMC40NTEsMi40MjgtMC40NTFjMS43MjksMCwzLjEzNSwwLjU2Miw0LjIxMywxLjY5MwoJCQljMC41MjcsMC41NTEsMC45NDMsMS4yMDEsMS4yNDIsMS45NTdzMC40NTEsMS41ODIsMC40NTEsMi40Njd2MS40NDFoLTMuNjc0di0xLjIyNWMwLTAuNzIxLTAuMjA1LTEuMzQyLTAuNjA5LTEuODY5CgkJCWMtMC40MS0wLjUyNy0wLjk2MS0wLjc5Ny0xLjY1OC0wLjc5N2MtMC45MTQsMC0xLjUxOCwwLjI4Ny0xLjgxNiwwLjg1Yy0wLjMwMSwwLjU2Mi0wLjQ1MSwxLjI3Ny0wLjQ1MSwyLjEzOXYxMy4xMDcKCQkJYzAsMC43NDQsMC4xNjQsMS4zNjUsMC40ODYsMS44NjlzMC45MDgsMC43NTYsMS43NDYsMC43NTZjMC4yNCwwLDAuNDk4LTAuMDQxLDAuNzczLTAuMTIzYzAuMjc1LTAuMDg4LDAuNTMzLTAuMjIzLDAuNzczLTAuNDE2CgkJCWMwLjIxNy0wLjE5MywwLjM5OC0wLjQ1NywwLjUzOS0wLjc5MWMwLjE0Ni0wLjMzNCwwLjIxNy0wLjc1NiwwLjIxNy0xLjI2di0xLjI2SDIxMS4yNTR6Ii8+CgkJPHBhdGggZD0iTTIxNC4wMjUsMjE5Ljg2N2MwLTEuMDMxLDAuMTgyLTEuOTQ1LDAuNTM5LTIuNzM2YzAuMzYzLTAuNzkxLDAuODM4LTEuNDUzLDEuNDQxLTEuOTgKCQkJYzAuNTc0LTAuNTA0LDEuMjMtMC44OTEsMS45NjMtMS4xNTRzMS40NzEtMC4zOTMsMi4yMTUtMC4zOTNjMC43MzgsMCwxLjQ3NywwLjEyOSwyLjIwOSwwLjM5M3MxLjQsMC42NSwxLjk5OCwxLjE1NAoJCQljMC41OCwwLjUyNywxLjA0OSwxLjE4OSwxLjQwNiwxLjk4czAuNTM5LDEuNzA1LDAuNTM5LDIuNzM2djEzLjUzNWMwLDEuMDc4LTAuMTgyLDIuMDA0LTAuNTM5LDIuNzcxcy0wLjgyNiwxLjQwNi0xLjQwNiwxLjkxCgkJCWMtMC41OTgsMC41MjctMS4yNjYsMC45Mi0xLjk5OCwxLjE4NHMtMS40NzEsMC4zOTgtMi4yMDksMC4zOThjLTAuNzQ0LDAtMS40ODItMC4xMzUtMi4yMTUtMC4zOThzLTEuMzg5LTAuNjU2LTEuOTYzLTEuMTg0CgkJCWMtMC42MDQtMC41MDQtMS4wNzgtMS4xNDMtMS40NDEtMS45MWMtMC4zNTctMC43NjgtMC41MzktMS42OTMtMC41MzktMi43NzFWMjE5Ljg2N3ogTTIxNy42OTksMjMzLjQwMgoJCQljMCwwLjg5MSwwLjI0NiwxLjU0MSwwLjczOCwxLjk2M2MwLjQ4NiwwLjQxNiwxLjA3MiwwLjYyNywxLjc0NiwwLjYyN2MwLjY2OCwwLDEuMjU0LTAuMjExLDEuNzQ2LTAuNjI3CgkJCWMwLjQ4Ni0wLjQyMiwwLjczMi0xLjA3MiwwLjczMi0xLjk2M3YtMTMuNTM1YzAtMC44OTEtMC4yNDYtMS41NDEtMC43MzItMS45NjNjLTAuNDkyLTAuNDIyLTEuMDc4LTAuNjMzLTEuNzQ2LTAuNjMzCgkJCWMtMC42NzQsMC0xLjI2LDAuMjExLTEuNzQ2LDAuNjMzYy0wLjQ5MiwwLjQyMi0wLjczOCwxLjA3Mi0wLjczOCwxLjk2M1YyMzMuNDAyeiIvPgoJCTxwYXRoIGQ9Ik0yMjkuMzU5LDIzOS40NDl2LTMuNjc0aDMuNjc0djMuNjc0SDIyOS4zNTl6Ii8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg=="},159:function(e){e.exports={data:{site:{siteMetadata:{defaultTitle:"Eponym Design Co.",defaultDescription:"Eponym Design Collective. A Cleveland, Ohio based creative studio.",siteUrl:"https://eponym.design",facebookAppID:""}}}}},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Eponym Design Co.",menuLinks:[{name:"Work",link:"/work"},{name:"Services",link:"/services"},{name:"Our Studio",link:"/studio"},{name:"Contact",link:"/contact"}]}}}}},162:function(e,t,M){"use strict";var a=M(8);t.__esModule=!0,t.default=void 0;var i,L=a(M(7)),r=a(M(36)),u=a(M(75)),s=a(M(76)),n=a(M(0)),j=a(M(4)),N=function(e){var t=(0,s.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},c=Object.create({}),o=function(e){var t=N(e),M=t.fluid?t.fluid.src:t.fixed.src;return c[M]||!1},l=new WeakMap;var w=function(e,t){var M=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),l.delete(e.target),t())}})},{rootMargin:"200px"})),i);return M&&(M.observe(e),l.set(e,t)),function(){M.unobserve(e),l.delete(e)}},T=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',M=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+M+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",L=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+a+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+M+i+t+r+L+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},d=n.default.forwardRef(function(e,t){var M=e.sizes,a=e.srcSet,i=e.src,L=e.style,r=e.onLoad,j=e.onError,N=(0,u.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return n.default.createElement("img",(0,s.default)({sizes:M,srcSet:a,src:i},N,{onLoad:r,onError:j,ref:t,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},L)}))});d.propTypes={style:j.default.object,onError:j.default.func,onLoad:j.default.func};var C=function(e){function t(t){var M;M=e.call(this,t)||this;var a=!0,i=!1,L=t.fadeIn,u=o(t);!u&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=!1,i=!0),"undefined"==typeof window&&(a=!1),t.critical&&(a=!0,i=!1);var s=!(t.critical&&!t.fadeIn);return M.state={isVisible:a,imgLoaded:!1,imgCached:!1,IOSupported:i,fadeIn:L,hasNoScript:s,seenBefore:u},M.imageRef=n.default.createRef(),M.handleImageLoaded=M.handleImageLoaded.bind((0,r.default)((0,r.default)(M))),M.handleRef=M.handleRef.bind((0,r.default)((0,r.default)(M))),M}(0,L.default)(t,e);var M=t.prototype;return M.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:o(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},M.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},M.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=w(e,function(){var e=o(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},M.handleImageLoaded=function(){var e,t,M;e=this.props,t=N(e),M=t.fluid?t.fluid.src:t.fixed.src,c[M]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},M.render=function(){var e=N(this.props),t=e.title,M=e.alt,a=e.className,i=e.style,L=void 0===i?{}:i,r=e.imgStyle,u=void 0===r?{}:r,j=e.placeholderStyle,c=void 0===j?{}:j,o=e.placeholderClassName,l=e.fluid,w=e.fixed,C=e.backgroundColor,y=e.Tag,D=e.itemProp,g=this.state.imgLoaded||!1===this.state.fadeIn,z=!0===this.state.fadeIn&&!this.state.imgCached,E=(0,s.default)({opacity:g?1:0,transition:z?"opacity 0.5s":"none"},u),S="boolean"==typeof C?"lightgray":C,m={transitionDelay:"0.5s"},I=(0,s.default)({opacity:this.state.imgLoaded?0:1},z&&m,u,c),f={title:t,alt:this.state.isVisible?"":M,style:I,className:o};if(l){var x=l;return n.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},L),ref:this.handleRef,key:"fluid-"+JSON.stringify(x.srcSet)},n.default.createElement(y,{style:{width:"100%",paddingBottom:100/x.aspectRatio+"%"}}),S&&n.default.createElement(y,{title:t,style:(0,s.default)({backgroundColor:S,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&m)}),x.base64&&n.default.createElement(d,(0,s.default)({src:x.base64},f)),x.tracedSVG&&n.default.createElement(d,(0,s.default)({src:x.tracedSVG},f)),this.state.isVisible&&n.default.createElement("picture",null,x.srcSetWebp&&n.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),n.default.createElement(d,{alt:M,title:t,sizes:x.sizes,src:x.src,crossOrigin:this.props.crossOrigin,srcSet:x.srcSet,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:D})),this.state.hasNoScript&&n.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:T((0,s.default)({alt:M,title:t},x))}}))}if(w){var A=w,p=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:A.width,height:A.height},L);return"inherit"===L.display&&delete p.display,n.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:p,ref:this.handleRef,key:"fixed-"+JSON.stringify(A.srcSet)},S&&n.default.createElement(y,{title:t,style:(0,s.default)({backgroundColor:S,width:A.width,opacity:this.state.imgLoaded?0:1,height:A.height},z&&m)}),A.base64&&n.default.createElement(d,(0,s.default)({src:A.base64},f)),A.tracedSVG&&n.default.createElement(d,(0,s.default)({src:A.tracedSVG},f)),this.state.isVisible&&n.default.createElement("picture",null,A.srcSetWebp&&n.default.createElement("source",{type:"image/webp",srcSet:A.srcSetWebp,sizes:A.sizes}),n.default.createElement(d,{alt:M,title:t,width:A.width,height:A.height,sizes:A.sizes,src:A.src,crossOrigin:this.props.crossOrigin,srcSet:A.srcSet,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:D})),this.state.hasNoScript&&n.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:T((0,s.default)({alt:M,title:t},A))}}))}return null},t}(n.default.Component);C.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var y=j.default.shape({width:j.default.number.isRequired,height:j.default.number.isRequired,src:j.default.string.isRequired,srcSet:j.default.string.isRequired,base64:j.default.string,tracedSVG:j.default.string,srcWebp:j.default.string,srcSetWebp:j.default.string}),D=j.default.shape({aspectRatio:j.default.number.isRequired,src:j.default.string.isRequired,srcSet:j.default.string.isRequired,sizes:j.default.string.isRequired,base64:j.default.string,tracedSVG:j.default.string,srcWebp:j.default.string,srcSetWebp:j.default.string});C.propTypes={resolutions:y,sizes:D,fixed:y,fluid:D,fadeIn:j.default.bool,title:j.default.string,alt:j.default.string,className:j.default.oneOfType([j.default.string,j.default.object]),critical:j.default.bool,crossOrigin:j.default.oneOfType([j.default.string,j.default.bool]),style:j.default.object,imgStyle:j.default.object,placeholderStyle:j.default.object,placeholderClassName:j.default.string,backgroundColor:j.default.oneOfType([j.default.string,j.default.bool]),onLoad:j.default.func,onError:j.default.func,onStartLoad:j.default.func,Tag:j.default.string,itemProp:j.default.string};var g=C;t.default=g}}]);
//# sourceMappingURL=2-1fd184b64373afe7dfbe.js.map