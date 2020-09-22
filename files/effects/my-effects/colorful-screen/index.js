/*runColor函数的全局变量——开始*/

var colorPreset = ['#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4',
    '#00BCD4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722',
    /*'#795548','#9E9E9E','#607D8B'*/];
var cur = 0;            // 当前指向颜色数组的下标
var transit = 3000;     // 颜色过渡时间间隔
var running = false;    // 是否setInterval执行中

/*runColor函数的全局变量——结束*/

// HTML 5 Web 存储 localStorage 方法
if (typeof(Storage) !== "undefined") {
    if (localStorage.colorPreset) {
        colorPreset = localStorage.colorPreset.split(',');
    }
    if (localStorage.transit) transit = localStorage.transit;
} else {
    alert('抱歉！您的浏览器不支持 Web Storage ...');
}

// 暂停与继续按钮
$('#btn-switch').click(
    function () {
        if (!running) {
            runColor();
        } else {
            stopColor();
        }
    }
);

// 白/黑按钮
$('#btn-bw').toggle(
    function () {
        stopColor();
        $('html').stop().css({'background-color': '#fff'});
    },
    function () {
        stopColor();
        $('html').stop().css({'background-color': '#000'});
    }
);

// 全屏按钮
$('#btn-fullscr').click(function () {
    if (screenfull.enabled) {
        // 仅仅只进行全屏而不退出全屏可以调用
        // screenfull.request() 方法。
        screenfull.toggle();
    } else {
        // Ignore or do something else
    }
});

// 自定义颜色
$('#btn-custom-color').click(function () {
    var str = prompt('输入由颜色组成的数组', colorPreset.toString());
    if (str !== null) {
        colorPreset = str.replace(/\s/g, "").split(',');
        resetColor();

        localStorage.colorPreset = colorPreset;
    }
});

// 自定义速度
$('#btn-custom-speed').click(function () {
    var str = prompt('输入颜色过渡速度（毫秒）', transit);
    if (str !== null) {
        transit = str;
        resetColor();

        localStorage.transit = transit;
    }
});

function runColor() {

    var colors = colorPreset;

    // console.log(colors);

    $('html').animate({
        backgroundColor: colors[cur]
    }, transit);
    if (colors.length >= 2) {
        cur++;
    }
    runner = setInterval(
        function () {
            // console.log(colors[cur]);

            $('html').animate({
                backgroundColor: colors[cur]
            }, transit - 1);

            if (cur < colors.length - 1) {
                cur++;
            } else {
                cur = 0;
            }
        }, transit);

    running = true;
    $('#btn-switch').html('暂停');
}

function stopColor() {
    clearInterval(runner);
    running = false;
    $('#btn-switch').html('继续');
}

function resetColor() {
    stopColor();
    cur = 0;
    runColor();
}

runColor();

function hideBar() {
    hidding = setTimeout(
        function () {
            $('.ctrl-bar').animate({opacity: 0}, 500);
            $('html').css({'cursor': 'none'});
        }, 4000
    )
}

hideBar();

$(document).mousemove(function () {
    $('.ctrl-bar').css({
        'opacity': 100
    });
    $('html').css({'cursor': 'default'});
}).moveStopEvent(function () {
        clearTimeout(hidding)
        hideBar();
    }
);