<template>
  <div class="base">
    <HeaderTop></HeaderTop>
    <div class="content">
      <div class="swiper-container" v-if="carousel.data">
        <div class="swiper-wrapper" >
          <div class="swiper-slide" v-for ="(cs,index) in carousel.data[1].value" :key="index">
            <a class="pointer">
              <img :src ="cs.image">
            </a>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="column">
        <ul class="clearfix" v-if="advertising.datas">
          <li class="fl" v-for="(ad,index) in advertising.datas[1].menus" :key="index">
            <a class="columnImg">
              <img :src="ad.image">
            </a>
          </li>
        </ul>
      </div>
      <div class="advertising" v-if="carousel.data">
        <a>
          <img :src="carousel.data[2438].value[0].image">
        </a>
      </div>
      <div class="suprise">
        <div class="suprise-tit" v-if="carousel.data">
          <div class="suprise-tit-img">
            <img :src="carousel.data[3].surprise_icon.image">
          </div>
          <div class="suprise-tit-text">
            {{carousel.data[3].title}}
          </div>
          <div class="suprise-tit-time">
            <span class="time1">20</span>
            <span>:</span>
            <span class="time2">00</span>
          </div>
          <div class="suprise-tit-pic">
            <span>更多</span>
            <i class="iconfont icon-gengduo"/>
          </div>
        </div>
        <div class="swiper-suprise" v-if="carousel.data">
          <ul class="suprise-pro">
            <li class="suprise-pro-clo" v-for="(good, index) in carousel.data[3].goods" :key="index">
              <a>
                <img :src="good.image.image">
                <div class="suprise-pro-price">
                  <span>￥</span>
                  <span>{{good.sale_price}}</span>
                </div>
                <p>{{good.little_price}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="xline"></div>
      <div class="divboxing" v-if="linkshare.datas">
        <div class="divimg">
          <a>
            <img :src="linkshare.datas[5].content_images[0][0].image">
          </a>
        </div>
        <div class="boximg">
          <div class="boxing">
            <a>
              <img :src="linkshare.datas[5].content_images[1][0].image">
            </a>
          </div>
          <div class="boxing">
            <a>
              <img :src="linkshare.datas[5].content_images[1][1].image">
            </a>
          </div>
        </div>
      </div>
      <div class="xline"></div>
      <div class="gezhong" v-if="linkshare.datas">
        <a>
          <img :src="linkshare.datas[7].value[0].image">
        </a>
      </div>
      <div class="xline"></div>
      <PotoList v-if="linkshare.datas" :initialValue="linkshare.datas[14]"/>
      <div class="xline"></div>
      <Fashion v-if="linkshare.datas" :initialValue="linkshare.datas[10]"/>
      <div class="xline"></div>
      <div class="divboxing-1" v-if="carousel.data">
        <div class="divimg">
          <a v-for="(cs,index) in carousel.data[3110].content_images[0]" :key="index">
            <img :src="cs.image">
          </a>
        </div>
        <div class="boxing">
          <a v-for="(cs,index) in carousel.data[3110].content_images[1]" :key="index">
            <img :src="cs.image">
          </a>
        </div>
      </div>
      <div class="xline"></div>
      <PicList v-if="linkshare.datas" :initialValue="linkshare.datas[15]"/>
      <div class="xline"></div>
      <PicList v-if="linkshare.datas" :initialValue="linkshare.datas[17]"/>
      <div class="xline"></div>
      <PicList v-if="linkshare.datas" :initialValue="linkshare.datas[19]"/>
      <div class="xline"></div>
      <PicList v-if="linkshare.datas" :initialValue="linkshare.datas[21]"/>
      <div class="xline"></div>
      <PicList v-if="linkshare.datas" :initialValue="linkshare.datas[23]"/>
      <div class="xline"></div>
      <PicList v-if="linkshare.datas" :initialValue="linkshare.datas[25]"/>
      <div class="xline"></div>
      <PicList v-if="linkshare.datas" :initialValue="linkshare.datas[27]"/>
      <div class="xline"></div>
      <PicList v-if="linkshare.datas" :initialValue="linkshare.datas[29]"/>
      <div class="xline"></div>
      <PicList v-if="linkshare.datas" :initialValue="linkshare.datas[31]"/>
      <div class="xline"></div>
      <PicList v-if="linkshare.datas" :initialValue="linkshare.datas[33]"/>
      <PicList v-if="linkshare.datas" :initialValue="linkshare.datas[34]"/>
      <!--<div class="xline"></div>-->
      <PicList v-if="linkshare.datas" :initialValue="linkshare.datas[36]"/>
      <!--<div class="xline"></div>-->
      <PicList v-if="linkshare.datas" :initialValue="linkshare.datas[38]"/>
      <!--<div class="xline"></div>-->
      <PicList v-if="linkshare.datas" :initialValue="linkshare.datas[28]"/>
      <!--<div class="xline"></div>-->
      <PotoList v-if="linkshare.datas" :initialValue="linkshare.datas[43]"/>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a class="pointer">
              <img src="../../common/imgs/contentTop/1.jpg">
            </a>
          </div>
          <div class="swiper-slide">
            <a class="pointer">
              <img src="../../common/imgs/contentTop/2.jpg">
            </a>
          </div>
          <div class="swiper-slide">
            <a class="pointer">
              <img src="../../common/imgs/contentTop/3.jpg">
            </a>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="xline"></div>
      <PotoList v-if="linkshare.datas" :initialValue="linkshare.datas[46]"/>
      <Fashion v-if="linkshare.datas" :initialValue="linkshare.datas[47]"/>
      <div class="xline"></div>
      <PotoList v-if="linkshare.datas" :initialValue="linkshare.datas[49]"/>
      <Fashion v-if="linkshare.datas" :initialValue="linkshare.datas[50]"/>
      <div class="xline"></div>
      <div class="img3">
        <img name="750x61" src="https://img2.epetbar.com/nowater/2017-12/13/11/be84f01e893b0e631d8512566eb79117.jpg@!water" lazy="loaded" style="height: 30.5px;">
      </div>
      <div class="footer">
        <div class="ft">
          <span class="bt" title="触屏版">触屏版</span>
          <span><a href="https://wap.epet.com/app.html">手机客户端</a></span>
          <span><a href="https://wap.epet.com/faq.html">关于我们</a></span>
          <span><a href="https://wap.epet.com/faq.html">联系我们</a></span>
        </div>
        <div class="fr">© wap.epet.com 版权：重庆易宠科技有限公司</div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import BScroll from 'better-scroll'
import 'swiper/dist/css/swiper.min.css'
import {mapState} from 'vuex'
import HeaderTop from './HeaderTop/HeaderTop.vue'
import Fashion from './Fashion/Fashion.vue'
import PicList from './PicList/PicList.vue'
import PotoList from './PotoList/PotoList.vue'
export default {
  computed: {
    ...mapState(['carousel', 'advertising', 'linkshare'])
  },
  mounted () {
    this.$store.dispatch('getCarousel')
    this.$store.dispatch('getAdvertising')
  },
  watch: {
    carousel () {
      this.$nextTick(() => {
        /* eslint-disable no-new */
        new Swiper('.swiper-container', {
          pagination: {
            el: '.swiper-pagination'
          },
          loop: true,
          autoplay: true
        })
        new BScroll('.swiper-suprise', {
          scrollX: true,
          click: true
        })
      })
    }
  },
  components: {
    HeaderTop,
    Fashion,
    PicList,
    PotoList
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .content
    height 100%
    margin-top 87px
    margin-bottom 55px
    .swiper-container
      width 375px
      height 160px
      .swiper-slide .pointer img
        width 375px
        height 160px
    .column
      width 375px
      height 180px
      .clearfix .fl
        float left
        width 20%
        height 90px
        .columnImg img
          width 100%
          height 100%

    .advertising
      width 100%
      height 120px
      a img
        width 100%
        height 100%
    .suprise
      width 100%
      height 170px
      /*background pink*/
      box-sizing border-box
      .suprise-tit
        /*position relative*/
        padding 10px
        overflow hidden
        .suprise-tit-text
          float left
          right 107px
          margin-left 80px
          font-size 14px
          /*margin-top 5px*/
        .suprise-tit-img img
          float left
          width 85px
          height 19px
        .suprise-tit-time
          /*float left
          right 55px*/
          float left
          font-size 15px
          margin 0 4px
          span
            padding 1px
          .time1
            border 1px solid #eee
          .time2
            border 1px solid #eee
        .suprise-tit-pic
          font-size 10px
          margin-top -4px
          margin-left 4px
          vertical-align middle
          color #7e8c8d
          .iconfont
            10px
      .swiper-suprise
        width 370px
        height 130px
        .suprise-pro
          width 430px
          .suprise-pro-clo
            float left
            white-space nowrap
            margin 4px
            width 98px
            height 130px
            a img
              width 85px
              height 85px
            .suprise-pro-price
              margin-top 3px
              margin-left -14px
              font-size 14px
              text-align center
            p
              text-align center
              margin-left -14px
              font-size 14px
    .xline
      width 100%
      height 10px
      background #eee
    .divboxing
      /*float left*/
      display flex
      flex-direction row
      width 100%
      height 250px
      a img
        width 100%
        height 100%
      .divimg
        width 50%
        height 100%
      .boximg
        display flex
        flex-direction column
        width 50%
        height 100%
        .boxing
          width 100%
          height 50%
    .gezhong
      width 375px
      height 160px
      a img
        width 100%
        height 100%
    .divboxing-1
      display flex
      flex-direction row
      width 100%
      height 250px
      .divimg
        width 50%
        height 125px
        display flex
        flex-direction column
        a img
          width 100%
          height 100%
      .boxing
        width 50%
        height 125px
        display flex
        flex-direction column
        a img
          width 100%
          height 100%
    .footer
      width 100%
      height 84px
      font-size 14px
      .ft
        padding 15px 0 5px 0
        text-align center
        span
          padding-right 10px
        .bt
          color red

      .fr
        text-align center
        margin-top 10px
        color #7e8c8d
</style>
