"use strict";(self.webpackChunkng_pomodoro_timer_v2=self.webpackChunkng_pomodoro_timer_v2||[]).push([[444],{444:(Er,Ft,V)=>{V.r(Ft),V.d(Ft,{FaConfig:()=>zt,FaDuotoneIconComponent:()=>Cr,FaIconComponent:()=>$e,FaIconLibrary:()=>De,FaLayersComponent:()=>Pt,FaLayersCounterComponent:()=>Ar,FaLayersTextComponent:()=>Tr,FaStackComponent:()=>je,FaStackItemSizeDirective:()=>Re,FontAwesomeModule:()=>Sr});var f=V(561);function j(t){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function Nt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Ue(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),r.forEach(function(a){Ue(t,a,n[a])})}return t}function st(t,e){return function Ve(t){if(Array.isArray(t))return t}(t)||function qe(t,e){var n=[],r=!0,a=!1,i=void 0;try{for(var s,o=t[Symbol.iterator]();!(r=(s=o.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(l){a=!0,i=l}finally{try{!r&&null!=o.return&&o.return()}finally{if(a)throw i}}return n}(t,e)||function Qe(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function ot(t){return function Xe(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function Ge(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function Je(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var lt={},Rt={};try{"undefined"!=typeof window&&(lt=window),"undefined"!=typeof document&&(Rt=document),"undefined"!=typeof MutationObserver&&MutationObserver,"undefined"!=typeof performance&&performance}catch(t){}var Ht=(lt.navigator||{}).userAgent,Wt=void 0===Ht?"":Ht,F=lt,v=Rt,S=!!v.documentElement&&!!v.head&&"function"==typeof v.addEventListener&&"function"==typeof v.createElement,Bt=~Wt.indexOf("MSIE")||~Wt.indexOf("Trident/"),_="___FONT_AWESOME___",Xt="svg-inline--fa",N="data-fa-i2svg",Jt=[1,2,3,4,5,6,7,8,9,10],fn=Jt.concat([11,12,13,14,15,16,17,18,19,20]),z={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Qt=(["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","flip-both","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter",z.GROUP,z.SWAP_OPACITY,z.PRIMARY,z.SECONDARY].concat(Jt.map(function(t){return"".concat(t,"x")})).concat(fn.map(function(t){return"w-".concat(t)})),F.FontAwesomeConfig||{});v&&"function"==typeof v.querySelector&&[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(function(t){var e=st(t,2),r=e[1],a=function mn(t){return""===t||"false"!==t&&("true"===t||t)}(function dn(t){var e=v.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}(e[0]));null!=a&&(Qt[r]=a)});var ut=m({},{familyPrefix:"fa",replacementClass:Xt,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Qt);ut.autoReplaceSvg||(ut.observeMutations=!1);var c=m({},ut);F.FontAwesomeConfig=c;var O=F||{};O[_]||(O[_]={}),O[_].styles||(O[_].styles={}),O[_].hooks||(O[_].hooks={}),O[_].shims||(O[_].shims=[]);var I=O[_],Kt=[];S&&((v.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(v.readyState)||v.addEventListener("DOMContentLoaded",function t(){v.removeEventListener("DOMContentLoaded",t),Kt.map(function(e){return e()})}));var mt,dt="pending",Zt="settled",J="fulfilled",Q="rejected",yn=function(){},te="undefined"!=typeof global&&void 0!==global.process&&"function"==typeof global.process.emit,bn="undefined"==typeof setImmediate?setTimeout:setImmediate,$=[];function wn(){for(var t=0;t<$.length;t++)$[t][0]($[t][1]);$=[],mt=!1}function K(t,e){$.push([t,e]),mt||(mt=!0,bn(wn,0))}function ee(t){var e=t.owner,n=e._state,r=e._data,a=t[n],i=t.then;if("function"==typeof a){n=J;try{r=a(r)}catch(o){H(i,o)}}ne(i,r)||(n===J&&ht(i,r),n===Q&&H(i,r))}function ne(t,e){var n;try{if(t===e)throw new TypeError("A promises callback cannot return that same promise.");if(e&&("function"==typeof e||"object"===j(e))){var r=e.then;if("function"==typeof r)return r.call(e,function(a){n||(n=!0,e===a?re(t,a):ht(t,a))},function(a){n||(n=!0,H(t,a))}),!0}}catch(a){return n||H(t,a),!0}return!1}function ht(t,e){(t===e||!ne(t,e))&&re(t,e)}function re(t,e){t._state===dt&&(t._state=Zt,t._data=e,K(xn,t))}function H(t,e){t._state===dt&&(t._state=Zt,t._data=e,K(In,t))}function ae(t){t._then=t._then.forEach(ee)}function xn(t){t._state=J,ae(t)}function In(t){t._state=Q,ae(t),!t._handled&&te&&global.process.emit("unhandledRejection",t._data,t)}function Cn(t){global.process.emit("rejectionHandled",t)}function b(t){if("function"!=typeof t)throw new TypeError("Promise resolver "+t+" is not a function");if(!(this instanceof b))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function kn(t,e){function r(a){H(e,a)}try{t(function n(a){ht(e,a)},r)}catch(a){r(a)}}(t,this)}b.prototype={constructor:b,_state:dt,_then:null,_data:void 0,_handled:!1,then:function(e,n){var r={owner:this,then:new this.constructor(yn),fulfilled:e,rejected:n};return(n||e)&&!this._handled&&(this._handled=!0,this._state===Q&&te&&K(Cn,this)),this._state===J||this._state===Q?K(ee,r):this._then.push(r),r.then},catch:function(e){return this.then(null,e)}},b.all=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.all().");return new b(function(e,n){var r=[],a=0;function i(l){return a++,function(u){r[l]=u,--a||e(r)}}for(var s,o=0;o<t.length;o++)(s=t[o])&&"function"==typeof s.then?s.then(i(o),n):r[o]=s;a||e(r)})},b.race=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.race().");return new b(function(e,n){for(var a,r=0;r<t.length;r++)(a=t[r])&&"function"==typeof a.then?a.then(e,n):e(a)})},b.resolve=function(t){return t&&"object"===j(t)&&t.constructor===b?t:new b(function(e){e(t)})},b.reject=function(t){return new b(function(e,n){n(t)})};var M=16,E={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function W(){for(var t=12,e="";t-- >0;)e+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return e}function se(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Z(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n],";")},"")}function vt(t){return t.size!==E.size||t.x!==E.x||t.y!==E.y||t.rotate!==E.rotate||t.flipX||t.flipY}function oe(t){var e=t.transform,r=t.iconWidth,a={transform:"translate(".concat(t.containerWidth/2," 256)")},i="translate(".concat(32*e.x,", ").concat(32*e.y,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)");return{outer:a,inner:{transform:"".concat(i," ").concat(o," ").concat(s)},path:{transform:"translate(".concat(r/2*-1," -256)")}}}var gt={x:0,y:0,width:"100%",height:"100%"};function le(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function En(t){return"g"===t.tag?t.children:[t]}function yt(t){var e=t.icons,n=e.main,r=e.mask,a=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.title,u=t.maskId,d=t.titleId,h=t.extra,p=t.watchable,w=void 0!==p&&p,y=r.found?r:n,k=y.width,g=y.height,x="fak"===a,A=x?"":"fa-w-".concat(Math.ceil(k/g*16)),P=[c.replacementClass,i?"".concat(c.familyPrefix,"-").concat(i):"",A].filter(function(it){return-1===h.classes.indexOf(it)}).filter(function(it){return""!==it||!!it}).concat(h.classes).join(" "),T={children:[],attributes:m({},h.attributes,{"data-prefix":a,"data-icon":i,class:P,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(k," ").concat(g)})},X=x&&!~h.classes.indexOf("fa-fw")?{width:"".concat(k/g*16*.0625,"em")}:{};w&&(T.attributes[N]=""),l&&T.children.push({tag:"title",attributes:{id:T.attributes["aria-labelledby"]||"title-".concat(d||W())},children:[l]});var L=m({},T,{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:m({},X,h.styles)}),We=r.found&&n.found?function Mn(t){var e=t.children,n=t.attributes,r=t.main,a=t.mask,i=t.maskId,l=r.icon,d=a.icon,h=oe({transform:t.transform,containerWidth:a.width,iconWidth:r.width}),p={tag:"rect",attributes:m({},gt,{fill:"white"})},w=l.children?{children:l.children.map(le)}:{},y={tag:"g",attributes:m({},h.inner),children:[le(m({tag:l.tag,attributes:m({},l.attributes,h.path)},w))]},k={tag:"g",attributes:m({},h.outer),children:[y]},g="mask-".concat(i||W()),x="clip-".concat(i||W()),A={tag:"mask",attributes:m({},gt,{id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,k]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:En(d)},A]};return e.push(P,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(g,")")},gt)}),{children:e,attributes:n}}(L):function Ln(t){var e=t.children,n=t.attributes,r=t.main,a=t.transform,o=Z(t.styles);if(o.length>0&&(n.style=o),vt(a)){var s=oe({transform:a,containerWidth:r.width,iconWidth:r.width});e.push({tag:"g",attributes:m({},s.outer),children:[{tag:"g",attributes:m({},s.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:m({},r.icon.attributes,s.path)}]}]})}else e.push(r.icon);return{children:e,attributes:n}}(L),Or=We.attributes;return L.children=We.children,L.attributes=Or,s?function Pn(t){var n=t.iconName,r=t.children,i=t.symbol;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m({},t.attributes,{id:!0===i?"".concat(t.prefix,"-").concat(c.familyPrefix,"-").concat(n):i}),children:r}]}]}(L):function zn(t){var e=t.children,n=t.main,r=t.mask,a=t.attributes,i=t.styles,o=t.transform;if(vt(o)&&n.found&&!r.found){var u={x:n.width/n.height/2,y:.5};a.style=Z(m({},i,{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}(L)}function fe(t){var e=t.content,n=t.width,r=t.height,a=t.transform,i=t.title,o=t.extra,s=t.watchable,l=void 0!==s&&s,u=m({},o.attributes,i?{title:i}:{},{class:o.classes.join(" ")});l&&(u[N]="");var d=m({},o.styles);vt(a)&&(d.transform=function On(t){var e=t.transform,n=t.width,a=t.height,i=void 0===a?16:a,o=t.startCentered,s=void 0!==o&&o,l="";return l+=s&&Bt?"translate(".concat(e.x/M-(void 0===n?16:n)/2,"em, ").concat(e.y/M-i/2,"em) "):s?"translate(calc(-50% + ".concat(e.x/M,"em), calc(-50% + ").concat(e.y/M,"em)) "):"translate(".concat(e.x/M,"em, ").concat(e.y/M,"em) "),(l+="scale(".concat(e.size/M*(e.flipX?-1:1),", ").concat(e.size/M*(e.flipY?-1:1),") "))+"rotate(".concat(e.rotate,"deg) ")}({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var h=Z(d);h.length>0&&(u.style=h);var p=[];return p.push({tag:"span",attributes:u,children:[e]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Fn(t){var e=t.content,n=t.title,r=t.extra,a=m({},r.attributes,n?{title:n}:{},{class:r.classes.join(" ")}),i=Z(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var kt=function(e,n,r,a){var l,u,d,i=Object.keys(e),o=i.length,s=void 0!==a?function(e,n){return function(r,a,i,o){return e.call(n,r,a,i,o)}}(n,a):n;for(void 0===r?(l=1,d=e[i[0]]):(l=0,d=r);l<o;l++)d=s(d,e[u=i[l]],u,e);return d};function me(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.skipHooks,a=void 0!==r&&r,i=Object.keys(e).reduce(function(o,s){var l=e[s];return l.icon?o[l.iconName]=l.icon:o[s]=l,o},{});"function"!=typeof I.hooks.addPack||a?I.styles[t]=m({},I.styles[t]||{},i):I.hooks.addPack(t,i),"fas"===t&&me("fa",e)}var he=I.styles,Rn=I.shims,ye=function(){var e=function(a){return kt(he,function(i,o,s){return i[s]=kt(o,a,{}),i},{})};e(function(r,a,i){return a[3]&&(r[a[3]]=i),r}),e(function(r,a,i){var o=a[2];return r[i]=i,o.forEach(function(s){r[s]=i}),r});var n="far"in he;kt(Rn,function(r,a){var o=a[1];return"far"===o&&!n&&(o="fas"),r[a[0]]={prefix:o,iconName:a[2]},r},{})};function we(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}function R(t){var e=t.tag,n=t.attributes,r=void 0===n?{}:n,a=t.children,i=void 0===a?[]:a;return"string"==typeof t?se(t):"<".concat(e," ").concat(function _n(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(se(t[n]),'" ')},"").trim()}(r),">").concat(i.map(R).join(""),"</").concat(e,">")}ye();function B(t){this.name="MissingIcon",this.message=t||"Icon unavailable",this.stack=(new Error).stack}(B.prototype=Object.create(Error.prototype)).constructor=B;var nt={fill:"currentColor"},Te={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},At=(m({},nt,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}),m({},Te,{attributeName:"opacity"}));function St(t){var e=t[0],n=t[1],i=st(t.slice(4),1)[0];return{found:!0,width:e,height:n,icon:Array.isArray(i)?{tag:"g",attributes:{class:"".concat(c.familyPrefix,"-").concat(z.GROUP)},children:[{tag:"path",attributes:{class:"".concat(c.familyPrefix,"-").concat(z.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(c.familyPrefix,"-").concat(z.PRIMARY),fill:"currentColor",d:i[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:i}}}}function U(){c.autoAddCss&&!at&&(function ie(t){if(t&&S){var e=v.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=v.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return v.head.insertBefore(e,r),t}}(function Ot(){var t="fa",e=Xt,n=c.familyPrefix,r=c.replacementClass,a='svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';if(n!==t||r!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}()),at=!0)}function rt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return R(r)})}}),Object.defineProperty(t,"node",{get:function(){if(S){var r=v.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function Et(t){var e=t.prefix,n=void 0===e?"fa":e,r=t.iconName;if(r)return we(Me.definitions,n,r)||we(I.styles,n,r)}m({},nt,{cx:"256",cy:"364",r:"28"}),m({},Te,{attributeName:"r",values:"28;14;28;28;14;28;"}),m({},At,{values:"1;0;1;1;0;1;"}),m({},nt,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),m({},At,{values:"1;0;0;0;0;1;"}),m({},nt,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),m({},At,{values:"0;0;1;1;0;0;"});var Me=new(function(){function t(){(function Ye(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.definitions={}}return function Be(t,e,n){e&&Nt(t.prototype,e),n&&Nt(t,n)}(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=m({},n.definitions[s]||{},o[s]),me(s,o[s]),ye()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,u=o.icon;n[s]||(n[s]={}),n[s][l]=u}),n}}]),t}()),at=!1,Mt_transform=function(e){return function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e?e.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&"h"===s)return r.flipX=!0,r;if(o&&"v"===s)return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s}return r},n):n}(e)},Le=function hr(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=(e||{}).icon?e:Et(e||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Et(a||{})),t(r,m({},n,{mask:a}))}}(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.transform,r=void 0===n?E:n,a=e.symbol,i=void 0!==a&&a,o=e.mask,s=void 0===o?null:o,l=e.maskId,u=void 0===l?null:l,d=e.title,h=void 0===d?null:d,p=e.titleId,w=void 0===p?null:p,y=e.classes,k=void 0===y?[]:y,g=e.attributes,x=void 0===g?{}:g,A=e.styles,P=void 0===A?{}:A;if(t){var T=t.prefix,X=t.iconName,L=t.icon;return rt(m({type:"icon"},t),function(){return U(),c.autoA11y&&(h?x["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(w||W()):(x["aria-hidden"]="true",x.focusable="false")),yt({icons:{main:St(L),mask:s?St(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:T,iconName:X,transform:m({},E,r),symbol:i,title:h,maskId:u,titleId:w,extra:{attributes:x,styles:P,classes:k}})})}}),Lt=V(313);const Fe=["*"],Ne=t=>{const e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-inverse":t.inverse,"fa-layers-counter":t.counter,"fa-flip-horizontal":"horizontal"===t.flip||"both"===t.flip,"fa-flip-vertical":"vertical"===t.flip||"both"===t.flip,[`fa-${t.size}`]:null!==t.size,[`fa-rotate-${t.rotate}`]:null!==t.rotate,[`fa-pull-${t.pull}`]:null!==t.pull,[`fa-stack-${t.stackItemSize}`]:null!=t.stackItemSize};return Object.keys(e).map(n=>e[n]?n:null).filter(n=>n)};let zt=(()=>{class t{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=f.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),De=(()=>{class t{constructor(){this.definitions={}}addIcons(...n){for(const r of n){r.prefix in this.definitions||(this.definitions[r.prefix]={}),this.definitions[r.prefix][r.iconName]=r;for(const a of r.icon[2])"string"==typeof a&&(this.definitions[r.prefix][a]=r)}}addIconPacks(...n){for(const r of n){const a=Object.keys(r).map(i=>r[i]);this.addIcons(...a)}}getIconDefinition(n,r){return n in this.definitions&&r in this.definitions[n]?this.definitions[n][r]:null}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=f.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),Re=(()=>{class t{constructor(){this.stackItemSize="1x"}ngOnChanges(n){if("size"in n)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=f.lG2({type:t,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},features:[f.TTD]}),t})(),je=(()=>{class t{constructor(n,r){this.renderer=n,this.elementRef=r}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(n){"size"in n&&(null!=n.size.currentValue&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${n.size.currentValue}`),null!=n.size.previousValue&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${n.size.previousValue}`))}}return t.\u0275fac=function(n){return new(n||t)(f.Y36(f.Qsj),f.Y36(f.SBq))},t.\u0275cmp=f.Xpm({type:t,selectors:[["fa-stack"]],inputs:{size:"size"},features:[f.TTD],ngContentSelectors:Fe,decls:1,vars:0,template:function(n,r){1&n&&(f.F$t(),f.Hsn(0))},encapsulation:2}),t})(),$e=(()=>{class t{constructor(n,r,a,i,o){this.sanitizer=n,this.config=r,this.iconLibrary=a,this.stackItem=i,this.classes=[],null!=o&&null==i&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(n){if(null==this.icon&&null==this.config.fallbackIcon)return(()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")})();let r=null;if(r=null==this.icon?this.config.fallbackIcon:this.icon,n){const a=this.findIconDefinition(r);if(null!=a){const i=this.buildParams();this.renderIcon(a,i)}}}render(){this.ngOnChanges({})}findIconDefinition(n){const r=((t,e)=>(t=>void 0!==t.prefix&&void 0!==t.iconName)(t)?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"==typeof t?{prefix:e,iconName:t}:void 0)(n,this.config.defaultPrefix);if("icon"in r)return r;const a=this.iconLibrary.getIconDefinition(r.prefix,r.iconName);return null!=a?a:((t=>{throw new Error(`Could not find icon with iconName=${t.iconName} and prefix=${t.prefix} in the icon library.`)})(r),null)}buildParams(){const n={flip:this.flip,spin:this.spin,pulse:this.pulse,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:"boolean"==typeof this.fixedWidth?this.fixedWidth:this.config.fixedWidth,stackItemSize:null!=this.stackItem?this.stackItem.stackItemSize:null},r="string"==typeof this.transform?Mt_transform(this.transform):this.transform;return{title:this.title,transform:r,classes:[...Ne(n),...this.classes],mask:null!=this.mask?this.findIconDefinition(this.mask):null,styles:null!=this.styles?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(n,r){const a=Le(n,r);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(a.html.join("\n"))}}return t.\u0275fac=function(n){return new(n||t)(f.Y36(Lt.H7),f.Y36(zt),f.Y36(De),f.Y36(Re,8),f.Y36(je,8))},t.\u0275cmp=f.Xpm({type:t,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(n,r){2&n&&(f.Ikx("innerHTML",r.renderedIconHTML,f.oJD),f.uIk("title",r.title))},inputs:{icon:"icon",title:"title",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},features:[f.TTD],decls:0,vars:0,template:function(n,r){},encapsulation:2}),t})(),Cr=(()=>{class t extends $e{findIconDefinition(n){const r=super.findIconDefinition(n);if(null!=r&&!Array.isArray(r.icon[4]))throw new Error(`The specified icon does not appear to be a Duotone icon. Check that you specified the correct style: <fa-duotone-icon [icon]="['fad', '${r.iconName}']"></fa-duotone-icon> or use: <fa-icon icon="${r.iconName}"></fa-icon> instead.`);return r}buildParams(){const n=super.buildParams();return(!0===this.swapOpacity||"true"===this.swapOpacity)&&n.classes.push("fa-swap-opacity"),null!=this.primaryOpacity&&(n.styles["--fa-primary-opacity"]=this.primaryOpacity.toString()),null!=this.secondaryOpacity&&(n.styles["--fa-secondary-opacity"]=this.secondaryOpacity.toString()),null!=this.primaryColor&&(n.styles["--fa-primary-color"]=this.primaryColor),null!=this.secondaryColor&&(n.styles["--fa-secondary-color"]=this.secondaryColor),n}}return t.\u0275fac=function(){let e;return function(r){return(e||(e=f.n5z(t)))(r||t)}}(),t.\u0275cmp=f.Xpm({type:t,selectors:[["fa-duotone-icon"]],inputs:{swapOpacity:"swapOpacity",primaryOpacity:"primaryOpacity",secondaryOpacity:"secondaryOpacity",primaryColor:"primaryColor",secondaryColor:"secondaryColor"},features:[f.qOj],decls:0,vars:0,template:function(n,r){},encapsulation:2}),t})();const He=(t,e,n)=>{if(!t)throw new Error(`${n} should be used as child of ${e} only.`)};let Pt=(()=>{class t{constructor(n,r,a){this.renderer=n,this.elementRef=r,this.config=a}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-layers"),this.fixedWidth="boolean"==typeof this.fixedWidth?this.fixedWidth:this.config.fixedWidth}ngOnChanges(n){"size"in n&&(null!=n.size.currentValue&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${n.size.currentValue}`),null!=n.size.previousValue&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${n.size.previousValue}`))}}return t.\u0275fac=function(n){return new(n||t)(f.Y36(f.Qsj),f.Y36(f.SBq),f.Y36(zt))},t.\u0275cmp=f.Xpm({type:t,selectors:[["fa-layers"]],hostVars:2,hostBindings:function(n,r){2&n&&f.ekj("fa-fw",r.fixedWidth)},inputs:{size:"size",fixedWidth:"fixedWidth"},features:[f.TTD],ngContentSelectors:Fe,decls:1,vars:0,template:function(n,r){1&n&&(f.F$t(),f.Hsn(0))},encapsulation:2}),t})(),Ar=(()=>{class t{constructor(n,r){this.parent=n,this.sanitizer=r,this.classes=[],He(this.parent,"FaLayersComponent",this.constructor.name)}ngOnChanges(n){if(n){const r=this.buildParams();this.updateContent(r)}}buildParams(){return{title:this.title,classes:this.classes,styles:this.styles}}updateContent(n){this.renderedHTML=this.sanitizer.bypassSecurityTrustHtml(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.title,a=void 0===r?null:r,i=n.classes,o=void 0===i?[]:i,s=n.attributes,l=void 0===s?{}:s,u=n.styles,d=void 0===u?{}:u;return rt({type:"counter",content:e},function(){return U(),Fn({content:e.toString(),title:a,extra:{attributes:l,styles:d,classes:["".concat(c.familyPrefix,"-layers-counter")].concat(ot(o))}})})}(this.content||"",n).html.join(""))}}return t.\u0275fac=function(n){return new(n||t)(f.Y36(Pt,8),f.Y36(Lt.H7))},t.\u0275cmp=f.Xpm({type:t,selectors:[["fa-layers-counter"]],hostAttrs:[1,"ng-fa-layers-counter"],hostVars:1,hostBindings:function(n,r){2&n&&f.Ikx("innerHTML",r.renderedHTML,f.oJD)},inputs:{content:"content",title:"title",styles:"styles",classes:"classes"},features:[f.TTD],decls:0,vars:0,template:function(n,r){},encapsulation:2}),t})(),Tr=(()=>{class t{constructor(n,r){this.parent=n,this.sanitizer=r,this.classes=[],He(this.parent,"FaLayersComponent",this.constructor.name)}ngOnChanges(n){if(n){const r=this.buildParams();this.updateContent(r)}}buildParams(){const n={flip:this.flip,spin:this.spin,pulse:this.pulse,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:this.fixedWidth};return{transform:"string"==typeof this.transform?Mt_transform(this.transform):this.transform,classes:[...Ne(n),...this.classes],title:this.title,styles:this.styles}}updateContent(n){this.renderedHTML=this.sanitizer.bypassSecurityTrustHtml(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.transform,a=void 0===r?E:r,i=n.title,o=void 0===i?null:i,s=n.classes,l=void 0===s?[]:s,u=n.attributes,d=void 0===u?{}:u,h=n.styles,p=void 0===h?{}:h;return rt({type:"text",content:e},function(){return U(),fe({content:e,transform:m({},E,a),title:o,extra:{attributes:d,styles:p,classes:["".concat(c.familyPrefix,"-layers-text")].concat(ot(l))}})})}(this.content||"",n).html.join("\n"))}}return t.\u0275fac=function(n){return new(n||t)(f.Y36(Pt,8),f.Y36(Lt.H7))},t.\u0275cmp=f.Xpm({type:t,selectors:[["fa-layers-text"]],hostAttrs:[1,"ng-fa-layers-text"],hostVars:1,hostBindings:function(n,r){2&n&&f.Ikx("innerHTML",r.renderedHTML,f.oJD)},inputs:{content:"content",title:"title",styles:"styles",classes:"classes",spin:"spin",pulse:"pulse",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform"},features:[f.TTD],decls:0,vars:0,template:function(n,r){},encapsulation:2}),t})(),Sr=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=f.oAB({type:t}),t.\u0275inj=f.cJS({}),t})()}}]);