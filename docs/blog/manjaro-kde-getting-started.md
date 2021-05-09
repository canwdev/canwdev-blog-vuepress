 

# Manjaro Linux (KDE) 安装记录

## 简介

Manjaro Linux 是一款基于 Arch Linux 的发行版。

KDE 是一款桌面环境，操作类似于 Windows，强大好用。

## 安装

首先进入PE，使用 Dism++ 备份原来的 Windows 系统。

到[Manjaro官网](https://manjaro.org/download/)下载最新版本（[manjaro-kde-20.0.3-200606-linux56.iso](https://osdn.net/projects/manjaro/storage/kde/20.0.3/manjaro-kde-20.0.3-200606-linux56.iso)）后，使用 rufus 刷入 U 盘，然后启动系统，让其直接抹掉硬盘安装。

安到最后报了一个错，似乎是 `/boot/efi` 装不上去，折腾了半天也没有解决，于是我翻出了旧版（19.0.2）进行安装。[解决方案：修复 GRUB EFI 引导](./rsync-clone-linux.md)

安装很顺利，重启后成功进入桌面。

由于我的笔记本是双显卡，没有安装驱动，因此在关机和盖上盖子时会死机。

在设置里装好显卡驱动后，问题终于解决了：

![image-20200808230848029](./manjaro-kde-getting-started.assets/image-20200808230848029.png)

## 日常环境配置

### 软件源

设置软件源可加快下载速度。

在“软件更新”中，点击菜单-首选项，将官方软件库的使用镜像改成 China，然后刷新镜像列表。

![image-20200808232535479](./manjaro-kde-getting-started.assets/image-20200808232535479.png)

也可以使用命令行的方式设置软件源：

编辑 /etc/pacman.d/mirrorlist， 在文件的最顶端添加：

```
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinux/$repo/os/$arch
```

更新软件包缓存：

```sh
sudo pacman -Syy
```

### pacman 包管理器

到[官方文档](https://wiki.archlinux.org/index.php/pacman#Removing_packages)看了一下基本操作，感觉非常简单，安装速度比 apt 快多了。

装个 neofetch 试试：

```sh
sudo pacman -S neofetch
```

![image-20200808231736582](./manjaro-kde-getting-started.assets/image-20200808231736582.png)

一键更新所有软件包（包括Linux内核）：`sudo pacman -Syu`

### 字体

```sh
# 文泉驿字体系列
sudo pacman -S wqy-microhei wqy-bitmapfont wqy-zenhei

# 表情符号
sudo pacman -S noto-fonts-emoji
```

### 安装输入法（fcitx）

fcitx 是一款输入法框架。

```sh
sudo pacman -S fcitx fcitx-configtool

# KDE 输入法设置界面
sudo pacman -S kcm-fcitx

# 安装常用输入法
sudo pacman -S fcitx-googlepinyin fcitx-libpinyin
```

如果出现安装失败的情况，把系统软件包更新到最新。更多使用方法参考[官方文档](https://wiki.archlinux.org/index.php/Fcitx)。fcitx 自带了几个输入法，虽然词库很少，但基本能用。

安装好还需要修改以下两个文件，填入以下内容：

- `sudo vim /etc/environment`
- `vim ~/.pam_environment`

```
GTK_IM_MODULE=fcitx
QT_IM_MODULE=fcitx
XMODIFIERS=@im=fcitx
```

注销重新登录后生效。快捷键：`ctrl+space` 开启或关闭 fcitx 输入；`ctrl+shift` 切换输入法。

> 个人推荐中州韵（[fcitx-rime](https://www.archlinux.org/packages/?name=fcitx-rime)）+小鹤双拼，具体配置可以参考这篇文章：[Rime 输入法配置记录](https://10101.io/2019/01/30/rime-configuration)

### yay

使用 `yay` 可以方便的安装 AUR 软件。

- 到 https://github.com/Jguer/yay/releases 下载最新的二进制文件，并解压缩到 `/usr/Applications/yay_10.0.4_x86_64`
- 创建链接：`ln -s /usr/Applications/yay_10.0.4_x86_64/yay /bin/yay`
- 设置镜像：`yay --aururl "https://aur.tuna.tsinghua.edu.cn" --save`
- `yay -P -g`
- 然后就可以安装 AUR 软件了，不需要 `sudo`，如：`yay -S plymouth`