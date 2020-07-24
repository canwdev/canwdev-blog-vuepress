# 自定义 Ubuntu/LinuxMint 分辨率

- 原文 [How to Set A Custom Screen Resolution in Ubuntu Desktop](http://ubuntuhandbook.org/index.php/2017/04/custom-screen-resolution-ubuntu-desktop/)

1. 打开终端，输入 `xrandr`，会输出当前屏幕信息，我们只需要设备名称，我的是 `eDP-1`
    ```sh
    $ xrandr
    Screen 0: minimum 320 x 200, current 900 x 904, maximum 8192 x 8192
    eDP-1 connected primary 900x904+0+0 left (normal left inverted right x axis y axis) 290mm x 180mm
       1440x900      60.00 +  59.89  
       1400x900      59.96    59.88  
       1440x810      60.00    59.97  
       1368x768      59.88    59.85  
       1360x768      59.80    59.96  
       1280x800      59.99    59.97    59.81    59.91  
       1152x864      60.00  
       1280x720      60.00    59.99    59.86    59.74  
    ```
2. 输入 `cvt 900 900` 命令，计算 VESA CVT 模式分辨率
    ```sh
    $ cvt 900 900
    # 904x900 59.96 Hz (CVT) hsync: 56.00 kHz; pclk: 66.75 MHz
    Modeline "904x900_60.00"   66.75  904 960 1048 1192  900 903 913 934 -hsync +vsync
    ```
   复制 `"904x900_60.00"   66.75  904 960 1048 1192  900 903 913 934 -hsync +vsync`，接下来的命令会用到
3. 输入 `sudo xrandr --newmode "1600x900_60.00"  118.25  1600 1696 1856 2112  900 903 908 934 -hsync +vsync`，这将增加一个模式
4. 输入 `sudo xrandr --addmode eDP-1 "1600x900_60.00"`，这将增加一个分辨率，并且在设置中可以选择并应用。

---

重要信息：为了使Ubuntu在下次启动时记住新创建的屏幕分辨率，您必须编辑 `gedit ~/.profile`

添加最后两个命令到文件底部：
```
...

xrandr --newmode "904x900_60.00"   66.75  904 960 1048 1192  900 903 913 934 -hsync +vsync
xrandr --addmode eDP-1 "904x900_60.00"
```
