---
title: 实现发布订阅模式
date: 2021-06-19 22:36:35
permalink: /pages/4aa0da/
categories: 
  - notes
  - hand-write-js
article: true
tags: 
  - 
---
## 实现发布订阅模式

 ```js
 class EventEmitter {
     constructor() {
         this.events = []
     }
     
     on(name, fn) {
         if (this.events[name]) {
             this.events[name].push(fn)
         } else {
             this.events[name] = [fn]
         }
     }
     
     once(name, fn) {
         const onceFn = (data) => {
             fn(data)
             this.off(name, onceFn)
         }
         this.on(name, onceFn)
     }
     
     emit(name, data) {
         (this.events[name] || []).forEach(fn => fn(data))
     }
     
     off(name, fn) {
         const fns = this.events[name]
         if (!fns) {
             return
         }
         if (fn) {
             const index = fns.findIndex(f => f === fn)
             if (index > -1) {
                 fns.splice(index, 1)
             }
         } else {
             delete this.events[name]
         }
     }
 }
 ```

测试

```js
var em = new EventEmitter()

function test(data) {
    console.log('test', data)
}

em.on('onTest', test)
// em.once('onTest', test)

em.emit('onTest', {a: 1})

em.off('onTest', test)

em.emit('onTest', {a: 2})
```



