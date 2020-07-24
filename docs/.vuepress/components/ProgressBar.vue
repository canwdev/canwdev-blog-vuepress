<template>
  <div class="progress-bar-wrap">
    <h2>完成进度</h2>
    <div class="progress-bar">
      <span class="progress" :style="`width: ${percent}%`">
        <span class="progress-text">{{progressText}}</span>
      </span>

    </div>

  </div>
</template>

<script>
  export default {
    props: {
      completedClass: {
        type: String,
        default: '.theme-default-content>ul>li'
      },
      maxNumber: {
        type: Number,
        default: null
      },
      testRegStr: {
        type: String,
        default: "^(✅|🌎)"
      },
      debug: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        percent: 0,
        progressText: 'error'
      }
    },
    mounted() {
      this.calcComplete()
    },
    methods: {
      calcComplete() {
        let li = document.querySelectorAll(this.completedClass)
        let list = Array.from(li)

        let length = this.maxNumber || list.length
        let count = 0
        list.forEach((item) => {
          if (new RegExp(this.testRegStr).test(item.innerText)) {
            if (this.debug) {
              item.style.background = 'red'
            }
            count++
          }
        })

        let percent = parseInt(count / length * 100)
        this.percent = percent
        this.progressText = percent + '% (' + count + '/' + length + ')'
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .progress-bar {
    width: 100%;
    height: 20px;
    background: #fff;
    box-shadow: inset 0 -1px 6px rgba(0, 0, 0, 0.3);
    margin 10px auto
    border-radius 20px
    overflow: hidden;
    display flex
    align-items center
    padding 2px 5px
    box-sizing border-box


    .progress {
      display inline-block
      height 12px
      border-radius 12px
      // background $accentColor
      background-color: #f1a165;
      background-image: -webkit-linear-gradient(#f1a165, #f36d0a);
      transition width 1s
      position: relative;
      width: 0

      .progress-text {
        position: absolute;
        top: -1px
        left: 0
        right: 0
        bottom: 0
        text-align: center;
        font-size: 12px
        line-height: 1
        color #fff
        min-width 126px
        text-shadow: 0px 1px 2px #000;
      }
    }

  }
</style>
