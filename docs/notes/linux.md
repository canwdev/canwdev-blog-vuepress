# Linux

> 常用的系统命令、问题汇总

## 系统命令

### 文件系统权限设置(chmod)

```
# 递归(-R)修改文件夹的权限
sudo chmod -R 744 ./target-folder
```

使用 `ls -l` 可查看文件权限，`rwx` 分别表示 `读、写、执行`。

`744` 的意思是**文件所属的用户**有 `rwx` 限，**群组**有 `r--` 权限，**其他用户**有 `r--` 权限。

数字的三位分别代表：所属用户，群组用户，其他用户。每一位数字又可以转换为二进制数：

```
所属用户：7（十进制） -> 111（二进制） -> rwx
群组用户：4（十进制） -> 100（二进制） -> r--
其他用户：4（十进制） -> 100（二进制） -> r--
```

为了方便记忆，整理出这些规则：

```
可读 = r-- = 100（二进制） = 4（十进制）
可写 = -w- = 010（二进制） = 2（十进制）
执行 = --x = 001（二进制） = 1（十进制）

rwx = 4 + 2 + 1 = 7
rw- = 4 + 2 = 6
rx- = 4 + 1 = 5
```

所以：`644`为 `4+2` `4` `4`，即**所属用户**有读、写权限，**群组**只有读权限，**其它**只有读权限。

### 让文件属于当前用户(chown)

```
sudo chown -R $USER:$(id -gn $USER) ./target-folder
```

### 添加当前用户到用户组

> 需要重新登录或重启才能生效

```sh
# 添加当前用户到 vboxsf 组
sudo adduser $USER vboxsf
# 如果上面那条执行失败就用这一条
sudo usermod --append --groups vboxsf $USER
```

### 配置 CPU 调度

```sh
# 使用root执行
apt install cpufrequtils
# 查看全部CPU状态
cpufreq-info
# 查看支持的调度方式
cpufreq-info -g
# 设置调度方式
cpufreq-set -g powersave
```

### 让命令在后台运行

```sh
# 日志会输出到当前目录 nohup.out
nohup <command> &
```

### 创建软链接

Linux:

```sh
ln -s /源文件(夹)/ /目标文件(夹)

ln -s /usr/project/dist/ /usr/server/nginx/www/my-website
```

Windows:

```
mklink /D "C:\目标文件夹\链接文件夹名\" "C:\源文件夹"
```

### rsync 命令

rsync 是一个常用的 Linux 应用程序，用于文件同步。GUI 客户端：`grsync`

