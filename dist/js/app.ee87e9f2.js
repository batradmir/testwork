(function(t){function e(e){for(var s,a,i=e[0],c=e[1],u=e[2],d=0,v=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&v.push(o[a][0]),o[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(v.length)v.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(s=!1)}s&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var s={},o={app:0},r=[];function a(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=s,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(n,s,function(e){return t[e]}.bind(null,s));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/testwork/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],a=(n("5c0b"),n("2877")),i={},c=Object(a["a"])(i,o,r,!1,null,null,null),u=c.exports,l=n("9483");Object(l["a"])("".concat("/testwork/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var d=n("8c4f"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[t.message?n("div",{staticClass:"modal"},[n("div",{staticClass:"modal_container"},[n("div",{staticClass:"modal_header"},[t._v("Возникла ошибка")]),n("div",{staticClass:"modal_body"},[t._v(" "+t._s(t.message.status)+" ")])])]):n("div",{staticClass:"main_block"},[n("div",{staticClass:"top_section mdiv"},[n("button",{staticClass:"cstmbut",on:{click:function(e){t.value=[],t.saved=[],t.countSaved=-1,t.maxSaved=!1}}},[t._v(" Сбросить ")]),n("button",{staticClass:"cstmbut",attrs:{disabled:t.countSaved<0},on:{click:t.backCl}},[t._v(" Назад ")]),n("button",{staticClass:"cstmbut",attrs:{disabled:t.countSaved>=t.saved.length-1},on:{click:t.forwardCl}},[t._v(" Вперед ")])]),n("div",{staticClass:"main_block_ins"},[t.splitArr?n("div",{staticClass:"main_block_body"},t._l(t.splitArr,(function(e,s){return n("div",{key:s,staticClass:"multiselect"},[n("label",[t._v(t._s(typeof e[0])+" ")]),n("multiselect",{attrs:{value:t.value,options:e,multiple:!0,"close-on-select":!1,"clear-on-select":!1},on:{select:function(e){return t.selectNewItem(e)},remove:function(e){return t.removeNewItem(e)}},scopedSlots:t._u([{key:"selection",fn:function(e){var o=e.values;return[o.length?n("span",{staticClass:"multiselect__single"},[t._v(" Выбрано "+t._s(t.functype(o,s))+" ")]):t._e()]}}],null,!0)})],1)})),0):t._e(),n("div",{staticClass:"main_block_body liststyle"},t._l(t.value,(function(e){return n("li",{key:e.index},[t._v(" "+t._s(e)+" ")])})),0)]),n("div",{staticClass:"secondary_block"},[""!=t.strsha256?n("div",{staticClass:"secondary_block_ins"},[n("h4",[t._v("SHA256")]),t._v(" "+t._s(t.strsha256)+" ")]):t._e(),""!=t.mulres?n("div",{staticClass:"secondary_block_ins"},[n("h4",[t._v("Multiplication")]),t._v(" "+t._s(t.mulres)+" ")]):t._e()])])])},f=[],h=n("1da1"),p=n("53ca"),m=(n("96cf"),n("e9c4"),n("d3b7"),n("8e5f")),b=n.n(m),_={name:"Home",data:function(){return{message:null,flatArr:null,splitArr:null,value:[],saved:[],countSaved:-1,maxSaved:!1}},components:{multiselect:b.a},computed:{strsha256:function(){for(var t=n("6c27"),e="",s=0;s<this.value.length;s++)"string"==typeof this.value[s]&&(e+=this.value[s]);return""!=e?t(e):""},mulres:function(){for(var t=1,e=!1,n=0;n<this.value.length;n++)"number"==typeof this.value[n]&&(t*=this.value[n],e=!0);return e?t:""}},methods:{functype:function(t,e){var n="",s=0;switch(e){case 0:n="string";break;case 1:n="number";break;case 2:n="object";break;case 3:n="boolean";break;default:break}for(var o=0;o<t.length;o++)Object(p["a"])(t[o])==n&&s++;return s},customFlatArrMethod:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=null,s=0;s<t.length;s++)n=t[s],Array.isArray(n)?this.customFlatArrMethod(n,e):e.push(n);return e},customSplitArrMethod:function(t){for(var e={},n=[],s=0,o=null,r=0;r<t.length;r++)o=e[Object(p["a"])(t[r])],void 0==o&&(e[Object(p["a"])(t[r])]=s++,o=e[Object(p["a"])(t[r])]),n[o]?n[o].push(t[r]):n.push([t[r]]);return n},selectNewItem:function(t){this.value.push(t),this.saved.push(JSON.parse(JSON.stringify(this.value))),this.countSaved++,this.countSaved>10&&(this.saved.shift(),this.countSaved--,this.maxSaved=!0)},removeNewItem:function(t){for(var e=[],n=0;n<this.value.length;n++)this.value[n]!=t&&e.push(this.value[n]);this.value=e,this.saved.push(JSON.parse(JSON.stringify(this.value))),this.countSaved++,this.countSaved>10&&(this.saved.shift(),this.countSaved--,this.maxSaved=!0)},forwardCl:function(){this.value=this.saved[this.countSaved+1],this.countSaved++},backCl:function(){0!=this.countSaved?(this.value=this.saved[this.countSaved-1],this.countSaved--,console.log("1")):0!=this.countSaved||this.maxSaved?0==this.countSaved&&this.maxSaved&&(this.value=this.saved[this.countSaved],this.countSaved--,console.log("3")):(this.value=[],this.countSaved--,console.log("2"))}},mounted:function(){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://raw.githubusercontent.com/WilliamRu/TestAPI/master/db.json").then((function(t){if(t.ok)return t.json()})).catch((function(t){return{status:t}}));case 2:n=e.sent,n.status&&(t.message=n),t.flatArr=t.customFlatArrMethod(n.testArr),t.splitArr=t.customSplitArrMethod(t.flatArr);case 6:case"end":return e.stop()}}),e)})))()}},g=_,S=(n("60bc"),n("7bf7"),Object(a["a"])(g,v,f,!1,null,"79f84d18",null)),y=S.exports;s["a"].use(d["a"]);var w=[{path:"/",name:"Home",component:y}],k=new d["a"]({mode:"history",base:"/testwork/",routes:w}),C=k,O=n("2f62");s["a"].use(O["a"]);var j=new O["a"].Store({state:{},mutations:{},actions:{},modules:{}});s["a"].config.productionTip=!1,new s["a"]({router:C,store:j,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"7bf7":function(t,e,n){"use strict";n("932d")},"932d":function(t,e,n){},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.ee87e9f2.js.map