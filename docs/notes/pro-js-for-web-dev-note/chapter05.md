# 引用类型

## Object类型

引用类型的值（**对象**）是引用类型的一个实例。

尽管 ECMAScript从技术上讲是一门面向对象的语言，但它不具备传统的面向对象语言所支持的**类**和**接口**等基本结构。

创建Object实例的方式有两种：new操作符后跟Object构造函数、**对象字面量**表示法。

```js
var person = new Object();
person.name = "YourName";
person.age = null;

var person1 = {
    name: "YourName",
    age: null
}

// 如果在最后一个属性后面添加逗号，会在 IE7 及更早版本和Opera 中导致错误

var person2 = {}; //与 new Object()相同
```

- 在通过对象字面量定义对象时，实际上不会调用 Object 构造函数。
- 开发人员更青睐对象字面量语法。
- 对象字面量也是向函数传递大量可选参数的首选方式

```js
function displayInfo(args) {
    var output = "";
    if (typeof args.name == "string") {
        output += "Name: " + args.name + "\n";
    }
    if (typeof args.age == "number") {
        output += "Age: " + args.age + "\n";
    }
    alert(output);
}
// 对象字面量也是向函数传递大量可选参数的首选方式
displayInfo({
    name: "Nicholas",
    age: 29
});

displayInfo({
    name: "Greg"
});
```

放问对象属性可以用**点表示法**，亦可以用**方括号表示法**，在使用方括号语法时，应该将要访问的属性
以字符串的形式放在方括号中。

```js
person["name"]
person.name
```

这两种访问对象属性的方法没有什么区别，但方括号访问法的主要优点是可以通过变量来访问属性。

如果属性名中包含会导致语法错误的字符（如`person["first name"]`），或者属性名使用的是关键字或保留字，也可以使用方括
号表示法。

除非必须使用变量来访问属性，否则我们建议使用点表示法。

## Array类型

ECMAScript数组的每一项可以保存任何类型的数据，数组的大小是可以动态调整的。

创建数组的方式：使用Array构造函数、数组字面量表示法。

```js
var arr1 = new Array();
var arr2 = new Array(3);
var arr3 = new Array('aaa','bbb');
var arr4 = Array();

var arr5 = [];
var arr6 = [1,2,3];
```

在使用数组字面量表示法时，也不会调用Array构造函数。

数组的读取和设置数组值，使用例如`arr[0]`，0是第一个数组的索引。

length 属性很有特点——它不是只读的。因此，通过设置这个属性，可以从数组的末尾移
除项或向数组中添加新项。

### 检测数组

检测数组有两种方式：`instanceof`和`Array.isArray()`，IE8不支持后一种方法。

```js
var arr = [];
arr instanceof Array;   // true
Array.isArray(arr);     // true
```

### 转换方法

所有对象都有`toLocaleString()`、`toString()`、`valueOf`方法。

```js
var arr = ['red', 'green', 'blue'];
arr.toString()  // "red,green,blue"
arr.valueOf()
```

使用`join()`方法，可以使用不同的分隔符来构建这个字符串。

```js
arr.join('|')   // "red|green|blue"
arr.join('/')   // "red/green/blue"
arr.join(' ')   // "red green blue"
```

### 栈方法

栈是一种后进先出（LIFO）的数据结构。

push()方法可以接收任意数量的参数，把它们逐个添加到数组末尾，并返回修改后数组的长度。

pop()方法不接收参数，从数组末尾移除最后一项，减少数组的 length 值，然后返回移除的项。

```js
var arr = ['red', 'green', 'blue'];
arr.push('yellow');  // 返回 4， 数组内容：[ "red", "green", "blue", "yellow" ]
arr.pop();           // 返回 "yellow"，数组内容：[ "red", "green", "blue" ]
```

### 队列方法

队列是一种先进先出（FIFO）的数据结构。

`shift()`能够移除数组中的第一个项并返回该项，同时将数组长度减 1。

结合`push()`方法使用。

```js
var arr = ['red', 'green', 'blue'];
arr.push('umi');    // 4
arr.shift();        // "red"
```

`unshift()`与`shift()`的用途相反：它能在数组前端添加任意个项并返回新数组的长度。

### 重排序方法

`reverse()`方法翻转数组项的顺序。
`sort()`方法按升序排列数组项，即由小到大排列，会改变原来的值。

