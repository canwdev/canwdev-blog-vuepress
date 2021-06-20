---
title: 常用压缩/解压命令
date: 2021-01-01 22:36:35
permalink: /pages/bd8bc3/
categories: 
  - manual
article: true
tags: 
  - 
---
# 常用压缩/解压命令

## tar

- .tgz 与 .tar.gz 是一样的格式
- tar 只是按照文件目录原样保存（包括权限），gz 表示压缩

```sh
# 创建压缩包，c=创建文件，z=压缩，v=输出啰嗦日志，f=文件名
tar czvf xxx.tgz xxx/

# 解压缩，x=解压缩
tar xvf xxx.tgz
```

### Linux 批量打包当前目录下的每个件为 tar.gz

```sh
for i in *; do tar -czvf $i.gz $i; done
```

## 7z 命令行

```sh
# 创建压缩包
7z a xxx.7z xxx/

# 解压缩，-y为不显示确认
7z x xxx.7z -y
```

### Windows 批量打包当前目录下的每个件夹

[参考](https://superuser.com/questions/94421/how-to-make-7-zip-do-a-whole-bunch-of-folders)，在 CMD(不是 Powershell) 下执行：

```sh
# 压缩为 zip
for /D %d in (*.*) do 7z a -tzip "%d.zip" "%d"
# 压缩为 7z
for /D %d in (*.*) do 7z a "%d.7z" "%d"
```
