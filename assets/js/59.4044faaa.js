(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{702:function(t,s,a){"use strict";a.r(s);var n=a(35),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ubuntu-下-gitlab-的安装与配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-下-gitlab-的安装与配置"}},[t._v("#")]),t._v(" Ubuntu 下 Gitlab 的安装与配置")]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 首先信任 GitLab 的 GPG 公钥")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" https://packages.gitlab.com/gpg.key "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),t._v(" /dev/null "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" apt-key "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" - "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&>")]),t._v("/dev/null\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 再选择你的 Debian/Ubuntu 版本，文本框中内容写进 /etc/apt/sources.list.d/gitlab-ce.list")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# deb https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/ubuntu xenial main")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装 gitlab-ce")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" gitlab-ce\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h2",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("p",[t._v("初次使用可能会要求修改external_url，"),a("code",[t._v("sudo vi /etc/gitlab/gitlab.rb")])]),t._v(" "),a("div",{staticClass:"language-ruby line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 外部地址与端口号")]),t._v("\nexternal_url "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://xxx.example.com:9004/'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果unicorn的默认端口（8080）被占用，还需要修改unicorn的配置（重要）")]),t._v("\nunicorn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'listen'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'localhost'")]),t._v("\nunicorn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'port'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9005")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("ul",[a("li",[t._v("修改完成后，要使配置生效："),a("code",[t._v("sudo gitlab-ctl reconfigure")]),t._v("，初次执行会非常慢")]),t._v(" "),a("li",[t._v("重启gitlab（非必要）："),a("code",[t._v("sudo gitlab-ctl restart")])]),t._v(" "),a("li",[t._v("查看状态："),a("code",[t._v("sudo gitlab-ctl status")])]),t._v(" "),a("li",[t._v("设置服务为开机启动："),a("code",[t._v("sudo systemctl enable gitlab-runsvdir.service")])])]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://mirror.tuna.tsinghua.edu.cn/help/gitlab-ce/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TUNA · Gitlab Community Edition 镜像使用帮助"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"替代品-gogs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#替代品-gogs"}},[t._v("#")]),t._v(" 替代品：Gogs")]),t._v(" "),a("p",[t._v("因为 Gitlab 过于重型，运行起来非常吃内存，我目前已弃坑换用 Gogs。")])])}),[],!1,null,null,null);s.default=e.exports}}]);