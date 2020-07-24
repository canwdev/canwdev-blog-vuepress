# git 笔记

## 初始化Git

```sh
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com

# 设置项目级别的用户名：
git config user.name "John Doe"

# 设置大小写敏感
git config  --global core.ignorecase false

# 忽略证书错误
git config --global http.sslVerify false
```

## 为 git 设置代理

```sh
ALL_PROXY=socks5://127.0.0.1:8888
git clone https://github.com/some/one.git
```

```sh
git config --global http.proxy 'socks5://127.0.0.1:7891'
git config --global --unset http.proxy

# 或
git config --global http.proxy socks5h://127.0.0.1:1080
```

## 解决git pull/push每次都需要输入密码问题

```
git config --global credential.helper store
```

## 修改了GitHub/码云账号密码后，git操作提示 `remote: Incorrect username or password ( access token )` 的问题

```sh
# windows：控制面板删除凭据

# macOS
git credential-osxkeychain erase

# Linux
rm ~/.git-credentials
```

## git 子模块说明

- 克隆含子模块的仓库：`git clone --recursive git@gitee.com:xxx/my-project.git`
- 或者使用下面的三部操作：
    - `git clone --recursive git@gitee.com:xxx/my-project.git`
    - `git submodule init`
    - `git submodule update`
- 更新子模块：`git submodule update --remote my-submodule`



## git 分支操作

```sh
# 查看所有分支
git branch -a

# 当远程分支显示不正常时使用：
git fetch -p

# 创建分支并切换到
git checkout -b <分支名>

# 删除本地分支
git branch -d <分支名>

# 删除远程分支
git push origin --delete <分支名>

# 清理远程分支，把本地不存在的远程分支删除
git remote prune origin

# 推送所有分支到远程
git push origin '*:*'
git push origin --all

# 拉取远程所有分支
git fetch --all
git pull --all
```

## git 分支重命名

```sh
# 本地分支重命名
git branch -m old new

# 远程分支重命名

## 1. 删除远程分支
git push --delete origin 远程分支名(你要删除的远程分支名)
# 或 git push origin :远程分支名(你要删除的远程分支名)

## 2. 将本地分支推送到远程分支上，如果远程分支不存在，则创建此远程分支
git push origin 本地分支名:远程分支名
```

## git 撤销删除分支

1. `git reflog` 查看你上一次 commit SHA1值
2. `git branch 原分支名称 <sha1值>`

## git push tags

```sh
git tag -a V1.2 -m 'WebSite version 1.2'
# 或 git tag v1.0
# git tag
git push  --tags
```

## git 取消 merge

```sh
git merge --abort
```

## 根据邮箱批量修改git仓库历史提交用户名

参考：[StackOverflow](https://stackoverflow.com/a/30737248) | [Changing author info](https://help.github.com/en/github/using-git/changing-author-info)

```sh
#!/bin/sh

git filter-branch --env-filter '

OLD_EMAIL="your-old-email@example.com"
CORRECT_NAME="Your Correct Name"
CORRECT_EMAIL="your-correct-email@example.com"

if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_COMMITTER_NAME="$CORRECT_NAME"
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_AUTHOR_NAME="$CORRECT_NAME"
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags
```

强制推送到远程仓库的所有分支：

```sh
git push --force --tags origin 'refs/heads/*'
```

强制推送选定的分支：

```sh
git push --force --tags origin 'refs/heads/develop'
```

## 关于强制推送

千万不要在公用git仓库 push --force！否则，修改的内容被其他任何人或者CI拉下来后必定会有冲突，这时候就麻烦大了。还好 GitLab 有保护功能，避免了这次灾难。
