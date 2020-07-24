# 前端面试题（2018.6）

> 2018.6

## 备注

- 题目来源网络，答案仅供参考
- 代码都运行过一遍以保证准确性

## 1. 截取字符串有哪些方法

- slice    // 有两个参数，第一个是从零开始，第二个也是从零开始，但最后要减一（可以看做从1开始）。slice支持以负数为单位，负数表示从字符串的末尾开始。
- substring    // substring 与slice主要的不同是，它不支持负数作为参数，如果参数为负数，它会从0开始。
- substr    // substr的第二个个参数的定义与上述两者不同，它从第一个参数的当前位置开始。

## 2. 规避javascript多人开发函数变量重名问题

- 规范变量命名规则
- 尽量在函数中使用局部变量
- 在变量名中加入开发者的名称// 不利于维护
- 把函数封装在以开发者命名的类中// 不利于维护

## 3. 编写一个方法 求一个字符串的字节长度（假设一个中文占两个字节）

```javascript
function len(s) {
        var l = 0;
        var a = s.spilt('');
        for (var i = 0; i < a.length; i++) {
            if (a[i].chatCodeAt(0) < 299) {
                l++;
            } else {
                l += 2;
            }
        }
        return l;
    }
```

## 4. JavaScript中如何检测一个变量是一个String/Array类型？

使用 typeof 方法与 instanceof 方法。

```javascript
var arr = [1,2,3];
var str = '1,2,3';
console.log(typeof arr);    // object
console.log(typeof str);    // string
console.log(arr instanceof Array);    // true
console.log(str instanceof String);    // 由于String是基本类型，所以不可以判断，false
```

## 5. 请说出三种减低页面加载时间的方法。

- 减少 DOM 操作，用变量来代替不必要的 DOM 操作
- 压缩 CSS、JS，合并HTML与CSS、JS（CSS放head里，javascript放body后面）
- 减少 HTTP 请求
- 使用 CDN （ContentDeliveryNetwork，内容分发网络）
- 懒加载（预加载），压缩图像资源体积（可使用.webp格式）
- 《雅虎军规》

## 6. 什么是闭包？

解释一：闭包是一种机制，函数执行的时候形成一个私有的**作用域**，保护里面的变量不受外界变量干扰。

解释二：子函数能被外部调用到，则该作用链上的所有变量都会被保存下来。
例子：https://kb.cnblogs.com/page/110782/

```javascript
function foo(x) {
    var tmp = 3;
    return function (y) {
        console.log(x + y + (++tmp));
    }
}
var bar = foo(2);    // bar 现在是一个闭包
bar(10);    // 16
bar(10);    // 17
```

## 7. 你能解释一下JavaScript中的继承是如何工作的吗？
子构造函数中执行父构造函数，并用call\apply改变this；
克隆父构造函数原型上的方法，浅拷贝for...in

实例：https://www.cnblogs.com/humin/p/4556820.html
```javascript
// 定义一个动物类
    function Animal(name) {
        this.name = name || 'Animal';
        this.sleep = function () {
            console.log(this.name + '正在睡觉！');
        }
    }

    var test = new Animal('doge');
    test.sleep();
```

```javascript
// 【继承】子构造函数中执行父构造函数
function Cat(name){
        Animal.call(this);
        this.name = name || 'Tom';
    }
```

```javascript
// 【继承】克隆父构造函数原型上的方法
function Cat(name) {
        var animal = new Animal();
        for (var p in animal) {
            Cat.prototype[p] = animal[p];
        }
        Cat.prototype.name = name || 'Tom';
    }
```

```javascript
    // Test Code
    var cat = new Cat();
    console.log(cat.name);
    cat.sleep();
    console.log(cat instanceof Animal); // false
    console.log(cat instanceof Cat); // true
```

## 8. javascript是面向对象的，怎么体现javascript的继承关系？

[js-inherit](../js/js-inherit.md)

## 9. javaScript的2种变量范围有什么不同？

- 全局变量，不加var修饰符，可在当前页面有效
- 局部变量，用var修饰，在当前方法中有效

## 10. 程序中捕获异常的方法(error)

