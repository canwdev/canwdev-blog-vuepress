---
title: Node.js 笔记
date: 2021-01-01 22:36:35
permalink: /pages/4dffb3/
categories: 
  - notes
article: true
tags: 
  - 
---
# Node.js 笔记

## 使用 nvm 管理 Node.js 版本（推荐）

### nvm for Linux

官方链接：https://github.com/nvm-sh/nvm

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash

# 设置镜像
export NVM_NODEJS_ORG_MIRROR=https://nodejs.org/dist

# 显示所有远程LTS版本
nvm ls-remote --lts
# 安装
nvm install 12.22.1
node -v
```

### nvm for Windows

> 参考：[使用nvm安装/管理多个nodejs版本](https://www.jianshu.com/p/17d3249e0619)

1. 首先，下载 nvm 并安装：https://github.com/coreybutler/nvm-windows/releases

2. 打开 Powershell，输入 `nvm list available` 查看可用的 Node.js 版本，访问 https://nodejs.org/download/release 查看所有可用版本

3. 安装你需要的版本，如 10.22.1 版：`nvm install 10.22.1`
   
    > 如果下载缓慢，请编辑 `C:\Users\<YourName>\AppData\Roaming\nvm\settings.txt`(安装目录下)，添加：
    
    ```
   node_mirror: https://npm.taobao.org/mirrors/node/
   npm_mirror: https://npm.taobao.org/mirrors/npm/
   ```
   
   或者，直接输入命令进行设置：
   
   ```sh
   nvm node_mirror https://npm.taobao.org/mirrors/node/
   nvm npm_mirror https://npm.taobao.org/mirrors/npm/
   ```
   
4. 查看安装好的版本列表：`nvm list`

5. 设置默认 Node.js 版本 `nvm use 10.22.1`

### nvm Node.js 32位/64位 切换

```sh
# 安装 32 位 10.15.1 版本 
nvm install 10.15.1 32

# 切换到该版本
nvm use 10.15.1 32

# 查看架构
node -p "process.arch"
```

## Ubuntu 上安装 Node.js (通过包管理器)

由于目前apt自带的nodejs和npm版本过低，需要添加nodejs官方的源

1. 运行 `curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -`
2. 编辑 `/etc/apt/sources.list.d/nodesource.list`，把 `https://deb.nodesource.com/node_10.x/` 替换为 `https://mirrors.tuna.tsinghua.edu.cn/nodesource/deb_10.x/` 即可。
3. 最后安装
    ```
    sudo apt update
    sudo apt install nodejs -y
    # 一般会自带 npm，如果没有请手动安装
    sudo apt install npm
    ```

#### 参考

- https://mirrors.tuna.tsinghua.edu.cn/help/nodesource/
- https://github.com/nodesource/distributions/blob/master/README.md

## Linux 上手动安装 Node.js (二进制安装)

```sh
# 下载二进制文件压缩包
wget https://nodejs.org/dist/v10.16.3/node-v10.16.3-linux-x64.tar.xz
# 解压缩
tar xvf node-v10.16.3-linux-x64.tar.xz
# 将目录移动至 /usr/software/nodejs
sudo mv ./node-v10.16.3-linux-x64 /usr/software/nodejs

# 使用 ln 命令设置符号链接
sudo ln -s /usr/sofrware/nodejs/bin/npm /usr/bin/npm
sudo ln -s /usr/sofrware/nodejs/bin/npx /usr/bin/npx
sudo ln -s /usr/sofrware/nodejs/bin/node /usr/bin/node

# 查看版本
node -v
npm -v
```

## Ubuntu/Debian 安装 yarn

```sh
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
```

## nrm快速切换源小工具（推荐）

```
sudo npm install -g nrm 
nrm use taobao
# nrm use npm
```

## 手动设置npm淘宝镜像源

```sh
npm config set registry https://registry.npm.taobao.org
npm config set disturl https://npm.taobao.org/dist
```

查看是否设置成功：`npm config list`

## 手动设置yarn淘宝镜像源

```sh
yarn config set registry https://registry.npm.taobao.org
yarn config set disturl https://npm.taobao.org/dist
```

## 华为镜像源

NPM的配置文件为用户根目录下的：**~/.npmrc**（Windows路径为：**C:\Users\\.npmrc**），您可以直接修改配置文件，或者运行如下命令设置：

```
npm config set registry https://mirrors.huaweicloud.com/repository/npm/
npm cache clean -f
```

华为开源镜像站同时也提供了工具类加速镜像，可以通过如下的命令设置加速地址：

※ 设置**nodejs**工具的镜像地址

```
npm config set disturl https://mirrors.huaweicloud.com/nodejs
```

※ 设置**Node-Sass**的镜像地址

```
npm config set sass_binary_site https://mirrors.huaweicloud.com/node-sass
```

※ 设置浏览器引擎驱动镜像地址，如果需要安装**Selenium**，请 点击此处

```
npm config set phantomjs_cdnurl https://mirrors.huaweicloud.com/phantomjs
npm config set chromedriver_cdnurl https://mirrors.huaweicloud.com/chromedriver
npm config set operadriver_cdnurl https://mirrors.huaweicloud.com/operadriver
```

