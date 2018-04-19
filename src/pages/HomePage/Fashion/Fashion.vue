<template>
  <div class="img2">
    <div class="imgMain">
      <div class="img2-img">
        <a>
          <img :src="initialValue.value[0].cover.image">
        </a>
      </div>
      <div class="img2-font">
        <span>
          <i class="iconfont icon-ai03"/>
        </span>
      </div>
    </div>
    <div class="img2-content">
      <div class="textover">{{initialValue.value[0].title}}</div>
      <span>
            <i class="iconfont icon-yanjing"/>
          </span>
      <span>{{initialValue.value[0].visit}}</span>
      <span>|</span>
      <span>{{initialValue.value[0].time}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: ['initialValue']
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .img2
    width 100%
    height 268px
    text-align center
    /*.img2Main
      position relative*/
    .imgMain
      position relative
      .img2-img a img
        width 100%
      .img2-font
        position absolute
        top 50%
        left 50%
        width 20px
        height 20px
        margin-left -10px
        margin-top -10px
        span
          .iconfont
            font-size 40px
      .img2-img img
        width 100%
        height 210px
        margin-bottom 10px
        span
          position absolute
      .img2-content .textover
        margin-bottom 10px
        text-align center
        font-size 12px
        color #7e8c8d
      span
        font-size 12px
        color #7e8c8d
    .img2-content .textover
      margin-bottom 10px
      text-align center
      font-size 12px
      color #7e8c8d
    span
      font-size 12px
      color #7e8c8d
</style>
