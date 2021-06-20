function initKeyframes(targetEl, getSource, maxCount, options) {
  var count = 0;
  var images = [];

  for (var i = 1; i <= maxCount; i++) {
    (function(i){
      var img = new Image();
      img.onload = function() {
        img.onload = null;
        count++;
        // 有可能图片加载有快有满慢，所以用角标存
        images[i-1] = img;
        if (count === maxCount) {
          runKeyFrames(images, targetEl, options);
        }
      }
      img.onerror = function() {
        console.log('img onerror')
      }
      img.src = getSource(i)
    })(i)
  }
}

function runKeyFrames(images, targetEl, options) {
  var keyFrames = new CanvasKeyFrames(targetEl, 'array', images, options)
  keyFrames.play()
}