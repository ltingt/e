<template>
  <div class="secondHeader">
    <div class="headerTop">
      <div class="headerLeft">
        <a>
          <span @click="$router.back()">
            <i class="iconfont icon-huitui"></i>
          </span>
        </a>
      </div>
      <div class="headerContent">购物车</div>
      <div class="headerRight">
        <a>
          <span class="headerRight" @click="clickIcon()">
           <i class="iconfont icon-liebiao8"></i>
          </span>
        </a>
      </div>
    </div>
    <div class="headerBotter"  v-show="isShow">
      <div>
        <a>
        <span>
          <i class="iconfont icon-shouyedianpujishishangcheng"></i>
        </span>
          <span>首页</span>
        </a>
      </div>
      <div>
        <a>
        <span>
          <i class="iconfont icon-shangpinfenlei"></i>
        </span>
          <span>商品分类</span>
        </a>
      </div>
      <div>
        <a>
        <span>
          <i class="iconfont icon-unie62d"></i>
        </span>
          <span>购物车</span>
        </a>
      </div>
      <div>
        <a>
          <span>
            <i class="iconfont icon-chongwu"></i>
          </span>
          <span>我的e宠</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    clickIcon () {
      this.isShow = !this.isShow
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .secondHeader
    .headerTop
      width 100%
      height 50px
      display flex
      flex-direction row
      background #fff
      margin-bottom 5px
      .headerLeft
        width 10%
        height 100%
        .iconfont
          font-size 20px
          line-height 50px
          margin-left 10px
      .headerContent
         width 80%
         height 100%
         font-size 20px
         text-align center
         line-height 50px
      .headerRight
        width 10%
        height 100%
        .iconfont
          font-size 20px
          line-height 50px
          margin-left 10px
    .headerBotter
      height 68px
      width 100%
      display flex
      margin-top 5px
      background #fff
      div
        width 25%
        margin-top  10px
        a
          display flex
          flex-direction column
          text-align center
          span
            font-size 16px
            margin-top 5px
            .iconfont
              font-size 20px
              text-align center
</style>
