(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{149:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(152),r=a(154),s=(a(35),a(7)),c=a.n(s),l=["fast, beautiful websites.","professional brand identites.","elegant user experiences.","effective print & digital marketing."],m=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).textInterval=0,t.animationInterval=0,t.state={titleIndex:0},t.animateTitles=function(){t.textInterval=setInterval(function(){var e=(t.state.titleIndex+1)%l.length;t.setState({titleIndex:e})},8e3),t.animationInterval=setInterval(function(){var e=document.getElementById("title").classList;e.contains("is-visible")?e.replace("is-visible","is-hidden"):e.replace("is-hidden","is-visible")},4e3)},t}c()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.animateTitles()},a.componentWillUnmount=function(){clearInterval(this.textInterval),clearInterval(this.animationInterval)},a.render=function(){var e=l[this.state.titleIndex];return i.a.createElement("div",{className:"cd-intro"},i.a.createElement("div",{className:"bg-filter"},i.a.createElement("h3",{className:"cd-headline rotate-1"},i.a.createElement("span",null,"This is Eponym. We're known for creating "),i.a.createElement("span",{className:"cd-words-wrapper"},i.a.createElement("b",{id:"title",className:"is-visible"},e)))))},t}(n.Component),u=function(){return i.a.createElement("div",{className:"background"},i.a.createElement("div",{className:"half"},i.a.createElement("div",{className:"flex-child"},i.a.createElement("div",null,i.a.createElement("span",{className:"hr-active"}),i.a.createElement("h3",{className:"about-header"},"About Eponym Design")),i.a.createElement("p",{className:"about-text"},"Eponym is a small design and web development agency based in Cleveland, Ohio."),i.a.createElement("p",{className:"about-text"},"We don't see our job as just creating something beautiful – we're here to deliver an effective solution that grows your business. Need a website that converts customers? We can help. Need print or digital ads that create a great first impression? We're your team."),i.a.createElement("p",{className:"about-text"},"No matter the challenge, our mission is to deliver a solution that performs.")),i.a.createElement("div",{className:"flex-child"},i.a.createElement(o.a,{to:"/contact","aria-label":"Link to Contact Page"},i.a.createElement("div",{className:"button button-primary contact-button","aria-label":"Contact Us"},"Contact Us")))))},d=a(170),p=a(159);a.d(t,"query",function(){return f});t.default=function(e){var t=e.data;return i.a.createElement(r.a,{currentPath:"/"},i.a.createElement(p.a,{title:"Home"}),i.a.createElement(m,null),i.a.createElement(u,null),i.a.createElement("div",{className:"background secondary"},i.a.createElement("h3",{className:"team-title"},"Featured Work"),t.allMarkdownRemark.edges.map(function(e,t){var a=e.node;return 0===t||t%2==0?i.a.createElement(o.a,{to:a.fields.slug,key:a.id},i.a.createElement(d.a,{title:a.frontmatter.title,date:a.frontmatter.date,tags:a.frontmatter.tags,previewImg:a.frontmatter.previewImage,coverImage:a.frontmatter.coverImage,position:"left",fadeDirection:"fade-right",excerpt:a.excerpt})):i.a.createElement(o.a,{to:a.fields.slug,key:a.id},i.a.createElement(d.a,{title:a.frontmatter.title,date:a.frontmatter.date,tags:a.frontmatter.tags,previewImg:a.frontmatter.previewImage,coverImage:a.frontmatter.coverImage,position:"right",fadeDirection:"fade-left",excerpt:a.excerpt}))}),i.a.createElement(o.a,{to:"/work"},i.a.createElement("div",{className:"button button-primary contact-button project-button","aria-label":"View All Projects"},"All Projects"))))};var f="2703547602"},166:function(e,t,a){(function(t){e.exports=function(){"use strict";var e="undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},a="Expected a function",n=NaN,i="[object Symbol]",o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,m="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,d=m||u||Function("return this")(),p=Object.prototype.toString,f=Math.max,v=Math.min,b=function(){return d.Date.now()};function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&p.call(e)==i}(e))return n;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var a=s.test(e);return a||c.test(e)?l(e.slice(2),a?2:8):r.test(e)?n:+e}var w=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(a);return h(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),function(e,t,n){var i,o,r,s,c,l,m=0,u=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError(a);function w(t){var a=i,n=o;return i=o=void 0,m=t,s=e.apply(n,a)}function y(e){var a=e-l;return void 0===l||a>=t||a<0||d&&e-m>=r}function E(){var e=b();if(y(e))return k(e);c=setTimeout(E,function(e){var a=t-(e-l);return d?v(a,r-(e-m)):a}(e))}function k(e){return c=void 0,p&&i?w(e):(i=o=void 0,s)}function N(){var e=b(),a=y(e);if(i=arguments,o=this,l=e,a){if(void 0===c)return function(e){return m=e,c=setTimeout(E,t),u?w(e):s}(l);if(d)return c=setTimeout(E,t),w(l)}return void 0===c&&(c=setTimeout(E,t)),s}return t=g(t)||0,h(n)&&(u=!!n.leading,r=(d="maxWait"in n)?f(g(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),N.cancel=function(){void 0!==c&&clearTimeout(c),m=0,i=l=o=c=void 0},N.flush=function(){return void 0===c?s:k(b())},N}(e,t,{leading:i,maxWait:t,trailing:o})},y=NaN,E="[object Symbol]",k=/^\s+|\s+$/g,N=/^[-+]0x[0-9a-f]+$/i,x=/^0b[01]+$/i,j=/^0o[0-7]+$/i,I=parseInt,O="object"==typeof e&&e&&e.Object===Object&&e,C="object"==typeof self&&self&&self.Object===Object&&self,S=O||C||Function("return this")(),T=Object.prototype.toString,z=Math.max,A=Math.min,M=function(){return S.Date.now()};function L(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function q(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&T.call(e)==E}(e))return y;if(L(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=L(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(k,"");var a=x.test(e);return a||j.test(e)?I(e.slice(2),a?2:8):N.test(e)?y:+e}var D=function(e,t,a){var n,i,o,r,s,c,l=0,m=!1,u=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var a=n,o=i;return n=i=void 0,l=t,r=e.apply(o,a)}function f(e){var a=e-c;return void 0===c||a>=t||a<0||u&&e-l>=o}function v(){var e=M();if(f(e))return b(e);s=setTimeout(v,function(e){var a=t-(e-c);return u?A(a,o-(e-l)):a}(e))}function b(e){return s=void 0,d&&n?p(e):(n=i=void 0,r)}function h(){var e=M(),a=f(e);if(n=arguments,i=this,c=e,a){if(void 0===s)return function(e){return l=e,s=setTimeout(v,t),m?p(e):r}(c);if(u)return s=setTimeout(v,t),p(c)}return void 0===s&&(s=setTimeout(v,t)),r}return t=q(t)||0,L(a)&&(m=!!a.leading,o=(u="maxWait"in a)?z(q(a.maxWait)||0,t):o,d="trailing"in a?!!a.trailing:d),h.cancel=function(){void 0!==s&&clearTimeout(s),l=0,n=c=i=s=void 0},h.flush=function(){return void 0===s?r:b(M())},h},H=function(){};function W(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),a=Array.prototype.slice.call(e.removedNodes);if(function e(t){var a=void 0,n=void 0;for(a=0;a<t.length;a+=1){if((n=t[a]).dataset&&n.dataset.aos)return!0;if(n.children&&e(n.children))return!0}return!1}(t.concat(a)))return H()})}function P(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}var $={isSupported:function(){return!!P()},ready:function(e,t){var a=window.document,n=new(P())(W);H=t,n.observe(a.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}},F=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},U=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},_=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,B=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,J=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,K=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function R(){return navigator.userAgent||navigator.vendor||window.opera||""}var V=new(function(){function e(){F(this,e)}return U(e,[{key:"phone",value:function(){var e=R();return!(!_.test(e)&&!B.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=R();return!(!J.test(e)&&!K.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),e}()),G=function(e,t){var a=void 0;return V.ie11()?(a=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,{detail:t}):a=new CustomEvent(e,{detail:t}),document.dispatchEvent(a)},Q=function(e){return e.forEach(function(e,t){return function(e,t){var a=e.options,n=e.position,i=e.node,o=(e.data,function(){e.animated&&(function(e,t){t&&t.forEach(function(t){return e.classList.remove(t)})}(i,a.animatedClassNames),G("aos:out",i),e.options.id&&G("aos:in:"+e.options.id,i),e.animated=!1)});a.mirror&&t>=n.out&&!a.once?o():t>=n.in?e.animated||(function(e,t){t&&t.forEach(function(t){return e.classList.add(t)})}(i,a.animatedClassNames),G("aos:in",i),e.options.id&&G("aos:in:"+e.options.id,i),e.animated=!0):e.animated&&!a.once&&o()}(e,window.pageYOffset)})},X=function(e){for(var t=0,a=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),a+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:a,left:t}},Z=function(e,t,a){var n=e.getAttribute("data-aos-"+t);if(void 0!==n){if("true"===n)return!0;if("false"===n)return!1}return n||a},ee=function(){var e=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(e,function(e){return{node:e}})},te=[],ae=!1,ne={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},ie=function(){return document.all&&!window.atob},oe=function(){var e,t;arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(ae=!0),ae&&(t=ne,(e=te).forEach(function(e,a){var n=Z(e.node,"mirror",t.mirror),i=Z(e.node,"once",t.once),o=Z(e.node,"id"),r=t.useClassNames&&e.node.getAttribute("data-aos"),s=[t.animatedClassName].concat(r?r.split(" "):[]).filter(function(e){return"string"==typeof e});t.initClassName&&e.node.classList.add(t.initClassName),e.position={in:function(e,t,a){var n=window.innerHeight,i=Z(e,"anchor"),o=Z(e,"anchor-placement"),r=Number(Z(e,"offset",o?0:t)),s=o||a,c=e;i&&document.querySelectorAll(i)&&(c=document.querySelectorAll(i)[0]);var l=X(c).top-n;switch(s){case"top-bottom":break;case"center-bottom":l+=c.offsetHeight/2;break;case"bottom-bottom":l+=c.offsetHeight;break;case"top-center":l+=n/2;break;case"center-center":l+=n/2+c.offsetHeight/2;break;case"bottom-center":l+=n/2+c.offsetHeight;break;case"top-top":l+=n;break;case"bottom-top":l+=n+c.offsetHeight;break;case"center-top":l+=n+c.offsetHeight/2}return l+r}(e.node,t.offset,t.anchorPlacement),out:n&&function(e,t){window.innerHeight;var a=Z(e,"anchor"),n=Z(e,"offset",t),i=e;return a&&document.querySelectorAll(a)&&(i=document.querySelectorAll(a)[0]),X(i).top+i.offsetHeight-n}(e.node,t.offset)},e.options={once:i,mirror:n,animatedClassNames:s,id:o}}),Q(te=e),window.addEventListener("scroll",w(function(){Q(te,ne.once)},ne.throttleDelay)))},re=function(){if(te=ee(),ce(ne.disable)||ie())return se();oe()},se=function(){te.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),ne.initClassName&&e.node.classList.remove(ne.initClassName),ne.animatedClassName&&e.node.classList.remove(ne.animatedClassName)})},ce=function(e){return!0===e||"mobile"===e&&V.mobile()||"phone"===e&&V.phone()||"tablet"===e&&V.tablet()||"function"==typeof e&&!0===e()};return{init:function(e){return ne=Y(ne,e),te=ee(),ne.disableMutationObserver||$.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),ne.disableMutationObserver=!0),ne.disableMutationObserver||$.ready("[data-aos]",re),ce(ne.disable)||ie()?se():(document.querySelector("body").setAttribute("data-aos-easing",ne.easing),document.querySelector("body").setAttribute("data-aos-duration",ne.duration),document.querySelector("body").setAttribute("data-aos-delay",ne.delay),-1===["DOMContentLoaded","load"].indexOf(ne.startEvent)?document.addEventListener(ne.startEvent,function(){oe(!0)}):window.addEventListener("load",function(){oe(!0)}),"DOMContentLoaded"===ne.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&oe(!0),window.addEventListener("resize",D(oe,ne.debounceDelay,!0)),window.addEventListener("orientationchange",D(oe,ne.debounceDelay,!0)),te)},refresh:oe,refreshHard:re}}()}).call(this,a(74))},170:function(e,t,a){"use strict";var n=a(7),i=a.n(n),o=a(0),r=a.n(o),s=a(167),c=a.n(s),l=(a(171),function(e){function t(){return e.apply(this,arguments)||this}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=a(166);this.aos=e,this.aos.init()},n.componentDidUpdate=function(){this.aos.refresh()},n.render=function(){var e=this.props.tags;return r.a.createElement("div",{className:this.props.position,"data-aos":this.props.fadeDirection,"data-aos-delay":"50","data-aos-duration":"1000","data-aos-once":"true"},"left"===this.props.position?r.a.createElement("div",{className:this.props.position},r.a.createElement("div",{className:"preview-text"},r.a.createElement("span",{className:"hr-active"}),r.a.createElement("h3",{className:"overflow"},this.props.title)),r.a.createElement("div",{className:"preview-cover"},r.a.createElement(c.a,{fluid:this.props.coverImage.childImageSharp.fluid,alt:"Image of "+this.props.title,className:"cover-image",objectFit:"cover"})),r.a.createElement("div",{className:"project-preview"},r.a.createElement(c.a,{fluid:this.props.previewImg.childImageSharp.fluid,alt:"Image two of "+this.props.title,className:"preview-img",objectFit:"cover"})),r.a.createElement("div",{className:"brief"},r.a.createElement("div",null,r.a.createElement("p",{className:"tag"},"Tags:"),e.map(function(e,t){return r.a.createElement("p",{key:t,className:"tag"},e)})),r.a.createElement("p",null,this.props.excerpt),r.a.createElement("h5",{className:"see-more","aria-label":"Link to "+this.props.title},"See More"))):r.a.createElement("div",{className:this.props.position},r.a.createElement("div",{className:"preview-text"},r.a.createElement("span",{className:"hr-active"}),r.a.createElement("h3",{className:"overflow"},this.props.title)),r.a.createElement("div",{className:"brief"},r.a.createElement("div",null,r.a.createElement("p",{className:"tag"},"Tags:"),e.map(function(e,t){return r.a.createElement("p",{key:t,className:"tag"},e)})),r.a.createElement("p",null,this.props.excerpt),r.a.createElement("h5",{className:"see-more"},"See More")),r.a.createElement("div",{className:"preview-cover"},r.a.createElement(c.a,{fluid:this.props.coverImage.childImageSharp.fluid,alt:"Image of "+this.props.title,className:"cover-image",objectFit:"cover"})),r.a.createElement("div",{className:"project-preview"},r.a.createElement(c.a,{fluid:this.props.previewImg.childImageSharp.fluid,alt:"Image two of "+this.props.title,className:"preview-img",objectFit:"cover"})),r.a.createElement("div",{className:"brief-mobile"},r.a.createElement("div",null,r.a.createElement("p",{className:"tag"},"Tags:"),e.map(function(e,t){return r.a.createElement("p",{key:t,className:"tag"},e)})),r.a.createElement("p",null,this.props.excerpt),r.a.createElement("h5",{className:"see-more","aria-label":"Link to "+this.props.title},"See More"))))},t}(o.Component));t.a=l}}]);
//# sourceMappingURL=component---src-pages-index-js-325e0a78a74c7b9ac31d.js.map