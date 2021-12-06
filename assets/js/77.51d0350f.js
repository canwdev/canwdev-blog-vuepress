(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{721:function(e,t,r){"use strict";r.r(t);var o=r(35),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"手动修改-windows-网络类型公用为专用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#手动修改-windows-网络类型公用为专用"}},[e._v("#")]),e._v(" 手动修改 Windows 网络类型公用为专用")]),e._v(" "),r("p",[e._v("打开网络和共享中心（Win+R 运行："),r("code",[e._v("control.exe /name Microsoft.NetworkAndSharingCenter")]),e._v("），可以看到有的网络是公用网络，并且不能直接在界面上修改为专用网络，此时可以使用以下几种方式修改。")]),e._v(" "),r("h2",{attrs:{id:"方案一-注册表"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#方案一-注册表"}},[e._v("#")]),e._v(" 方案一：注册表")]),e._v(" "),r("ol",[r("li",[e._v("Win+R 输入 "),r("code",[e._v("regedit")]),e._v(" 打开注册表")]),e._v(" "),r("li",[e._v("定位到路径："),r("code",[e._v("HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\NetworkList\\Profiles")])]),e._v(" "),r("li",[e._v("在左侧列表，展开 "),r("code",[e._v("Profiles")]),e._v(" 键")]),e._v(" "),r("li",[e._v("选择一个子键，比如 "),r("code",[e._v("{97052A54-7C18-4574-8E0D-612EA5E17AD6}")]),e._v("，可以在右侧面板看到 "),r("code",[e._v("ProfileName")]),e._v(" 这就是在控制面板里看到的网络名称")]),e._v(" "),r("li",[e._v("修改 "),r("code",[e._v("Category")]),e._v(" 的 DWORD 值，如果要改成专用网络，把 0 改成 1就行了")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("Category 值的参考：\nPublic: 0 \nPrivate: 1 \nDomain: 2\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br")])]),r("h2",{attrs:{id:"方案二-powershell"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#方案二-powershell"}},[e._v("#")]),e._v(" 方案二：PowerShell")]),e._v(" "),r("ol",[r("li",[e._v("右键 Windows 菜单，以管理员权限打开 PowerShell")]),e._v(" "),r("li",[e._v("执行 "),r("code",[e._v("Get-NetConnectionProfile")]),e._v("，列出所有网络")]),e._v(" "),r("li",[e._v("执行 "),r("code",[e._v('Set-NetConnectionProfile -Name "Network 2" -NetworkCategory Private')]),e._v("，将网络名为 "),r("code",[e._v("Network 2")]),e._v(" 的设置为专用网络")])]),e._v(" "),r("hr"),e._v(" "),r("p",[e._v("参考："),r("a",{attrs:{href:"https://www.alphr.com/how-to-change-a-wi-fi-network-from-public-to-private-in-windows-10/",target:"_blank",rel:"noopener noreferrer"}},[e._v("How To Change A Wi-Fi Network From Public To Private In Windows 10"),r("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);