---
date: 2021-01-01 22:36:35
permalink: /pages/d62ab1/
categories: 
  - manual
  - android-rom-modify
article: true
title: step5_flash_machine
tags: 
  - 
---
解锁设备, 进入 fastboot 模式

```
sudo fastboot flash recovery recovery.img 
sudo fastboot flash boot recovery.img （Nokia N1没有recovery分区）
```



进入 recovery

select "apply update from ADB sideload"

```
adb kill-server
sudo adb sideload A5FMB19_update.zip
```



