(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{624:function(e,t,r){"use strict";r.r(t);var s=r(56),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"免费-ssl-证书生成与配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#免费-ssl-证书生成与配置"}},[e._v("#")]),e._v(" 免费 SSL 证书生成与配置")]),e._v(" "),r("h2",{attrs:{id:"免费生成证书的网站"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#免费生成证书的网站"}},[e._v("#")]),e._v(" 免费生成证书的网站")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://freessl.cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("FreeSSL.cn"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.sslforfree.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSL For Free"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://letsencrypt.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Let's Encrypt"),r("OutboundLink")],1),e._v(" "),r("ul",[r("li",[e._v("上面两个都有基于 Let's Encrypt 生成的证书，不过可以更方便的生成")]),e._v(" "),r("li",[e._v("Let's Encrypt 配置稍有复杂，可以通过 "),r("a",{attrs:{href:"https://github.com/acmesh-official/acme.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("acme.sh"),r("OutboundLink")],1),e._v(" 配置")])])])]),e._v(" "),r("h2",{attrs:{id:"证书转换"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#证书转换"}},[e._v("#")]),e._v(" 证书转换")]),e._v(" "),r("p",[e._v("pem转"),r("strong",[e._v("crt")]),e._v("格式（用于NGINX服务）")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[e._v("openssl x509 -in full_chain.pem -out certificate.crt  \n")])])]),r("p",[e._v("pem转key格式")]),e._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[e._v("openssl rsa -in privkey.pem -out privkey.key  \n")])])]),r("p",[e._v("将证书与密钥（key）合并为"),r("strong",[e._v("p12")]),e._v("文件（用于远程桌面连接）")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[e._v("openssl pkcs12 -export -clcerts -in full_chain.pem -inkey private.key -out certificate.p12\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);