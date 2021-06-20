---
title: 推送到多个git仓库
date: 2021-01-01 22:36:35
permalink: /pages/cabc7a/
categories: 
  - manual
article: true
tags: 
  - 
---
# 推送到多个git仓库

## 简易方法

编辑项目中的 `.git/config` 文件，按如下配置

```ini
[core]
	repositoryformatversion = 0
	filemode = false
	bare = false
	logallrefupdates = true
	symlinks = false
	ignorecase = true
[remote "origin"]
	url = git@example.com:yourname/your_project.git
	fetch = +refs/heads/*:refs/remotes/origin/*
	pushurl = git@example.com:yourname/your_project.git
	pushurl = http://gogs.com/root/your_project.git
[remote "origin2"]
	url = http://gogs.com/root/your_project.git
	fetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
	remote = origin
	merge = refs/heads/master
[branch "dev"]
	remote = origin
	merge = refs/heads/dev
```

注意在 `[remote "origin"]` 中有两个（也可以更多） `pushurl` （仓库地址），然后在 `[branch "master"]` 中设置 `remote = origin`。通过这样的配置，以后直接执行 `git push` 就可以向多个仓库推送了。

## Pushing to Multiple Git Repos

> 原文：https://gist.github.com/rvl/c3f156e117e22a25f242

翻译by：canwdev

如果项目必须有多个git仓库（例如bitbucket和github），那么最好保持同步。

通常，这涉及将每个分支依次推送到每个存储库，但实际上git允许一次推送到多个存储库。

如果对运行这些命令时git的操作有疑问，只需
编辑 `.git/config`
([git-config(1)](https://www.kernel.org/pub/software/scm/git/docs/git-config.html))
看看它放在那里。

#### 远程（remote）

假设您的 git remote 设置如下：

    git remote add github git@github.com:muccg/my-project.git
    git remote add bb git@bitbucket.org:ccgmurdoch/my-project.git

`origin` remote 可能指向这些用户之一。

#### 远程推送URLs

要设置推送地址，请执行以下操作：

    git remote set-url --add --push origin git@github.com:muccg/my-project.git
    git remote set-url --add --push origin git@bitbucket.org:ccgmurdoch/my-project.git

它将改变 `remote.origin.pushurl` 配置条目。现在，推送将发送到这两个目的地，而不是 `fetch URL`。

通过运行以下命令进行检查：

    git remote show origin

#### 每个分支

分支机构可以从单独的 remote 中推拉。在极少数情况下，例如维护带有上游回购自定义项的fork时，这可能很有用。 假设你的分支默认是 `github`:

    git branch --set-upstream-to=github next_release

(这条命令会修改 `branch.next_release.remote`.)

然后，git 允许分支有多条 `branch.<name>.pushRemote` 记录。 你需要编辑 `.git/config` 去设置他们.

#### 拉取多个

您不能一次从多个 remote 中 pull，但可以从所有 remote 中 fetch：

    git fetch --all

注意 fetch 操作不会更新你当前的分支（这就是为什么 `git pull` 存在的原因），因此你必须 merge -- fast-forward 或使用其他方式

例如，这将合并不同步的 remote 分支：

    git merge github/next_release bb/next_release


### 参考
----------

-   [git-config(1)](https://www.kernel.org/pub/software/scm/git/docs/git-config.html)
-   [git-remote(1)](https://www.kernel.org/pub/software/scm/git/docs/git-remote.html)
-   [git-branch(1)](https://www.kernel.org/pub/software/scm/git/docs/git-branch.html)
