---
title: Android 命令
date: 2021-01-01 22:36:35
permalink: /pages/8ed231/
categories: 
  - manual
article: true
tags: 
  - 
---
# Android 命令

## 网络 ADB 调试 

```sh
# 用 USB 线将设备连接到电脑
# 为了确保设备已连接，可以先在 adb shell 中查看设备 ip 地址
adb shell
$ ifconfig
$ exit

# 开启网络调试，监听在 5555 端口
adb tcpip 5555

# 连接网络adb
# 如 adb connect 192.168.1.103:5555
adb connect IP地址[:端口号]
```

## 通过 adb 启动 shizuku

- [Shizuku 让你的应用直接使用系统 API](https://shizuku.rikka.app/zh-hans/)

```sh
adb shell sh /data/user_de/0/moe.shizuku.privileged.api/start.sh
```

## 炼妖壶

```
adb shell

# 开启 File Shuttle
pm grant com.oasisfeng.island android.permission.INTERACT_ACROSS_USERS
```

## 常用 ADB 命令


```sh
# 重置 adb 服务
adb kill-server

# 参考：https://github.com/jaredrummler/android-shell-scripts
# 快速重启
setprop ctl.restart zygote

# 重启至 bootloader
reboot bootloader

# 重启至 recovery
setprop ctl.start pre-recovery
sleep 3
reboot recovery # fallback

# 重启
setprop sys.powerctl reboot
sleep 3
reboot # fallback

# 重启 SystemUI
service call activity 42 s16 com.android.systemui
am startservice -n com.android.systemui/.SystemUIService

# 关机
setprop sys.powerctl shutdown
sleep 3
reboot -p # fallback
```

## Nokia N1 开启 OTG 命令

> 注：开启后在重启之前都不能充电。

```shell script
echo A > /sys/kernel/debug/usb/dwc3_debugfs_root/otg_id
```

## build.prop 优化代码

```sh
# Disables logcat
logcat.live=disable

# Disable Automatic Error Reporting
profiler.force_disable_err_rpt=1
profiler.force_disable_ulog=1
ro.kernel.checkjni=0
ro.kernel.android.checkjni=0
persist.android.strictmode=0

# Better net speeds.
net.tcp.buffersize.default=4096,87380,256960, 4096, 16384,256960
net.tcp.buffersize.wifi=4096,87380,256960,409 6,163 84,256960
net.tcp.buffersize.umts=4096,8 7380,256960,4096,163 84,256960
net.tcp.buffersize.gprs=4096,8 7380,256960,4096,163 84,256960
net.tcp.buffersize.edge=4096,8 7380,256960,4096,163 84,256960

# Better scrolling.
windowsmgr.max_events_per_sec=150
ro.min_pointer_dur=8 ro.max.fling_velocity=12000
ro.min.fling_velocity=8000

# Faster boot.
ro.config.hw_quickpoweron=true

# 关闭开机动画
debug.sf.nobootanimation=1

# 低内存模式
# https://source.android.com/devices/tech/perf/low-ram
ro.config.low_ram=true
```

## 使用 fastboot 刷入 Recovery

```sh
# 查看设备列表
fastboot.exe devices
# 刷入 recovery 到 recovery 分区
fastboot.exe flash recovery recovery.img
# 立即引导 recovery
fastboot.exe boot recovery.img
```

## 刷机常见问题

- [Android ROM 在 Ubuntu 下的 system.new.dat 的解包、修改和打包](./android-rom-modify/README.md)

- 如果无法刷入，请检查
  - 设备型号与脚本判定是否一致，如果要强刷，请修改刷机包 `\META-INF\com\google\android\updater-script` 里的判定机制
  - 底包（firmware）是否达到要求，如果底包版本过低则无法刷入
  - TWRP 是否支持刷入该版本的Android
- 如果刷入后卡第一屏（无开机动画）
  - 可能是 /data 分区出了问题，先备份数据，然后完全格式化 /data 分区，再重新刷入
  - 可能是 ROM 本身的问题
- 如果重启后总是进入 recovery
  - 可能是把 recovery.img 刷入了 boot 分区导致的
  - 可能是 boot 损坏了导致自动启动 recovery 分区
  - 线刷官方包或者卡刷上一次能用的包应该可以解决问题
