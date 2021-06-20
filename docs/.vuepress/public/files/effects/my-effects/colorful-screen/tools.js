// 判断鼠标静止插件
(function ($) {
    $.fn.moveStopEvent = function (callback) {
        return this.each(function () {
            var x = 0,
                y = 0,
                x1 = 0,
                y1 = 0,
                isRun = false,
                si,
                self = this;

            var sif = function () {
                si = setInterval(function () {
                    if (x == x1 && y == y1) {
                        clearInterval(si);
                        isRun = false;
                        callback && callback.call(self);
                    }
                    x = x1;
                    y = y1;
                }, 500);
            }

            $(this).mousemove(function (e) {
                x1 = e.pageX;
                y1 = e.pageY;
                !isRun && sif(), isRun = true;
            }).mouseout(function () {
                clearInterval(si);
                isRun = false;
            });
        });
    }
})(jQuery);