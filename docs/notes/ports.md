# 端口占用查询

## Linux

- 查看端口号对应的进程PID/名称：`netstat -ntpl`
- 查看 nginx 监听的端口：`netstat -nlp | grep nginx`
- 根据PID查看进程的目录，例如进程号为2430：`ll /proc/2430/exe`

## Windows 端口占用查询

1. 查看 1080 端口的占用情况：`netstat -aon|findstr "1080"`
2. 根据 PID 找到应用程序：`tasklist|findstr "9820"`