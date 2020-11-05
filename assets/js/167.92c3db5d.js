(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{748:function(t,s,a){"use strict";a.r(s);var e=a(57),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"说说你对object-defineproperty的理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说说你对object-defineproperty的理解"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/haizlin/fe-interview/issues/448",target:"_blank",rel:"noopener noreferrer"}},[t._v("说说你对Object.defineProperty的理解"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("code",[t._v("Object.defineProperty")]),t._v(" 是 ES5 新增的功能，用于设置或修改对象“属性的特性”。")]),t._v(" "),a("p",[t._v("假设我们有一个空对象 "),a("code",[t._v("var a = {}")]),t._v("，通过 "),a("code",[t._v("a.test1 = 123")]),t._v(" 可以给 a 对象设置一个属性名为 "),a("code",[t._v("test1")]),t._v(" 值为 123 的属性。")]),t._v(" "),a("p",[t._v("通过 "),a("code",[t._v("Object.getOwnPropertyDescriptor(a, 'test1')")]),t._v(" 可以获取属性 "),a("code",[t._v("test1")]),t._v(" 的特性，也就是默认属性的特性，如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n  "value": 123, // 属性值\n  "writable": true, // 是否可写，如果为 false 则 value 是只读的\n  "enumerable": true, // 是否可枚举，如果为 false 则不能用 for in 循环遍历\n  "configurable": true // 是否可配置，如果为 false 则不能配置这个属性的特性\n}\n')])])]),a("p",[t._v("可以使用 "),a("code",[t._v("Object.defineProperty")]),t._v(" 来定义或修改属性："),a("code",[t._v("Object.defineProperty(a, 'test', { value: 456, writable: true, enumerable: false, configurable: false })")]),t._v("，注意：默认情况下 writable, enumerable, configurable 都是 "),a("code",[t._v("false")]),t._v("，所以定义或修改时务必要指定它们的值。")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("get/set")]),t._v(" 存取器方法代替 "),a("code",[t._v("value/writable")]),t._v(" 特性：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// getter 属性用于设置其他属性的值")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// setter 属性读取其他属性的值")]),t._v("\n  enumerable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  configurable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\na"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("hr"),t._v(" "),a("p",[t._v("Vue 的数据双向绑定原理正式利用了 "),a("code",[t._v("Object.defineProperty")]),t._v(" 定义了数据的 setter 和 getter 方法，通过观察者模式（发布订阅模式）来监听和处理数据的变化。")])])}),[],!1,null,null,null);s.default=n.exports}}]);