```javascript
try {
        // throw new Error("Whoops!");
    } catch (e) {
        console.log(e.name + ": " + e.message);
    }
```

## 11. documet.location.href 与 window.location.href

表示当前打开的框架或窗口的URL信息。

DOM 是为了操作文档出现的 API，document 是其的一个对象；

BOM 是为了操作浏览器出现的 API，window 是其的一个对象。

document.location was originally a read-only property, although Gecko browsers allow you to assign to it as well. For cross-browser safety, use window.location instead.

## 12. XMLHTTPRequest对象是什么？

XMLHttpRequest 是一种浏览器对象，可用于模拟http的GET和POST请求。配合JavaScript可以实现页面数据在无刷新下的定时数据更新。

XMLHttpRequest 对象用于在后台与服务器交换数据。

## 13. javascript的常用对象有哪些？（数据类型->#29）

String, Array, Boolean, Date, Math, null, undefined

## 14. innerHTML，innerText，outerHTML的区别？

- innerHTML 指的是从对象的起始位置到终止位置的全部内容,包括Html标签。
- innerText 指的是从起始位置到终止位置的内容,但它去除Html标签。
- // 同时，innerHTML 是所有浏览器都支持的，innerText 是IE浏览器和chrome 浏览器支持的，Firefox浏览器不支持。其实，innerHTML 是W3C 组织规定的属性；而innerText 属性是IE浏览器自己的属性，不过后来的浏览器部分实现这个属性罢了。
- outerHTML 指的是除了包含innerHTML的全部内容外, 还包含对象标签本身。
实例：http://blog.csdn.net/magi1201/article/details/44131361
```html
<body>
    <p id="pp"><a href="index.html" id="aa">Click</a></p>
</body>
<script>
    test = document.getElementById('pp');
    console.log(test);
    console.log(test.innerHTML);
    console.log(test.innerText);
    console.log(test.outerHTML);
    console.log(test.outerText);
</script>
```


## 15. javascript的typeof返回哪些数据类型
一般返回这几种类型：object, boolean, number, string, function, undefined

详细：https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof


## 16. 数组方法pop() push() unshift() shift()
```javascript
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // 把数组最后一个值出栈，同时会改变原数组
    console.log(arr.pop() + ' -> ' + arr);

    // 把数组最后插入一个值，同时会改变原数组
    console.log(arr.push(10) + ' -> ' + arr);

    // 把数组最前面一个值弹出，同时会改变原数组
    console.log(arr.shift() + ' -> ' + arr);

    // 从数组最前面插入一个值，同时会改变原数组
    console.log(arr.unshift(1) + ' -> ' + arr);
```


## 17. IE和DOM事件流的区别
1. 事件流的区别（http://www.jb51.net/article/23168.htm）
    - IE采用【冒泡事件】 Netscape使用捕获型事件 DOM使用先捕获后冒泡型事件
    - 冒泡型事件模型： button->div->body (IE事件流)
    - 捕获型事件模型： body->div->button (Netscape事件流)
    - DOM事件模型： body->div->button->button->div->body (先捕获后冒泡)
2. 事件侦听函数的区别
    - IE使用:
        * [Object].attachEvent("name_of_event_handler", fnHandler); //绑定函数
        * [Object].detachEvent("name_of_event_handler", fnHandler); //移除绑定
    - DOM使用：
        * [Object].addEventListener("name_of_event", fnHandler, bCapture); //绑定函数
        * [Object].removeEventListener("name_of_event", fnHandler, bCapture); //移除绑定
3. !!标准答案？
    1.执行顺序不一样
    2.参数不一样
    3.事件加不加on
    4.this指向问题


## 18. 事件绑定和普通事件有什么区别
普通事件中的onclick是DOM0级事件只支持单个事件，会被其他onclick事件覆盖，而事件绑定中的addEventListener是DOM2级事件可以添加多个事件而不用担心被覆盖。

