---
title: 手写一个 apply
date: 2021-06-19 22:36:35
permalink: /pages/3237d2/
categories: 
  - notes
  - hand-write-js
article: true
tags: 
  - 
---
## 手写一个 apply

与 [call](./call.md) 类似，不过 apply 的第二个参数是参数数组。

```js
Function.prototype.myApply = function (context, args = []) {
    context._fn = this
    var result = context._fn(...args)
    delete context._fn
    return result
}
```

