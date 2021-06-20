---
title: 入门 Less
date: 2021-01-01 22:36:35
permalink: /pages/61972c/
categories: 
  - manual
article: true
tags: 
  - 
---
# 入门 Less

## 说明

Less 是一门 CSS 预处理语言，它扩展了 CSS 语言，增加了变量、Mixin、函数等特性，使 CSS 更易维护和扩展。

Less 可以运行在 Node 或浏览器端。

Less中文网：`http://lesscss.cn/`

Less中文文档：`https://less.bootcss.com/`

## 安装使用入门

安装：`npm install -g less`

创建一个less文件，放入示例代码

```less
@color: #03a9f4;
@box-hw: 128px;

.red {
    height: @box-hw;
    width: @box-hw;
    background-color: @color;
}
```

新建html，引入同名css文件。

```html
<head>
    <link rel="stylesheet" type="text/css" media="screen" href="index.css" />
</head>
<body>
    <div class="red">123123</div>
</body>
```

编译less为css：`lessc index.less index.css`

## 使用 less.js

在浏览器中使用less.js可以便于开发（直接引用less文件），但不建议在生产环境使用。

可能会遇到跨域问题 [CROS](http://enable-cors.org/)

```html
<head>
<link rel="stylesheet/less" type="text/css" href="styles.less" />
<script src="//cdnjs.cloudflare.com/ajax/libs/less.js/3.0.2/less.min.js" ></script>
</head>
```

## clean-css插件

less-plugin-clean-css 插件用来压缩less/css文件 `https://github.com/less/less-plugin-clean-css`

`npm install -g less-plugin-clean-css`

`lessc --clean-css index.less index.min.css`
