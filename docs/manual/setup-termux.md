# Termux 配置笔记

## 参考资料

- https://tonybai.com/2017/11/09/hello-termux/
- https://www.jianshu.com/p/2e6c8152a2ba

## 常用路径

- $HOME `/data/data/com.termux/files/home`
- $PREFIX `/data/data/com.termux/files/usr`

## [更换国内镜像](https://mirror.tuna.tsinghua.edu.cn/help/termux/)

`vi /data/data/com.termux/files/usr/etc/apt/sources.list`

```
# The main termux repository:
# deb http://termux.net stable main
deb http://mirrors.tuna.tsinghua.edu.cn/termux stable main
```

`apt update`

## termux 安装 on-my-zsh

```sh
apt install zsh
apt install git
git clone --depth=1 git://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh
cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc
chsh zsh
```

## 设置sshd

1. 手机上安装openssh：`apt install openssh`，启动服务：`sshd`
2. 在电脑上生成key：运行 `ssh-keygen -t rsa` 交互式地生成一个key，默认保存在~/.ssh/下，两个文件id_rsa和id_rsa.pub，pub是公钥，另一个是私钥。
3. 发送id_rsa：通过各种方式将id_rsa发送到手机上 `/data/data/com.termux/files/home/.ssh/id_rsa.pub`
4. 手机上设置授权key：`cat ./id_rsa.pub >> authorized_keys`
5. 手机上查看termux用户名：`whoami` // 如果不需要秘钥登录，可直接使用密码登录，通过 `passwd` 设置密码
6. 查看手机IP地址：`ifconfig`
6. 电脑连接手机：`ssh u0_a170@192.168.2.108 -p 8022`

## [备份与恢复](https://wiki.termux.com/wiki/Backing_up_Termux)

通过备份termux的data数据，可以实现备份、恢复、或迁移到其他设备（仅限相同架构？），[备份恢复脚本](./setup-termux/termux_backup.sh)

### 备份

1. 设置termux允许访问存储空间 `termux-setup-storage`
2. 切换到termux根目录 `cd /data/data/com.termux/files`
3. 备份数据：`tar -czvf /sdcard/termux-backup.tar.gz home usr`

### 恢复

1. 切换到termux根目录 `cd /data/data/com.termux/files`
2. 替换home目录
    ```sh
    rm -rf home
    tar -zxvf /sdcard/termux-backup.tar.gz home
    ```
3. 复制 busybox 二进制文件到指定位置（重要） `cp ./usr/bin/busybox ./tar`
4. 抹掉 sysroot，所有包将被删除 `rm -rf usr`
5. 从备份文件恢复 sysroot
    ```sh
    unset LD_PRELOAD
    ./tar -zxvf /sdcard/termux-backup.tar.gz usr
    ```
6. 现在使用通知中心的 exit 按钮退出 Termux 然后重开即可恢复完成
