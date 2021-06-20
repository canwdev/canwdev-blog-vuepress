---
title: Ubuntu 安装 Jenkins
date: 2021-01-01 22:36:35
permalink: /pages/cb8211/
categories: 
  - manual
article: true
tags: 
  - 
---
# Ubuntu 安装 Jenkins

## 前置条件：安装Java

本文命令全在root权限下运行

```bash
# apt install software-properties-common
add-apt-repository ppa:openjdk-r/ppa
apt update
apt install openjdk-8-jdk
```

## 安装 Jenkins

```bash
wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | sudo apt-key add -
sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
apt-get update
apt-get install jenkins
# 启动服务
service jenkins start
```

修改端口号，默认端口号为8080，建议修改

```bash
# vi /etc/init.d/jenkins
vi /etc/default/jenkins
```

改成：

```
# port for HTTP connector (default 8080; disable with -1)
HTTP_PORT=8098
```

并重启服务 `service jenkins start`

## 访问web界面执行安装

访问：http://yourdomain.com:8098

在墙内，安装过程可能异常缓慢，但多等几分钟应该可以安装完成

如果实在无法安装，尝试：

```
需要你进入jenkins的工作目录，打开hudson.model.UpdateCenter.xml
把http://updates.jenkins-ci.org/update-center.json改成http://mirror.xmission.com/jenkins/updates/update-center.json
还是不行的话 找到updates目录下的default.json 把里面所有的谷歌地址改成百度的
--------------------- 
作者：flyingsnails 
原文：https://blog.csdn.net/alittleyatou/article/details/78344117 
```

进入初始化界面后，需要输入密码，可以 `cat /var/lib/jenkins/secrets/initialAdminPassword` 查看密码

## 安装结束后，设置清华源镜像

访问 `/pluginManager/advanced` 系统管理-插件管理-高级

设置升级站点URL为 `https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json`

至此，安装完成。

## 参考

- https://juejin.im/post/5b6329c2e51d4519044ab85f
- https://www.jianshu.com/p/845f267aec52
- https://juejin.im/post/5ad1980e6fb9a028c42ea1be
