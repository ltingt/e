<template>
  <div class="gezhong" v-if="initialValue.content_images">
    <!--<a v-if="initialValue.value[0].image">
      <img :src="initialValue.value[0].image">
    </a>-->
    <a>
      <img :src="initialValue.content_images[0][0].image">
    </a>
  </div>
</template>
<script>
export default {
  props: ['initialValue']
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .gezhong
    width 375px
    height 160px
    a img
      width 100%
      height 100%
</style>
