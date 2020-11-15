# Android 刷机备份步骤

> 2020-03-03

1. 插电、断网，使用 **SDMaid** 或其他的什么清理软件清理垃圾和缓存

2. 备份通讯录，导出为 vcf

3. 如果系统有自带备份软件，先用这个软件备份一遍系统设置（方便下次刷回来的时候使用）

4. 使用**钛备份**备份应用程序和数据：

   - 系统数据：通话记录、数据使用情况、信息、Wi-Fi接入点、桌面布局、输入法
   - 用户应用：静读天下、备份所有用户数据，时间很长，也可以同时执行第 4 步操作
   - linux-deploy 等写入到 `/data` 分区的数据
   - 毒瘤应用：京东、淘宝等耗时太长，不建议备份，可清除应用数据后再备份

5. 备份内置存储（`/sdcard`）数据：

   - 各类文件打包，使用 **Termux** 或者 `adb shell`：

     ```sh
     cd /sdcard
     # Android 应用文件
     tar czf Android.tgz Android/
     # 毒瘤应用（示例）
     tar czf tencent.tgz tencent/
     ```

     ```sh
     # 解压缩则是：
     tar cxf tencent.tgz
     ```

6. 等待上面的备份操作完成后，使用 **TotalCommander(TC)** 的 ADBPlugin.wfx 插件（或 `ssh` + `rsync`）将用户文件复制到电脑：

   - 个人文件：ADM、Books、BlueDict、Flash
   - 系统创建的文件夹：Alarms、DCIM、Documents、Download、Movies、Music、Notifications、Pictures、Podcasts、Ringtones
   - 备份文件：MIUI、data、**TitaniumBackup**、TWRP
   - 打包的备份文件：Android.tgz、tencent.tgz

7. 备份/复制文件的时间非常漫长，这个时候你可以去整理刷机文件，或干点别的事。刷完机后，恢复数据的顺序应该从下到上进行。

> 注：使用 TC 菜单栏中的 `标记>导出选择` 功能，下次在导入即可重新选择这些文件

backup_selection.txt

```
.@sdcard\
ADM\
Books\
BlueDict\
Flash\
Alarms\
DCIM\
Documents\
Download\
Movies\
Music\
Notifications\
Pictures\
Podcasts\
Ringtones\
MIUI\
data\
TitaniumBackup\
TWRP\
Android.tgz
tencent.tgz
```
