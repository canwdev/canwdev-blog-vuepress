function setDraggableTouch(dragEl, callback) {
  var initX, initY, initXOffset, initYOffset;
  var isClick;  // 判断是点击还是拖动

  dragEl.addEventListener('touchstart', function (e) {
    e.preventDefault();
    isClick = true;

    initX = e.touches[0].clientX;
    initY = e.touches[0].clientY;

    initXOffset = initX - this.offsetLeft;
    initYOffset = initY - this.offsetTop;

    this.style.opacity = '0.5';
    // console.log('touchstart');
  })

  dragEl.addEventListener('touchmove', function (e) {
    var touchX = e.touches[0].clientX;
    var touchY = e.touches[0].clientY;
    var curX = touchX - initXOffset;
    var curY = touchY - initYOffset;

    // 限制出框
    var docWidth = document.documentElement.clientWidth - this.clientWidth
    var docHeight = document.documentElement.clientHeight - this.clientHeight
    curX = Math.min(docWidth, Math.max(0, curX));
    curY = Math.min(docHeight, Math.max(0, curY));

    // 忽略轻微移动
    var offsetX = Math.abs(touchX - initX)
    var offsetY = Math.abs(touchY - initY)
    // console.log(offsetX, offsetY)
    if (offsetX <= 1 || offsetY <= 1) {
    } else {
      isClick = false;
    }

    this.style.left = curX + 'px';
    this.style.top = curY + 'px';

    // console.log('touchmove');
  })

  dragEl.addEventListener('touchend', function (e) {
    this.style.opacity = '1'

    if (isClick) {
      // console.log('click!');
      callback(e)
    }
    // console.log('touchend');
  })
}
