---
title: 关于
date: 2019-12-25 14:27:01
permalink: /about
sidebar: false
article: false
---


### 技能

建设中...

## :email: 联系

- WeChat or QQ: <a :href="qqUrl" class='qq'>#</a>
- Email:  <a href="mailto:#@#.com">#@#.com</a>
- GitHub: <https://github.com/canwdev>


<script>
  export default {
    data(){
      return {
        qqUrl: 'tencent://message/?uin=#&Site=&Menu=yes'
      }
    },
    mounted(){
      const flag =  navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
      if(flag){
        this.qqUrl = 'mqqwpa://im/chat?chat_type=wpa&uin=#&version=1&src_type=web&web_src=oicqzone.com'
      }
    }
  }
</script>
