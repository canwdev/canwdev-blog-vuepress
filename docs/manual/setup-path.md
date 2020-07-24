# 环境变量设置

## Linux 环境变量设置

假设想添加的环境变量路径为：`/opt/my-tools/android-sdk/tools`

1. 进入用户的根目录，`cd $HOME` 或 `cd ~`

2. 打开`~/.bashrc`若不存在则新建`.bashrc`文件，`vim .bashrc`

3. 在 `.bashrc 最后面加上想要加的路径（shift+G 跳转到最后一行）

   ```
   export PATH=$PATH:/opt/my-tools/android-sdk/tools
   ```

4. 最后执行 `source ~/.bashrc` 立即生效



## Windows 环境变量设置

`Win+X` 点击 `系统(Y)`（Win10 之前的系统右键计算机点击属性），再点击 `高级系统设置`，点击 `环境变量` 编辑系统变量 `Path` 并保存，依次关闭窗口，重新 运行 cmd、重启 `explorer.exe` 或重启电脑生效。

如果没有生效，在 cmd 中运行 `echo %PATH%` 查看变量中是否有乱码。

可以直接在 cmd 中使用 `set` 命令，如`set PATH=C:` 来建立临时变量。