实验：http://blog.csdn.net/qq_33988065/article/details/51351287
```html
<body>
<button id="btn">button</button>
</body>
<script type="text/javascript">
    var btn = document.getElementById("btn");

    btn.onclick = function () {
        alert('普通事件1');    //不执行
    };
    btn.onclick = function () {
        alert('普通事件2');    //弹出
    };

    // 上面用普通方法添加两个事件，下面用事件绑定添加两个事件。
    btn.addEventListener('click', function () {
        alert('事件绑定1');    //弹出
    }, false);
    btn.addEventListener('click', function () {
        alert('事件绑定2');    //弹出
    }, false);

    // 注意我这里只使用W3C的标准写法添加事件，没有兼容低版本的IE。
    // 上面代码执行后依次会弹出：普通事件2、事件绑定1、事件绑定2。
</script>
```


## 19. ajax请求的时候get和post方式的区别
- get把参数放在URL末尾，而post放在（虚拟载体）HTMLheader内（用户不可见）
- get传输的数据量较小，而post传输的数据量较大
- get安全性较低，post安全性较高


## 20. ajax请求时，如何解析json数据
1.使用eval()解析

2.使用JSON.parse()解析// json数据的格式要求非常严格，属性名称必须是用双引号""括起来。 鉴于安全性考虑 使用parse更靠谱
```javascript
var JsonString = "{'username':'user1','age':'20'}";
    var obj = eval('(' + JsonString + ')');
    console.log(obj);
var JsonString2 = '{"username":"user1","age":"20"}';
    var obj2 = JSON.parse(JsonString2);
    console.log(obj2);
```


## 21. 事件委托是什么
事件委托利用冒泡原理实现，让子元素触发的事件由器父元素代替执行。

https://www.cnblogs.com/liugang-vip/p/5616484.html
```html
<body>
<ul id="ul1">
    <li>111</li>
    <li>222</li>
    <li>333</li>
    <li>444</li>
</ul>
</body>
<script>
var oUl = document.getElementById("ul1");
oUl.onclick = function (ev) {
var target = ev.target;
alert(target.nodeName);
alert(target.innerHTML);
}
</script>
```


## 22. 如何阻止事件冒泡和默认事件？
使用stopPropagation以及return false
```html
<body>
<ul id="test">
<li id="oli">11111111111</li>
<li>22222222</li>
<li>3333333333</li>
<li>4444444</li>
</ul>
</body>
<script>
    var oUl = document.getElementById('test');
    oUl.addEventListener('click', function (ev) {
        alert('oUl click');
    });

    oLi = document.getElementById('oli');
    oLi.onclick = function (e) {
        stopBubble(e);
    };

    // 阻止事件冒泡
    function stopBubble(e) {
        if (e && e.stopPropagation) {
            e.stopPropagation();
        } else {
            // 兼容旧IE
            window.event.cancelBubble = true;
        }
    }

    // 阻止浏览器的默认事件
    function stopDefault(e) {
        if (e && e.preventDefault) {
            e.preventDefault();
        } else {
            window.event.returnValue = false;
        }
        return false;
    }

    // 例如阻止鼠标右键
    document.oncontextmenu = function (ev) {
        stopDefault(ev);
    }
</script>
```


## 23. 添加 删除 替换 插入到某个接点的方法
```html
<body>
<ul id="test">
<li id="oli">11111111111</li>
<li>22222222</li>
<li>3333333333</li>
<li>4444444</li>
</ul>
</body>
<script>
var aa = document.createElement('a');
aa.innerText = 'link';
aa.href = '#';

oLi = document.getElementById('oli');

oLi.appendChild(aa);
oLi.removeChild(aa);
oLi.replaceChild(aa, oLi.childNodes[0]);
oLi.insertBefore(document.createTextNode('111111'), oLi.childNodes[0]);
</script>
```


## 24. 什么是javascript的本地对象，内置对象和宿主对象？
- 本地对象：Array Object RegExp 等可以new实例化
- 内置对象：Global Math 等不可实例化的
- 宿主对象：浏览器自带对象如 document window


## 25. “==”和“===”的区别
- "=="叫做相等运算符，"==="叫做严格运算符。
- https://www.zhihu.com/question/31442029/answer/53641960
- 严格运算符的运算规则如下，
    - 不同类型值：如果两个值的类型不同，直接返回false。
    - 同一类的原始类型值：同一类型的原始类型的值（数值、字符串、布尔值）比较时，值相同就返回true，值不同就返回false。