sort()方法会调用每个数组项的 toString()转型方法，然后比较得到的**字符串**，以确定如何排序。

```js
var val = [0, 1, 5, 10, 15];
val.sort();  // [ 0, 1, 10, 15, 5 ]

// 这种排序是有问题的，因此 sort()方法可以接收一个比较函数作为参数，
// 以便我们指定哪个值位于哪个值的前面。

function compare(n1, n2) {
    if (n1>n2) {
      return 1;
    } else if (n1<n2) {
      return -1;
    } else {
      return 0;
    }
}
val.sort(compare);  // [ 0, 1, 5, 10, 15 ]
```

compare函数一种更简单的写法

```js
function compare(n1, n2) {
    return n1-n2;
}
```

### 操作方法

`concat()`方法：基于当前数组的所有项创建一个新数组。这个方法会先创建当前数组一个副本，然后将接收到的参数
添加到这个副本的末尾，最后返回新构建的数组。如果传递给 concat()方法的是一或多个数组，则该方法会将这些数组中的
每一项都添加到结果数组中。如果传递的值不是数组，这些值就会被简单地添加到结果数组的末尾。不会改变原数组。

```js
var arr = ['red','green','blue'];
var arr2 = arr.concat('yellow',['black','brown'])
console.log(arr2)   // [ "red", "green", "blue", "yellow", "black", "brown" ]
```

`slice()`方法能够基于当前数组中的一个或多个创建一个新的数组。接收2个参数：起始值和结束值。在只有一个参数的情况下，返回从指定位置到数组末尾的所有项。如果有两个参数，该方法返回起始到结束位置之间的项——但不包括结束位置的项。如果参数中有负数，则用数组长度加上这个负数。不会改变原数组。

```js
var arr = ["red", "green", "blue", "yellow", "black", "brown"];
var arr1 = arr.slice(1,3);
var arr2 = arr.slice(-2);
console.log(arr1);      // [ "green", "blue" ]
console.log(arr2);      // [ "black", "brown" ]
```

`splice()`有多种用法，主要用途是向数组中部插入项。会改变原数组。

- 删除：只需指定2个参数：需要删除的第一项位置和需要删除的项数。例如`splice(0,2)`删除数组中的前两项。
- 插入：指定3个或以上参数：起始位置、0（要删除的项数）、要插入的项。`splice(2,0,'red','green')`。
- 替换：指定3个或以上参数：起始位置、要删除的项数和要插入的任意数量的项。`splice(2,1,"red","green")`。

```js
var arr = ["red", "green", "blue", "yellow", "black", "brown"];
console.log(arr);
arr.splice(0,2);        // 删除从0开始的2个字符串
console.log(arr);       // [ "blue", "yellow", "black", "brown" ]
arr.splice(0,0,'red','green');      // 从第0项插入2个字符串
console.log(arr);                   // [ "red", "green", "blue", "yellow", "black", "brown" ]
arr.splice(0,1,'reddit');   // 替换第0个字符串内容
console.log(arr);           // [ "reddit", "green", "blue", "yellow", "black", "brown" ]
```

splice()方法始终都会返回一个数组，该数组中包含从原始数组中删除的项

### 位置方法

ES5中增加了两个位置方法：`indexOf()`和`lastIndexOf()`，都接收2个参数要查找的项目和表示查找起始位置的索引（可选）。这两种数组方法同样支持字符串。
前者从数组开头查找，后者从数组末尾开始查找，起始查找位置**永远都是从0开始**。在查找时都使用全等操作符，在没有找到时返回-1。

这两个方法都可以接收可选的第二个参数，表示从字符串中的哪个位置开始搜索。indexOf()会从该参数指定的位置向后搜索，忽略该位置之前的所有字符；而 lastIndexOf()则会从指定的位置向前搜索，忽略该位置之后的所有字符。第二个参数为可选参数，它的合法取值是 0 到 stringObject.length - 1。

```js
var arr =[1,2,3,4,5,4,3,2,1];
arr.indexOf(4);     // 3
arr.lastIndexOf(1); // 8
arr.indexOf(1,1);   // 8
arr.lastIndexOf(4,4)// 3
arr.lastIndexOf(4,1)// -1，说明没有找到
var person = {name:'urname'};
var people = [{name:'urname'}];
var mPeople = [person];
people.indexOf(person)  // -1
mPeople.indexOf(person) // 0
```

