# Nextcloud 常见问题

## 如何进入 Docker 环境的 Nextcloud？

```sh
docker exec -it -u www-data nextcloud bash
```

附上我的 nextcloud 启动脚本：

```sh
docker run -d --restart=always \
--name nextcloud \
-p 3000:80 \
--link mysql:db \
-v $PWD/nextcloud:/var/www/html \
-e OVERWRITEPROTOCOL="https" \
nextcloud
```

## Nextcloud 如何在添加加密模块之前关闭加密？

参考：[Possible to disable server-side encryption option before adding encryption module?](https://www.reddit.com/r/NextCloud/comments/eafga7/possible_to_disable_serverside_encryption_option/)

使用以下命令：

```
occ encryption:decrypt-all
```

## 如何在命令行禁用 Nextcloud 应用？

参考：[How to remove apps from the terminal](https://help.nextcloud.com/t/how-to-remove-apps-from-the-terminal/63569)

```sh
cd /PATH/TO/NEXTCLOUD
# 查看应用列表
sudo -u www-data php occ app:list
# 禁用 NAME_OF_APP
sudo -u www-data php occ app:disable NAME_OF_APP
```