- // 相等运算符只判断值是否相同（"=="会自动转换类型，"==="不会）。


## 26. javascript的同源策略
一段脚本能读取来自于同一来源的窗口和文档的属性，其目的是防止某个文档或脚本从多个不同源装载。
这里的同源指的是：同协议，同域名和同端口。


## 27. js数组去重的思路？
以下三个思路来自：http://www.jb51.net/article/46154.htm
- 思路一：第一种是比较常规的方法
```javascript
    /*
    1.构建一个新的数组存放结果
    2.for循环中每次从原数组中取出一个元素，用这个元素循环与结果数组对比
    3.若结果数组中没有该元素，则存到结果数组中
    */
    arr = [1, 'a', 'a', 'b', 'd', 'e', 'e', 1, 0];
    console.log(arr);
    function removeDuplicate(arr) {
        var ret = [arr[0]]; // 将第0个值放入ret数组
        for (var i = 1; i < arr.length; i++) {
            var repeat = false;
            for (var j = 0; j < ret.length; j++) {
                if (ret[j] === arr[i]) {
                    repeat = true;
                    break;
                }
            }
            if (repeat === false) {
                ret.push(arr[i]);
            }
        }
        console.log(ret);
        return ret;
    }
    removeDuplicate(arr);
```
- 思路2：第二种方法比上面的方法效率要高
```javascript
    /*
    1.先将原数组进行排序
    2.检查原数组中的第i个元素 与 结果数组中的最后一个元素是否相同，因为已经排序，所以重复元素会在相邻位置
    3.如果不相同，则将该元素存入结果数组中
会有一定的局限性，因为在去重前进行了排序，所以最后返回的去重结果也是排序后的。
如果要求不改变数组的顺序去重，那这种方法便不可取了。
     */
    arr = [1, 'a', 'a', 'b', 'd', 'e', 'e', 1, 0];
    console.log(arr);
    function removeDuplicate(arr) {
        arr.sort();
        console.log(arr);
        var ret = [arr[0]];
        for (var i = 1; i < arr.length; i++) {
            if (ret[ret.length - 1] !== arr[i]) {
                ret.push(arr[i]);
            }
        }
        console.log(ret);
        return ret;
    }
    removeDuplicate(arr);
```
- 思路三：//（推荐使用）
```javascript
    /*
    1.创建一个新的数组存放结果
    2.创建一个空对象
    3.for循环时，每次取出一个元素与对象进行对比，如果这个元素不重复，则把它存放到结果数组中，
     同时把这个元素的内容作为对象的一个属性，并赋值为1，存入到第2步建立的对象中。
    说明：至于如何对比，就是每次从原数组中取出一个元素，然后到对象中去访问这个属性，如果能访问到值，则说明重复。
     */
    arr = [112, 112, 34, 'Hello', 112, 112, 34, 'Hello', 'str', 'str1'];
    console.log(arr);
    function removeDuplicate(arr) {
        var ret = [];
        var tempObj = {};
        for (var i = 0; i < arr.length; i++) {
            if (!tempObj[arr[i]]) {
                ret.push(arr[i]);
                tempObj[arr[i]] = true;
            }
        }
        console.log(tempObj);
        console.log(ret);
        return ret;
    }
    removeDuplicate(arr);
```
其他方法：
```javascript
    // 使用内置方法
    arr = [112, 112, 34, 'Hello', 112, 112, 34, 'Hello', 'str', 'str1'];
    console.log(arr);
    function removeDuplicate(arr) {
        var ret = Array.from(new Set(arr));
        console.log(ret);
        return ret;
    }
    removeDuplicate(arr);
```


## 28. JavaScript是一门什么样的语言，它有哪些特点？
JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。
它的解释器被称为JavaScript引擎，为浏览器的一部分，广泛用于客户端的脚本语言，
最早是在HTML网页上使用，用来给HTML网页增加动态功能。


## 29. JavaScript的数据类型都有什么？
- 基本数据类型：Number、String、undefined、null、Boolean、Symbol
- 引用数据类型：Object（Array、Date、RegExp、Function）


## 30. 已知ID的Input输入框，希望获取这个输入框的输入值，怎么做？
```javascript
var inputObj = document.getElementById('input_id');
alert(inputObj.value);
```


