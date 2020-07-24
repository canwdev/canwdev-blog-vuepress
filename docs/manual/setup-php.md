# PHP 的安装与配置

## 在 Ubuntu 下安装 php 配合 nginx 使用

php 需要配合 nginx 或 apache 才能使用，所以请完成前置条件：[Nginx 安装与配置](./setup-nginx.md)。

安装 php：

```sh
sudo apt install php7.3
sudo apt install php-fpm php-mysql
```

配置 nginx，编辑 `/etc/nginx/sites-available/default`，添加：

```
server {
        listen 3000;
        server_name localhost;
        root /usr/www/nextcloud; #①
        index index.php;

        location / {
                try_files $uri $uri/ =404;
        }

        location ~ \.php$ {
            fastcgi_pass unix:/run/php/php7.3-fpm.sock; #②
            include snippets/fastcgi-php.conf;
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        }

        location ~ /\.ht {
                deny all;
        }
}
```
有几个要注意的地方：
- ① 指定的网站根目录，应该有一个 `index.php` 文件
- ② php-fpm，根据你的本机环境自行替换

执行 `nginx -s reload` 重新加载配置文件，如果没有报错则成功。

测试是否成功：

在 `/usr/www/nextcloud` 创建一个 `index.php`，内容写上：

```php
<?php
phpinfo();
```

打开 `localhost:3000`，成功的话可以看到类似这样的内容：`PHP Version 7.3.11-0ubuntu0.19.10.4` 和 php的运行信息。

## 修改 php 配置文件

php 的配置一般在 `/etc/php/7.3/cli/php.ini`，获取权限后，使用文本编辑器编辑即可。

例如，可以搜索 `cgi.fix_pathinfo=` 将其值改为 `0` 并取消注释。

修改完成后，重启 php-fpm 服务来生效：`sudo systemctl restart php7.3-fpm.service`
