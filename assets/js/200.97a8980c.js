(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{786:function(t,e,a){"use strict";a.r(e);var s=a(56),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vue2-0不再支持v-html中使用过滤器了怎么办"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue2-0不再支持v-html中使用过滤器了怎么办"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/haizlin/fe-interview/issues/555",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue2.0不再支持v-html中使用过滤器了怎么办？"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[a("p",[t._v("使用自定义过滤方法或 computed 属性")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("htmlFilter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("htmlString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" htmlString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v(">\\s+<")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'><'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在模板使用： "),a("code",[t._v('v-html="htmlFilter(htmlString)')])])]),t._v(" "),a("li",[a("p",[t._v("使用自定义过滤器")])])]),t._v(" "),a("p",[t._v("Vue.js 允许你自定义过滤器，可被用于一些常见的文本格式化。过滤器可以用在两个地方："),a("strong",[t._v("双花括号插值和 "),a("code",[t._v("v-bind")]),t._v(" 表达式")]),t._v(" (后者从 2.1.0+ 开始支持)。过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”符号指示：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('\x3c!-- 在双花括号中 --\x3e\n{{ message | capitalize }}\n\n\x3c!-- 在 `v-bind` 中 --\x3e\n<div v-bind:id="rawId | formatId"></div>\n')])])]),a("p",[t._v("你可以在一个组件的选项中定义本地的过滤器：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("filters: {\n  capitalize: function (value) {\n    if (!value) return ''\n    value = value.toString()\n    return value.charAt(0).toUpperCase() + value.slice(1)\n  }\n}\n")])])]),a("p",[t._v("或者在创建 Vue 实例之前全局定义过滤器：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Vue.filter('capitalize', function (value) {\n  if (!value) return ''\n  value = value.toString()\n  return value.charAt(0).toUpperCase() + value.slice(1)\n})\n\nnew Vue({\n  // ...\n})\n")])])]),a("p",[t._v("当全局过滤器和局部过滤器重名时，会采用局部过滤器。")])])}),[],!1,null,null,null);e.default=n.exports}}]);