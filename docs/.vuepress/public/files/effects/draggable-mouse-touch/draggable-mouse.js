function setDraggableMouse(el, dragTargetEl) {
  var docEl = document.documentElement;
  var deltaX = 0;
  var deltaY = 0;

  function start(event) {
    deltaX = event.clientX - dragTargetEl.getBoundingClientRect().left;
    deltaY = event.clientY - dragTargetEl.getBoundingClientRect().top;

    docEl.addEventListener('mousemove', move);
    docEl.addEventListener('mouseup', stop);

    // 防止拖动图片
    return false;
  }

  function move(event) {
    var x = event.clientX - deltaX;
    var y = event.clientY - deltaY;

    var docWidth = docEl.clientWidth - dragTargetEl.clientWidth;
    var docHeight = docEl.clientHeight - dragTargetEl.clientHeight;

    dragTargetEl.style.left = Math.min(docWidth, Math.max(0, x)) + 'px';
    dragTargetEl.style.top =Math.min(docHeight, Math.max(0, y)) + 'px';
    // dragTargetEl.style.opacity = '0.8';

    // return false;
  }

  function stop() {
    docEl.removeEventListener('mousemove', move);
    docEl.removeEventListener('mouseup', stop);

    // dragTargetEl.style.opacity = '1';
  }

  el.addEventListener('mousedown', start);

}
