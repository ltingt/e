<template>
  <div class="carts">
    <div class="header">
      <div class="headerLeft">
        <a>
          <span >
            <i class="iconfont icon-huitui"></i>
          </span>
        </a>
      </div>
      <div class="headerContent">购物车</div>
      <div class="headerRight">
        <a>
          <span class="headerRight">
          <i class="iconfont icon-liebiao8"></i>
        </span>
        </a>
      </div>
    </div>
    <div class="cartBody">
      <div class="cartBodyHeader">
        <span>
          <i class="iconfont icon-unie62d"></i>
        </span>
      </div>
      <div class="cartBodyText">购物车是空的</div>
      <div class="cartBodyBottom">
        <a>
          <div></div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .carts
    display flex
    flex-direction column
    width 100%
    height 100%
    background #eee
    /*.header
      width 100%
      height 50px
      display flex
      flex-direction row
      background #fff
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
          margin-left 10px*/
    .cartBody
      width 100%
      height 295px
      .cartBodyHeader
        height 170px
        text-align center
        background #ffffff
        margin-top  1px
        .iconfont
          font-size 100px
          line-height 200px
          color #eee
      .cartBodyText
        height 20px
        text-align center
        background #ffffff
        color #eee
        font-size 16px

</style>
