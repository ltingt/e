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
    <div class="body">
      <div class="bodyLeft">
        <ul>
          <li class="bodyLeftShop" v-for="(sc,index) in shopclassify.categorys" :key="index"
              @click="shopMenu(index)" :class = "{on:currentIndex === index}">
            <span>{{sc.name}}</span>
          </li>
        </ul>
      </div>
      <div class="bodyRight" v-if="shopclassify.categorys">
        <div class="bodyRightContent" >
          <div v-for="(sc,index) in shopclassify.categorys[currentIndex].cate_list" :key="index">
            <a>
              <span>{{sc.title}}</span>
              <ul>
                <li  v-for="(s,index) in sc.list" :key="index" :class="{on:s.logo}">
                  <img :src="s.photo||s.logo">
                  <p>{{s.name}}</p>
                </li>
              </ul>
            </a>
          </div>
        </div>
      </div>
    </div>
   <!-- <router-view></router-view>-->
  </div>
</template>
<script>
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      currentIndex : 0
    }
  },
  methods: {
    shopMenu (currentIndex) {
      this.currentIndex = currentIndex
    }
  },
  mounted () {
    this.$store.dispatch('getShopclassify')
  },
  watch: {
    shopclassify () {
      /* eslint-disable no-new */
      this.$nextTick(() => {
        new BScroll('.bodyLeft', {
          click: true,
          scrollY: true
        })
        new BScroll('.bodyRight', {
          click: true
        })
      })
    }
  },
  computed: {
    ...mapState(['shopclassify'])
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .body
    display flex
    flex-direction row
    height 564px
    padding-top 45px
    padding-bottom 55px
    .bodyLeft
      display flex
      flex-direction column
      width 20%
      .bodyLeftShop
        width 100%
        height 50px
        background #ffffff
        margin-bottom 1px
        text-align center
        &.on
          color red
        span
          line-height 50px
          font-size 14px
    .bodyRight
      width 80%
      margin-left 5px
      background #ffffff
      .bodyRightContent
        width 100%
        div
          padding 5px 5px 20px
          border-bottom 1px solid #eee
          a
            padding-left 10px
            span
              display inline-block
              height 30px
              line-height 30px
              font-size 12px
              padding-left 5px
          ul
            display flex
            flex-direction row
            flex-wrap wrap
            li
              width 33.33%
              &.on
                width 50%
                height 80px
                img
                  border 1px solid #f3f4f5
                  text-align center
                  height 55px
                  width 80px
                  margin-left 21px
                p
                  z-index 10
                  text-align center
                  margin 5px 0
              img
                width 87px
                height 87px
              p
                font-size 12px
                text-align center
                color black
</style>