自创应用题：一个链接地址`https://www.example.com/test?arg1=123&argb=456`，用上述方法获取其域名和参数。

```js
var link = 'https://www.example.com/test?arg1=123&argb=456';

var domain = link.slice(0,link.lastIndexOf('/')).split('');
domain.splice(0,domain.lastIndexOf('/')+1);
domain = domain.join('');
console.log(domain)         // www.example.com

var temp = link.split('');
temp.splice(0,link.lastIndexOf('?')+1);
var attrString = temp.join('');
console.log(attrString);    // arg1=123&argb=456

var attr = {};
var args = attrString.split('&');
for (var i=0;i<args.length;i++) {
  var temp = args[i].split('=');
  attr[temp[0]] = temp[1];
}
console.log(attr);      // Object { arg1: "123", argb: "456" }
```

### 迭代方法

ES5提供了5个数组迭代方法。传入这些方法中的函数会接收三个参数：数
组项的值、该项在数组中的位置和数组对象本身。这些方法不会修改数组中的包含的值。

使用方法：`arr.every(function(item,index,array){})`，里面的函数会对数组的每一项运行，运行该函数的作用域对象影响 this 的值。

- `every()`：如果该函数对**每一项**都返回true，则返回true，否则返回false。
- `filter()`：函数会返回**有true的项**组成的数组。
- `forEach()`：仅仅运行函数，没有返回值。
- `map()`：返回每次函数调用的**结果**返回的数组。
- `some()`：如果该函数对**任一项**返回true，则返回true。

```js
var arr = [1,2,3,4,5,4,3,2,1];

var everyResult = arr.every(function(item,index,array) {
  return item > 2;
});
console.log(everyResult);   // false

var someResult = arr.some(function(item,index,array) {
  return item > 2;
});
console.log(someResult);    // ture

var filterResult = arr.filter(function(item, index, array){
    return (item > 2);
});
console.log(filterResult);  // [3,4,5,4,3]

var mapResult = arr.map(function(item, index, array) {
  return item*2;
})
console.log(mapResult)  // [ 2, 4, 6, 8, 10, 8, 6, 4, 2 ]
```

### 归并方法

ES5还增加了两个归并数组的方法。这两个方法都会迭代数组的所有项，然后构建一个最终返回的值。`reduce()`方法从数组的第一项开始，逐个遍历到最后。而`reduceRight()`则从数组的最后一项开始，向前遍历到第一项。这两个方法都接收两个参数：一个在每一项上调用的函数和（可选的）作为归并基础的初始值。其内部的函数接收4个参数：前一个值、当前值、项的索引和数组对象。这个函数返回的任何值都会作为第一个参数自动传给下一项。

使用 reduce()还是 reduceRight()，主要取决于要从哪头开始遍历数组。除此之外，它们完全相同。

```js
// 用 reduce() 方法求和
var arr = [1,2,3,4,5,4,3,2,1];
var result = arr.reduce(function(prev,cur,index,array){
  console.log([prev,cur,index,array]);
  return prev+cur;
});
console.log(result);    // 25
```

## Date类型

Date类型基于早期Java中的Date基础构建，使用UTC与1970年1月1日 零时开始经过的毫秒数来纪录时间。

创建一个Date对象：`var now = new Date();`

在调用 Date 构造函数而不传递参数的情况下，新创建的对象自动获得当前日期和时间。

如果想指定Date()日期时间，必须向构造函数传递毫秒数，ES提供了两个方法：`Date.parse()`和`Date.UTC()`。

Date.parse()这个方法没有定义日期格式标准，因此实现方式因区域各异。

```js
var someDate = new Date(Date.parse("May 25, 2004"));
var someDate = new Date("May 25, 2004");    // 这两种写法相同
```

Date.UTC()的参数分别是年份、基于 0 的月份（一月是 0，二月是 1，以此类推）、月中的哪一天
（1 到 31）、小时数（0 到 23）、分钟、秒以及毫秒数。在这些参数中，只有前两个参数（年和月）是必
需的。

Date 构造函数也会模仿 Date.UTC()，但有一点明显不同：日期和时间都基于本地时区而非 GMT 来创建。
不过，Date 构造函数接收的参数仍然与 Date.UTC()相同。

