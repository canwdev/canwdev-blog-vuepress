---
pageClass: vue-248
---

# [Vue 248+ 面试题](https://github.com/haizlin/fe-interview/blob/master/lib/Vue.md) & 个人答案总结

> 20200221 -> 20200701
> ✅ = OK

<ClientOnly>
<ProgressBar/>
</ClientOnly>

## vue

- [✅ 从0到1自己构架一个vue项目，说说有哪些步骤、哪些重要插件、目录结构你会怎么组织](./contents/983.md)

- [✅ 你知道vue的模板语法用的是哪个web模板引擎的吗？说说你对这模板引擎的理解](./contents/561.md)

- [✅ 你知道v-model的原理吗？说说看](./contents/288.md)

- [🌎 你有使用过vue开发多语言项目吗？说说你的做法？](https://github.com/haizlin/fe-interview/issues/559)

  使用 `vue-i18n`

- [✅ 在使用计算属性的时，函数名和data数据源中的数据可以同名吗？](./contents/557.md)

- [✅ vue中data的属性可以和methods中的方法同名吗？为什么？](./contents/557.md)

- [✅ 怎么给vue定义全局的方法？](./contents/556.md)

- [✅ vue2.0不再支持v-html中使用过滤器了怎么办？](./contents/555.md)

- [🌎 怎么解决vue打包后静态资源图片失效的问题？](https://github.com/haizlin/fe-interview/issues/554)

- [✅ 怎么解决vue动态设置img的src不生效的问题？](./contents/553.md)

- [✅ 使用vue后怎么针对搜索引擎做SEO优化？](./contents/552.md)

- [✅ 跟keep-alive有关的生命周期是哪些？描述下这些生命周期](./contents/551.md)

- [🌎 如果现在让你从vue/react/angularjs三个中选择一个，你会选哪个？说说你的理由](https://github.com/haizlin/fe-interview/issues/550)

- [✅ 你知道vue2.0兼容IE哪个版本以上吗？](https://github.com/haizlin/fe-interview/issues/549)

  不兼容ie8及以下，因为vue的响应式原理是基于es5的Object.defineProperty

- [🌎 使用vue开发一个todo小应用，谈下你的思路](https://github.com/haizlin/fe-interview/issues/548)

- [✅ 你有看过vue推荐的风格指南吗？列举出你知道的几条](./contents/547.md)

- [🌎 你是从vue哪个版本开始用的？你知道1.x和2.x有什么区别吗？](https://github.com/haizlin/fe-interview/issues/546)

- [✅ 你知道vue中key的原理吗？说说你对它的理解](./contents/545.md)

- [✅ vue中怎么重置data？](./contents/544.md)

- [✅ vue渲染模板时怎么保留模板中的HTML注释呢？](./contents/508.md)

- [✅ Vue.observable你有了解过吗？说说看](./contents/507.md)

- [✅ 你知道style加scoped属性的用途和原理吗？](./contents/506.md)

- [🌎 你期待vue3.0有什么功能或者改进的地方？](https://github.com/haizlin/fe-interview/issues/489)

- [✅ vue边界情况有哪些？](./contents/478.md)

- [✅ 如何在子组件中访问父组件的实例？](./contents/477.md)

- [✅ watch的属性用箭头函数定义结果会怎么样？](./contents/475.md)

- [✅ 在vue项目中如果methods的方法用箭头函数定义结果会怎么样？](./contents/475.md)

- [✅ 在vue项目中如何配置favicon？](https://github.com/haizlin/fe-interview/issues/474)

- [✅ 你有使用过babel-polyfill模块吗？主要是用来做什么的？](./contents/473.md)

- [✅ 说说你对vue的错误处理的了解？](./contents/472.md)

- [✅ 在vue事件中传入$event，使用e.target和e.currentTarget有什么区别？](./contents/471.md)

- [✅ 在.vue文件中style是必须的吗？那script是必须的吗？为什么？](./contents/470.md)

- [✅ vue怎么实现强制刷新组件？](./contents/469.md)

- [✅ vue自定义事件中父组件怎么接收子组件的多个参数？](https://github.com/haizlin/fe-interview/issues/468)

  `this.$emit("eventName",data)` data为一个对象

- [✅ 实际工作中，你总结的vue最佳实践有哪些？](./contents/467.md)

- [✅ vue给组件绑定自定义事件无效怎么解决？](./contents/466.md)

- [✅ vue的属性名称与method的方法名称一样时会发生什么问题？](./contents/465.md)

- [✅ vue变量名如果以_、$开头的属性会发生什么问题？怎么访问到它们的值？](./contents/464.md)

- [✅ vue使用v-for遍历对象时，是按什么顺序遍历的？如何保证顺序？](./contents/463.md)

- [✅ vue如果想扩展某个现有的组件时，怎么做呢？](./contents/462.md)

- [✅ 说下$attrs和$listeners的使用场景](./contents/461.md)

- [✅ 分析下vue项目本地开发完成后部署到服务器后报404是什么原因呢？](./contents/460.md)

- [✅ v-once的使用场景有哪些？](./contents/459.md)

- [✅ 说说你对vue的表单修饰符.lazy的理解](./contents/458.md)

- [✅ vue为什么要求组件模板只能有一个根元素？](./contents/457.md)

- [✅ EventBus注册在全局上时，路由切换时会重复触发事件，如何解决呢？](https://github.com/haizlin/fe-interview/issues/456)

  - 在路由的 beforeRouteLeave [钩子函数](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E7%BB%84%E4%BB%B6%E5%86%85%E7%9A%84%E5%AE%88%E5%8D%AB)中取消事件监听
  - 不建议全局，建议在组件 mounted 里面注册事件，在 beforeDestroy 里面取消注册

- [✅ 怎么修改vue打包m后生成文件路径？](https://github.com/haizlin/fe-interview/issues/455)

  -  vue-cli3: 在 `vue.config.js` 中修改 [publicPath](https://cli.vuejs.org/zh/config/#publicpath)

- [🌎 你有使用做过vue与原生app交互吗？说说vue与ap交互的方法](https://github.com/haizlin/fe-interview/issues/454)

  - APP 定义一个 API 函数，前端直接调用该函数即可
  - 使用 JsBridge 建立连接，然后相互调用

- [✅ 使用vue写一个tab切换](./contents/453.md)

- [✅ vue中什么是递归组件？举个例子说明下？](./contents/452.md)

- [✅怎么访问到子组件的实例或者子元素？](https://github.com/haizlin/fe-interview/issues/451)

  使用 `this.$children` 或 `this.$refs.xxx`（需要在组件上定义 `ref="xxx"`）

- [✅ 在子组件中怎么访问到父组件的实例？](https://github.com/haizlin/fe-interview/issues/450)

  使用 `this.$parent`

- [✅ 在组件中怎么访问到根实例？](https://github.com/haizlin/fe-interview/issues/449)

  使用 `this.$root` 或

  ```js
  var parent = this.$parent;
  while (parent.$parent) {
      parent = parent.$parent;
  }
  console.log(parent);
  ```

- [✅ 说说你对Object.defineProperty的理解](./contents/448.md)

- [✅ vue组件里写的原生addEventListeners监听事件，要手动去销毁吗？为什么？](./contents/447.md)

- [✅ vue组件里的定时器要怎么销毁？](./contents/446.md)

- [✅ vue组件会在什么时候下被销毁？](https://github.com/haizlin/fe-interview/issues/445)

  - 当调用 `vm.$destroy()` 时
  - 当组件的 `v-if="false"` 时
  - 当组件没有被 keep-alive 包裹时，该组件的路由发生变化

- [✅ 使用vue渲染大量数据时应该怎么优化？说下你的思路！](./contents/444.md)

- [✅ 在vue中使用this应该注意哪些问题？](./contents/443.md)

- [✅ 你有使用过JSX吗？说说你对JSX的理解](./contents/442.md)

- [✅ 说说组件的命名规范](./contents/441.md)

- [✅ 怎么配置使vue2.0+支持TypeScript写法？](https://github.com/haizlin/fe-interview/issues/440)

  https://cn.vuejs.org/v2/guide/typescript.html

- [✅ `<template></template>`有什么用？](./contents/439.md)

- [✅ vue的is这个特性你有用过吗？主要用在哪些方面？](https://github.com/haizlin/fe-interview/issues/438)

- [✅ vue的:class和:style有几种表示方式？](./contents/437.md)

- [✅ 你了解什么是函数式组件吗？](./contents/436.md)

- [✅ vue怎么改变插入模板的分隔符？](https://github.com/haizlin/fe-interview/issues/435)

- [✅ 组件中写name选项有什么作用？](./contents/434.md)

- [✅ 说说你对provide和inject的理解](./contents/433.md)

- [🌎 开发过程中有使用过devtools吗？](https://github.com/haizlin/fe-interview/issues/432)

- [✅ 说说你对slot的理解有多少？slot使用场景有哪些？](./contents/431.md)

- [✅ 你有使用过动态组件吗？说说你对它的理解](./contents/430.md)

- [✅ prop验证的type类型有哪几种？](./contents/429.md)

- [✅ prop是怎么做验证的？可以设置默认值吗？](./contents/429.md)

- [✅ 怎么缓存当前打开的路由组件，缓存后想更新当前组件怎么办呢？](./contents/427.md)

- [🌎 说说你对vue组件的设计原则的理解](https://github.com/haizlin/fe-interview/issues/426)

- [🌎 你了解vue的diff算法吗？](./contents/425.md)

- [🌎 vue如何优化首页的加载速度？](https://github.com/haizlin/fe-interview/issues/424)

- [✅ vue打包成最终的文件有哪些？](./contents/423.md)

- [✅ ajax、fetch、axios这三都有什么区别？](./contents/422.md)

- [✅ vue能监听到数组变化的方法有哪些？为什么这些方法能监听到呢？](./contents/421.md)

- [✅ vue中是如何使用event对象的？](https://github.com/haizlin/fe-interview/issues/420)

  - `@click="func"` 默认传入一个 event 对象
  - `@click="func(a, $event)"` 如果函数有多个参数，使用 `$event` 来指定传入

- [✅ vue首页白屏是什么问题引起的？如何解决呢？](./contents/366.md)

- [✅ 说说你对单向数据流和双向数据流的理解](./contents/365.md)

- [🌎 移动端ui你用的是哪个ui库？有遇到过什么问题吗？](https://github.com/haizlin/fe-interview/issues/364)

  vant/mint

- [✅ 你知道nextTick的原理吗？](./contents/363.md)

- [✅ 说说你对v-cloak和v-pre指令的理解](./contents/362.md)

- [✅ 写出你知道的表单修饰符和事件修饰符](./contents/361.md)

- [✅ 说说你对proxy的理解](./contents/359.md)

- [🌎 你有自己用vue写过UI组件库吗？](https://github.com/haizlin/fe-interview/issues/358)

- [✅ 用vue怎么实现一个换肤的功能？](https://github.com/haizlin/fe-interview/issues/357)

  - 设置一个全局的theme属性，修改时替换 class 或更新 css 变量
  - 使用 stylus/sass 的函数变量功能
  - 使用 css3 变量

- [🌎 有在vue中使用过echarts吗？踩过哪些坑？如何解决的？](https://github.com/haizlin/fe-interview/issues/356)

- [🌎 如果让你教一个2-3年经验前端经验的同事使用vue，你该怎么教？](https://github.com/haizlin/fe-interview/issues/355)

- [✅ vue性能的优化的方法有哪些？](./contents/354.md)

- [✅ SSR解决了什么问题？有做过SSR吗？你是怎么做的？](./contents/353.md)

- [✅ 说说你觉得认为的vue开发规范有哪些？](./contents/547.md)

- [🌎 vue部署上线前需要做哪些准备工作？](https://github.com/haizlin/fe-interview/issues/350)

- [✅ vue过渡动画实现的方式有哪些？](./contents/349.md)

- [✅ vue在created和mounted这两个生命周期中请求数据有什么区别呢？](./contents/348.md)

- [✅ vue父子组件双向绑定的方法有哪些？](./contents/288.md)

- [✅ vue怎么获取DOM节点？](./contents/346.md)

- [🌎 vue项目有做过单元测试吗？](https://github.com/haizlin/fe-interview/issues/345)

- [✅ vue项目有使用过npm run build --report吗？](https://github.com/haizlin/fe-interview/issues/344)

  `--report` 和 `--report-json` 会根据构建统计生成报告，它会帮助你分析包中包含的模块们的大小。[官方文档](https://cli.vuejs.org/zh/guide/cli-service.html#vue-cli-service-build)

- [✅ 如何解决vue打包vendor过大的问题？](./contents/343.md)

- [✅ webpack打包vue速度太慢怎么办？](https://github.com/haizlin/fe-interview/issues/342)

  升级到 webpack4、升级cpu、固态硬盘

- [✅ vue在开发过程中要同时跟N个不同的后端人员联调接口（请求的url不一样）时你该怎么办？](https://github.com/haizlin/fe-interview/issues/341)

  配置 [devServer](https://cli.vuejs.org/zh/config/#devserver) 的 proxy

- [✅ vue要做权限管理该怎么做？如果控制到按钮级别的权限怎么做？](./contents/340.md)

- [🌎 说下你的vue项目的目录结构，如果是大型项目你该怎么划分结构和划分组件呢？](https://github.com/haizlin/fe-interview/issues/339)

- [🌎 在移动端使用vue，你觉得最佳实践有哪些？](https://github.com/haizlin/fe-interview/issues/338)

- [🌎 你们项目为什么会选vue而不选择其它的框架呢？](https://github.com/haizlin/fe-interview/issues/337)

- [🌎 对于即将到来的vue3.0特性你有什么了解的吗？](https://github.com/haizlin/fe-interview/issues/336)

  [[译] 尤雨溪：Vue 3.0 计划](https://juejin.im/post/5bb719b9f265da0ab915dbdd)

- [✅ vue开发过程中你有使用什么辅助工具吗？](https://github.com/haizlin/fe-interview/issues/335)

  vue-devtools

- [🌎 vue和微信小程序写法上有什么区别？](https://github.com/haizlin/fe-interview/issues/334)

- [✅ 怎么缓存当前的组件？缓存后怎么更新？](./contents/333.md)

- [✅ 你了解什么是高阶组件吗？可否举个例子说明下？](./contents/332.md)

- [✅ 为什么我们写组件的时候可以写在.vue里呢？可以是别的文件名后缀吗？](https://github.com/haizlin/fe-interview/issues/331)

  因为在 webpack 中配置了 `vue-loader`，所以可以识别 `.vue` 文件，也可以写成 js 文件

- [✅ vue-loader是什么？它有什么作用？](https://github.com/haizlin/fe-interview/issues/330)

  > [Vue Loader](https://vue-loader.vuejs.org/) 是一个 webpack 的 loader，它允许你以一种名为单文件组件 (SFCs)的格式撰写 Vue 组件

- [✅ 说说你对vue的extend（构造器）的理解，它主要是用来做什么的？](./contents/329.md)

- [✅ 如果将axios异步请求同步化处理？](https://github.com/haizlin/fe-interview/issues/328)

  使用 async/await 函数，配合 try/catch

- [✅ 怎么捕获组件vue的错误信息？](./contents/472.md)

- [✅ 为什么vue使用异步更新组件？](./contents/326.md)

- [🌎 如何实现一个虚拟DOM？说说你的思路](https://github.com/haizlin/fe-interview/issues/325)

- [✅ 写出多种定义组件模板的方法](./contents/324.md)

- [✅ SPA单页面的实现方式有哪些？](https://github.com/haizlin/fe-interview/issues/323)

  - 使用 vue-router
  - 监听地址栏变化，控制页面元素的显示与隐藏

- [🌎 说说你对SPA单页面的理解，它的优缺点分别是什么？](https://github.com/haizlin/fe-interview/issues/322)

  - 优点：响应快速，操作体验接近原生
  - 缺点：不开启 SSR 不利于 SEO，首屏加载慢

- [🌎 说说你都用vue做过哪些类型的项目？](https://github.com/haizlin/fe-interview/issues/321)

- [✅ 在vue项目中如何引入第三方库（比如jQuery）？有哪些方法可以做到？](./contents/320.md)

- [✅ 使用vue手写一个过滤器](./contents/319.md)

- [✅ 你有使用过render函数吗？有什么好处？](./contents/318.md)

- [✅ 写出你常用的指令有哪些？](./contents/230.md)

- [✅ 手写一个自定义指令及写出如何调用](./contents/230.md)

- [✅ 组件进来请求接口时你是放在哪个生命周期？为什么？](./contents/348.md)

- [✅ 你有用过事件总线(EventBus)吗？说说你的理解](./contents/314.md)

- [🌎 说说vue的优缺点分别是什么？](https://github.com/haizlin/fe-interview/issues/313)

- [✅ DOM渲染在哪个周期中就已经完成了？](./contents/348.md)

- [✅ 第一次加载页面时会触发哪几个钩子？](./contents/348.md)

- [✅ vue生命周期总共有几个阶段？](./contents/348.md)

- [✅ vue生命周期的作用是什么？](./contents/348.md)

- [🌎 vue和angular有什么区别呢？](https://github.com/haizlin/fe-interview/issues/308)

- [✅ 如何引入scss？引入后如何使用？](./contents/307.md)

- [✅ 使用vue开发过程你是怎么做接口管理的？](./contents/306.md)

- [✅ 为何官方推荐使用axios而不用vue-resource？](./contents/305.md)

- [🌎 你了解axios的原理吗？有看过它的源码吗？](https://github.com/haizlin/fe-interview/issues/304)

  > [学习 axios 源码整体架构，打造属于自己的请求库](https://juejin.im/post/5df349b5518825123751ba66)

- [✅ 你有封装过axios吗？主要是封装哪方面的？](./contents/306.md)

- [✅ 如何中断axios的请求？](./contents/302.md)

- [✅ axios是什么？怎样使用它？怎么解决跨域的问题？](https://github.com/haizlin/fe-interview/issues/301)

  axios 是一个网络请求库，用法参考文档。[如何解决跨域问题（第40天-2019-05-26）](../fe-interview-3plus1/fe-interview-3plus1-100.md#第40天-2019-05-26)

- [🌎 说说你对vue的template编译的理解？](https://github.com/haizlin/fe-interview/issues/292)

  template 最终会被编译成 vue js render 函数。

- [✅ v-on可以绑定多个方法吗？](./contents/291.md)

- [✅ vue常用的修饰符有哪些？列举并说明](./contents/290.md)

- [🌎 你认为vue的核心是什么？](https://github.com/haizlin/fe-interview/issues/289)

  > MVVM，[说说你对MVC、MVP、MVVM模式的理解](./contents/232.md)

- [✅ v-model是什么？有什么用呢？](./contents/288.md)

- [✅ 说说你对vue的mixin的理解，有什么应用场景？](./contents/287.md)

- [✅ SPA首屏加载速度慢的怎么解决？](../fe-interview-3plus1/fe-interview-3plus1-200.md#SPA首屏加载速度慢的怎么解决？)

- [✅ 删除数组用delete和Vue.delete有什么区别？](./contents/285.md)

- [✅ 动态给vue的data添加一个新的属性时会发生什么？怎样解决？](https://github.com/haizlin/fe-interview/issues/284)

  直接添加属性的话，视图不会更新，因为这个属性没有被转换成响应式属性。需要使用 `this.$set("obj","key","value")`

- [✅ 组件和插件有什么区别？](https://github.com/haizlin/fe-interview/issues/283)

  组件是 Vue 应用的基本组成部分，插件是用于增强组件功能的工具。

- [🌎 说说你使用vue过程中遇到的问题（坑）有哪些，你是怎么解决的？](https://github.com/haizlin/fe-interview/issues/274)

- [✅ 说说你对选项el,template,render的理解](./contents/273.md)

- [✅ vue实例挂载的过程是什么？](./contents/273.md)

- [✅ vue在组件中引入插件的方法有哪些？](./contents/271.md)

- [✅ v-if和v-for的优先级是什么？如果这两个同时出现时，那应该怎么优化才能得到更好的性能？](./contents/230.md)

- [✅ 分别说说vue能监听到数组或对象变化的场景，还有哪些场景是监听不到的？无法监听时有什么解决方案？](https://github.com/haizlin/fe-interview/issues/269)

  设置了 observe 的都可以被监听（[深入响应式原理](https://cn.vuejs.org/v2/guide/reactivity.html#ad)），向对象添加或删除属性时是监听不到的，可以用 `Vue.set()` 来手动设定或更新响应式数据。

- [✅ $nextTick有什么作用？](./contents/268.md)

- [✅ 为什么data属性必须声明为返回一个初始数据对应的函数呢？](./contents/267.md)

- [✅ 怎么在watch监听开始之后立即被调用？](./contents/266.md)

- [✅ watch怎么深度监听对象变化？](./contents/266.md)

- [✅ watch和计算属性有什么区别？](./contents/264.md)

- [✅ vue如何监听键盘事件？](./contents/263.md)

- [✅ v-for循环中key有什么作用？](./contents/262.md)

- [✅ 怎么在vue中使用插件？](./contents/271.md)

- [✅ 你有写过自定义组件吗？](./contents/401.md)

- [✅ 说说你对keep-alive的理解是什么？](./contents/551.md)

- [✅ 怎么使css样式只在当前组件中生效？](https://github.com/haizlin/fe-interview/issues/258)

  `<style scoped></style>` 或 css module

- [🌎 你有看过vue的源码吗？如果有那就说说看](https://github.com/haizlin/fe-interview/issues/235)

- [✅ 你有写过自定义指令吗？自定义指令的生命周期（钩子函数）有哪些？](./contents/230.md)

- [✅ v-show和v-if有什么区别？使用场景分别是什么？](./contents/230.md)

- [✅ 说说你对MVC、MVP、MVVM模式的理解](./contents/232.md)

- [✅ 说下你对指令的理解？](./contents/230.md)

- [✅ 请描述下vue的生命周期是什么？](./contents/348.md)

- [✅ vue组件之间的通信都有哪些？](./contents/228.md)

- [✅ 什么是虚拟DOM？](./contents/227.md)

- [✅ 什么是双向绑定？原理是什么？](./contents/288.md)

- [🌎 vue和react有什么不同？使用场景是什么？](https://github.com/haizlin/fe-interview/issues/225)

- [🌎 说说vue的优缺点](https://github.com/haizlin/fe-interview/issues/224)

  - 优点：使用简单（相对于React）、开发效率高、性能够强、支持双向绑定的MVVM、轻量级、社区资源丰富。
  - 缺点：不支持低版本浏览器

- [🌎 有使用过vue吗？说说你对vue的理解](https://github.com/haizlin/fe-interview/issues/223)

## vue-cli

- [🌎 vue-cli提供了的哪几种脚手架模板？](https://github.com/haizlin/fe-interview/issues/543)
- [✅ vue-cli工程中常用的npm命令有哪些？](https://github.com/haizlin/fe-interview/issues/542)

  在 `package.json` 中 `"script"` 内容有写

- [✅ 在使用vue-cli开发vue项目时，自动刷新页面的原理你了解吗？](https://github.com/haizlin/fe-interview/issues/541)

  使用了 webpack 的 HMR（热模块重载）功能

- [✅ vue-cli3插件有写过吗？怎么写一个代码生成插件？](./contents/540.md)
- [✅ vue-cli生成的项目可以使用es6、es7的语法吗？为什么？](https://github.com/haizlin/fe-interview/issues/488)

  可以通过配置 babel 和 polyfill 来进行自动转换——[浏览器兼容性](https://cli.vuejs.org/zh/guide/browser-compatibility.html#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%80%A7)

- [✅ vue-cli怎么解决跨域的问题？](../fe-interview-3plus1/contents/40-3.md)
- [🌎 vue-cli中你经常的加载器有哪些？](https://github.com/haizlin/fe-interview/issues/486)
- [✅ 你知道什么是脚手架吗？](./contents/485.md)
- [🌎 说下你了解的vue-cli原理？你可以自己实现个类vue-cli吗？](https://github.com/haizlin/fe-interview/issues/484)

  是封装好的 webpack 开发环境，使开发者可以忽略 webpack 的配置细节，直接上手开发。

- [✅ 怎么使用vue-cli3创建一个项目？](https://github.com/haizlin/fe-interview/issues/483)

  `vue create project-name`

- [✅ vue-cli3你有使用过吗？它和2.x版本有什么区别？](./contents/482.md)
- [✅ vue-cli默认是单页面的，那要弄成多页面该怎么办呢？](./contents/482.md)
- [✅ 不用vue-cli，你自己有搭建过vue的开发环境吗？流程是什么？](./contents/482.md)

## vue-router

- [✅ vue-router怎么重定向页面？](./contents/367.md)
- [✅ vue-router怎么配置404页面？](./contents/367.md)
- [✅ 切换路由时，需要保存草稿的功能，怎么实现呢？](./contents/367.md)
- [✅ vue-router路由有几种模式？说说它们的区别？](./contents/370.md)
- [✅ vue-router有哪几种导航钩子（ 导航守卫 ）？](./contents/367.md)
- [✅ 说说你对router-link的了解](./contents/367.md)
- [✅ vue-router如何响应路由参数的变化？](./contents/367.md)
- [🌎 你有看过vue-router的源码吗？说说看](https://github.com/haizlin/fe-interview/issues/382)
- [✅ 切换到新路由时，页面要滚动到顶部或保持原先的滚动位置怎么做呢？](./contents/367.md)
- [✅ 在什么场景下会用到嵌套路由？](https://github.com/haizlin/fe-interview/issues/380)

  底部选项卡+选项卡内部tab页面切换；后台管理系统左侧边栏+右侧内部选项卡切换

- [✅ 如何获取路由传过来的参数？](./contents/367.md)
- [✅ 说说active-class是哪个组件的属性？](https://github.com/haizlin/fe-interview/issues/378)

  active-class 是 router-link 的属性

- [✅ 在vue组件中怎么获取到当前的路由信息？](./contents/367.md)
- [✅ vur-router怎么重定向？](./contents/367.md)
- [✅ 怎样动态加载路由？](./contents/375.md)
- [✅ 怎么实现路由懒加载呢？](./contents/343.md#路由懒加载)
- [🌎 如果让你从零开始写一个vue路由，说说你的思路](https://github.com/haizlin/fe-interview/issues/373)
- [✅ 说说vue-router完整的导航解析流程是什么？](./contents/367.md)
- [✅ 路由之间是怎么跳转的？有哪些方式？](./contents/367.md)
- [✅ 如果vue-router使用history模式，部署时要注意什么？](./contents/370.md)
- [✅ route和router有什么区别？](./contents/367.md)
- [✅ vue-router钩子函数有哪些？都有哪些参数？](./contents/367.md)
- [✅ vue-router是用来做什么的？它有哪些组件？](./contents/367.md)

## vuex

- [✅ 你有写过vuex中store的插件吗？](./contents/387.md)
- [✅ 你有使用过vuex的module吗？主要是在什么场景下使用？](./contents/387.md)
- [✅ vuex中actions和mutations有什么区别？](./contents/387.md)
  

- [✅ vuex使用actions时不支持多参数传递怎么办？](https://github.com/haizlin/fe-interview/issues/413)
  把参数放在对象里

- [🌎 你觉得vuex有什么缺点？](https://github.com/haizlin/fe-interview/issues/412)
  我觉得没有什么缺点

- [✅ 你觉得要是不用vuex的话会带来哪些问题？](https://github.com/haizlin/fe-interview/issues/411)
  - 状态管理不便
  - 大量使用bus或refs传递数据导致代码耦合性强，无法维护
  - 数据更新难以控制，容易产生bug

- [🌎 vuex怎么知道state是通过mutation修改还是外部直接修改的？](https://github.com/haizlin/fe-interview/issues/393)

- [✅ 请求数据是写在组件的methods中还是在vuex的action中？](https://github.com/haizlin/fe-interview/issues/392)
  都可以，具体情况具体分析。如果是公共请求可以写在action中，如果只有组件使用则写在组件methods中。

- [✅ 怎么监听vuex数据的变化？](https://github.com/haizlin/fe-interview/issues/391)
  使用computed或watch属性，也可以在mutation中监听。

- [✅ vuex的action和mutation的特性是什么？有什么区别？](./contents/387.md)
- [✅ 页面刷新后vuex的state数据丢失怎么解决？](https://github.com/haizlin/fe-interview/issues/389)
  在数据更新时，将数据存储于localStorage中，初始化时从再从localStorage中读取

- [✅ vuex的state、getter、mutation、action、module特性分别是什么？](./contents/387.md)
- [✅ vuex的store有几个属性值？分别讲讲它们的作用是什么？](./contents/387.md)
- [✅ 你理解的vuex是什么呢？哪些场景会用到？不用会有问题吗？有哪些特性？](https://github.com/haizlin/fe-interview/issues/386)
  见如下回答

- [✅ 使用vuex的优势是什么？](https://github.com/haizlin/fe-interview/issues/385)
  统一了状态，进行全局或局部的状态管理，对复杂逻辑解耦，使开发和维护更加便捷

- [✅ 有用过vuex吗？它主要解决的是什么问题？推荐在哪些场景用？](https://github.com/haizlin/fe-interview/issues/384)
  主要用来解决跨组件传递数据的繁琐和一致性问题，将数据统一存储。可用于大型应用的用户登录信息token、全局设置等场景

## ElementUI

- [✅ ElementUI是怎么做表单验证的？在循环里对每个input验证怎么做呢？](./contents/401.md)
- [✅ 你有二次封装过ElementUI组件吗？](./contents/401.md)
- [🌎 ElementUI怎么修改组件的默认样式？](https://github.com/haizlin/fe-interview/issues/400)

  - 使用官方的主题配置功能
  - 自己写样式覆盖原有样式（可使用 `>>>` 或 `/deep/` 进行样式穿透）

- [🌎 ElementUI的穿梭组件如果数据量大会变卡怎么解决不卡的问题呢？](https://github.com/haizlin/fe-interview/issues/399)

  在 left-footer 的 slot 里面加个翻页组件

- [🌎 ElementUI表格组件如何实现动态表头？](https://github.com/haizlin/fe-interview/issues/398)

  使用自定义表头，即 `<el-table-column>` 中传入自定义 slot

- [🌎 ElementUI使用表格组件时有遇到过问题吗？](https://github.com/haizlin/fe-interview/issues/397)
- [🌎 有阅读过ElementUI的源码吗？](https://github.com/haizlin/fe-interview/issues/396)
- [🌎 项目中有使用过ElementUI吗？有遇到过哪些问题？它的使用场景主要是哪些？](https://github.com/haizlin/fe-interview/issues/395)

  应用场景：PC网站、后台管理系统

- [🌎 有用过哪些vue的ui？说说它们的优缺点？](https://github.com/haizlin/fe-interview/issues/394)

  Antd/ElementUI/Vant

## mint-ui

- [🌎 mint-ui使用过程中有没有遇到什么坑？怎么解决的？](https://github.com/haizlin/fe-interview/issues/481)
- [🌎 说出几个mint-ui常用的组件](https://github.com/haizlin/fe-interview/issues/480)
- [🌎 mint-ui是什么？你有使用过吗？](https://github.com/haizlin/fe-interview/issues/479)
