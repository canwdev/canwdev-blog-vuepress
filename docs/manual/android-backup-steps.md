# Android 刷机备份步骤

> 2020-03-03

1. 备份通讯录，导出为 vcf

2. 插电、断网，使用 **SDMaid** 清理用户缓存

3. 使用**钛备份**备份应用程序和数据：

   - 系统数据：通话记录、数据使用情况、信息、Wi-Fi接入点

   - 用户应用：备份所有用户数据，时间很长，也可以同时执行第 4 步操作
   - 毒瘤应用：京东、淘宝等耗时太长，不建议备份，可清除应用数据后再备份

4. 备份内置存储（`/sdcard`）数据：

   - 各类文件打包，使用 **Termux** 或 终端模拟器：

     ```sh
     cd /sdcard
     # Android 应用文件
     tar czf Android.tgz Android/
     # 腾讯系应用
     tar czf tencent.tgz tencent/
     ```

     ```sh
     # 解压缩则是：
     tar cxf tencent.tgz
     ```

5. 等待上面的备份操作完成后，使用 **TotalCommander（TC）** 的 ADBPlugin.wfx 插件（或其他 ADB 文件管理器）将用户文件复制到电脑：

   > 注：使用 TC 菜单栏中的 `标记>导出选择` 功能，下次在导入即可重新选择这些文件

   - 我的文件：`.@sdcard`、ADM、Books、BlueDict、Flash、MusicOST、CamScanner
   - 系统创建的文件夹：Alarms、DCIM、Documents、Download、Movies、Music、Notifications、Pictures、Podcasts、Ringtones
   - 备份文件：MIUI、data、**TitaniumBackup**、TWRP
   - 打包的备份文件：Android.tgz、tencent.tgz

6. 备份/复制文件的时间非常漫长，这个时候你可以去整理刷机文件，或喝杯咖啡。刷完机后，恢复数据的顺序应该从下到上进行。

---

backup_selection.txt
```
.@sdcard\
ADM\
Books\
BlueDict\
Flash\
MusicOST\
CamScanner\
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
