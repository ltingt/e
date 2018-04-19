<template>
  <div>
    <SecondHeader/>
    <div class="contents">
      <div class="contentTop" v-for="(as,index) in allbrand.brand" :key="index">
        <!--头部A-->
        <p>{{as.order}}</p>
        <!--遍历里面的图片-->
        <div class="contentBottoms" v-for="(a,index) in as.list" :key="index">
            <div class="contentBottomLift">
              <img :src="a.logo">
            </div>
            <div class="contentBottomRight">
              <p class="p1">{{a.name}}</p>
              <p class="p2">{{a.address}}</p>
            </div>
        </div>
      </div>
      <div class="contenrFooter">
        <ul>
          <li  v-for="(ns,index) in allbrand.brand" :key="index">
            <span>{{ns.order}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import SecondHeader from '../../SecondHeader/SecondHeader.vue'
export default {
  computed: {
    ...mapState(['allbrand'])
  },
  components: {
    SecondHeader
  },
  mounted () {
    this.$store.dispatch('getAllBand')
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .contents
    /*background #fff*/
    .contentTop
      width 90%
      background #eee
      p
        height 22px
        font-size 14px
        color #999
        margin-left 10px
        margin-right -39px
        line-height 22px
      .contentBottoms
        height 60px
        width 100%
        background #fff
        display flex
        flex-direction row
        padding-top 12px
        padding-left 37px
        border-bottom 1px solid #eee
        .contentBottomLift
          width 30%
          height 52px
          margin-left -18px
          img
            width 75%
            height 50%
            padding 10px
            border 1px solid #eee
        .contentBottomRight
          width 70%
          .p1
            font-size 16px
            color #999
            margin-left 20px
            margin-top 5px
            font-weight 500
          .p2
            margin-left 21px
            margin-top 3px
    .contenrFooter
      width 10%
      position fixed
      right -14px
      top 150px
      font-size 8px
        li
          margin-top 2px
</style>
