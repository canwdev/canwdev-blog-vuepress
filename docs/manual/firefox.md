# Firefox 配置大全

### 火狐浏览器开启DNS-over-HTTPS（DoH）解决DNS污染 [来源](https://www.cccitu.com/3913.html)

火狐浏览器（Firefox）从v62版开始已支持DoH，DoH（DNS over HTTPS）协议可以加密 DNS 请求和响应，能够有效解决因DNS污染无法正常访问某些网站，也可以避免DNS查询记录被恶意收集监控或者被改过至虚假钓鱼网站。

**1.**更新火狐浏览器至62以上版本（仅安卓、PC和Mac支持DoH功能），在浏览器地址栏输入`about:config`，点击“我了解此风险”

**2.**在新打开的页面顶部搜索框， 搜索`network.trr`

**3.**双击`network.trr.mode`，将值改为2（默认是 0；2 表示尝试使用 DoH，如果不行就退回到传统方式；5 表示任何情况下都不用 DoH 功能）

**4.**双击`network.trr.uri`，将值改为支持DoH的未污染服务器地址，可以输入一些公共的，如`https://mozilla.cloudflare-dns.com/dns-query`，也可以自己搭建。

通过以上步骤，你已经成功开启了火狐浏览器隐藏功能DoH，可以避免自己的DNS查询记录被监控收集和恶意篡改，不再受困于DNS污染而无法正常访问某些网站。

**5.**此外，你还可以在地址栏输入`about:networking`选择DNS选项，查看DNS查询状态。

补充：
 除了使用Firefox浏览器，还可以安装加密DNS的软件 [[Intra](https://www.cccitu.com/3634.html)] 和 [[1.1.1.1](https://www.cccitu.com/4150.html)] 实现全局DoH



## Firefox 安卓版强制使显示桌面网站（设置PC的UA）

1. 进入 `about:config`
2. 创建一个新的项
   - 名称为 `general.useragent.override`
   - 类型为字符串
   - 值为 `Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:74.0) Gecko/20100101 Firefox/74.0`

