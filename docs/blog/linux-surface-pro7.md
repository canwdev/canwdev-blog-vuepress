# Linux for Surface Pro 7 指南

如果你网络状况良好，直接参考 `linux-surface` 的[官方文档](https://github.com/linux-surface/linux-surface/wiki/Installation-and-Setup)安装就可以了。下面介绍如何手动下载包并在离线的情况下安装。

## 1. Debian/Ubuntu

### 1.1 下载

可以直接到 Github 的 release 页面下载内核，或者到 https://pkg.surfacelinux.com/debian 手动获取以下的包：

下载 [Packages](https://pkg.surfacelinux.com/debian/dists/release/main/binary-amd64/Packages) 文件，用文本编辑器打开，搜索包名。

例如搜索：`linux-headers-surface`，可以在下方得到这么一串地址：

```
Filename: pool/main/l/linux-surface/linux-headers-surface_5.8.5-surface-1_amd64.deb
```

直接和上面的地址进行拼接，得到下载地址：`https://pkg.surfacelinux.com/debian/pool/main/l/linux-surface/linux-headers-surface_5.8.5-surface-1_amd64.deb`

全部需要下载的包有：

```
linux-headers-surface linux-image-surface surface-ipts-firmware libwacom-surface iptsd
```

### 1.2 安装

使用 `sudo dpkg -i 本地安装包.deb` 来安装，顺序如下：

```sh
# 内核
sudo dpkg -i linux-headers-5.8.5-surface_5.8.5-surface-1_amd64.deb \
	linux-headers-surface_5.8.5-surface-1_amd64.deb \
	linux-image-5.8.5-surface_5.8.5-surface-1_amd64.deb \
	linux-image-surface_5.8.5-surface-1_amd64.deb

# 驱动程序
sudo dpkg --auto-deconfigure -i libwacom-surface_1.4.1-2_amd64.deb
sudo dpkg -i surface-ipts-firmware_20200402-1_amd64.deb
sudo dpkg -i iptsd_0.1-1_amd64.deb
```

## 2. Arch/Manjaro

### 2.1 下载

待补充。

### 2.2 安装

如果直接安装，可能会提示证书错误，此时需要修改配置：`/etc/pacman.conf`

```
# SigLevel = Required DatabaseOptional
SigLevel = Never
# LocalFileSigLevel = Optional
LocalFileSigLevel = Never
```

然后就可以直接安装了：

```sh
# 内核
sudo pacman -U linux-surface-5.8.5.arch1-1-x86_64.pkg.tar.zst \
	linux-surface-headers-5.8.5.arch1-1-x86_64.pkg.tar.zst

# 驱动程序
# 待补充。
```

## 3. 常见问题

### 3.1 vmlinuz has invalid signature

重启后可能提示 `vmlinuz has invalid signature`，此时请进入 UEFI 关闭安全启动，或者安装 `linux-surface-secureboot-mok`。

### 3.2 没有触控

在内核 5.8 及更高版本中，你还需要安装 iptsd 以获得触摸支持并启用 iptsd 守护程序 `sudo systemctl enable iptsd.service`

### 3.3 [SP7](https://github.com/linux-surface/linux-surface/wiki/Surface-Pro-7) 重启后卡田 Logo

1. `sudo vim /etc/default/grub`
2. Add `reboot=pci` to your kernel boot parameters，如：
    ```
    GRUB_CMDLINE_LINUX_DEFAULT="quiet splash reboot=pci"
    ```
3. 更新 grub 配置：`sudo update-grub`


