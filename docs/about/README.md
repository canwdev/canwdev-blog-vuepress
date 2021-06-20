---
title: 关于
date: 2019-12-25 14:27:01
permalink: /about
sidebar: false
article: false
---


### 技能

专业维修核潜艇，核弹头翻新，改装，抛光，喷漆，回收二手航母，大修核反应堆，清洗航母油槽航天飞机保养换三滤，高空作业擦洗卫星表面除尘星球设计，全球海洋保养及维护，南极冰川修复地球形状改造及时空穿越业务，批发歼10，F22 F35 B2轰炸机，各类核弹头。

量大从优！有发票！

## :email: 联系

- WeChat or QQ: <a :href="qqUrl" class='qq'>#</a>
- Email:  <a href="mailto:#@qq.com">#@qq.com</a>
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
