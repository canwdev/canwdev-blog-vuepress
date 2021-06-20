---
title: 解决 Samsung S7 在 Linux Mint 下无法使用 USB 网络共享(RNDIS)的问题
date: 2021-01-01 22:36:35
permalink: /pages/8cc12d/
categories: 
  - manual
article: true
tags: 
  - 
---
# 解决 Samsung S7 在 Linux Mint 下无法使用 USB 网络共享(RNDIS)的问题

修改 MAC 地址可以解决该问题

首先运行：

`ip link show`

This will list the network devices, Find the one you want to change.

比如有问题的设备是 device is enp0s20f0u6

运行:

```sh
# sudo ip link set dev <your_device> down
sudo ip link set dev enp0s20f0u6 down
```

然后:

```sh
# sudo ip link set dev <your_device> address <your_new_mac_address>
sudo ip link set dev enp0s20f0u6 address 4C:ED:FB:74:41:45
```

或者，如果你想自动生成 MAC 地址，安装 Macchanger：

`sudo apt install macchanger`

To change MAC address

`sudo macchanger -r <your_device>`

最后：

`sudo ip link set dev <your_device> up`

# 参考

- [USB tethering not working in 18.04 fresh install](https://askubuntu.com/a/1160490)
