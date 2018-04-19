<template>
  <div class="img1" v-if="initialValue.value">
    <div class="img1-img">
      <img :src="initialValue.value.left.img.image">
    </div>
    <div class="img1-more">
      <img :src="initialValue.value.right.img.image">
    </div>
  </div>
</template>
<script>
export default {
  props: ['initialValue']
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .img1
    display flex
    flex-direction row
    width 375px
    height 87px
    .img1-img
      margin-left 10px
      margin-top 10px
      img
        width 80%
        height 100%
    .img1-more
      margin-left 100px
      img
        width 80%
        height 80%
</style>
