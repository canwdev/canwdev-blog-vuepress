(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{714:function(t,e,s){"use strict";s.r(e);var a=s(35),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"termux-配置笔记"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#termux-配置笔记"}},[t._v("#")]),t._v(" Termux 配置笔记")]),t._v(" "),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.sqlsec.com/2018/05/termux.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Termux 高级终端安装使用配置教程"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://tonybai.com/2017/11/09/hello-termux/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hello，Termux"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("p",[t._v("建议到 "),s("a",{attrs:{href:"https://f-droid.org/zh_Hans/packages/com.termux/",target:"_blank",rel:"noopener noreferrer"}},[t._v("F-Droid"),s("OutboundLink")],1),t._v(" 下载 "),s("a",{attrs:{href:"https://f-droid.org/repo/com.termux_96.apk",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[t._v("0.96")]),s("OutboundLink")],1),t._v(" 或后续的版本，这些版本自带了系统文件，无需联网安装。也可以到「酷安」寻找相应到资源。")]),t._v(" "),s("p",[t._v("如果实在无法联网安装，参考这篇方案："),s("a",{attrs:{href:"https://android.stackexchange.com/a/201855",target:"_blank",rel:"noopener noreferrer"}},[t._v("Termux was unable to install the bootstrap packages"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"常用路径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用路径"}},[t._v("#")]),t._v(" 常用路径")]),t._v(" "),s("ul",[s("li",[t._v("$HOME "),s("code",[t._v("/data/data/com.termux/files/home")])]),t._v(" "),s("li",[t._v("$PREFIX "),s("code",[t._v("/data/data/com.termux/files/usr")])])]),t._v(" "),s("h2",{attrs:{id:"更换国内镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更换国内镜像"}},[t._v("#")]),t._v(" 更换国内镜像")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://mirror.tuna.tsinghua.edu.cn/help/termux/",target:"_blank",rel:"noopener noreferrer"}},[t._v("清华TUNA镜像的说明"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("编辑 "),s("code",[t._v("/data/data/com.termux/files/usr/etc/apt/sources.list")]),t._v("文件，填入以下内容：")]),t._v(" "),s("blockquote",[s("p",[t._v("如果没有 vi 等编辑器，可以使用 "),s("code",[t._v("echo 'deb http://mirrors.tuna.tsinghua.edu.cn/termux stable main' > sources.list")]),t._v(" 的方式来更新文件")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# The main termux repository:\n# deb http://termux.net stable main\ndeb http://mirrors.tuna.tsinghua.edu.cn/termux stable main\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("最后 "),s("code",[t._v("pkg update")])]),t._v(" "),s("h2",{attrs:{id:"termux-安装-on-my-zsh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#termux-安装-on-my-zsh"}},[t._v("#")]),t._v(" Termux 安装 on-my-zsh")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("zsh")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone --depth"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" git://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc\nchsh "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("zsh")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h2",{attrs:{id:"termux-设置-sshd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#termux-设置-sshd"}},[t._v("#")]),t._v(" Termux 设置 sshd")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.jianshu.com/p/2e6c8152a2ba",target:"_blank",rel:"noopener noreferrer"}},[t._v("电脑通过ssh连接android手机上的termux"),s("OutboundLink")],1)])]),t._v(" "),s("ol",[s("li",[t._v("Termux 上安装openssh："),s("code",[t._v("apt install openssh")]),t._v("，启动服务："),s("code",[t._v("sshd")])]),t._v(" "),s("li",[t._v("在终端上生成key：运行 "),s("code",[t._v("ssh-keygen -t rsa")]),t._v(" 交互式地生成一个key，默认保存在~/.ssh/下，两个文件id_rsa和id_rsa.pub，pub是公钥，另一个是私钥。")]),t._v(" "),s("li",[t._v("发送id_rsa：通过各种方式将id_rsa发送到Termux 上 "),s("code",[t._v("/data/data/com.termux/files/home/.ssh/id_rsa.pub")])]),t._v(" "),s("li",[t._v("Termux 上设置授权key："),s("code",[t._v("cat ./id_rsa.pub >> authorized_keys")])]),t._v(" "),s("li",[t._v("Termux 上查看termux用户名："),s("code",[t._v("whoami")]),t._v(" // 如果不需要秘钥登录，可直接使用密码登录，通过 "),s("code",[t._v("passwd")]),t._v(" 设置密码")]),t._v(" "),s("li",[t._v("查看Termux IP地址："),s("code",[t._v("ifconfig")])]),t._v(" "),s("li",[t._v("终端连接Termux ："),s("code",[t._v("ssh u0_a170@192.168.2.108 -p 8022")])])]),t._v(" "),s("h2",{attrs:{id:"备份与恢复"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#备份与恢复"}},[t._v("#")]),t._v(" 备份与恢复")]),t._v(" "),s("p",[t._v("参考"),s("a",{attrs:{href:"https://wiki.termux.com/wiki/Backing_up_Termux",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方备份教程"),s("OutboundLink")],1),t._v("，通过备份termux的data数据，可以实现备份、恢复、或迁移到其他设备（仅限相同架构），我写了一份 "),s("a",{attrs:{href:"./setup-termux/termux_backup.sh"}},[t._v("备份恢复脚本")])]),t._v(" "),s("h3",{attrs:{id:"备份"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#备份"}},[t._v("#")]),t._v(" 备份")]),t._v(" "),s("ol",[s("li",[t._v("设置termux允许访问存储空间 "),s("code",[t._v("termux-setup-storage")])]),t._v(" "),s("li",[t._v("切换到termux根目录 "),s("code",[t._v("cd /data/data/com.termux/files")])]),t._v(" "),s("li",[t._v("备份数据："),s("code",[t._v("tar -czvf /sdcard/termux-backup.tar.gz home usr")])])]),t._v(" "),s("h3",{attrs:{id:"恢复"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#恢复"}},[t._v("#")]),t._v(" 恢复")]),t._v(" "),s("ol",[s("li",[t._v("切换到termux根目录 "),s("code",[t._v("cd /data/data/com.termux/files")])]),t._v(" "),s("li",[t._v("替换home目录"),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf home\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -zxvf /sdcard/termux-backup.tar.gz home\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])]),t._v(" "),s("li",[t._v("复制 busybox 二进制文件到指定位置（重要） "),s("code",[t._v("cp ./usr/bin/busybox ./tar")])]),t._v(" "),s("li",[t._v("抹掉 sysroot，所有包将被删除 "),s("code",[t._v("rm -rf usr")])]),t._v(" "),s("li",[t._v("从备份文件恢复 sysroot"),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("unset")]),t._v(" LD_PRELOAD\n./tar -zxvf /sdcard/termux-backup.tar.gz usr\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])]),t._v(" "),s("li",[t._v("使用通知中心的 exit 按钮退出 Termux 然后重开即可恢复完成")])])])}),[],!1,null,null,null);e.default=r.exports}}]);