```js
// GMT 时间 2000 年 1 月 1 日午夜零时
var y2k = new Date(Date.UTC(2000, 0));

// GMT 时间 2005 年 5 月 5 日下午 5:55:55
var allFives = new Date(Date.UTC(2005, 4, 5, 17, 55, 55));

// 本地时间 2000 年 1 月 1 日午夜零时
var y2k = new Date(2000, 0);

// 本地时间 2005 年 5 月 5 日下午 5:55:55
var allFives = new Date(2005, 4, 5, 17, 55, 55);
```

ES5添加了`Data.now()`方法，返回表示调用这个方法时的日期和时间的毫秒数。

```js
var start = Date.now();
for (var i=0;i<999*100;i++);
var end = Date.now();
var result = end - start;
console.log('时间差：'+ result +' 毫秒');   // 时间差：76 毫秒
```

### 继承的方法

Date 类型也重写了 toLocaleString()、toString()和 valueOf()。 toLocaleString()方法会按照与浏览器设置的地区相适应的格式返回日期和时间。 事实上，toLocaleString()和 toString()的这一差别仅在调试代码时比较有用，而在显示日期和时间时没有什么价值。

### 日期格式化方法

- toDateString()——以特定于实现的格式显示星期几、月、日和年；
- toTimeString()——以特定于实现的格式显示时、分、秒和时区；
- toLocaleDateString()——以特定于地区的格式显示星期几、月、日和年；
- toLocaleTimeString()——以特定于实现的格式显示时、分、秒；
- toUTCString()——以特定于实现的格式完整的 UTC 日期。

### 日期/时间组件方法

提供了很多的方法，去看文档。

## RegExp类型

ES通过RegExp类型支持正则表达式。写法：`var reg = /pattern/flags`。其中pattern指的是任何简单或复杂的正则表达式，flags指的是标志，可以带一个或多个标志以标明正则表达式的行为。

flags:

- `g` 全局模式，模式将被应用于所有字符，而非发现第一个匹配项时立即停止。
- `i` 不区分大小写模式。
- `m` 多行模式，到达一行文本末尾时还会继续查找下一行中是否存在与模式匹配的项。

模式中的**元字符**必须转义（使用转义符`\`），这些元字符有：`( [ { } ] ) + * \ | . ^ $ ?`

```js
// 以字面量形式定义正则表达式：匹配第一个“bat”或“cat”，不区分大小写。
var reg1 = /[bc]at/i;

// 以构造函数方式定义正则表达式，与reg1作用相同。
var reg2 = new RegExp("[bc]at", "i");

// 使用转义符，匹配第一个“\[bc\]at”，不区分大小写。
var reg3 = /\[bc\]at/i;
```

### 实例属性

RegExp的每个实例都有以下属性：`global, ignoreCase, lastIndex, multiline, source`，可以用`.`来调用查看。

### RegExp实例方法

主要方法`exec()`，返回值包含了匹配信息的数组和两个额外属性：`index`和`input`。

```js
// 在没有捕获组的情况下，只返回包含第一个匹配项信息的数组。
var str = 'batcatnatisstring';
var reg = /[cb]at/gi;
console.log(reg.exec(str));

// 在有捕获组的情况下，第一项是与整个模式匹配的字符串，其他项是与模式中的捕获组匹配的字符串
var text = "mom and dad and baby";
var pattern = /mom( and dad( and baby)?)?/gi;   // 有两个捕获组
console.log(pattern.exec(text))
```

对于 exec()方法而言，即使在模式中设置了全局标志（g），它每次也只会返回一个匹配项。在不
设置全局标志的情况下，在同一个字符串上多次调用 exec()将始终返回第一个匹配项的信息。而在设
置全局标志的情况下，每次调用 exec()则都会在字符串中继续查找新匹配项，在全局模式下lastIndex的值在每次调用
exec()后都会增加。

`test()`方法，它接收一个字符串参数。在模式与改参数匹配的情况下返回true否则返回false。

```js
var text = "000-00-0000";
var pattern = /\d{3}-\d{2}-\d{4}/;

if (pattern.test(text)){
    alert("The pattern was matched.");
}
```

## Function 类型

函数实际上是对象。每个函数都是Function类型的实例，而且与其他类型一样具有属性和方法。函数名实际上是指向函数对象的指针。

函数声明语法：

```js
function sum (n1, n2) {
    return n1+n2;
}