参考：[rsync 用法教程](https://www.ruanyifeng.com/blog/2020/08/rsync.html)

```sh
# 复制文件
rsync -avrh --progress /pathA/ /pathB/

# 单向同步（备份）
rsync -avrhc --delete --progress /pathA/ /pathB/
```

命令解释：

- `-a` 归档模式，等同于 `-rlptgoD`，可以同步元信息（比如修改时间、权限等）
- `-v` 输出更多详细信息
- `-r` 递归目录
- `-h` 以人类可读的格式输出数字
- `-c` 默认情况下，rsync 只检查文件的大小和最后修改日期是否发生变化，如果发生变化，就重新传输；使用这个参数以后，则通过判断文件内容的校验和，决定是否重新传输
- `--progress` 在传输过程中显示进度
- `--delete` 这将删除只存在于目标目录、不存在于源目录的文件

### 使用 dd 命令创建引导盘

参考：[How to create a bootable Ubuntu USB flash drive from terminal?](https://askubuntu.com/questions/372607/how-to-create-a-bootable-ubuntu-usb-flash-drive-from-terminal)

首先卸载你的目标磁盘分区

```
sudo umount /dev/sd<?><?>  
```

如果你不确定你的盘的代号，使用 `lsblk` 查看，会输出如下的结果，上述的两个 `<?>` 分别表示磁盘 (disk) 号和分区 (part) 号

```
sdb      8:16   1  14.9G  0 disk 
├─sdb1   8:17   1   1.6G  0 part /media/username/usb volume name
└─sdb2   8:18   1   2.4M  0 part 
```

使用下面命令写入对应的磁盘 (disk)：

```
sudo dd bs=4M if=path/to/input.iso of=/dev/sd<?> conv=fdatasync  status=progress
```

`input.iso` 是输入文件（光盘镜像），`/dev/sd<?>` 是目标磁盘。这种方法速度很快，从未失败。

### 使用 iptables 屏蔽 IP 地址

[iptables](https://wiki.archlinux.org/index.php/Iptables_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)) 是一个配置 Linux 内核 防火墙 的命令行工具，大多数发行版都内置了这个命令。

```sh
# 屏蔽一个IP
iptables -I INPUT -s <IP地址> -j DROP
# 显示已屏蔽的IP
iptables -L INPUT
```

参考：[Linux 使用 iptables屏蔽IP段](https://blog.csdn.net/hongkaihua1987/article/details/77336061)

使用 http://ip.tool.chinaz.com/ 可以查询目标 IP 的详细信息。



## 类 Debian 系统

### Ubuntu 安装 wine

```sh
#sudo apt install wine64
sudo dpkg --add-architecture i386
wget -qO- https://dl.winehq.org/wine-builds/Release.key | sudo apt-key add -
sudo apt-add-repository 'deb http://dl.winehq.org/wine-builds/ubuntu/ artful main'
apt update
sudo apt-get install --install-recommends winehq-stable
wine --version
winecfg
# 安装winetricks（Wine的辅助配置工具，超级便利，可以解决中文字体方块问题）
sudo apt install --install-recommends winetricks
```

安装中文字体：复制 `simsun.ttc` 到 `~/.wine/drive_c/windows/Fonts`

### 解决双显卡笔记本 (Intel+NVIDIA) 安装 Ubuntu 无法启动的问题

方法一：

进入 `grub` 界面后，在选中的默认启动项按 `E` 键进入编辑，将 `quite splash` 改为 `quite splash nomodeset`，按 `F10` 启动系统，此时启动的系统使用集显并且关闭了显卡加速（软件渲染）。

装完系统后，重启需要再次按照上述操作执行一遍，进入新系统之后只需在驱动管理器里选择 `NVIDIA Corporation` 提供的专用驱动即可彻底解决问题。

其他方法：

- 在 `grub` 界面，按 `E` 键进入编辑模式。在 `quiet` 的后面空一格加上代码：`acpi_osi=! acpi="windows 2009"`，然后按 F10 启动。
- 进入系统后，编辑 `sudo vim /boot/grub/grub.cfg`，查找 `quiet`，并在第一个`quiet`后面空一格加上这行代码：`acpi_osi=! acpi="windows 2009"`，并保存退出。
- 重启，问题解决。

其他方法：

- 在 `grub` 界面，按 `E` 键进入编辑模式。
- 修改 `quiet splash ---` 为 `nomodeset quiet splash`，然后按 F10 启动。

- 或在 `quiet` 后空格加 `nouveau.modeset=0`，然后按 F10 启动。

### MintLinux 安装后配置

首先配置软件源和输入法框架fcitx，打开设置可以找到配置项

```sh
# 安装完输入法框架后，全局字体会变成楷体，可以安装文泉驿字体解决
sudo apt install ttf-wqy-zenhei

# Linux Mint 下禁用 Alt 拖拽窗口 
sudo apt install dconf-tools
# 然后在 org -> cinnamon > desktop > wm > preferences 下面的 mouse-button-modifier 中修改 <Alt> 变为 <Super> 或者 <Ctrl>。

# 把capslock改为ctrl键
System Settings →  Keyboard Layouts →  Options → Caps Lock key behavior → Select Make Caps Lock an additional

# 解决 Linux Mint PC 前面板没声音的问题
sudo apt-get install pavucontrol

# 设置鼠标滚动速度
sudo apt install imwheel
## Download the code below http://www.nicknorton.net/mousewheel.sh
## Save it into your home folder, make it executable. Run it and enjoy.

# 主题美化下载
https://github.com/topics/cinnamon-theme
```

### 安装 deb 软件包

安装deb：`sudo dpkg -i xxx.deb`；如果遇到 “dpkg: 依赖关系问题使得 xxx 的配置工作不能继续”，解决方案：`sudo apt -f -y install`

### 常用GUI软件(使用 apt install)

https://alternativeto.net/platform/xfce

- `screenfetch` = 系统信息
- `htop` = 任务管理器
- `gedit` = Gnome 的文本编辑器
- `geany` = 轻量级IDE
- `mousepad` = xfce 的文本编辑器
- `pcmanfm` = 文件管理器
- `thunar` = 文件管理器
- `hardinfo` = 硬件信息
- `xarchiver` = 压缩软件
- `gnome-commander` = 类似于 TotalCommander 的双面板文件管理器
- `partitionmanager` = KDE 分区管理器

### 让 Ubuntu 支持挂载 exFAT 文件系统

```sh
sudo apt install exfat-fuse exfat-utils
```



## Android 系统

### 刷新 Android 设备媒体

```sh
# 如果要彻底重置，请清除 com.android.providers.media 的数据
adb shell am broadcast -a android.intent.action.MEDIA_MOUNTED -d file:///sdcard
```

### 关闭 Android 活动网络检测(captive_portal_detection/网络图标感叹号)
```sh
adb shell "settings put global captive_portal_detection_enabled 0"
```



## Linux 软件

### Xfce 音量控制面板

```
sudo apt-get install pavucontrol
```

然后在面板添加 Pulse Audio Plugin 即可。

[另一个方法](https://ubuntuforums.org/showthread.php?t=2210233&s=895c7276ff02cc162a8aa09d55ee34aa&p=12952718#post12952718)

```sh
sudo apt-get install volumeicon-alsa
killall xfce4-volumed
nohup volumeicon&
```

### 安装 on-my-zsh

```sh
apt install zsh
chsh -s $(which zsh)

apt install git
git clone --depth=1 https://github.com/ohmyzsh/ohmyzsh.git ~/.oh-my-zsh
cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc
```

如果 root 用户 `chsh` 时出现问题，首先使用 `which zsh` 查看 zsh 的位置，然后 `vim /etc/passwd`，参考这样修改：

```
root:x:0:0:root:/root:/usr/bin/zsh
```

