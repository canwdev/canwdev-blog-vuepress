---
title: Ubuntu/MintLinux 安装 KVM
date: 2021-01-01 22:36:35
permalink: /pages/7ddd2d/
categories: 
  - manual
article: true
tags: 
  - 
---
# Ubuntu/MintLinux 安装 KVM

```sh
sudo apt-get install qemu-kvm libvirt-bin bridge-utils virt-manager
sudo apt install gir1.2-spiceclientgtk-3.0
sudo virt-manager
systemctl start virtlogd.socket
```

Reboot, that will be ok