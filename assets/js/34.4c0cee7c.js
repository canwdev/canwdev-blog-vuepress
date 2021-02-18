(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{595:function(a,t,s){a.exports=s.p+"assets/img/image-20200809125337578.38a18c6d.png"},815:function(a,t,s){"use strict";s.r(t);var e=s(56),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"虚拟机笔记"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机笔记"}},[a._v("#")]),a._v(" 虚拟机笔记")]),a._v(" "),e("h2",{attrs:{id:"linux-安装-vmware-workstation-虚拟机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux-安装-vmware-workstation-虚拟机"}},[a._v("#")]),a._v(" Linux 安装 VMware Workstation 虚拟机")]),a._v(" "),e("p",[a._v("到官网下载 Linux 二进制文件："),e("a",{attrs:{href:"https://download3.vmware.com/software/wkst/file/VMware-Workstation-Full-15.5.6-16341506.x86_64.bundle",target:"_blank",rel:"noopener noreferrer"}},[a._v("VMware-Workstation-Full-15.5.6-16341506.x86_64.bundle"),e("OutboundLink")],1)]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" +x *.bundle\n./VMware-Workstation-Full-15.5.6-16341506.x86_64.bundle\n")])])]),e("ul",[e("li",[a._v("Q: Directory must be non-empty System service scripts directory (commonly /etc/init.d)")]),a._v(" "),e("li",[a._v("A: sudo mkdir "),e("code",[a._v("/etc/init.d")])])]),a._v(" "),e("hr"),a._v(" "),e("p",[e("img",{attrs:{src:s(595),alt:"image-20200809125337578"}})]),a._v(" "),e("p",[a._v("启动 VMware，如果出现这个窗口，则需要："),e("code",[a._v("sudo pacman -S linux-headers")]),a._v("，选择对应的版本安装，比如我的是 "),e("code",[a._v("linux54-headers")]),a._v("。安装完成后重新打开 VMWare 就可以了。更多说明请查看 [Arch VMware 文档]("),e("a",{attrs:{href:"https://wiki.archlinux.org/index.php/VMware_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://wiki.archlinux.org/index.php/VMware_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)"),e("OutboundLink")],1)]),a._v(" "),e("h2",{attrs:{id:"arch-linux-安装-virtualbox-虚拟机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arch-linux-安装-virtualbox-虚拟机"}},[a._v("#")]),a._v(" Arch Linux 安装 VirtualBox 虚拟机")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" pacman -S virtualbox\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 选择内核对应的版本安装")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 初次启动报错：Kernel driver not installed (rc=-1908)")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" pacman -S linux-headers\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" pacman -S virtualbox-host-dkms\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" modprobe vboxdrv\n")])])]),e("h2",{attrs:{id:"vmware-vmdk-拆分与合并"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vmware-vmdk-拆分与合并"}},[a._v("#")]),a._v(" VMWare vmdk 拆分与合并")]),a._v(" "),e("blockquote",[e("p",[e("strong",[a._v("vmware-vdiskmanager.exe")]),a._v(" 的位置在："),e("code",[a._v("C:\\Program Files (x86)\\VMware\\VMware Workstation\\vmware-vdiskmanager.exe")])])]),a._v(" "),e("h3",{attrs:{id:"多个镜像合并为一个"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多个镜像合并为一个"}},[a._v("#")]),a._v(" 多个镜像合并为一个")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# vmware-vdiskmanager -r <原文件路径(含文件名)> -t 0 <合并后文件路径(含文件名)>")]),a._v("\n\nvmware-vdiskmanager.exe -r "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"D:\\VM\\VMW7\\Windows 7.vmdk"')]),a._v(" -t "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"D:\\VM\\Win7-single.vmdk"')]),a._v("\n")])])]),e("h3",{attrs:{id:"一个镜像拆分为多个"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一个镜像拆分为多个"}},[a._v("#")]),a._v(" 一个镜像拆分为多个")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# vmware-vdiskmanager -r <原文件路径(含文件名)> -t 1 <分割后文件路径(含文件名)>")]),a._v("\n\nvmware-vdiskmanager -r G:"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("ubuntu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Ubuntu.vmdk -t "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" G:"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("ubuntu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("ubuntu2.vmdk\n")])])]),e("h2",{attrs:{id:"压缩虚拟磁盘文件大小"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#压缩虚拟磁盘文件大小"}},[a._v("#")]),a._v(" 压缩虚拟磁盘文件大小")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.cnblogs.com/kagari/p/12010147.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("vmware压缩vmdk文件大小"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/ganshuyu/article/details/46360271",target:"_blank",rel:"noopener noreferrer"}},[a._v("减小VirtualBox虚拟硬盘文件的大小"),e("OutboundLink")],1)])]),a._v(" "),e("p",[a._v("压缩分为两个步骤：")]),a._v(" "),e("ol",[e("li",[a._v("将客户机的磁盘空闲空间置零")]),a._v(" "),e("li",[a._v("在宿主机压缩客户机的虚拟磁盘")])]),a._v(" "),e("h3",{attrs:{id:"linux-客户机系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux-客户机系统"}},[a._v("#")]),a._v(" Linux 客户机系统")]),a._v(" "),e("p",[a._v("将系统空闲空间用 0 填满，然后删除。有两种方法：")]),a._v(" "),e("p",[a._v("第一种：")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /dev/zero "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" zero.fill"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sync")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sleep")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sync")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -f zero.fill\n")])])]),e("p",[a._v("第二种：")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("dd")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("if")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/dev/zero "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("of")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("./zero.fill "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("bs")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("1M\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -f ./zero.fill\n")])])]),e("h3",{attrs:{id:"windows-客户机系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows-客户机系统"}},[a._v("#")]),a._v(" Windows 客户机系统")]),a._v(" "),e("p",[a._v("将系统空闲空间置为 0，Windows系统需要下载 "),e("a",{attrs:{href:"https://docs.microsoft.com/en-us/sysinternals/downloads/sysinternals-suite",target:"_blank",rel:"noopener noreferrer"}},[a._v("Sysinternals Suite"),e("OutboundLink")],1),a._v(" 并执行：")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("sdelete -z C:\n")])])]),e("h3",{attrs:{id:"通用宿主机-virtualbox-压缩命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通用宿主机-virtualbox-压缩命令"}},[a._v("#")]),a._v(" 通用宿主机 VirtualBox 压缩命令")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("vboxmanage modifyhd cloned.vdi --compact\n")])])]),e("p",[a._v("如果虚拟硬盘是 VMDK 格式，则需要转换：")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("vboxmanage clonehd "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"source.vmdk"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"cloned.vdi"')]),a._v(" --format vdi\nvboxmanage clonehd "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"cloned.vdi"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"compressed.vmdk"')]),a._v(" --format vmdk\n")])])]),e("h3",{attrs:{id:"linux-宿主机-vmware-压缩命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux-宿主机-vmware-压缩命令"}},[a._v("#")]),a._v(" Linux 宿主机 VMware 压缩命令")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("/usr/bin/vmware-toolbox-cmd disk shrinkonly\n")])])]),e("p",[a._v("如果提示："),e("code",[a._v("shrink disk is disabled for this virtual machine")]),a._v("，有两种可能：")]),a._v(" "),e("ul",[e("li",[a._v("磁盘是固定分配大小的，这样的话不能收缩")]),a._v(" "),e("li",[a._v("当前磁盘存在快照，删除快照后就再试")])]),a._v(" "),e("h3",{attrs:{id:"windows-宿主机-vmware-压缩命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows-宿主机-vmware-压缩命令"}},[a._v("#")]),a._v(" Windows 宿主机 VMware 压缩命令")]),a._v(" "),e("p",[a._v("使用图形界面：")]),a._v(" "),e("ul",[e("li",[a._v("虚拟机设置 -> "),e("strong",[a._v("硬件")]),a._v("选项卡 -> 选择一块"),e("strong",[a._v("硬盘")]),a._v(" -> 磁盘实用工具 -> 压缩")])]),a._v(" "),e("p",[a._v("命令行：在 vmware 安装目录下，执行下面命令：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("D:\\VMware>vmware-vdiskmanager.exe -k  C:\\Users\\windows\\Desktop\\xxxx-disk1.vmdk\n")])])]),e("h2",{attrs:{id:"vmware-workstation-与-device-credential-guard-不兼容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vmware-workstation-与-device-credential-guard-不兼容"}},[a._v("#")]),a._v(" VMware Workstation 与 Device/Credential Guard 不兼容")]),a._v(" "),e("blockquote",[e("p",[a._v("VMware Workstation 与 Device/Credential Guard 不兼容。在禁用 Device/Credential Guard 后，可以运行 VMware Workstation。")])]),a._v(" "),e("p",[a._v("这往往是因为开启了 Hype-V 功能导致的，先关闭 Hyper-V，然后在命令行以管理员身份执行："),e("code",[a._v("bcdedit /set hypervisorlaunchtype off")]),a._v("，重启电脑。")]),a._v(" "),e("h2",{attrs:{id:"arch-linux中使用vmware-workstation不能打开vmmon内核模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arch-linux中使用vmware-workstation不能打开vmmon内核模块"}},[a._v("#")]),a._v(" "),e("a",{attrs:{href:"https://www.cnblogs.com/zhuxiaoxi/p/8423544.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Arch Linux中使用VMware Workstation不能打开vmmon内核模块"),e("OutboundLink")],1)]),a._v(" "),e("h5",{attrs:{id:"解决方法1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决方法1"}},[a._v("#")]),a._v(" 解决方法1")]),a._v(" "),e("p",[a._v("你可以在启动VMware前运行"),e("code",[a._v("/etc/init.d/vmware start")]),a._v("来启动服务")]),a._v(" "),e("h5",{attrs:{id:"解决方法2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决方法2"}},[a._v("#")]),a._v(" 解决方法2")]),a._v(" "),e("p",[a._v("在Arch Linux上可以通过安装"),e("code",[a._v("vmware-systemd-serverices")]),a._v("这个AUR包，来添加systemctl服务")]),a._v(" "),e("ul",[e("li",[a._v("使用"),e("code",[a._v("systemctl enable vmware.service")]),a._v("让它每次开机都运行")]),a._v(" "),e("li",[a._v("使用"),e("code",[a._v("systemctl start vmware.service")]),a._v("让它临时启动")])]),a._v(" "),e("h5",{attrs:{id:"解决方法3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决方法3"}},[a._v("#")]),a._v(" 解决方法3")]),a._v(" "),e("p",[a._v("添加这个文件\n"),e("em",[a._v("/etc/systemd/system/vmware.service")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("[Unit]\nDescription=VMware daemon\nRequires=vmware-usbarbitrator.service\nBefore=vmware-usbarbitrator.service\nAfter=network.target\n\n[Service]\nExecStart=/etc/init.d/vmware start\nExecStop=/etc/init.d/vmware stop\nPIDFile=/var/lock/subsys/vmware\nRemainAfterExit=yes\n\n[Install]\nWantedBy=multi-user.target\n")])])]),e("ul",[e("li",[a._v("使用"),e("code",[a._v("systemctl enable vmware.service")]),a._v("让它每次开机都运行")]),a._v(" "),e("li",[a._v("使用"),e("code",[a._v("systemctl start vmware.service")]),a._v("让它临时启动")])]),a._v(" "),e("h2",{attrs:{id:"如何在-linux-客户机挂载-virtualbox-共享文件夹"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何在-linux-客户机挂载-virtualbox-共享文件夹"}},[a._v("#")]),a._v(" 如何在 Linux 客户机挂载 VirtualBox 共享文件夹")]),a._v(" "),e("p",[a._v("首先需要安装增强工具。")]),a._v(" "),e("p",[a._v("如果勾选了自动挂载，并设置了挂载点（如 "),e("code",[a._v("VMShared")]),a._v("），则一般来说会挂载到 "),e("code",[a._v("/media/sf_VMShared/")]),a._v("，但这个目录只有 "),e("code",[a._v("root")]),a._v(" 用户或 "),e("code",[a._v("vboxsf")]),a._v(" 组的用户才有权限访问（"),e("a",{attrs:{href:"https://stackoverflow.com/a/26981786",target:"_blank",rel:"noopener noreferrer"}},[a._v("参考"),e("OutboundLink")],1),a._v("）。")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 添加当前用户到 vboxsf 组")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" adduser "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$USER")]),a._v(" vboxsf\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 如果上面那条执行失败就用这一条")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("usermod")]),a._v(" --append --groups vboxsf "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$USER")]),a._v("\n")])])]),e("p",[a._v("需要重新登录或重启才能生效。")]),a._v(" "),e("p",[a._v("如果没有自动挂载成功，下面是手动挂载的方法：")]),a._v(" "),e("p",[a._v("参考："),e("a",{attrs:{href:"https://gist.github.com/estorgio/1d679f962e8209f8a9232f7593683265",target:"_blank",rel:"noopener noreferrer"}},[a._v("Mounting VirtualBox shared folders on Ubuntu Server 16.04 LTS"),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v("首先，要确保安装了增强功能。然后在「设置-共享文件夹」中添加一个共享文件夹，勾选「自动挂载」并填入挂载点，例如「VMShared」。")]),a._v(" "),e("p",[a._v("到客户机，执行以下命令：")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 创建挂载目标")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" /mnt/VMShared\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 挂载共享目录")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("mount")]),a._v(" -t vboxsf VMShared /mnt/VMShared\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 挂载为可写，用户是 user")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("mount")]),a._v(" -t vboxsf LinuxZone -o rw,dmode"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("777")]),a._v(",gid"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("user,uid"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("user /mnt/LinuxZone1\n")])])]),e("p",[a._v("这样就可以完成挂载。")])])}),[],!1,null,null,null);t.default=r.exports}}]);