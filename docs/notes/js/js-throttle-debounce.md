---
title: JS 的节流与防抖函数
date: 2021-01-01 22:36:35
permalink: /pages/52b149/
categories: 
  - notes
  - js
article: true
tags: 
  - 
---
# JS 的节流与防抖函数

函数防抖和函数节流是在时间轴上控制函数的执行次数。防抖可以类比为电梯不断上乘客,节流可以看做幻灯片限制频率播放电影。

## 节流函数 · Throttle

适合大量事件按时间做平均分配触发。如：

- 游戏中的刷新率
- DOM元素拖拽（<a target="_blank" href="/files/effects/throttle-debounce/throttle.html">Throttle Demo</a>）
- Canvas画笔功能

```js
function throttle(fn, gapTime) {
  let _lastTime = null;

  return function () {
    let _nowTime = + new Date()
    if (_nowTime - _lastTime > gapTime || !_lastTime) {
      fn();
      _lastTime = _nowTime
    }
  }
}

let fn = ()=>{
  console.log('boom')
}

setInterval(throttle(fn,1000),10)
// 这是实现的一个简单的函数节流，结果是一秒打出一次boom
```

## 防抖函数 · Debounce

适合多次事件一次响应的情况。

- 给按钮加函数防抖防止表单多次提交。（<a target="_blank" href="/files/effects/throttle-debounce/debounce.html">Debounce Demo</a>）
- 对于输入框连续输入进行AJAX验证时，用函数防抖能有效减少请求次数。
- 判断scroll是否滑到底部，滚动事件+函数防抖

```js
function debounce(fn, wait) {
  var timer = null;
  return function () {
      var context = this
      var args = arguments
      if (timer) {
          clearTimeout(timer);
          timer = null;
      }
      timer = setTimeout(function () {
          fn.apply(context, args)
      }, wait)
  }
}

var fn = function () {
  console.log('boom')
}

setInterval(debounce(fn,500),1000) // 第一次在1500ms后触发，之后每1000ms触发一次

setInterval(debounce(fn,2000),1000) // 不会触发（我把函数防抖看出技能读条，如果读条没完成就用技能，便会失败而且重新读条）
// 之所以返回一个函数，因为防抖本身更像是一个函数修饰，所以就做了一次函数柯里化。里面也用到了闭包，闭包的变量是timer。
```

## 参考

- [轻松理解JS函数节流和函数防抖](https://juejin.im/post/5a35ed25f265da431d3cc1b1)

