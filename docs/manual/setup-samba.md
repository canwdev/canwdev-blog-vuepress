# 安装并配置 Samba 服务

参考：https://www.linuxidc.com/Linux/2018-11/155466.htm

> Samba(SMB) 是一种在局域网上共享文件和打印机的一种通信协议，我们可以利用 Samba 在网络中访问开启了该服务的计算机中的文件，就像访问本地磁盘一样便利。

## 在 Ubuntu 上安装配置 Samba 服务器

1. 安装服务
    `sudo apt-get install samba samba-common`
    
2. 创建一个用于分享的samba目录
    `sudo mkdir /home/linuxidc/linuxidc.com/share`
    
3. 给创建的这个目录设置权限
    `sudo chmod 777 /home/linuxidc/linuxidc.com/share`
    
4. 添加用户(下面的linuxidc是我的用户名，之后会需要设置samba的密码)。 

    `sudo smbpasswd -a linuxidc`

5. 配置samba的配置文件

    `sudo vi /etc/samba/smb.conf`，在配置文件smb.conf的最后添加下面的内容（`shift+g` 跳转到最后一行）：

    ```
    [share]
    comment = share folder
    browseable = yes
    path = /home/linuxidc/linuxidc.com/share
    create mask = 0700
    directory mask = 0700
    valid users = linuxidc
    force user = linuxidc
    force group = linuxidc
    public = yes
    available = yes
    writable = yes
    ```

    在上面valid users = linuxidc中的**linuxidc**为我的用户名。

6. 重启samba服务器，这样 samba 服务就配置完成并启动成功了

    `sudo service smbd restart`

7. 查看本机 IP 地址：

    `ifconfig`



## 在 Windows 中连接 Samba

`Win+R` 在弹出的运行窗口中输入 `\\ip` 即可访问。如`\\192.168.182.188`。

在 Win10 中可能会有提示：**你不能访问此共享文件夹，因为你组织的安全策略阻止未经身份验证的来宾访问。这些策略可帮助保护你的电脑免受网络上不安全设备或恶意设备的威胁。**

1. 按 `Win+R` 输入 `gpedit.msc` 启动本地组策略编辑器
2. 依次找到“计算机配置-管理模板-网络-Lanman工作站”这个节点，在右侧内容区可以看到“启用不安全的来宾登录”这一条策略设置。状态是“未配置”。
3.  双击“启用不安全的来宾登录”这一条策略设置，将其状态修改为“已启用”并单击确定按钮。 
4. 设置完成再次尝试访问发现可以正常访问了。
