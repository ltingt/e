<template>
  <div class="base">
    <HeaderTop></HeaderTop>
    <div class="contentHead">
      <div>
        <a>
          <img src="../../common/imgs/contentTop/1.jpg">
        </a>
      </div>
      <div>
        <a>
          <img src="../../common/imgs/contentTop/2.jpg">
        </a>
      </div>
      <div>
        <a>
          <img src="../../common/imgs/contentTop/3.jpg">
        </a>
      </div>
      <div>
        <a>
          <img src="../../common/imgs/contentTop/4.jpg">
        </a>
      </div>
      <div>
        <a>
          <img src="../../common/imgs/contentTop/5.jpg">
        </a>
      </div>
    </div>
  </div>
</template>
<script>

import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
export default {
  components: {
    HeaderTop
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .contentHead
    margin-top 86px
</style>
