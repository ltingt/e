<template>
    <div class="footernav" v-show="$route.meta.footerContent">
        <div class="foot_item" @click="goto('/homePage')" :class="{on: isCheck('/homePage')}">
          <span class="icon_item">
            <i class="iconfont icon-shouyedianpujishishangcheng"/>
          </span>
          <span >首页</span>
        </div>
        <div class="foot_item" @click="goto('/sort')" :class="{on: isCheck('/sort')}">
          <span>
            <i class="iconfont icon-fenlei"/>
          </span>
          <span>分类</span>
        </div>
        <div class="foot_item" @click="goto('/cart')" :class="{on: isCheck('/cart')}">
          <span>
            <i class="iconfont icon-unie62d"/>
          </span>
          <span>购物车</span>
        </div>
        <div class="foot_item" @click="goto('/mine')" :class="{on: isCheck('/mine')}">
          <span>
            <i class="iconfont icon-wode"/>
          </span>
          <span class="eChong">我的E宠</span>
        </div>
    </div>
</template>
<script>
export default {
  methods: {
    goto (path) {
      this.$router.replace(path)
    },
    isCheck (path) {
      return this.$route.path === path
    }
  }

}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footernav
    position fixed
    margin-top -55px
    z-index 100
    left 0
    right 0
    bottom 0
    width 100%
    height 55px
    background #eee
    .foot_item
      float left
      margin 6px 30px
      &.on
       color #BDE1B3
      span
        display block
        font-size 12px
        text-align center
        padding 3px 0
        .iconfont
          font-size 26px
         /* padding-left  6px*/
</style>
