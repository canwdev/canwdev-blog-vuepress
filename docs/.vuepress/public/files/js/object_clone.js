// 浅拷贝
// https://juejin.im/post/5c20509bf265da611b585bec
if (typeof Object.assign2 != 'function') {
  Object.defineProperty(Object, "assign2", {
    value: function (target) {
      'use strict';

      if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }
      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) {
          for (var nextKey in nextSource) {
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
}