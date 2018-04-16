<template>
  <div class="headerContent">
    <div class="headTop">
      <div class="headTop_item">
        <span>狗狗</span>
        <span>|</span>
        <span>重庆</span>
        <span>
          <i class="iconfont icon-xiala"/>
        </span>
        </div>
      <div class="headTop_item">
        <div class="headTop_item_search">
          <input type="search" placeholder="搜索商品和品牌">
          <i class="iconfont icon-sousuo"/>
        </div>
      </div>
      <div class="headTop_item">
        <span>
          <i class="iconfont icon-xiaoxi"/>
        </span>
      </div>
    </div>
    <div class="headBottom" ref="wa">
      <ul>
        <li class="headBottom_item">
          <span>
            <p>首页</p>
            <i class="rels"></i>
          </span>
        </li>
        <li class="headBottom_item">
        <span>
          <p>狗狗主粮</p>
        </span>
        </li>
        <li class="headBottom_item">
        <span>
          <p>零食</p>
        </span>
        </li>
        <li class="headBottom_item">
        <span>
          <p>医疗保健</p>
        </span>
        </li>
        <li class="headBottom_item">
        <span>
          <p>玩具</p>
        </span>
        </li>
        <li class="headBottom_item">
        <span>
          <p>外出</p>
        </span>
        </li>
        <li class="headBottom_item">
        <span>
          <p>服饰城</p>
        </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      scrollY: 0
    }
  },
  mounted () {
    this.$nextTick(() => {
      new BScroll('.headBottom', {
        scrollX: true,
        click: true
      })
    })
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .headerContent
    position fixed
    z-index 100
    left 0
    right 0
    top 0
    width 100%
    height 86px
    .headTop
      height 51px
      background #ffffff
      .headTop_item
        float left
        margin 13px 5px
        .headTop_item_search
          position relative
          margin auto
          input
            height 25px
            border-radius 5px
            background #eee
          .iconfont
            z-index 10
            font-size 18px
            position absolute
            left 170px
            top 5px
        span
          font-size 16px
          left 5px
          color #898989
          .iconfont
            font-size 24px
    .headBottom
      height 36px
      background pink
      display flex
      white-space nowrap
      .headBottom_item
        position relative
        display inline-block
        span
          display inline-block
          width 74px
          text-align center
          color #459d36
          margin 10px 0
          font-size 16px
        .rels
           display block
           border 1px solid #459d36
           width 50%
           margin-left  18px
           margin-top 7px
         /* position absolute*/
         /* bottom 1px*/

         /* width 10px
          height 10px
          background red*/
</style>
