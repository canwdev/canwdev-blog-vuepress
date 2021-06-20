---
title: 安装 Cordova
date: 2021-01-01 22:36:35
permalink: /pages/c21a7b/
categories: 
  - manual
article: true
tags: 
  - 
---
# 安装 Cordova

## 备注

2018年6月3日22:40:16

需要Java环境，可能需要android-sdk。

官网：`https://cordova.apache.org`

## 安装命令

1. 安装npm工具（安装Node.js）

2. 安装cordova

`npm install -g cordova`

3. 创建一个Cordova项目

`cordova create CordovaTest com.example.cordovatest CordovaTest`

4. 添加Android平台

`cordova platform add android`

5. 构建

`cordova build android`

6. 运行

`cordova run android`