# 在 Linux 中阻止特定程序联网

参考：[How to block internet access to certain programs on Linux](https://serverfault.com/a/550278)，使用了 `用户组` 和 `iptables` 的原理。

1. 创建并将所需的用户添加到**用户组**：

   - 创建用户组：`groupadd no-internet`

   - 验证是否创建成功：`grep no-internet /etc/group`

   - 创建用户：`useradd -g no-internet username`

     > 注意：如果要修改已经存在的用户，则应运行：`usermod -a -G no-internet userName`
     >
     > 检查用户是否在组内：`sudo groups userName`

2. 在路径中创建一个脚本并将其可执行：

   - 创建脚本：`vim /home/username/.local/bin/no-internet`
   - 脚本内容：
     ```sh
     #!/bin/bash
     sg no-internet "$@"
     ```
   - 让其可执行：`chmod 755 /home/username/.local/bin/no-internet`

3. 添加 `iptables` 规则以禁止 `no-internet` 组的网络活动：

   ```sh
   iptables -I OUTPUT 1 -m owner --gid-owner no-internet -j DROP
   ```

   > 注意：这条规则将在重启后失效，如果要让其开机后自动生效，需要进行配置，这取决于你的 Linux 发行版（[Arch](https://wiki.archlinux.org/index.php/Iptables_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6)）。

4. 检查是否成功，例如运行一个 `bash`：

   ```sh
   $ no-internet bash
   $ ping bing.com
   ping: bing.com: 未知的名称或服务
   ^D
   
   $ bash
   $ ping bing.com
   PING bing.com (204.79.197.200) 56(84) bytes of data.
   64 bytes from a-0001.a-msedge.net (204.79.197.200): icmp_seq=1 ttl=118 time=19.0 ms
   64 bytes from a-0001.a-msedge.net (204.79.197.200): icmp_seq=2 ttl=118 time=20.7 ms
   ...
   ```

如果你想例外允许程序访问**本地网络**：

- `iptables -A OUTPUT -m owner --gid-owner no-internet -d 192.168.1.0/24 -j ACCEPT`
- `iptables -A OUTPUT -m owner --gid-owner no-internet -d 127.0.0.0/8 -j ACCEPT`
- `iptables -A OUTPUT -m owner --gid-owner no-internet -j DROP`

> 注意：如果在一个进程中打开另一个新进程，将维持规则。例如，如果你运行带有 `no-internet` 规则的程序，并且该程序将打开浏览器窗口，则仍将应用这些规则。