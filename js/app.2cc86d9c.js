(function(e){function n(n){for(var c,r,a=n[0],d=n[1],f=n[2],h=0,i=[];h<a.length;h++)r=a[h],Object.prototype.hasOwnProperty.call(u,r)&&u[r]&&i.push(u[r][0]),u[r]=0;for(c in d)Object.prototype.hasOwnProperty.call(d,c)&&(e[c]=d[c]);l&&l(n);while(i.length)i.shift()();return o.push.apply(o,f||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],c=!0,r=1;r<t.length;r++){var a=t[r];0!==u[a]&&(c=!1)}c&&(o.splice(n--,1),e=d(d.s=t[0]))}return e}var c={},r={app:0},u={app:0},o=[];function a(e){return d.p+"js/"+({}[e]||e)+"."+{"chunk-0ba4fb59":"477c95ae","chunk-219e53b0":"119c98c2","chunk-70473710":"c705f6f0","chunk-756950ca":"1a12eb29","chunk-2d0c0a75":"5c30f80b","chunk-2d3e7f39":"1466f621","chunk-30ae1209":"ac518df2","chunk-36afd096":"c224e8f6","chunk-0d3d885f":"986181a6","chunk-6ce5d9c1":"5b335f63","chunk-3db58cc8":"d3a39b40","chunk-525f4d47":"0f3ebf14","chunk-56154de0":"dae3cb0c","chunk-5f6c2c6f":"52da8b1e","chunk-72c92fb1":"208242e2","chunk-7b745046":"316e1042","chunk-916b9110":"3e5da49f"}[e]+".js"}function d(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(e){var n=[],t={"chunk-756950ca":1,"chunk-2d3e7f39":1,"chunk-30ae1209":1,"chunk-3db58cc8":1,"chunk-525f4d47":1,"chunk-56154de0":1,"chunk-5f6c2c6f":1,"chunk-72c92fb1":1,"chunk-7b745046":1,"chunk-916b9110":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-0ba4fb59":"31d6cfe0","chunk-219e53b0":"31d6cfe0","chunk-70473710":"31d6cfe0","chunk-756950ca":"7caf999e","chunk-2d0c0a75":"31d6cfe0","chunk-2d3e7f39":"16480bf0","chunk-30ae1209":"d6542432","chunk-36afd096":"31d6cfe0","chunk-0d3d885f":"31d6cfe0","chunk-6ce5d9c1":"31d6cfe0","chunk-3db58cc8":"b3289e50","chunk-525f4d47":"dd84f0c4","chunk-56154de0":"c0a9a919","chunk-5f6c2c6f":"203dd036","chunk-72c92fb1":"c0a9a919","chunk-7b745046":"86da1d4f","chunk-916b9110":"7ff8d02c"}[e]+".css",u=d.p+c,o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var f=o[a],h=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(h===c||h===u))return n()}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){f=i[a],h=f.getAttribute("data-href");if(h===c||h===u)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var c=n&&n.target&&n.target.src||u,o=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete r[e],l.parentNode.removeChild(l),t(o)},l.href=u;var b=document.getElementsByTagName("head")[0];b.appendChild(l)})).then((function(){r[e]=0})));var c=u[e];if(0!==c)if(c)n.push(c[2]);else{var o=new Promise((function(n,t){c=u[e]=[n,t]}));n.push(c[2]=o);var f,h=document.createElement("script");h.charset="utf-8",h.timeout=120,d.nc&&h.setAttribute("nonce",d.nc),h.src=a(e);var i=new Error;f=function(n){h.onerror=h.onload=null,clearTimeout(l);var t=u[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;i.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",i.name="ChunkLoadError",i.type=c,i.request=r,t[1](i)}u[e]=void 0}};var l=setTimeout((function(){f({type:"timeout",target:h})}),12e4);h.onerror=h.onload=f,document.head.appendChild(h)}return Promise.all(n)},d.m=e,d.c=c,d.d=function(e,n,t){d.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,n){if(1&n&&(e=d(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)d.d(t,c,function(n){return e[n]}.bind(null,c));return t},d.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(n,"a",n),n},d.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},d.p="/florescence/",d.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],h=f.push.bind(f);f.push=n,f=f.slice();for(var i=0;i<f.length;i++)n(f[i]);var l=h;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"05c0":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("7a23"),r=(t("7b17"),t("cd74"),t("bc3a")),u=t.n(r),o=t("130e"),a=t("f5af"),d=t.n(a),f=(t("e829"),t("7bb1")),h=t("3aa8"),i=t("cbdf"),l=t("9457"),b=t("f9d5"),p=t.n(b);t("4413");function s(e,n){var t=Object(c["E"])("router-view");return Object(c["y"])(),Object(c["d"])(t)}t("7de8");var k=t("6b0d"),m=t.n(k);const v={},g=m()(v,[["render",s]]);var y=g,O=(t("d3b7"),t("3ca3"),t("ddb0"),t("ac1f"),t("466d"),t("6c02")),j=[{path:"/",component:function(){return t.e("chunk-3db58cc8").then(t.bind(null,"dc73"))},children:[{path:"",component:function(){return Promise.all([t.e("chunk-219e53b0"),t.e("chunk-756950ca")]).then(t.bind(null,"3345"))}},{path:"about",component:function(){return t.e("chunk-2d0c0a75").then(t.bind(null,"4366"))}},{path:"shopflowers",component:function(){return t.e("chunk-5f6c2c6f").then(t.bind(null,"4df6"))}},{path:"product/:id",component:function(){return t.e("chunk-2d3e7f39").then(t.bind(null,"aea2"))}},{path:"faq",component:function(){return t.e("chunk-30ae1209").then(t.bind(null,"e38a"))}},{path:"cart",component:function(){return t.e("chunk-525f4d47").then(t.bind(null,"9bfa"))}},{path:"checkorder",component:function(){return t.e("chunk-56154de0").then(t.bind(null,"635e"))}},{path:"payment/:orderedId",component:function(){return t.e("chunk-72c92fb1").then(t.bind(null,"0614"))}},{path:"favoriteproducts",component:function(){return Promise.all([t.e("chunk-219e53b0"),t.e("chunk-70473710")]).then(t.bind(null,"d36a"))}},{path:"completedpayment",component:function(){return t.e("chunk-916b9110").then(t.bind(null,"8f6a"))}}]},{path:"/login",component:function(){return t.e("chunk-7b745046").then(t.bind(null,"2db0"))}},{path:"/admin",component:function(){return t.e("chunk-0ba4fb59").then(t.bind(null,"fbf0"))},children:[{path:"",component:function(){return Promise.all([t.e("chunk-36afd096"),t.e("chunk-6ce5d9c1")]).then(t.bind(null,"25d3"))}},{path:"order",component:function(){return Promise.all([t.e("chunk-36afd096"),t.e("chunk-0d3d885f")]).then(t.bind(null,"6053"))}}]},{path:"/:pathMatch(.*)*",redirect:"/"}],w=Object(O["a"])({history:Object(O["b"])(),routes:j,linkActiveClass:"active",scrollBehavior:function(e,n,t){return e.fullPath.match("/")?{top:0}:{}}}),P=w;d.a.init({}),Object(f["e"])("required",h["e"]),Object(f["e"])("email",h["a"]),Object(f["e"])("min",h["c"]),Object(f["e"])("max",h["b"]),Object(f["e"])("numeric",h["d"]),Object(f["d"])({generateMessage:Object(i["a"])({zh_TW:l}),validateOnInput:!0}),Object(i["b"])("zh_TW");var E=Object(c["c"])(y);E.use(o["a"],u.a),E.component("VForm",f["c"]),E.component("VField",f["b"]),E.component("ErrorMessage",f["a"]),E.use(p.a),E.use(P),E.mount("#app")},"7de8":function(e,n,t){"use strict";t("05c0")}});
//# sourceMappingURL=app.2cc86d9c.js.map