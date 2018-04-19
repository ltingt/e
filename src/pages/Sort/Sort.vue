<template>
   <div class="sort">
     <div class="header" v-show="$route.meta.headerContent">
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
     </div>
     <!--<div class="body">
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
          &lt;!&ndash; <ul>
             <li v-for="(sc,index) in shopclassify.categorys[currentIndex].cate_list" :key="index">
               <div class="contentTitle">
                 <span>{{sc.title}}</span>
               </div>
               <div class="contentHeader" v-for="(s,index) in sc.list" :key="index">
                 <img :src="s.photo||s.logo">
                 <p>{{s.name}}</p>
               </div>
             </li>
           </ul>&ndash;&gt;
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
     </div>-->
     <router-view></router-view>
   </div>
</template>
<script>
export default {
  /*data () {
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
      /!* eslint-disable no-new *!/
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
  }*/
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .sort
    background #eee
    .header
      position fixed
      z-index 20
      width 100%
      height 40px
      display flex
      flex-direction row
      background #ffffff
      a
        span
          display inline-block
          margin-top 10px
          margin-right 10px
          .iconfont
            border-bottom-style none
      .on a
        color red
        span
          border-bottom 1px solid red
      .headerContent1
        width 50%
        height 40px
        text-align right
        padding-right 35px
        padding-top 5px
        a span
          color black
          font-weight 500
          padding-bottom 10px
      .headerContent2
        width 50%
        height 40px
        text-align left
        padding-top 5px
        a span
          color black
          font-weight 500
          padding-bottom 10px
</style>
