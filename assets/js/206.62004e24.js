(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{796:function(t,s,a){"use strict";a.r(s);var e=a(56),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git-笔记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-笔记"}},[t._v("#")]),t._v(" git 笔记")]),t._v(" "),a("h2",{attrs:{id:"初始化git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化git"}},[t._v("#")]),t._v(" 初始化Git")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"John Doe"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email johndoe@example.com\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置项目级别的用户名：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"John Doe"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置大小写敏感")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config  --global core.ignorecase "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 忽略证书错误")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global http.sslVerify "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n")])])]),a("h2",{attrs:{id:"git-设置代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-设置代理"}},[t._v("#")]),t._v(" git 设置代理")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ALL_PROXY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("socks5://127.0.0.1:8888\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/some/one.git\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global http.proxy "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'socks5://127.0.0.1:7891'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global --unset http.proxy\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global http.proxy socks5h://127.0.0.1:1080\n")])])]),a("h2",{attrs:{id:"解决git-pull-push每次都需要输入密码问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决git-pull-push每次都需要输入密码问题"}},[t._v("#")]),t._v(" 解决git pull/push每次都需要输入密码问题")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git config --global credential.helper store\n")])])]),a("h2",{attrs:{id:"修改了github-码云账号密码后-git操作提示-remote-incorrect-username-or-password-access-token-的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改了github-码云账号密码后-git操作提示-remote-incorrect-username-or-password-access-token-的问题"}},[t._v("#")]),t._v(" 修改了GitHub/码云账号密码后，git操作提示 "),a("code",[t._v("remote: Incorrect username or password ( access token )")]),t._v(" 的问题")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# windows：控制面板删除凭据")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# macOS")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" credential-osxkeychain erase\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Linux")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" ~/.git-credentials\n")])])]),a("h2",{attrs:{id:"git-子模块说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-子模块说明"}},[t._v("#")]),t._v(" git 子模块说明")]),t._v(" "),a("ul",[a("li",[t._v("克隆含子模块的仓库："),a("code",[t._v("git clone --recursive git@gitee.com:xxx/my-project.git")])]),t._v(" "),a("li",[t._v("或者使用下面的三部操作：\n"),a("ul",[a("li",[a("code",[t._v("git clone --recursive git@gitee.com:xxx/my-project.git")])]),t._v(" "),a("li",[a("code",[t._v("git submodule init")])]),t._v(" "),a("li",[a("code",[t._v("git submodule update")])])])]),t._v(" "),a("li",[t._v("更新子模块："),a("code",[t._v("git submodule update --remote my-submodule")])])]),t._v(" "),a("h2",{attrs:{id:"git-分支操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-分支操作"}},[t._v("#")]),t._v(" git 分支操作")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看所有分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -a\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当远程分支显示不正常时使用：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch -p\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建分支并切换到")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("分支名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除本地分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -d "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("分支名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除远程分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin --delete "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("分支名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 清理远程分支，把本地不存在的远程分支删除")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote prune origin\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送所有分支到远程")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*:*'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin --all\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拉取远程所有分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch --all\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull --all\n")])])]),a("h2",{attrs:{id:"git-分支重命名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-分支重命名"}},[t._v("#")]),t._v(" git 分支重命名")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 本地分支重命名")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -m old new\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 远程分支重命名")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 1. 删除远程分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push --delete origin 远程分支名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("你要删除的远程分支名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或 git push origin :远程分支名(你要删除的远程分支名)")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 2. 将本地分支推送到远程分支上，如果远程分支不存在，则创建此远程分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin 本地分支名:远程分支名\n")])])]),a("h2",{attrs:{id:"git-撤销删除分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-撤销删除分支"}},[t._v("#")]),t._v(" git 撤销删除分支")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("git reflog")]),t._v(" 查看你上一次 commit SHA1值")]),t._v(" "),a("li",[a("code",[t._v("git branch 原分支名称 <sha1值>")])])]),t._v(" "),a("h2",{attrs:{id:"git-push-tags"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-push-tags"}},[t._v("#")]),t._v(" git push tags")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag -a V1.2 -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'WebSite version 1.2'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或 git tag v1.0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git tag")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push  --tags\n")])])]),a("h2",{attrs:{id:"git-取消-merge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-取消-merge"}},[t._v("#")]),t._v(" git 取消 merge")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge --abort\n")])])]),a("h2",{attrs:{id:"根据邮箱批量修改git仓库历史提交用户名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#根据邮箱批量修改git仓库历史提交用户名"}},[t._v("#")]),t._v(" 根据邮箱批量修改git仓库历史提交用户名")]),t._v(" "),a("p",[t._v("参考："),a("a",{attrs:{href:"https://stackoverflow.com/a/30737248",target:"_blank",rel:"noopener noreferrer"}},[t._v("StackOverflow"),a("OutboundLink")],1),t._v(" | "),a("a",{attrs:{href:"https://help.github.com/en/github/using-git/changing-author-info",target:"_blank",rel:"noopener noreferrer"}},[t._v("Changing author info"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/sh")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" filter-branch --env-filter "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'\n\nOLD_EMAIL="your-old-email@example.com"\nCORRECT_NAME="Your Correct Name"\nCORRECT_EMAIL="your-correct-email@example.com"\n\nif [ "'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$GIT_COMMITTER_EMAIL")]),t._v('" = "'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$OLD_EMAIL")]),t._v('" ]\nthen\n    export GIT_COMMITTER_NAME="'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$CORRECT_NAME")]),t._v('"\n    export GIT_COMMITTER_EMAIL="'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$CORRECT_EMAIL")]),t._v('"\nfi\nif [ "'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$GIT_AUTHOR_EMAIL")]),t._v('" = "'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$OLD_EMAIL")]),t._v('" ]\nthen\n    export GIT_AUTHOR_NAME="'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$CORRECT_NAME")]),t._v('"\n    export GIT_AUTHOR_EMAIL="'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$CORRECT_EMAIL")]),t._v("\"\nfi\n'")]),t._v(" --tag-name-filter "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" -- --branches --tags\n")])])]),a("p",[t._v("强制推送到远程仓库的所有分支：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push --force --tags origin "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'refs/heads/*'")]),t._v("\n")])])]),a("p",[t._v("强制推送选定的分支：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push --force --tags origin "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'refs/heads/develop'")]),t._v("\n")])])]),a("h2",{attrs:{id:"关于强制推送"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于强制推送"}},[t._v("#")]),t._v(" 关于强制推送")]),t._v(" "),a("p",[t._v("千万不要在公用git仓库 push --force！否则，修改的内容被其他任何人或者CI拉下来后必定会有冲突，这时候就麻烦大了。还好 GitLab 有保护功能，避免了这次灾难。")])])}),[],!1,null,null,null);s.default=n.exports}}]);