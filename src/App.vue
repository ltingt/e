<template>
  <div class="base">
    <router-view></router-view>
    <FooterGuide></FooterGuide>
  </div>
</template>
<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  components: {
    FooterGuide
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .base
    overflow hidden
</style>
