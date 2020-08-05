# Linux

> 包括一些常用的系统命令

## vi 编辑器的方向键变成 ABCD 问题

直接安装 vim，然后使用 vim 编辑。

```sh
echo "set nocp" >> ~/.vimrc
source ~/.vimrc
# 或者 cp /etc/vim/vimrc ~/.vimrc
```

## Ubuntu安装wine

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

## 双显卡笔记本NVIDIA独显安装Ubuntu时卡死

进入`grub`界面后，在选中的默认启动项按`E`键进入编辑，将`quite splash`改为`quite splash nomodeset`，按`F10`启动系统，此时启动的系统使用集显并且关闭了显卡加速（软件渲染）

装完系统后，重启需要再次按照上述操作执行一遍，进入新系统之后只需在驱动管理器里选择`NVIDIA Corporation`提供的专用驱动即可彻底解决问题

## Linux 权限数字

```
dudo chmod -R 774 ./folder

644的意思是本用户有可读可写权限，群组有只读权限，其他用户为只读权限。
解释：
数字的三位分别代表：当前用户，群组用户，其他用户。
然后权限可以分为：读r=4，写w=2，执行x=1
所以：644为（4+2）（4）（4），即〔当前用户〕读，写权限，〔群组用户〕读权限，〔其它〕读权限

rwx = 4 + 2 + 1 = 7
rw = 4 + 2 = 6
rx = 4 +1 = 5
```

## 让文件属于当前用户(chown)
```
sudo chown -R $USER:$(id -gn $USER) /home/mint/.config
```


## MintLinux 安装后配置

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

## 刷新Android设备媒体

```sh
# 如果要彻底重置，请清除 com.android.providers.media 的数据
adb shell am broadcast -a android.intent.action.MEDIA_MOUNTED -d file:///sdcard
```

## 关闭Android网络检测（网络图标感叹号）
```sh
adb shell "settings put global captive_portal_detection_enabled 0"
```

## Linux配置CPU调度

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

## Linux配置ssh命令在后台运行

```sh
# 建议使用root权限运行，日志会输出到当前目录 nohup.out
nohup <command> &
```

## Xfce 音量控制面板

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

## 创建软链接

Linux:

```sh
ln -s /源文件(夹)/ /目标文件(夹)

ln -s /usr/www/automate/projects/notes-vuepress/docs/.vuepress/dist/ /usr/server/nginx/www/notes-vuepress
```

Windows:

```
mklink /D "C:\目标文件夹\链接文件夹名\" "C:\源文件夹"
```

## 安装 deb 软件包

安装deb：`sudo dpkg -i xxx.deb`；如果遇到 “dpkg: 依赖关系问题使得 xxx 的配置工作不能继续”，解决方案：`sudo apt -f -y install`

## 常用GUI软件（使用 apt install）

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

## 让 Ubuntu 支持挂载 exFAT 文件系统

```sh
sudo apt install exfat-fuse exfat-utils
```

## 解决双显卡（Intel+Nvidia）的笔记本，Debian/Ubuntu 无法启动的问题

方法一：

- 在 grub 界面，按 e 键进入编辑模式，在 `quiet` 的后面空一格加上代码：`acpi_osi=! acpi="windows 2009"`，然后按 F10 启动。
- 进入系统后，编辑 `sudo nano /boot/grub/grub.cfg`，查找 `quiet`，并在第一个`quiet`后面空一格加上这行代码：`acpi_osi=! acpi="windows 2009"`，并保存退出。
- 重启，问题解决。

其他方法：

- 在 grub 界面，按 e 键进入编辑模式
- 修改 `quiet splash ---` 为 `nomodeset quiet splash`，然后按 F10 启动。

- 或 在 quiet 后空格加 `nouveau.modeset=0`，然后按 F10 启动。

## 安装 on-my-zsh

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

