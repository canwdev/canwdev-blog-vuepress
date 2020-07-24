# SSH 笔记

## Linux 服务端安装SSH服务

安装ssh服务器

```sh
sudo apt install openssh-server
```

启动服务

```sh
sudo /etc/init.d/ssh start
```

## 一种简单的公钥登录的方式

https://serverfault.com/a/241593

在客户端操作

```sh
ssh-keygen -t rsa -b 2048
# ssh-copy-id root@xxx.com
ssh-copy-id -i ~/.ssh/id_rsa.pub root@xxx.com
```


## 如何创建ssh秘钥并连接远程服务器

在客户端创建秘钥对，会在`~/.ssh/`目录下生成一对秘钥，带`.pub`后缀的是公钥，同名不带的是私钥

```
ssh-keygen
```

查看本机ssh公钥，修改私钥权限（可选）

```
cat .ssh/id_rsa.pub
ssh-add
chmod 0600 .ssh/id_rsa
```

在服务端创建一个文件，并粘贴客户端的公钥内容

```sh
touch ~/.ssh/authorized_keys
# 粘贴客户端的~/.ssh/id_rsa.pub内容
vi ~/.ssh/authorized_keys
```

关闭服务端ssh的密码验证，只使用客户端公钥验证登录（更安全）

```sh
# 打开配置文件
sudo vi /etc/ssh/sshd_config

# PasswordAuthentication，默认值yes改为no
# PasswordAuthentication no
```

重启ssh服务

```sh
sudo /etc/init.d/ssh restart
```

连接

```
ssh root@xxx.com
```

## SSH 经常一段时间就断掉解决办法

```
 vi /etc/ssh/sshd_config

# 找到下面两行
# ClientAliveInterval 0
# ClientAliveCountMax 3

# 去掉注释，改成
ClientAliveInterval 30
ClientAliveCountMax 86400

# 这两行的意思分别是
# 1、客户端每隔多少秒向服务发送一个心跳数据
# 2、客户端多少秒没有相应，服务器自动断掉连接

# 重启sshd服务
service sshd restart
```

## `~/.ssh/config` 配置文件

通过创建 `~/.ssh/config` 配置文件，可以方便地在终端使用一行命令连接 ssh 服务器。内容如下格式编写：

```
Host vmware
      HostName 192.168.50.130
      Port 22
      User ubuntu
	  
# My Linux Mint Server
Host mint
      HostName example.com
      Port 8022
      User admin
	  IdentityFile ~/.ssh/test1/id_rsa
```

保存文件后，在终端输入 `ssh mint` 即可直接连接，无需输入密码（公钥认证）。

