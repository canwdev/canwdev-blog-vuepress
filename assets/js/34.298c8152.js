(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{667:function(s,a,n){"use strict";n.r(a);var t=n(35),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"命令行安装-archlinux-记录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#命令行安装-archlinux-记录"}},[s._v("#")]),s._v(" 命令行安装 ArchLinux 记录")]),s._v(" "),n("p",[s._v("参考："),n("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/348370646",target:"_blank",rel:"noopener noreferrer"}},[s._v("2021.02. Arch Linux 安装小记"),n("OutboundLink")],1)]),s._v(" "),n("h2",{attrs:{id:"_1-准备安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-准备安装"}},[s._v("#")]),s._v(" 1. 准备安装")]),s._v(" "),n("p",[s._v("前置条件：")]),s._v(" "),n("ul",[n("li",[s._v("[x] 能联网的电脑（纯ArchLinux需要网络安装）")]),s._v(" "),n("li",[s._v("[x] 一个大于 1GiB 的U盘")])]),s._v(" "),n("p",[s._v("下载 iso 镜像：https://mirrors.tuna.tsinghua.edu.cn/archlinux/iso/")]),s._v(" "),n("p",[s._v("将 iso 镜像写入到U盘：")]),s._v(" "),n("ul",[n("li",[s._v("Windows环境：使用 rufus 工具")]),s._v(" "),n("li",[s._v("Linux环境："),n("code",[s._v("sudo dd bs=4M if=archlinux.iso of=/dev/<你的u盘> conv=fdatasync status=progress")])])]),s._v(" "),n("h2",{attrs:{id:"_2-启动u盘系统并联网"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-启动u盘系统并联网"}},[s._v("#")]),s._v(" 2. 启动U盘系统并联网")]),s._v(" "),n("p",[s._v("在 BIOS 中配置 U 盘启动。")]),s._v(" "),n("p",[s._v("进入 u 盘系统后，可以看到 "),n("code",[s._v("root@archiso ~ #")]),s._v("，后续需要联网来下载软件包")]),s._v(" "),n("ul",[n("li",[s._v("有线网（DHCP动态分配IP）\n"),n("ul",[n("li",[s._v("直接执行 "),n("code",[s._v("dhcpcd")])])])]),s._v(" "),n("li",[s._v("无线网（Wi-Fi）\n"),n("ul",[n("li",[s._v("进入 iwd 命令行："),n("code",[s._v("iwctl")]),s._v("，进入以后长这样："),n("code",[s._v("[iwd]#")])]),s._v(" "),n("li",[s._v("查询无线网卡："),n("code",[s._v("device list")])]),s._v(" "),n("li",[s._v("扫描 Wi-Fi："),n("code",[s._v("station <devicename> scan")])]),s._v(" "),n("li",[s._v("输出扫描的结果："),n("code",[s._v("station <devicename> get-networks")])]),s._v(" "),n("li",[s._v("连接热点 SSID："),n("code",[s._v("station <devicename> connect <wifi-ssid>")])]),s._v(" "),n("li",[s._v("输入密码连接即可，最后 "),n("code",[s._v("exit")]),s._v(" 退出 iwd 命令行")]),s._v(" "),n("li",[s._v("执行 "),n("code",[s._v("dhcpcd")])])])])]),s._v(" "),n("p",[s._v("查看是否联网："),n("code",[s._v("ip a")]),s._v(" 或 "),n("code",[s._v("ping archlinux.org")])]),s._v(" "),n("p",[s._v("同步系统时间："),n("code",[s._v("timedatectl set-ntp true")]),s._v("，并验证 "),n("code",[s._v("timedatectl status")])]),s._v(" "),n("h2",{attrs:{id:"_3-安装到硬盘"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装到硬盘"}},[s._v("#")]),s._v(" 3. 安装到硬盘")]),s._v(" "),n("h3",{attrs:{id:"_3-1-硬盘分区"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-硬盘分区"}},[s._v("#")]),s._v(" 3.1 硬盘分区")]),s._v(" "),n("p",[s._v("列出所有设备："),n("code",[s._v("fdisk -l")])]),s._v(" "),n("p",[s._v("进入图形界面分区工具："),n("code",[s._v("cfdisk /dev/sd<?>")])]),s._v(" "),n("p",[s._v("创建一个 EFI 分区和一个 Linux Filesystem 分区（略）")]),s._v(" "),n("p",[s._v("格式化分区：")]),s._v(" "),n("ul",[n("li",[s._v("EFI 分区："),n("code",[s._v("mkfs.fat /dev/sda<?1>")])]),s._v(" "),n("li",[s._v("根文件系统："),n("code",[s._v("mkfs.ext4 /dev/sda<?2>")])])]),s._v(" "),n("p",[s._v("挂载根目录："),n("code",[s._v("mount /dev/sda<?2> /mnt")])]),s._v(" "),n("p",[s._v("挂载 EFI 分区：")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("mkdir /mnt/efi")])]),s._v(" "),n("li",[n("code",[s._v("mount /dev/sda<?1> /mnt/efi")])])]),s._v(" "),n("h3",{attrs:{id:"_3-2-安装-archlinux-到硬盘"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-安装-archlinux-到硬盘"}},[s._v("#")]),s._v(" 3.2 安装 ArchLinux 到硬盘")]),s._v(" "),n("p",[s._v("ArchLinux 是网络安装，所以需要配置国内镜像源")]),s._v(" "),n("p",[n("code",[s._v("vim /etc/pacman.d/mirrorlist")]),s._v("，参考："),n("a",{attrs:{href:"https://mirrors.tuna.tsinghua.edu.cn/help/archlinux/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Arch Linux 软件仓库镜像使用帮助"),n("OutboundLink")],1)]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 ArchLinux")]),s._v("\npacstrap /mnt base linux linux-firmware\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置 fstab")]),s._v("\ngenfstab -U /mnt "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /mnt/etc/fstab\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("此时系统安装完成，但如果缺少必要的配置和软件将无法正常工作。")]),s._v(" "),n("h2",{attrs:{id:"_4-chroot-后续配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-chroot-后续配置"}},[s._v("#")]),s._v(" 4. chroot 后续配置")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入 chroot 环境")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以理解为进入新装系统的运行环境")]),s._v("\narch-chroot /mnt\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("在 chroot 环境中，执行的命令将直接作用于新装的系统。")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置主机名和 hosts")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ArchLinuxPC"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/hostname\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"127.0.0.1 localhost"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/hosts\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"::1 localhost"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/hosts\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置时区")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime\nhwclock --systohc\nlocale-gen\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 本地化（略）")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 本地化可以在重启进入系统后修改")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim /etc/locale.gen")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# locale-gen")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim /etc/locale.conf")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装配置 GRUB 引导程序")]),s._v("\npacman -S grub efibootmgr\ngrub-install --efi-directory"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/efi --bootloader-id"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ArchLinux\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grub-mkconfig")]),s._v(" -o /boot/grub/grub.cfg\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 无线和有线网络配置")]),s._v("\npacman -S iwd dhcpcd\nsystemctl "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" iwd\nsystemctl "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" systemd-resolvecd\nsystemctl "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" dhcpcd\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装网络管理工具")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pacman -S networkmanager\nsystemctl "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" NetworkManager\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开机启动蓝牙服务")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" bluetooth\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 音频驱动")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pacman -S alsa-utils pulseaudio pulseaudio-alsa\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 X 显示服务和登录管理器")]),s._v("\npacman -S xorg sddm sddm-kcm\nsystemctl "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" kcm\nsystemctl "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" sddm\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 KDE 桌面环境和应用软件")]),s._v("\npacman -S plasma-meta plasma-nm\npacman -S konsole kate dolphin firefox gwenview okular spectacle vlc\npacman -S "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("htop")]),s._v(" neofetch "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" p7zip "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("zsh")]),s._v(" noto-fonts-cjk noto-fonts-emoji\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# root")]),s._v("\npacman -S "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新增普通用户(arch)，加入到 wheel 组")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" -m -G wheel arch\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置新用户密码")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" arch\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置 root 密码")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 给普通用户提权")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 去掉这一行的注释: %wheel ALL=(ALL) ALL")]),s._v("\nvisudo\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br")])]),n("h2",{attrs:{id:"_5-重启进入新系统"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-重启进入新系统"}},[s._v("#")]),s._v(" 5. 重启进入新系统")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 退出 chroot 环境")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启拔出U盘")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("reboot")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);