var sum1 = function (n1,n2) {
    return n1+n2;
};

// 使用Function构造函数，不推荐
var sum2 = new Function("n1", "n2", "return n1+n2");
```

函数名仅仅是指向函数的指针，所以一个函数可以有多个名字。使用不带圆括号的的函数名是访问函数指针，而非调用函数。

### 没有重载

如果声明了2个同名函数，那么后面的函数会覆盖前面的的函数。

以下代码之所以会在运行期间产生错误，原因在于函数位于一个初始化语句中，而不是一个函数声
明。

```js
alert(sum(10,10));  // TypeError: sum is not a function
var sum = function(num1, num2){
    return num1 + num2;
};
```

### 作为值的函数

你不仅可以像传递参数一样把函数传给另一个函数，而且可以将一个函数作为另一个函数的结果返回。

### 函数内部的属性

函数内部有两个属性：`arguments`和`this`。argument中还有一个属性`callee`，用于指向这个函数本身，可用于递归调用。

```js
function factorical(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * arguments.callee(num-1);
  }
}
```

this引用的是函数据以执行的环境对象。当在网页的全局作用域中调用函数时，this 对象引用的就是 window

函数被谁调用时，this就指向谁

```js
var color = 'red';
var obj = {color:'blue'};

function fn() {
  console.log(this.color);
}

fn(); // red; this是window

obj.fn = fn;
obj.fn(); // blue, this是obj
```

### 函数的属性和方法

每个函数都包含两个属性：`length`和`prototype`。length属性表示函数希望接收的命名参数的个数。

prototype属性是保存引用类型的实例方法的真正所在，如toString()和valueOf()。在创建自定义引用类型以及实现继承时prototype极为有用。另外，prototype属性是不可枚举的，即不能用for-in发现。

函数`apply()`和`call()`，他们的作用都是从指定的作用域中调用函数，除了参数不同。apply接收两个参数：一个是作用域，另一个是参数构成的数组或arguments。call接收多个参数，第一个参数也是作用域，第二个参数及其后面的参数是可选的直接传递给call的参数们。

```js
var color = 'red';
var obj = {color:'blue'};

function fn() {
   console.log(this.color);
}

