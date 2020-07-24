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



