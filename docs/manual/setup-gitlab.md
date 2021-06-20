---
title: Ubuntu 下 Gitlab 的安装与配置
date: 2021-01-01 22:36:35
permalink: /pages/ca4693/
categories: 
  - manual
article: true
tags: 
  - 
---
# Ubuntu 下 Gitlab 的安装与配置

## 安装

```sh
# 首先信任 GitLab 的 GPG 公钥
curl https://packages.gitlab.com/gpg.key 2> /dev/null | sudo apt-key add - &>/dev/null
# 再选择你的 Debian/Ubuntu 版本，文本框中内容写进 /etc/apt/sources.list.d/gitlab-ce.list
# deb https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/ubuntu xenial main
# 安装 gitlab-ce
sudo apt-get update
sudo apt-get install gitlab-ce
```

## 配置

初次使用可能会要求修改external_url，`sudo vi /etc/gitlab/gitlab.rb`

```ruby
# 外部地址与端口号
external_url 'http://xxx.example.com:9004/'
# 如果unicorn的默认端口（8080）被占用，还需要修改unicorn的配置（重要）
unicorn['listen'] = 'localhost'
unicorn['port'] = 9005
```

- 修改完成后，要使配置生效：`sudo gitlab-ctl reconfigure`，初次执行会非常慢
- 重启gitlab（非必要）：`sudo gitlab-ctl restart`
- 查看状态：`sudo gitlab-ctl status`
- 设置服务为开机启动：`sudo systemctl enable gitlab-runsvdir.service`

## 参考

- [TUNA · Gitlab Community Edition 镜像使用帮助](https://mirror.tuna.tsinghua.edu.cn/help/gitlab-ce/)

## 替代品：Gogs

因为 Gitlab 过于重型，运行起来非常吃内存，我目前已弃坑换用 Gogs。