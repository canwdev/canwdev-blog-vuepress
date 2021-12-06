(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{749:function(a,s,t){"use strict";t.r(s);var n=t(35),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"minecraft-脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#minecraft-脚本"}},[a._v("#")]),a._v(" Minecraft 脚本")]),a._v(" "),t("h2",{attrs:{id:"启动-minecraft-服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动-minecraft-服务器"}},[a._v("#")]),a._v(" 启动 Minecraft 服务器")]),a._v(" "),t("p",[a._v("使用 "),t("code",[a._v("tmux")]),a._v(" 可以让服务在后台运行。")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# ArchLinux\nsudo pacman -S jre-openjdk\n\n# 普通启动\njava -jar ./minecraft_server.1.16.2.jar\n\n# 设置最大和最小内存用量\njava -Xmx5120M -Xms5120M -jar ./minecraft_server.1.16.2.jar nogui\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br")])]),t("p",[a._v("第一次启动需要同意 "),t("code",[a._v("eula.txt")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("eula=true\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[t("code",[a._v("server.properties")]),a._v(" 常用配置")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# 游戏难度\ndifficulty=hard\n# 改为false允许非正版玩家登录（登录失败无效的会话）\nonline-mode=false\n# 设为 -1 禁用 watchdog\nmax-tick-time=-1\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])]),t("h2",{attrs:{id:"服务器命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务器命令"}},[a._v("#")]),a._v(" 服务器命令")]),a._v(" "),t("p",[a._v("直接在运行 Minecraft 的服务器终端输入命令并回车即可执行。")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# 开启服主权限\nop <用户名>\ndeop <用户名>\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h2",{attrs:{id:"定期备份脚本-corntab"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#定期备份脚本-corntab"}},[a._v("#")]),a._v(" 定期备份脚本(corntab)")]),a._v(" "),t("p",[a._v("备份脚本 "),t("code",[a._v("backup.sh")])]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/bin/bash")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("mypath")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("dirname")]),a._v(" $0"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("myname")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("basename")]),a._v(" $0"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("FILE_PREFIX")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'minecraft-server-1.16.2-'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DATE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"+%Y%m%d"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DATE_WITH_TIME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"+%Y%m%d_%H%M%S"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$mypath")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("FILE_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${FILE_PREFIX}")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${DATE_WITH_TIME}")]),a._v('.tar.gz"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" Creating backup: "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$FILE_NAME")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" czf "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$FILE_NAME")]),a._v(" ./minecraft-server\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" -p _backup\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$FILE_NAME")]),a._v(" _backup\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" Done"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br")])]),t("p",[t("code",[a._v("corntab -e")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# 每周一和周五的凌晨 02:10 执行\n10 2 * * 1,5 /minecraft/backup.sh\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);