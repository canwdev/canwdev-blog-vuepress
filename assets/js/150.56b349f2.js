(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{735:function(e,t,a){"use strict";a.r(t);var r=a(56),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"怎么缓存当前打开的路由组件-缓存后想更新当前组件怎么办呢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#怎么缓存当前打开的路由组件-缓存后想更新当前组件怎么办呢"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"https://github.com/haizlin/fe-interview/issues/427",target:"_blank",rel:"noopener noreferrer"}},[e._v("怎么缓存当前打开的路由组件，缓存后想更新当前组件怎么办呢？"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("使用 "),a("code",[e._v("<keep-alive>")]),e._v(" 包裹组件，可以实现缓存。")]),e._v(" "),a("p",[e._v("当路由切换，或组件被重新激活时，会触发组件内部的 "),a("code",[e._v("activated")]),e._v(" 钩子，此时可以更新组件。")]),e._v(" "),a("p",[e._v("如果路由没有变化，则 "),a("code",[e._v("activated")]),e._v(" 钩子可能不会执行，这是就需要手动检测路由变化来更新组件，有下面几种方法：")]),e._v(" "),a("h3",{attrs:{id:"使用组件的-beforerouteenter-钩子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用组件的-beforerouteenter-钩子"}},[e._v("#")]),e._v(" 使用组件的 beforeRouteEnter 钩子")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("beforeRouteEnter(to, from, next){\n    next(vm=>{\n        console.log(vm)\n        // 每次进入路由执行\n        vm.getData()\n    })\n},\n")])])]),a("h3",{attrs:{id:"观察-route-变化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#观察-route-变化"}},[e._v("#")]),e._v(" 观察 $route 变化")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("watch: {\n  '$route'(to, from) {\n    if(to.name === 'GoodsDetail') {\n      // 处理更新\n    }\n  }\n}\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);