# 使用 rsync 克隆 Linux 系统（MBR）

## 1. 给新的磁盘分区

推荐新手使用 KDE Partition Manager 进行分区操作。

具体操作细节略。

## 2. 使用 rsync 拷贝系统文件到新的分区

```sh
rsync -avrh --progress /mnt/os_old/ /mnt/os_new/
```

## 3. 修改配置文件的 UUID

新的分区和原来的分区 UUID 肯定是不同的，为了让系统正常启动，需要修改这几个文件：

- `/etc/fstab`
- `/boot/grub/grub.cfg` —— 这个文件虽然是自动生成的，但为了方便起见也可以手动修改

用 `vim /etc/fstab` 打开，可以看到里面像这样：

```
# /etc/fstab: static file system information.
#
# Use 'blkid' to print the universally unique identifier for a device; this may
# be used with UUID= as a more robust way to name devices that works even if
# disks are added and removed. See fstab(5).
#
# <file system>             <mount point>  <type>  <options>  <dump>  <pass>
UUID=45a8f854-55c1-435b-b37e-8cfce8f8a6b2 /              ext4    defaults,noatime 0 1
```

其中 `45a8f854-55c1-435b-b37e-8cfce8f8a6b2` 就是旧分区 UUID 值了，需要把它换成新分区的值。

查看分区 UUID 命令，有多种方式：

- `sudo blkid`
- `ls -l /dev/disk/by-uuid`

用任意一种，确定新分区的 UUID 然后替换上面两个文件的旧 UUID 就可以了。

## 4. 修复 GRUB MBR 引导扇区

> 也适用于任何磁盘 MBR 引导丢失的问题

1. 使用光盘镜像启动到 Live 环境。

2. 终端运行 `lsblk` 命令找到目标系统磁盘（例如 `/dev/sda`），和包含系统的分区（例如 `/dev/sda1`）。

3. 挂载系统，并进入 `chroot` 环境：

   ```sh
   sudo su
   mount /dev/sda1 /mnt/system
   mount -t proc proc /mnt/system/proc
   mount -t sysfs sys /mnt/system/sys
   mount -o bind /dev /mnt/system/dev
   chroot /mnt/system/
   # 现在已经进入了 chroot 环境，可以看到当前根目录 `/` 下的文件都是原来文件系统里的文件。
   ```

4. 在 chroot 环境执行 `grub-install /dev/sda` ，为该磁盘安装 GRUB MBR 引导程序。

5. 完成。