## 31. 当一个DOM节点被点击时候，我们希望能够执行一个函数，应该怎么做？
1. 直接在DOM里绑定事件
```html
<p onclick="alert()">Click me</p>
```
2. 在JS里通过onclick绑定
```html
<body>
    <p id="click">Click me</p>
</body>
<script>
    var obj = document.getElementById('click');
    obj.onclick = function (ev) {
        alert();
    }
</script>
```
3. 在JS里通过事件添加进行绑定
```javascript
obj.addEventListener('click', function () {
        alert();
    });
```


## 32. 什么是Ajax和JSON，它们的优缺点。
- AJAX
	- AJAX（Asynchronous JavaScript and XML，异步的JavaScript和XML），用于在Web页面中实现异步数据交互。
	- AJAX 优点：
		* 无刷新更新数据：在不重载整个网页的情况下，与服务器交换数据并部分更新网页内容
		* 避免用户不断刷新或者跳转页面，降低数据传输量，提升用户体验
	- AJAX 缺点：
		* AJAX干掉了Back和History功能，要实现AJAX下的前后退功能成本较大
		* AJAX的跨域限制问题
		* 对搜索引擎不太友好
		* 可能造成服务器请求数的增加
- JSON
    - JSON(JavaScript Object Notation) 是一种轻量级的数据交换语言
    - JSON 优点：
        * 轻量级、易于阅读编写，JS解析方便，支持复合数据类型（数组、对象、字符串、数字）
    - JSON 缺点：
        * // 与XML相比，JSON没有命名空间，JSON采用冒号赋值，这将导致当XML转化为JSON时
        ，在标识符（XML CDATA）与实际属性值之间很难区分谁应该被当作文本考虑。 
        
        
## 33. 看下列代码,输出什么？解释原因。
`var a=null; alert(typeof a);`

显示'Object'。解释：null是一个只有一个值的数据类型，这个值就是null。
表示一个空指针对象，所以用typeof检测会返回“object”。


## 34. foo = foo||bar ，这行代码是什么意思？为什么要这样写？
等同于`if (!foo) foo = bar;`如果foo存在，其值不变，否则把bar的值赋给foo。

短路表达式：作为”&&”和”||”操作符的操作数表达式，这些表达式在进行求值时，
只要最终的结果已经可以确定是真或假，求值过程便告终止，这称之为短路求值。


## 36. 怎样添加、移除、移动、复制、创建和查找节点
1. 添加节点`appendChild()`
2. 移除节点`removeChild()`
3. 移动（替换）节点`replaceChild()`
4. 复制节点`cloneChild()`
5. 创建节点
    - `createDocumentFragment()`
    - `createElement()`
    - `createTextNode()`
6. 查找节点
    - `getElementById()`
    - `getElementByTagName()`
    - `querySelectorAll()`
    
```javascript
var oFragment = document.createDocumentFragment();
    for (var i = 0; i < 10; i++) {
        var p = document.createElement("p");
        var oTxt = document.createTextNode("段落" + i);
        p.appendChild(oTxt);
        oFragment.appendChild(p);
    }
    document.body.appendChild(oFragment);
```


## 37. 下面这个ul，如何点击每一列的时候alert其index?（闭包）
```html
<ul id="test">
    <li>这是第一条</li>
    <li>这是第二条</li>
    <li>这是第三条</li>
</ul>
```
```javascript
var ul = document.getElementById("test");
var li = ul.getElementsByTagName("li");
for (var i = 0; i < li.length; i++) {
    // 正确做法
    li[i].onclick = (function (x) {
    return function () {
        alert(x);
    }
    })(i);
}
```


## 38. 用面向对象的Javascript来介绍一下自己
```javascript
var me = {
        name: 'Job',
        age: 2,
        work: 'front-end developer',
        hello: function () {
            alert('My name is ' + this.name + ', I\'m a' + this.work);
        }
    };
```


