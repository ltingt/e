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
    <div class="headBottom">
      <ul >
        <li class="headBottom_item" v-for="(ls,index) in linkshare.menus" :key="index">
          <span>
            <p>{{ls.menu_name}}</p>
            <i class="rels"></i>
          </span>
      </li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      scrollY: 0
    }
  },
  computed: {
    ...mapState(['linkshare'])
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
  @import "../../../common/stylus/mixins.styl"
  .headerContent
    position fixed
    background #ffffff
    z-index 100
    left 0
    right 0
    top 0
    width 100%
    height 86px
    .headTop
      height 51px
      .headTop_item
        float left
        margin 13px 5px
        .headTop_item_search
          position relative
          margin auto
          input
            height 25px
            /*border-radius 5px*/
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

</style>
