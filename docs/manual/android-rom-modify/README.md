# Android ROM 在 Ubuntu 下的 system.new.dat 的解包、修改和打包

推荐使用 [android-rom-modify](https://github.com/canwdev/android-rom-modify) 脚本进行更快捷的操作

## 0. 准备工作

解压缩 zip 包，初始化开发环境。

```sh
git clone https://github.com/xpirt/sdat2img
git clone https://github.com/jazchen/rimg2sdat

sudo apt install android-tools-adb android-tools-fastboot android-tools-fsutils
sudo apt install python2.7 python-pip
sudo apt install brotli
```



## 1. 转换 system.new.dat 为 system.img

```sh
# 转换 system.new.dat.br 文件（如果必要）
brotli -d system.new.dat.br

# 转换 system.new.dat 为 system.img
python sdat2img.py system.transfer.list system.new.dat system.img
```


## 2. 挂载 system.img

```sh
# 创建挂载文件夹
sudo mkdir -p /mnt/system
# 挂载 system.img
sudo mount -o loop system.img /mnt/system
# 查看磁盘分区
df -h
# 此时可以使用 root 权限随意修改 /mnt/system 的内容了
```

## 3. 保存修改过后的 system

```sh
# 保存修改过后的 /mnt/system 为 system_new.img
sudo make_ext4fs -T 0 -S file_contexts -l 2048M -a system system_new.img /mnt/system
# 卸载 /mnt/system
sudo umount /mnt/system

# 备份旧文件
mv system.transfer.list system.transfer.list.bak
mv system.new.dat system.new.dat.bak
```

## 4. 转换 system_new.img 为 system.new.dat

```sh
# -v 指定版本为 1（兼容旧TWRP），默认输出 system.new.dat
python rimg2sdat.py -v 1 system_new.img
```

## 5. 打包并刷机

根据原来的刷机包的目录结构，将新的文件打包成 zip 格式，放到手机 `/sdcard`，使用 TWRP 刷入。



## 参考

- [Android ROM包定制（解包，增删模块，打包）](https://luoyesiqiu.github.io/2019/04/30/Android-ROM%E5%8C%85%E5%AE%9A%E5%88%B6%EF%BC%88%E8%A7%A3%E5%8C%85%EF%BC%8C%E5%A2%9E%E5%88%A0%E6%A8%A1%E5%9D%97%EF%BC%8C%E6%89%93%E5%8C%85%EF%BC%89/)
