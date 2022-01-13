(function(e){function t(t){for(var r,s,u=t[0],c=t[1],i=t[2],l=0,p=[];l<u.length;l++)s=u[l],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function s(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d22d746":"4f856204"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=s(e);var i=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",i.name="ChunkLoadError",i.type=r,i.request=a,n[1](i)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/testwork/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},a=[],s=(n("5c0b"),n("2877")),u={},c=Object(s["a"])(u,o,a,!1,null,null,null),i=c.exports,l=n("9483");Object(l["a"])("".concat("/testwork/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var f=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" 1 "),n("button",{on:{click:e.getAllData}},[e._v("er")]),n("button",{on:{click:e.myflat}},[e._v("er22")]),n("button",{on:{click:e.mysplicer}},[e._v("er33")]),e.getResult?n("div",[e._v(" data = "+e._s(e.getResult.data))]):e._e(),e._v(" test = "+e._s(e.test)+" test2 = "+e._s(e.test2)+" ")])},d=[],h=n("53ca"),v=n("1da1"),g=(n("96cf"),n("99af"),n("d9e2"),n("ac1f"),n("00b4"),{name:"Home",data:function(){return{getResult:null,test:null,test2:null}},components:{},methods:{getAllData:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var n,r,o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://raw.githubusercontent.com/WilliamRu/TestAPI/master/db.json");case 3:if(n=t.sent,n.ok){t.next=7;break}throw r="An error has occured: ".concat(n.status," - ").concat(n.statusText),new Error(r);case 7:return t.next=9,n.json();case 9:o=t.sent,a={status:n.status+"-"+n.statusText,headers:{"Content-Type":n.headers.get("Content-Type"),"Content-Length":n.headers.get("Content-Length")},length:n.headers.get("Content-Length"),data:o},e.getResult=a,t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](0),e.getResult=t.t0.message;case 17:case"end":return t.stop()}}),t,null,[[0,14]])})))()},myflat:function(){this.test=m(this.getResult.data.testArr)},mysplicer:function(){this.test2=b(this.test)}},mounted:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getAllData();case 2:e.myflat(),e.mysplicer();case 4:case"end":return t.stop()}}),t)})))()}}),m=function e(t){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=0,o=t.length;r<o;r++){var a=t[r];Array.isArray(a)?e(a,n):n.push(a)}return n},b=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[[],[],[],[]],n=0,r=e.length;n<r;n++){var o=e[n];"number"==typeof o?t[0].push(o):"string"==typeof o?t[1].push(o):"object"==Object(h["a"])(o)?t[2].push(o):"boolean"==typeof o&&t[3].push(o)}return t},y=g,w=Object(s["a"])(y,p,d,!1,null,null,null),k=w.exports;r["a"].use(f["a"]);var _=[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}}],j=new f["a"]({mode:"history",base:"/testwork/",routes:_}),x=j,O=n("2f62");r["a"].use(O["a"]);var A=new O["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:x,store:A,render:function(e){return e(i)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.e4fb8f32.js.map