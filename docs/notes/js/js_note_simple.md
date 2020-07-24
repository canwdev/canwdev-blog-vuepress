# JS Note Simple

## 如何批量修改（追加）页面底部的JS

使用Sublime，Ctrl+Shift+F，第一个参数`</body>`，第二个参数`<open folders>`，第三个参数：

```html
<script type="text/javascript" src="Js/addEffects.js"></script>
</body>
```

## 改链接

```javascript
var links = $('.xn_c_index_15_listUl a');
    links[0].href=links[1].href='sv.aspx?TypeId=36&FId=t8:36:8';
```


## 自定义CSS

```javascript
$('.n_content_right_name_r a:last').css({"color":"#aa8129"});

$('.bk6_n_content_right_name_r a:last').css({"color":"#aa8129"});

var color = $('.index_dy_box1 p').attr({"class":"a1"});
color.each(function(i){
        if (i%2==0) {
            $(this).attr({"class":"a3"});
        }
        if (i%3==0) {
            $(this).attr({"class":"a5"});
        }
    })
```

## 追加元素

```javascript
$('.n_main').append('<div class="placeholder122"></div>');
$('.n_main').append('<div class="add_left122"></div><div class="add_right122"></div>');
$('.n_main').append('<div class="add_bottom122"><img src="http://0.rc.xiniu.com/g2/M00/61/DD/CgAGe1qeU0SAPfBnAAAMZ1rzPMs531.png"></div>');
```


## 获取元素高度

```javascript
var mainHight = document.getElementById("ea_c").offsetHeight;   // '567'
var height = $('#ea_c').css('height');    // '567px'
```


## 手机号验证

```javascript
var reg = /^1[0-9]{10}$/;
var number = $('#EIMS_C_40032_mobile').get(0).value;
if (reg.test(number)) {
    EIMS_C_40032.SubmitAdvisorys();
} else {
    alert('请输入正确的手机号');
}
```


## 土制链接解析器v1(bug)

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