## 39. 写出3个使用this的典型应用
1. 事件，如onclick`obj.onclick = function() { alert(this.innerText); };`
2. 构造函数
```javascript
function Animal(name, color) {
         this.name = name;
         this.color = color;
}
```
3. 继承中的使用
```javascript
function Cat(name){
        Animal.call(this);
        this.name = name || 'Tom';
    }
```
4. CSS expression表达式中使用this关键字
```css
width: expression(this.parentNode.width);
```


## 40. JavaScript中如何检测一个变量是一个String类型？请写出函数实现
```javascript
function checkString(obj) {
        if (typeof obj === 'string') {
            return true;
        } else {
            return false;
        }
    }
```


## 41. 截取字符串abcdefg的efg
```javascript
str.slice(-3,7);
str.substring(4,7);
str.substr(4,3);
```


## 42. 判断一个字符串中出现次数最多的字符，统计这个次数
```javascript
str = 'aaa12ssssssss12aaabb';
    arr = str.split('');

    // 参考#27思路3，用对象来存储重复数组元素
    tempObj = {};
    for (var i = 0; i < arr.length; i++) {
        if (tempObj[arr[i]]) {
            tempObj[arr[i]]++;
        } else {
            tempObj[arr[i]] = 1;
        }
    }
    console.log(tempObj);
    // 按对象属性值排序 http://blog.csdn.net/trucyluce/article/details/50937488
    console.log(Object.keys(tempObj).sort().reverse()[0]);
```

```javascript
str = 'aaa12ssssssss12aaabb';

    var tmp = {};
    var len = str.length;
    for (var i = 0; i < len; i++) {
        if (!tmp[str.charAt(i)]) {
            tmp[str.charAt(i)] = 1;
        } else {
            tmp[str.charAt(i)]++;
        }
    }
    console.log(tmp);
    var maxCount = 0;//字符出现最多的次数
    var tmpChar = '';//出现最多的字符
    for (var i in tmp) {
        if (tmp[i] > maxCount) {
            maxCount = tmp[i];
            tmpChar = i;
        }
    }
    console.log(tmpChar + '出现的次数最多，为' + maxCount);
```


## 43. IE与标准浏览器脚本兼容性问题

```javascript
var browserName = navigator.userAgent.toLowerCase();
    mybrowser = {
        version: (browserName.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, '0'])[1],
        safari: /webkit/i.test(browserName) && !this.chrome,
        opera: /opera/i.test(browserName),
        firefox: /firefox/i.test(browserName),
        ie: /msie/i.test(browserName) && !/opera/.test(browserName),
        mozilla: /mozilla/i.test(browserName) && !/(compatible|webkit)/.test(browserName) && !this.chrome,
        chrome: /chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName)
    };
    console.log(mybrowser);
```


## 44. 网页中实现一个计算当年还剩多少时间的倒数计时程序，要求网页上实时动态显示“××年还剩××天××时××分××秒”
```html
<body>
<h1 id="count_down">倒计时</h1>
</body>
<script>
    uiObj = document.getElementById('count_down');

    setInterval(function () {
        uiObj.innerText = counter();
    }, 1000);

    function counter() {
        var date = new Date();
        var year = date.getFullYear();
        var date2 = new Date(year, 11, 31, 23, 59, 59);

        var time = (date2 - date) / 1000;   //转换成秒
        var day = Math.floor(time / (24 * 60 * 60));
        var hour = Math.floor(time % (24 * 60 * 60) / (60 * 60));
        var minute = Math.floor(time % (24 * 60 * 60) % (60 * 60) / 60);
        var second = Math.floor(time % (24 * 60 * 60) % (60 * 60) % 60);
        return year + "年还剩" + day + "天" + hour + "时" + minute + "分" + second + "秒";
    }
</script>
```


## 45. 你如何优化自己的代码？
- 代码重用 // 不在同一个项目中出现重复的代码，把代码封装进类或函数中
- 避免全局变量（命名空间，封闭空间，模块化MVC）
- 拆分函数避免函数臃肿
- 写详细的注释以便日后查看与重构


## 46. 请尽可能详尽的解释AJAX的工作原理。
1. 创建AJAX对象
    - new XMLHttpRequest();//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    - new ActiveXObject("Microsoft.XMLHTTP");// IE6, IE5 浏览器执行代码
