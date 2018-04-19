<template>
  <div>
    <!--<div class="header">
      <router-link class="headerContent1" to="/sort/firstSort" :class="{on:$route.path==='/sort/firstSort'}">
        <a>
          <span>分类</span>
        </a>
      </router-link>
      <router-link class="headerContent2" to="/sort/secondSort" :class="{on:$route.path==='/sort/secondSort'}">
        <a>
          <span>品牌</span>
        </a>
      </router-link>
      <a>
         <span>
            <i class="iconfont icon-sousuo"/>
         </span>
      </a>
    </div>-->
    <div class="contents">
      <div  class="allContents" v-for="(bran,index) in brand.brand" :key="index">
        <div class="contentsTop">
          <!--<span>——</span>
          <span class="c999">{{bran.title}}</span>
          <span>——</span>-->
          <span class="c999">—— {{bran.title}} ——</span>
        </div>
        <div class="contentsBottom">
          <ul>
            <li v-for="(br,index) in bran.list" :key="index">
              <a>
                <img :src="br.logo">
                <p class="p1">{{br.name}}</p>
                <p class="p2">{{br.address}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="smallCion">
        <router-link to="/sort/thirdSort">
          <span>全部</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['brand'])
  },
  mounted () {
    this.$store.dispatch('getBrand')
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .contents
    background #fff
    .allContents
      width 100%
      height 100%
      display flex
      flex-direction column
      padding-top  40px
      padding-bottom  55px
      .contentsTop
        height 50px
        border-top 10px solid #eee
        line-height 50px
        text-align center
        color #7e8c8d
      .contentsBottom
        ul
          width 100%
          display flex
          flex-wrap wrap
          li
            width 33.33%
            height 135px
            margin-top 10px
            text-align center
            white-space nowrap
            img
              width 70%
              height 28%
              border 1px solid #eee
              padding 10px
              margin-bottom 10px
            .p1
              font-size 14px
              color black
              margin-bottom 10px
            .p2
              font-size 12px
    .smallCion span
      z-index 10
      width 40px
      height 40px
      position fixed
      right 18px
      bottom 80px
      line-height 40px
      border-radius 50%
      background #7e8c8d
      font-size 18px
      color #ffffff
</style>
