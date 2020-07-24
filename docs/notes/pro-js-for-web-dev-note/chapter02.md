# 第二章 在HTML中使用JavaScript

1. 在页面中内嵌JS代码

```html
<script type="text/javascript">
    function sayHi() {
        alert("Hi!");
    }
</script>
```

记住不要在`<script></script>`标签内再嵌套`</script>`

2. 在页面外部调用JS代码

```html
<script type="text/javascript" src="example.js"></script>
```

标签的位置：传统的script标签是放在head内部，但这样影响页面加载速度，所以我们一般把标签放在`</body>`元素内容的后面。

在页面完全加载后执行js代码

```js
// 原生js
window.onload=function(){};
// jQuery
$(window).load(function(){});
$(document).ready(function{});
```

HTML5 文档模式

```html
<!DOCTYPE html>
```

`<noscript>`元素:在不支持JS的浏览器中显示内容

```html
 <noscript>
      <p>本页面需要浏览器支持（启用）JavaScript。
</noscript>
```