2. 判断数据传输方式(GET/POST)
3. 打开连接 open()
4. 发送 send()
5. 数据接收完成 onreadystatechange，判断响应状态执行回调函数
- 示例：http://www.runoob.com/try/try.php?filename=tryajax_first
```javascript
function loadXMLDoc() {
            var xmlhttp;
            if (window.XMLHttpRequest) {
                //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
                xmlhttp = new XMLHttpRequest();
            }
            else {
                // IE6, IE5 浏览器执行代码
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                    document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
                }
            };
            xmlhttp.open("GET", "ajax_info.txt", true);
            xmlhttp.send();
        }
```


## 47. 什么情况下会出现跨域问题，如何解决?
所谓js跨域问题，是指在一个域下的页面中通过js访问另一个不同域下 的数据对象，出于安全性考虑，
几乎所有浏览器都不允许这种跨域访问，这就导致在一些ajax应用中，使用跨域的web service会成为一个问题。
（即一个域名下的文件请求另外一个域名下的资源，就产生了跨域。）

要解决跨域的问题，我们可以使用以下几种方法：(http://www.cnblogs.com/2050/p/3191744.html)
1. document.domain+iframe的设置
2. 动态创建script
3. 利用iframe和location.hash
4. window.name实现的跨域数据传输
5. 使用HTML5 postMessage
6. 利用flash

## 49. -->#32


## 50. 有这样一个URL：http://item.taobao.com/item.htm?a=1&b=2&c=&d=xxx&e，请写一段JS程序提取URL中的各个GET参数
```javascript
url = 'http://item.taobao.com/item.htm?a=1&b=2&c=&d=xxx&e';

    function parseGetString(url) {
        // var str = url.substring(url.lastIndexOf('?')+1);
        var str = url.split('?')[1];
        var items = str.split('&');
        var ret = {};
        for (var i = 0; i < items.length; i++) {
            var temp = items[i].split('=');
            ret[temp[0]] = temp[1];
        }
        return ret;
    }

    console.log(parseGetString(url));
```


## 51. JavaScript原型，原型链 ? 有什么特点？
每个对象都会在其内部初始化一个属性，就是prototype(原型)，当我们访问一个对象的属性时，
如果这个对象内部不存在这个属性，那么他就会去prototype里找这个属性，这个prototype又会有自己的prototype，
于是就这样一直找下去，也就是我们平时所说的原型链的概念。


## 52. eval是做什么的？
它的功能是把对应的字符串解析成JS代码并运行；
应该避免使用eval：不安全、非常耗性能（2次，一次解析成js语句，一次执行）


## 53. 谈谈this对象的理解。
this是js的一个关键字，随着函数使用场合不同，this的值会发生变化。
但是有一个总原则，那就是this指的是调用函数的那个对象。
this一般情况下：是全局对象Global。作为方法调用，那么this就是指这个对象。


## 54. "use strict";是什么意思 ? 使用它的好处和坏处分别是什么？
在代码中出现表达式```"use strict";```; 意味着代码按照严格模式解析，这种模式使得Javascript在更严格的条件下运行。
- 好处：
    - 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
    - 消除代码运行的一些不安全之处，保证代码运行的安全；
    - 提高编译器效率，增加运行速度；
    - 为未来新版本的Javascript做好铺垫。
- 坏处：
    - 同样的代码，在"严格模式"中，可能会有不一样的运行结果；一些在"正常模式"下可以运行的语句，在"严格模式"下将不能运行。


## 55. 如何判断一个对象是否属于某个类（构造函数）
- constructor：实例对象的构造函数  (实例对象.constructor)
- instanceof：判断一个对象是否是一个构造函数（类）的实例。
- isPrototypeOf(): 判断一个实例对象是否指向了该构造函数的原型对象。
```javascript
arr = [1,2,3,4];

console.log(arr.constructor);
console.log(arr instanceof Array);
console.log(Array.isPrototypeOf(arr))
```


## 56. new操作符具体干了什么呢?

1. 创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型。
2. 属性和方法被加入到 this 引用的对象中。
3. 新创建的对象由 this 所引用，并且最后隐式的返回 this 。
```javascript
var obj  = {};
obj.__proto__ = Array.prototype;
Array.call(obj);
```
 

