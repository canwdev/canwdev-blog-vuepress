# 虚拟机

## VMWare 将多个vmdk文件合并为一个或者将一个vmdk文件拆分为多个

**vmware-vdiskmanager.exe** 的位置在：`C:\Program Files (x86)\VMware\VMware Workstation\vmware-vdiskmanager.exe`

执行合并功能：`vmware-vdiskmanager -r <原文件路径(含文件名)> -t 0 <合并后文件路径(含文件名)>`

```
vmware-vdiskmanager.exe -r "D:\VM\VMW7\Windows 7.vmdk" -t 0 "D:\VM\Win7-single.vmdk"
```

执行拆分功能：`vmware-vdiskmanager -r <原文件路径(含文件名)> -t 1 <分割后文件路径(含文件名)>`

```
vmware-vdiskmanager -r G:\ubuntu\Ubuntu.vmdk -t 1 G:\ubuntu\ubuntu2.vmdk
```



## 压缩虚拟磁盘文件大小

- [vmware压缩vmdk文件大小](https://www.cnblogs.com/kagari/p/12010147.html)
- [减小VirtualBox虚拟硬盘文件的大小](https://blog.csdn.net/ganshuyu/article/details/46360271)

### Linux 客户机系统

将系统空闲空间置为 0，有两种方法：

第一种：

```sh
cat /dev/zero > zero.fill;sync;sleep 1;sync;rm -f zero.fill
```

第二种：

```sh
sudo dd if=/dev/zero of=/EMPTY bs=1M
sudo rm -f /EMPTY
```

### Windows 客户机系统

将系统空闲空间置为 0，Windows系统需要下载 [Sysinternals Suite](https://docs.microsoft.com/en-us/sysinternals/downloads/sysinternals-suite) 并执行：

```sh
sdelete –z C:
```

### 通用宿主机 VirtualBox 压缩命令

如果你的虚拟硬盘是Vmware的VMDK格式，那就要麻烦点，因为VirtualBox不支持直接压缩VMDK格式，但是可以变通下：先转换成VDI并压缩，再转回VMDK。执行命令：

```
vboxmanage clonehd "source.vmdk" "cloned.vdi" --format vdi
vboxmanage modifyhd cloned.vdi --compact
vboxmanage clonehd "cloned.vdi" "compressed.vmdk" --format vmdk
```

### Linux 宿主机 VMware 压缩命令

```
/usr/bin/vmware-toolbox-cmd disk shrinkonly
```

如果提示：`shrink disk is disabled for this virtual machine`，有两种可能：

- 磁盘是固定分配大小的，这样的话不能收缩
- 当前磁盘存在快照，删除快照后就再试

### Windows 宿主机 VMware 压缩命令

第一种：右键我的电脑->管理->存储->磁盘管理->右键任意磁盘->压缩卷->压缩

第二种：vmware安装目录下，vmware-vdiskmanager.exe -k vmdk路径

```
D:\VMware>vmware-vdiskmanager.exe -k  C:\Users\windows\Desktop\xxxx-disk1.vmdk
```

第三种：

![img](./virtual-machine.assets/1309874-20191224175352134-1105705161.png)


## VMware Workstation 与 Device/Credential Guard 不兼容?

> VMware Workstation 与 Device/Credential Guard 不兼容。在禁用 Device/Credential Guard 后，可以运行 VMware Workstation。

这往往是因为开启了 Hype-V 功能导致的，先关闭 Hyper-V，然后在命令行以管理员身份执行：`bcdedit /set hypervisorlaunchtype off`，重启电脑。
