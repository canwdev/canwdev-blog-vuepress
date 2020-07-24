# Ubuntu/MintLinux 安装 KVM

```sh
sudo apt-get install qemu-kvm libvirt-bin bridge-utils virt-manager
sudo apt install gir1.2-spiceclientgtk-3.0
sudo virt-manager
systemctl start virtlogd.socket
```

Reboot, that will be ok