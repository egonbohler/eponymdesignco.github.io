(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{147:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(151),r=n(149),s=n(7),c=n.n(s),l=n(162),u=n.n(l),m=(n(166),function(e){function t(){return e.apply(this,arguments)||this}c()(t,e);var o=t.prototype;return o.componentDidMount=function(){var e=n(161);this.aos=e,this.aos.init()},o.componentDidUpdate=function(){this.aos.refresh()},o.render=function(){var e=this.props.tags;return a.a.createElement("div",{className:this.props.position,"data-aos":this.props.fadeDirection,"data-aos-delay":"50","data-aos-duration":"1000","data-aos-once":"true"},"left"===this.props.position?a.a.createElement("div",{className:this.props.position},a.a.createElement("div",{className:"preview-text"},a.a.createElement("span",{className:"hr-active"}),a.a.createElement("h3",{className:"overflow"},this.props.title)),a.a.createElement("div",{className:"preview-cover"},a.a.createElement(u.a,{fluid:this.props.coverImage.childImageSharp.fluid,alt:this.props.title,className:"cover-image",objectFit:"cover"})),a.a.createElement("div",{className:"project-excerpt"},a.a.createElement("div",null,a.a.createElement("p",null,this.props.excerpt),a.a.createElement("p",null,"Past Client Work:"),e.map(function(e,t){return a.a.createElement(r.a,{to:e.path},a.a.createElement("p",{key:t,className:"see-more"},e.title))})))):a.a.createElement("div",{className:this.props.position},a.a.createElement("div",{className:"preview-text"},a.a.createElement("span",{className:"hr-active"}),a.a.createElement("h3",{className:"overflow"},this.props.title)),a.a.createElement("div",{className:"project-excerpt"},a.a.createElement("p",null,this.props.excerpt),a.a.createElement("div",null,a.a.createElement("p",null,"Past Client Work:"),e.map(function(e,t){return a.a.createElement(r.a,{to:e.path},a.a.createElement("p",{key:t,className:"see-more"},e.title))}))),a.a.createElement("div",{className:"preview-cover"},a.a.createElement(u.a,{fluid:this.props.coverImage.childImageSharp.fluid,alt:this.props.title,className:"cover-image",objectFit:"cover"}))))},t}(o.Component));n.d(t,"query",function(){return d});t.default=function(e){var t=e.data;return console.log("data",t),a.a.createElement(i.a,null,a.a.createElement("div",{className:"background secondary"},a.a.createElement("h3",{className:"team-title work-title"},"Services"),t.allMarkdownRemark.edges.map(function(e,t){var n=e.node;return 0===t||t%2==0?a.a.createElement(m,{key:n.id,title:n.frontmatter.title,tags:n.frontmatter.examples,coverImage:n.frontmatter.coverImage,position:"left",fadeDirection:"fade-right",excerpt:n.frontmatter.description}):a.a.createElement(m,{key:n.id,title:n.frontmatter.title,tags:n.frontmatter.examples,tagPaths:n.frontmatter.examplePaths,coverImage:n.frontmatter.coverImage,position:"right",fadeDirection:"fade-left",excerpt:n.frontmatter.description})}),a.a.createElement(r.a,{to:"/contact"},a.a.createElement("div",{className:"button button-primary contact-button project-button"},"Contact us"))))};var d="3332476267"},161:function(e,t,n){(function(t){e.exports=function(){"use strict";var e="undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},n="Expected a function",o=NaN,a="[object Symbol]",i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,m="object"==typeof self&&self&&self.Object===Object&&self,d=u||m||Function("return this")(),f=Object.prototype.toString,p=Math.max,v=Math.min,b=function(){return d.Date.now()};function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&f.call(e)==a}(e))return o;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=s.test(e);return n||c.test(e)?l(e.slice(2),n?2:8):r.test(e)?o:+e}var w=function(e,t,o){var a=!0,i=!0;if("function"!=typeof e)throw new TypeError(n);return h(o)&&(a="leading"in o?!!o.leading:a,i="trailing"in o?!!o.trailing:i),function(e,t,o){var a,i,r,s,c,l,u=0,m=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError(n);function w(t){var n=a,o=i;return a=i=void 0,u=t,s=e.apply(o,n)}function y(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-u>=r}function k(){var e=b();if(y(e))return E(e);c=setTimeout(k,function(e){var n=t-(e-l);return d?v(n,r-(e-u)):n}(e))}function E(e){return c=void 0,f&&a?w(e):(a=i=void 0,s)}function x(){var e=b(),n=y(e);if(a=arguments,i=this,l=e,n){if(void 0===c)return function(e){return u=e,c=setTimeout(k,t),m?w(e):s}(l);if(d)return c=setTimeout(k,t),w(l)}return void 0===c&&(c=setTimeout(k,t)),s}return t=g(t)||0,h(o)&&(m=!!o.leading,r=(d="maxWait"in o)?p(g(o.maxWait)||0,t):r,f="trailing"in o?!!o.trailing:f),x.cancel=function(){void 0!==c&&clearTimeout(c),u=0,a=l=i=c=void 0},x.flush=function(){return void 0===c?s:E(b())},x}(e,t,{leading:a,maxWait:t,trailing:i})},y=NaN,k="[object Symbol]",E=/^\s+|\s+$/g,x=/^[-+]0x[0-9a-f]+$/i,N=/^0b[01]+$/i,j=/^0o[0-7]+$/i,O=parseInt,C="object"==typeof e&&e&&e.Object===Object&&e,z="object"==typeof self&&self&&self.Object===Object&&self,q=C||z||Function("return this")(),A=Object.prototype.toString,M=Math.max,S=Math.min,D=function(){return q.Date.now()};function L(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function T(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&A.call(e)==k}(e))return y;if(L(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=L(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(E,"");var n=N.test(e);return n||j.test(e)?O(e.slice(2),n?2:8):x.test(e)?y:+e}var H=function(e,t,n){var o,a,i,r,s,c,l=0,u=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=o,i=a;return o=a=void 0,l=t,r=e.apply(i,n)}function p(e){var n=e-c;return void 0===c||n>=t||n<0||m&&e-l>=i}function v(){var e=D();if(p(e))return b(e);s=setTimeout(v,function(e){var n=t-(e-c);return m?S(n,i-(e-l)):n}(e))}function b(e){return s=void 0,d&&o?f(e):(o=a=void 0,r)}function h(){var e=D(),n=p(e);if(o=arguments,a=this,c=e,n){if(void 0===s)return function(e){return l=e,s=setTimeout(v,t),u?f(e):r}(c);if(m)return s=setTimeout(v,t),f(c)}return void 0===s&&(s=setTimeout(v,t)),r}return t=T(t)||0,L(n)&&(u=!!n.leading,i=(m="maxWait"in n)?M(T(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),h.cancel=function(){void 0!==s&&clearTimeout(s),l=0,o=c=a=s=void 0},h.flush=function(){return void 0===s?r:b(D())},h},I=function(){};function P(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes);if(function e(t){var n=void 0,o=void 0;for(n=0;n<t.length;n+=1){if((o=t[n]).dataset&&o.dataset.aos)return!0;if(o.children&&e(o.children))return!0}return!1}(t.concat(n)))return I()})}function W(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}var $={isSupported:function(){return!!W()},ready:function(e,t){var n=window.document,o=new(W())(P);I=t,o.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}},F=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Y=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},B=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,J=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,K=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,R=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function U(){return navigator.userAgent||navigator.vendor||window.opera||""}var G=new(function(){function e(){F(this,e)}return Y(e,[{key:"phone",value:function(){var e=U();return!(!B.test(e)&&!J.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=U();return!(!K.test(e)&&!R.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),e}()),Q=function(e,t){var n=void 0;return G.ie11()?(n=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,{detail:t}):n=new CustomEvent(e,{detail:t}),document.dispatchEvent(n)},V=function(e){return e.forEach(function(e,t){return function(e,t){var n=e.options,o=e.position,a=e.node,i=(e.data,function(){e.animated&&(function(e,t){t&&t.forEach(function(t){return e.classList.remove(t)})}(a,n.animatedClassNames),Q("aos:out",a),e.options.id&&Q("aos:in:"+e.options.id,a),e.animated=!1)});n.mirror&&t>=o.out&&!n.once?i():t>=o.in?e.animated||(function(e,t){t&&t.forEach(function(t){return e.classList.add(t)})}(a,n.animatedClassNames),Q("aos:in",a),e.options.id&&Q("aos:in:"+e.options.id,a),e.animated=!0):e.animated&&!n.once&&i()}(e,window.pageYOffset)})},X=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}},Z=function(e,t,n){var o=e.getAttribute("data-aos-"+t);if(void 0!==o){if("true"===o)return!0;if("false"===o)return!1}return o||n},ee=function(){var e=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(e,function(e){return{node:e}})},te=[],ne=!1,oe={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},ae=function(){return document.all&&!window.atob},ie=function(){var e,t;arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(ne=!0),ne&&(t=oe,(e=te).forEach(function(e,n){var o=Z(e.node,"mirror",t.mirror),a=Z(e.node,"once",t.once),i=Z(e.node,"id"),r=t.useClassNames&&e.node.getAttribute("data-aos"),s=[t.animatedClassName].concat(r?r.split(" "):[]).filter(function(e){return"string"==typeof e});t.initClassName&&e.node.classList.add(t.initClassName),e.position={in:function(e,t,n){var o=window.innerHeight,a=Z(e,"anchor"),i=Z(e,"anchor-placement"),r=Number(Z(e,"offset",i?0:t)),s=i||n,c=e;a&&document.querySelectorAll(a)&&(c=document.querySelectorAll(a)[0]);var l=X(c).top-o;switch(s){case"top-bottom":break;case"center-bottom":l+=c.offsetHeight/2;break;case"bottom-bottom":l+=c.offsetHeight;break;case"top-center":l+=o/2;break;case"center-center":l+=o/2+c.offsetHeight/2;break;case"bottom-center":l+=o/2+c.offsetHeight;break;case"top-top":l+=o;break;case"bottom-top":l+=o+c.offsetHeight;break;case"center-top":l+=o+c.offsetHeight/2}return l+r}(e.node,t.offset,t.anchorPlacement),out:o&&function(e,t){window.innerHeight;var n=Z(e,"anchor"),o=Z(e,"offset",t),a=e;return n&&document.querySelectorAll(n)&&(a=document.querySelectorAll(n)[0]),X(a).top+a.offsetHeight-o}(e.node,t.offset)},e.options={once:a,mirror:o,animatedClassNames:s,id:i}}),V(te=e),window.addEventListener("scroll",w(function(){V(te,oe.once)},oe.throttleDelay)))},re=function(){if(te=ee(),ce(oe.disable)||ae())return se();ie()},se=function(){te.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),oe.initClassName&&e.node.classList.remove(oe.initClassName),oe.animatedClassName&&e.node.classList.remove(oe.animatedClassName)})},ce=function(e){return!0===e||"mobile"===e&&G.mobile()||"phone"===e&&G.phone()||"tablet"===e&&G.tablet()||"function"==typeof e&&!0===e()};return{init:function(e){return oe=_(oe,e),te=ee(),oe.disableMutationObserver||$.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),oe.disableMutationObserver=!0),oe.disableMutationObserver||$.ready("[data-aos]",re),ce(oe.disable)||ae()?se():(document.querySelector("body").setAttribute("data-aos-easing",oe.easing),document.querySelector("body").setAttribute("data-aos-duration",oe.duration),document.querySelector("body").setAttribute("data-aos-delay",oe.delay),-1===["DOMContentLoaded","load"].indexOf(oe.startEvent)?document.addEventListener(oe.startEvent,function(){ie(!0)}):window.addEventListener("load",function(){ie(!0)}),"DOMContentLoaded"===oe.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&ie(!0),window.addEventListener("resize",H(ie,oe.debounceDelay,!0)),window.addEventListener("orientationchange",H(ie,oe.debounceDelay,!0)),te)},refresh:ie,refreshHard:re}}()}).call(this,n(74))}}]);
//# sourceMappingURL=component---src-pages-services-js-1c4c5a982d6023fe0053.js.map