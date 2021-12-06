(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{653:function(s,e,t){s.exports=t.p+"assets/img/powershell-theme.7c30321a.png"},762:function(s,e,t){"use strict";t.r(e);var a=t(35),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[s._v("#")]),s._v(" Windows")]),s._v(" "),a("h2",{attrs:{id:"win-r-常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#win-r-常用命令"}},[s._v("#")]),s._v(" Win+R 常用命令")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("control")]),s._v(" 控制面板")]),s._v(" "),a("li",[a("code",[s._v("regedit")]),s._v(" 注册表编辑器")]),s._v(" "),a("li",[a("code",[s._v("eventvwr")]),s._v(" 事件查看器")]),s._v(" "),a("li",[a("code",[s._v("mmc")]),s._v(" Microsoft 管理控制台")]),s._v(" "),a("li",[a("code",[s._v("gpedit.msc")]),s._v(" 组策略")]),s._v(" "),a("li",[a("code",[s._v("devmgmt.msc")]),s._v(" 设备管理器")]),s._v(" "),a("li",[a("code",[s._v("diskmgmt.msc")]),s._v(" 磁盘管理")]),s._v(" "),a("li",[a("code",[s._v("services.msc")]),s._v(" 服务")]),s._v(" "),a("li",[a("code",[s._v("certmgr.msc")]),s._v(" 证书")]),s._v(" "),a("li",[a("code",[s._v("taskschd.msc")]),s._v(" 计划任务程序")]),s._v(" "),a("li",[a("code",[s._v("wf.msc")]),s._v(" 高级安全 Windows 防火墙")]),s._v(" "),a("li",[a("code",[s._v("%windir%\\explorer.exe shell:::{4234d49b-0245-4df3-b780-3893943456e1}")]),s._v(" 打开 Applications 目录")])]),s._v(" "),a("h2",{attrs:{id:"windows-在-powershell-安装-oh-my-posh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-在-powershell-安装-oh-my-posh"}},[s._v("#")]),s._v(" Windows 在 Powershell 安装 oh-my-posh")]),s._v(" "),a("blockquote",[a("p",[s._v("参考: https://blog.walterlv.com/post/beautify-powershell-like-zsh.html")])]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Install-Module")]),s._v(" posh"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("git "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Scope CurrentUser\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Install-Module")]),s._v(" oh"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("my"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("posh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Scope CurrentUser\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Import-Module")]),s._v(" oh"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("my"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("posh\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果执行出错：因为在此系统上禁止运行脚本，请使用管理权限运行命令：set-executionpolicy remotesigned")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Import-Module")]),s._v(" oh"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("my"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("posh\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Set-Theme")]),s._v(" Agnoster\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输入 $profile 查看默认配置文件地址，编辑默认配置文件，输入上面2行即可每次自动加载配置")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[a("img",{attrs:{src:t(653),alt:"themes"}})]),s._v(" "),a("h2",{attrs:{id:"无法加载文件-xxx-ps1-因为在此系统上禁止运行脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#无法加载文件-xxx-ps1-因为在此系统上禁止运行脚本"}},[s._v("#")]),s._v(" 无法加载文件 xxx.ps1，因为在此系统上禁止运行脚本")]),s._v(" "),a("p",[s._v("使用管理权限运行命令："),a("code",[s._v("set-executionpolicy remotesigned")])]),s._v(" "),a("h2",{attrs:{id:"win10如何删除壁纸历史记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#win10如何删除壁纸历史记录"}},[s._v("#")]),s._v(" Win10如何删除壁纸历史记录")]),s._v(" "),a("p",[s._v("运行 regedit，定位到 "),a("code",[s._v("计算机\\HKEY_CURRENT_USER\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Wallpapers")]),s._v("，里面有类似 "),a("code",[s._v("BackgroundHistoryPath")]),s._v(" 这样的条目，可以直接删除。")]),s._v(" "),a("h2",{attrs:{id:"一条命令关闭-windows-显示器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一条命令关闭-windows-显示器"}},[s._v("#")]),s._v(" 一条命令关闭 Windows 显示器")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("PowerShell "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("windowstyle hidden "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("command "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"(Add-Type -MemberDefinition "')]),s._v("\\"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[DllImport(\\"')]),s._v("\\"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user32.dll\\"')]),s._v("\\"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('")]`npublic static extern int SendMessage(int hWnd, int hMsg, int wParam, int lParam);"')]),s._v("\\"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" -Name \\"')]),s._v("Win32SendMessage\\"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" -Namespace Win32Functions -PassThru)::SendMessage(0xffff, 0x0112, 0xF170, 2)"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"win10-离线安装-net-framework-3-5-需要系统光盘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#win10-离线安装-net-framework-3-5-需要系统光盘"}},[s._v("#")]),s._v(" Win10 离线安装 .NET Framework 3.5（需要系统光盘）")]),s._v(" "),a("p",[s._v("选择和当前系统版本相同的原版 iso 系统光盘，右键“装载”，会有一个DVD驱动器，记住盘符，比如 "),a("code",[s._v("L:")])]),s._v(" "),a("p",[s._v("以管理员权限运行 PowerShell，输入如下命令（请确保盘符正确）即可自动安装。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("dism.exe /online /enable-feature /featurename:netfx3 /Source:L:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("sources"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("sxs\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("PS C:\\Windows\\system32> dism.exe /online /enable-feature /featurename:netfx3 /Source:G:\\sources\\sxs\n\n部署映像服务和管理工具\n版本: 10.0.17763.1\n\n映像版本: 10.0.17763.316\n\n启用一个或多个功能\n[==========================100.0%==========================]\n操作成功完成。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"windows-递归修改文件夹权限为everyone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-递归修改文件夹权限为everyone"}},[s._v("#")]),s._v(" Windows 递归修改文件夹权限为Everyone")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("icacls "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"D:\\CodeArchive"')]),s._v(" /grant Everyone:M /t\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"解决win10-1803及以后版本的蓝牙音量-绝对音量-问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决win10-1803及以后版本的蓝牙音量-绝对音量-问题"}},[s._v("#")]),s._v(" 解决WIN10 1803及以后版本的蓝牙音量（绝对音量）问题")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1、win+r，输入regedit，打开注册表\n2、进入路径：计算机\\HKEY_LOCAL_MACHINE\\SYSTEM\\ControlSet001\\Control\\Bluetooth\\Audio\\AVRCP\\CT\n3、找到DisableAbsoluteVolume值，修改为1，如果没有，右键新建DWORD32位，建立对应值。\n4、重启。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);