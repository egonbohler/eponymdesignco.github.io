(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{146:function(e,t,n){"use strict";n.r(t);var a=n(9),i=n(0),o=n(151),r=n(153),c=(n(35),n(7)),s=n.n(c),l=["fast, beautiful websites.","professional brand identites.","elegant user experiences.","effective print & digital marketing."],u=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).textInterval=0,t.animationInterval=0,t.state={titleIndex:0},t.animateTitles=function(){t.textInterval=setInterval(function(){var e=(t.state.titleIndex+1)%l.length;t.setState({titleIndex:e})},8e3),t.animationInterval=setInterval(function(){var e=document.getElementById("title").classList;e.contains("is-visible")?e.replace("is-visible","is-hidden"):e.replace("is-hidden","is-visible")},4e3)},t}s()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.animateTitles()},n.componentWillUnmount=function(){clearInterval(this.textInterval),clearInterval(this.animationInterval)},n.render=function(){var e=l[this.state.titleIndex];return Object(a.b)("div",{className:"cd-intro"},Object(a.b)("div",{className:"bg-filter"},Object(a.b)("h3",{className:"cd-headline rotate-1"},Object(a.b)("span",null,"This is Eponym. We're known for creating "),Object(a.b)("span",{className:"cd-words-wrapper"},Object(a.b)("b",{id:"title",className:"is-visible"},e)))))},t}(i.Component),d=function(){return Object(a.b)("div",{className:"background"},Object(a.b)("div",{className:"half"},Object(a.b)("div",{className:"flex-child"},Object(a.b)("div",null,Object(a.b)("span",{className:"hr-active"}),Object(a.b)("h3",{className:"about-header"},"About Eponym Design")),Object(a.b)("p",{className:"about-text"},"Eponym is a small design and web development agency based in Cleveland, Ohio."),Object(a.b)("p",{className:"about-text"},"We don't see our job as just creating something beautiful – we're here to deliver an effective solution that grows your business. Need a website that converts customers? We can help. Need print or digital ads that create a great first impression? We're your team."),Object(a.b)("p",{className:"about-text"},"No matter the challenge, our mission is to deliver a solution that performs.")),Object(a.b)("div",{className:"flex-child"},Object(a.b)(o.a,{to:"/contact"},Object(a.b)("div",{className:"button button-primary contact-button"},"Contact Us")))))},m=n(167);n.d(t,"query",function(){return b});t.default=function(e){var t=e.data;return Object(a.b)(r.a,{currentPath:"/"},Object(a.b)(u,null),Object(a.b)(d,null),Object(a.b)("div",{className:"background secondary"},Object(a.b)("h3",{className:"team-title"},"Featured Work"),t.allMarkdownRemark.edges.map(function(e,t){var n=e.node;return 0===t||t%2==0?Object(a.b)(o.a,{to:n.fields.slug,key:n.id},Object(a.b)(m.a,{title:n.frontmatter.title,date:n.frontmatter.date,tags:n.frontmatter.tags,previewImg:n.frontmatter.previewImage,coverImage:n.frontmatter.coverImage,position:"left",fadeDirection:"fade-right",excerpt:n.excerpt})):Object(a.b)(o.a,{to:n.fields.slug,key:n.id},Object(a.b)(m.a,{title:n.frontmatter.title,date:n.frontmatter.date,tags:n.frontmatter.tags,previewImg:n.frontmatter.previewImage,coverImage:n.frontmatter.coverImage,position:"right",fadeDirection:"fade-left",excerpt:n.excerpt}))}),Object(a.b)(o.a,{to:"/work"},Object(a.b)("div",{className:"button button-primary contact-button project-button"},"All Projects"))))};var b="2703547602"},163:function(e,t,n){(function(t){e.exports=function(){"use strict";var e="undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},n="Expected a function",a=NaN,i="[object Symbol]",o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,l=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,m=u||d||Function("return this")(),b=Object.prototype.toString,f=Math.max,p=Math.min,v=function(){return m.Date.now()};function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&b.call(e)==i}(e))return a;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=c.test(e);return n||s.test(e)?l(e.slice(2),n?2:8):r.test(e)?a:+e}var w=function(e,t,a){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(n);return g(a)&&(i="leading"in a?!!a.leading:i,o="trailing"in a?!!a.trailing:o),function(e,t,a){var i,o,r,c,s,l,u=0,d=!1,m=!1,b=!0;if("function"!=typeof e)throw new TypeError(n);function w(t){var n=i,a=o;return i=o=void 0,u=t,c=e.apply(a,n)}function y(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-u>=r}function j(){var e=v();if(y(e))return O(e);s=setTimeout(j,function(e){var n=t-(e-l);return m?p(n,r-(e-u)):n}(e))}function O(e){return s=void 0,b&&i?w(e):(i=o=void 0,c)}function k(){var e=v(),n=y(e);if(i=arguments,o=this,l=e,n){if(void 0===s)return function(e){return u=e,s=setTimeout(j,t),d?w(e):c}(l);if(m)return s=setTimeout(j,t),w(l)}return void 0===s&&(s=setTimeout(j,t)),c}return t=h(t)||0,g(a)&&(d=!!a.leading,r=(m="maxWait"in a)?f(h(a.maxWait)||0,t):r,b="trailing"in a?!!a.trailing:b),k.cancel=function(){void 0!==s&&clearTimeout(s),u=0,i=l=o=s=void 0},k.flush=function(){return void 0===s?c:O(v())},k}(e,t,{leading:i,maxWait:t,trailing:o})},y=NaN,j="[object Symbol]",O=/^\s+|\s+$/g,k=/^[-+]0x[0-9a-f]+$/i,N=/^0b[01]+$/i,x=/^0o[0-7]+$/i,E=parseInt,I="object"==typeof e&&e&&e.Object===Object&&e,C="object"==typeof self&&self&&self.Object===Object&&self,z=I||C||Function("return this")(),S=Object.prototype.toString,T=Math.max,A=Math.min,M=function(){return z.Date.now()};function q(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function L(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&S.call(e)==j}(e))return y;if(q(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=q(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(O,"");var n=N.test(e);return n||x.test(e)?E(e.slice(2),n?2:8):k.test(e)?y:+e}var D=function(e,t,n){var a,i,o,r,c,s,l=0,u=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=a,o=i;return a=i=void 0,l=t,r=e.apply(o,n)}function f(e){var n=e-s;return void 0===s||n>=t||n<0||d&&e-l>=o}function p(){var e=M();if(f(e))return v(e);c=setTimeout(p,function(e){var n=t-(e-s);return d?A(n,o-(e-l)):n}(e))}function v(e){return c=void 0,m&&a?b(e):(a=i=void 0,r)}function g(){var e=M(),n=f(e);if(a=arguments,i=this,s=e,n){if(void 0===c)return function(e){return l=e,c=setTimeout(p,t),u?b(e):r}(s);if(d)return c=setTimeout(p,t),b(s)}return void 0===c&&(c=setTimeout(p,t)),r}return t=L(t)||0,q(n)&&(u=!!n.leading,o=(d="maxWait"in n)?T(L(n.maxWait)||0,t):o,m="trailing"in n?!!n.trailing:m),g.cancel=function(){void 0!==c&&clearTimeout(c),l=0,a=s=i=c=void 0},g.flush=function(){return void 0===c?r:v(M())},g},W=function(){};function H(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes);if(function e(t){var n=void 0,a=void 0;for(n=0;n<t.length;n+=1){if((a=t[n]).dataset&&a.dataset.aos)return!0;if(a.children&&e(a.children))return!0}return!1}(t.concat(n)))return W()})}function $(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}var F={isSupported:function(){return!!$()},ready:function(e,t){var n=window.document,a=new($())(H);W=t,a.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}},P=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Y=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},B=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,J=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,U=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,K=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function R(){return navigator.userAgent||navigator.vendor||window.opera||""}var G=new(function(){function e(){P(this,e)}return Y(e,[{key:"phone",value:function(){var e=R();return!(!B.test(e)&&!J.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=R();return!(!U.test(e)&&!K.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),e}()),Q=function(e,t){var n=void 0;return G.ie11()?(n=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,{detail:t}):n=new CustomEvent(e,{detail:t}),document.dispatchEvent(n)},V=function(e){return e.forEach(function(e,t){return function(e,t){var n=e.options,a=e.position,i=e.node,o=(e.data,function(){e.animated&&(function(e,t){t&&t.forEach(function(t){return e.classList.remove(t)})}(i,n.animatedClassNames),Q("aos:out",i),e.options.id&&Q("aos:in:"+e.options.id,i),e.animated=!1)});n.mirror&&t>=a.out&&!n.once?o():t>=a.in?e.animated||(function(e,t){t&&t.forEach(function(t){return e.classList.add(t)})}(i,n.animatedClassNames),Q("aos:in",i),e.options.id&&Q("aos:in:"+e.options.id,i),e.animated=!0):e.animated&&!n.once&&o()}(e,window.pageYOffset)})},X=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}},Z=function(e,t,n){var a=e.getAttribute("data-aos-"+t);if(void 0!==a){if("true"===a)return!0;if("false"===a)return!1}return a||n},ee=function(){var e=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(e,function(e){return{node:e}})},te=[],ne=!1,ae={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},ie=function(){return document.all&&!window.atob},oe=function(){var e,t;arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(ne=!0),ne&&(t=ae,(e=te).forEach(function(e,n){var a=Z(e.node,"mirror",t.mirror),i=Z(e.node,"once",t.once),o=Z(e.node,"id"),r=t.useClassNames&&e.node.getAttribute("data-aos"),c=[t.animatedClassName].concat(r?r.split(" "):[]).filter(function(e){return"string"==typeof e});t.initClassName&&e.node.classList.add(t.initClassName),e.position={in:function(e,t,n){var a=window.innerHeight,i=Z(e,"anchor"),o=Z(e,"anchor-placement"),r=Number(Z(e,"offset",o?0:t)),c=o||n,s=e;i&&document.querySelectorAll(i)&&(s=document.querySelectorAll(i)[0]);var l=X(s).top-a;switch(c){case"top-bottom":break;case"center-bottom":l+=s.offsetHeight/2;break;case"bottom-bottom":l+=s.offsetHeight;break;case"top-center":l+=a/2;break;case"center-center":l+=a/2+s.offsetHeight/2;break;case"bottom-center":l+=a/2+s.offsetHeight;break;case"top-top":l+=a;break;case"bottom-top":l+=a+s.offsetHeight;break;case"center-top":l+=a+s.offsetHeight/2}return l+r}(e.node,t.offset,t.anchorPlacement),out:a&&function(e,t){window.innerHeight;var n=Z(e,"anchor"),a=Z(e,"offset",t),i=e;return n&&document.querySelectorAll(n)&&(i=document.querySelectorAll(n)[0]),X(i).top+i.offsetHeight-a}(e.node,t.offset)},e.options={once:i,mirror:a,animatedClassNames:c,id:o}}),V(te=e),window.addEventListener("scroll",w(function(){V(te,ae.once)},ae.throttleDelay)))},re=function(){if(te=ee(),se(ae.disable)||ie())return ce();oe()},ce=function(){te.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),ae.initClassName&&e.node.classList.remove(ae.initClassName),ae.animatedClassName&&e.node.classList.remove(ae.animatedClassName)})},se=function(e){return!0===e||"mobile"===e&&G.mobile()||"phone"===e&&G.phone()||"tablet"===e&&G.tablet()||"function"==typeof e&&!0===e()};return{init:function(e){return ae=_(ae,e),te=ee(),ae.disableMutationObserver||F.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),ae.disableMutationObserver=!0),ae.disableMutationObserver||F.ready("[data-aos]",re),se(ae.disable)||ie()?ce():(document.querySelector("body").setAttribute("data-aos-easing",ae.easing),document.querySelector("body").setAttribute("data-aos-duration",ae.duration),document.querySelector("body").setAttribute("data-aos-delay",ae.delay),-1===["DOMContentLoaded","load"].indexOf(ae.startEvent)?document.addEventListener(ae.startEvent,function(){oe(!0)}):window.addEventListener("load",function(){oe(!0)}),"DOMContentLoaded"===ae.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&oe(!0),window.addEventListener("resize",D(oe,ae.debounceDelay,!0)),window.addEventListener("orientationchange",D(oe,ae.debounceDelay,!0)),te)},refresh:oe,refreshHard:re}}()}).call(this,n(76))},167:function(e,t,n){"use strict";var a=n(9),i=(n(0),n(164)),o=n.n(i);n(168);t.a=function(e){var t=e.tags;return("undefined"!=typeof window?n(163):void 0).init(),Object(a.b)("div",{className:e.position,"data-aos":e.fadeDirection,"data-aos-delay":"50","data-aos-duration":"1000","data-aos-once":"true"},"left"===e.position?Object(a.b)("div",{className:e.position},Object(a.b)("div",{className:"preview-text"},Object(a.b)("span",{className:"hr-active"}),Object(a.b)("h3",{className:"overflow"},e.title)),Object(a.b)("div",{className:"preview-cover"},Object(a.b)(o.a,{fluid:e.coverImage.childImageSharp.fluid,alt:e.title,className:"cover-image",objectFit:"cover"})),Object(a.b)("div",{className:"project-preview"},Object(a.b)(o.a,{fluid:e.previewImg.childImageSharp.fluid,alt:e.title,className:"preview-img",objectFit:"cover"})),Object(a.b)("div",{className:"project-excerpt"},Object(a.b)("div",null,Object(a.b)("p",{className:"tag"},"Tags:"),t.map(function(e,t){return Object(a.b)("p",{key:t,className:"tag"},e)})),Object(a.b)("p",null,e.excerpt),Object(a.b)("h5",{className:"see-more"},"See More"))):Object(a.b)("div",{className:e.position},Object(a.b)("div",{className:"preview-text"},Object(a.b)("span",{className:"hr-active"}),Object(a.b)("h3",{className:"overflow"},e.title)),Object(a.b)("div",{className:"project-excerpt"},Object(a.b)("div",null,Object(a.b)("p",{className:"tag"},"Tags:"),t.map(function(e,t){return Object(a.b)("p",{key:t,className:"tag"},e)})),Object(a.b)("p",null,e.excerpt),Object(a.b)("h5",{className:"see-more"},"See More")),Object(a.b)("div",{className:"preview-cover"},Object(a.b)(o.a,{fluid:e.coverImage.childImageSharp.fluid,alt:e.title,className:"cover-image",objectFit:"cover"})),Object(a.b)("div",{className:"project-preview"},Object(a.b)(o.a,{fluid:e.previewImg.childImageSharp.fluid,alt:e.title,className:"preview-img",objectFit:"cover"}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-d1683575995109bf1c04.js.map