fn.call(this);  //red
fn.call(window);    //red
fn.call(obj);   //blue
```

ES5还定义了一个方法`bind()`，其this值会绑定到传给bind()的值

```js
var fn2 = fn.bind(obj);
fn2();  //blue
```

## 基本包装类型

ES提供了3个特殊的引用类型（包装类型）：`Boolean`、`Number`和`String`。它门是基本数据类型，每当读取一个基本类型值的时候，后台就会创建一个对应的基本包装类型的对象，从而让我们能够调用一些方法来操作这些数据。基本类型值不是对象，因而从逻辑上讲它们不应该有方法（尽管如我们所愿，它们确实有方法）。

使用 new 操作符创建的引用类型的实例，在执行流离开当前作用域之前都一直保存在内存中。而自动创建的基本包装类型的对象，则只存在于一行代码的执行瞬间，然后立即被销毁。

不建议直接实例化 Number 类型和 Boolean 类型。

Number类型提供了将数值格式化成字符串的方法：

- toFixed(n)方法会按照指定的小数位(n)返回数值的字符串表示
- toExponential(n)，该方法返回以指数表示法
- toPrecision(n)方法可能会返回固定大小（fixed）格式，也可能返回指数（exponential）格式

String类型的每个实例都有一个 length 属性，表示字符串中包含多个字符。

charAt()和 charCodeAt()方法用于访问字符串中特定字符。charAt()方法以单字符字符串的形式返回给定位置的那个字符（ECMAScript 中没有字符类型）。

嘿 **下面介绍常用的裁剪字符串方法：**

### slice()

slice()方法接收两个参数，返回从第1个参数值到第2个参数值裁剪的字符串。第1个参数是从0开始，第2个也是从0开始，但第2个参数最后要减1（可以看做从1开始）。slice支持以负数为单位，slice()方法会将传
入的负值与字符串的长度相加。

```js
var str = "helloworldstring";
str.slice(5)    // "worldstring"
str.slice(1,5)  // "ello"
str.slice(-6,-1)    // "strin"
```

### substring()

substring() 与slice主要的不同是，它不支持负数作为参数，substring()方法会把**所有**负值参数都转换为 0。

```js
var str = "helloworldstring";
str.substring(5)    // "worldstring"
str.substring(1,5)  // "ello"
str.substring(5,-6)    // "hello"
```

### substr()

substr()的第2个个参数的定义与上述两者不同，它的第二个参数指定的是要返回的字符个数。substr()方法将负的第一个参数加上字符串的长度，而将负的第二个参数转换为0。

```js
var str = "helloworldstring";
str.substr(5)    // "worldstring"
str.substr(1,5)  // "ellow"
str.substr(-6,-1)    // ""
```

这三个方法slice()、substr()和 substring()都不会修改字符串本身的值。

### trim()

`trim()`方法会创建一个字符串的副本，删除前置及后缀的所有空格，然后返回结果。

```js
var stringValue = "   hello world   ";
var trimmedStringValue = stringValue.trim();
alert(stringValue);            //"   hello world   "
alert(trimmedStringValue);     //"hello world"
```

### 字符串大小写转换方法

toLowerCase()、toLocaleLowerCase()、toUpperCase()和 toLocaleUpperCase()。

### match()

在字符串上调用match()方法，本质上与调用 RegExp 的 exec()方法相同。match()方法只接受一个参数，要么是一个正则表达式，要么是一个 RegExp 对象。match()方法返回一个数组，数组的第一项是与整个模式匹配的字符串，之后的每一项（如果有）保存着与正则表达式中的捕获组匹配的字符串。

search()。这个方法的唯一参数与 match()方法的参数相同：由字
符串或 RegExp 对象指定的一个正则表达式。search()方法返回字符串中第一个匹配项的索引；如果没
有找到匹配项，则返回-1。而且，search()方法始终是从字符串开头向后查找模式。

### replace()

 replace()方法接受两个参数：第一个参数可以是一个 **RegExp对象** 或者一个 **字符串**（这个字符串不会被转换成正则表达式），第二个参数可以是一个**字符串**或者一个**函数**。如果第一个参数是字符串，那么只会替换第一个子字符串。要想替换所有子字符串，唯一的办法就是提供一个正则表达式，而且要指定全局（g）标志

split()，这个方法可以基于指定的分隔符将一个字符串分割成多个子字符串，并将结果放在一个数组中。

## 单体内置对象

意思就是说，开发人员不必显式地实例化内置对象，因为它们已经实例化了。

### Global对象

Global这个对象都是“不存在”的，不属于任何其他对象的属性和方法，最终都是它的属性和方法。

Global包含很多方法，诸如 isNaN()、isFinite()、parseInt()以及 parseFloat()。除此之外还包含了其他一些方法：

1. URL编码方法：encodeURL()、encodeURIComponent() 和对应的 decodeURI()、decodeURIComponent()。
    这些方法对url地址进行编码或解码。
2. eval()方法
    eval()方法方法就像是一个完整的 ECMAScript 解析器
3. Global 对象的属性
    所有原生引用类型的构造函数，像Object 和 Function，也都是 Global 对象的属性
4. window 对象
    在全局作用域中声明的所有变量和函数，就都成为了 window对象的属性。

### Math对象

1. 属性值
    - Math对象提供一些属性值：Math.E、Math.PI。。。
2. min()和max()方法
    Math.min()和 Math.max()方法用于确定一组数值中的最小值和最大值。
3. 舍入方法
    - Math.ceil()执行向上舍入，即它总是将数值向上舍入为最接近的整数
    - Math.floor()执行向下舍入，即它总是将数值向下舍入为最接近的整数
    - Math.round()执行标准舍入，即它总是将数值四舍五入为最接近的整数
4. 随机数
    - Math.random()方法返回大于等于 0 小于 1 的一个随机数。
    - 套用下面的公式，就可以利用 Math.random()从某个整数范围内随机选择一个值。
    - `值 = Math.floor(Math.random() * 可能值的总数 + 第一个可能的值)`

```js
function selectFrom(lowerValue, upperValue) {
    var choices = upperValue - lowerValue + 1;
    return Math.floor(Math.random() * choices + lowerValue);
}

var num = selectFrom(2, 10);
console.log(num); // 介于 2 和 10 之间（包括 2 和 10）的一个数值
```