※ 设置**Electron**和**Python**的镜像地址

```
npm config set electron_mirror https://mirrors.huaweicloud.com/electron/
npm config set python_mirror https://mirrors.huaweicloud.com/python
```

## 在 npm 上发布自己的包

1. 在 https://www.npmjs.com/signup 注册一个账号
2. 如果设置了淘宝源，切换为 npm 官方源 `nrm use npm`
3. 执行：`npm login`，输入用户名、密码、邮箱进行登录
5. 如果是空项目，执行 `npm init` 初始化项目
4. 在项目目录执行：`npm publish --access public` 完成发布

如果发布失败，可能的原因如下：

- 修改 `package.json` 中 `private` 为 `false`
- 包名重复，修改 `name` 为一个不重复的值，或使用 `npm-name-cli` 工具检测包名重名

参考：https://xuebin.me/posts/43109cf3.html

## 安装 VueCLI3

```sh
sudo npm install @vue/cli -g
vue ui
```

## node-sass 安装慢或失败

```sh
npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/
```

## electron 安装慢或失败

```
npm config set electron_mirror https://npm.taobao.org/mirrors/electron/
```

一条命令解决：`sudo npm install -g electron --unsafe-perm=true --allow-root --registry=https://registry.npm.taobao.org`

## 如何解决 NodeJS Error: ENOSPC

```sh
# 方法一：提高系统允许监听文件数
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

## 升级 npm 到最新版

```sh
# 清除npm缓存
npm cache clean -f
npm install -g npm
```

## yarn 的 autoclean 命令

该命令可以清理 `node_modules` 里面的一些不必要的文件，以减小一些构建系统打包后的大小。

1. `yarn autoclean -I` 生成一个 `.yarnclean` 文件，描述了要清理的文件类型
2. `yarn autoclean -F` 开始清理

```
# 效果显著
-rw-r--r-- 1 mint mint  24M Nov 25 15:17 stage-1574666274142-20191125_151754147-dist.tar.7z
-rw-r--r-- 1 mint mint  17M Nov 25 15:35 stage-1574667370958-20191125_153610962-dist.tar.7z
```

## 批量删除 node_modules 文件夹

安装 RimRaf：`npm install rimraf -g`

在项目文件夹中，使用以下命令删除node_modules文件夹： `rimraf node_modules`

如果要递归删除：`rimraf .\**\node_modules`

## npm设置代理

参考：https://www.tapme.top/blog/detail/20191010/

http 代理

```sh
# 假设本地代理端口为7890
npm config set proxy "http://localhost:7890"
npm config set https-proxy "http://localhost:7890"

# 有用户密码的代理
npm config set proxy "http://username:password@localhost:8080"
npm confit set https-proxy "http://username:password@localhost:8080"
```

socks5 代理

> npm 不支持 socks 代理，但是我们可以用一个工具将 http 代理转成 socks 代理，然后将 npm 代理地址设置到这个工具的地址。

```sh
# 假设本地socks5代理端口为8081
# 首先安装转换工具
npm install -g http-proxy-to-socks
# 然后使用这个工具监听8080端口,支持http代理，然后所有8080的http代理数据都将转换成socks的代理数据发送到8081上
hpts -s localhost:8081 -p 8080
# 最后设置npm代理为8080
npm config set proxy "http://localhost:8080"
npm config set https-proxy "http://localhost:8080"
```

删除代理

```sh
npm config delete proxy
npm config delete https-proxy
```

## npm install 遇到的坑

- 可能是项目本身使用了 cnpm，删掉 `node_modules` 和 `package-lock.json` 用 `npm install` 重装
- 使用 `cnpm` 或 `yarn` 重装
- 设置 [npm 代理](#npm设置代理) 或[镜像源](#手动设置npm淘宝镜像源)，重装
- 清除 npm 缓存 `npm cache clean -f`，重装
- 使用 `npm --loglevel info install` 或 `yarn --verbose install` 查看详细输出

## 运行大型 Vue 项目时，报内存溢出错误：`CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory`

全局处理

1. 全局安装 `npm install -g increase-memory-limit`
2. 运行 `increase-memory-limit`

或者在项目中 `package.json`

```json
{
    "scripts": {
        "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js && cross-env LIMIT=8192 increase-memory-limit",
        "fix-memory-limit": "cross-env LIMIT=8192 increase-memory-limit"
    },
    "devDependencies": {
        "increase-memory-limit": "^1.0.6",
        "cross-env": "^5.2.0"
    }
}
```

初次运行项目前，执行一遍 `npm run fix-memory-limit` 就可以了。

注意：32位环境最大支持 4096MB 内存。

如果执行后遇到这个问题：`'"node --max-old-space-size=8192"' 不是内部或外部命令,也不是可运行的程序`，很有可能是这条命令把脚本改坏了，建议手动修改启动脚本：

![image-20200421154419272](./js-notes.assets/image-20200421154419272.png)
