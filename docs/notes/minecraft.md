---
title: Minecraft 脚本
date: 2021-07-25 09:58:31
permalink: /pages/14abdb/
categories:
  - notes
tags:
  - minecraft
---

# Minecraft 脚本

# 启动 Minecraft 服务器

```
# ArchLinux
sudo pacman -S jre-openjdk

java -jar ./minecraft_server.1.16.2.jar
# 使用 tmux 在后台运行
```

同意 `eula.txt`

```
eula=true
```

`server.properties` 常用配置

```
# 改为false允许非正版玩家登录（登录失败无效的会话）
online-mode=false
```

# 定期备份脚本(corntab)

备份脚本 `backup.sh`

```sh
#!/bin/bash
mypath=$(dirname $0)
myname=$(basename $0)

FILE_PREFIX='minecraft-server-1.16.2-'
DATE=`date "+%Y%m%d"`
DATE_WITH_TIME=`date "+%Y%m%d_%H%M%S"`

cd $mypath

FILE_NAME="${FILE_PREFIX}${DATE_WITH_TIME}.tar.gz"
echo Creating backup: $FILE_NAME

tar czf $FILE_NAME ./minecraft-server
mkdir -p _backup
mv $FILE_NAME _backup

echo Done!
```

`corntab -e`

```
# 每周一和周五的凌晨 02:10 执行
10 2 * * 1,5 /minecraft/backup.sh
```
