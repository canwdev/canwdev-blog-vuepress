# Electron.js 快速入坑指南

> 使用 JavaScript, HTML 和 CSS 构建跨平台的桌面应用。如果你可以建一个网站，你就可以建一个桌面应用程序。 Electron 是一个使用 JavaScript, HTML 和 CSS 等 Web 技术创建原生程序的框架，它负责比较难搞的部分，你只需把精力放在你的应用的核心上即可。

## 安装

由于国内网络问题，需要先设置镜像。

编辑 `~/.npmrc` 在里面添加 `electron_mirror="https://npm.taobao.org/mirrors/electron/"`

安装 electron：`npm i -g electron`

## 使用官方示例文件

```sh
# 克隆示例项目的仓库
git clone https://github.com/electron/electron-quick-start

# 进入这个仓库
cd electron-quick-start

# 安装依赖并运行
npm install && npm start

# 如果全局安装了 electron，直接执行：
electron .
```

## Windows 下的打包（electron-builder）

安装 electron-builder：`npm i -g electron-builder`

由于国内网络问题，导致依赖winCodeSign和nsis下载报错，这时需要手动下载然后放到指定位置。

- winCodeSign
    - 下载链接：https://github.com/electron-userland/electron-builder-binaries/releases/tag/winCodeSign-2.5.0
    - 解压后位置：`C:\Users\用户名\AppData\Local\electron-builder\Cache\winCodeSign\winCodeSign-2.5.0`
- nsis
    - 下载链接：https://github.com/electron-userland/electron-builder-binaries/releases
    - 解压后位置：`C:\Users\用户名\AppData\Local\electron-builder\Cache\nsis\nsis-3.0.3.2`

安装完成后即可开始打包

- 打包成绿色免安装 `electron-builder --dir`
- 打包成exe的安装包 `electron-builder`

## Electron require() is not defined

从版本5开始，nodeIntegration的默认值从true更改为false。您可以在创建浏览器窗口时启用它：

```js
app.on('ready', () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    });
});
```

# 参考

- https://electronjs.org/
- [利用electron-builder打包electron成exe](https://www.imqianduan.com/electron/electron-builder.html)

## 学习资源

- [electronjs.org/docs](https://electronjs.org/docs) - Electron的所有文档
- [electronjs.org/community#boilerplates](https://electronjs.org/community#boilerplates) - 社区创建的示例入门应用程序
- [electron/electron-quick-start](https://github.com/electron/electron-quick-start) - 一个非常基本的入门电子应用程序
- [electron/simple-samples](https://github.com/electron/simple-samples) - 小型应用程序，具有将其进一步发展的想法
- [electron/electron-api-demos](https://github.com/electron/electron-api-demos) - 教您如何使用Electron的Electron应用程序
- [hokein/electron-sample-apps](https://github.com/hokein/electron-sample-apps) - 适用于各种Electron API的小型演示应用程序
