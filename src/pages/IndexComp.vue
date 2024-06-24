<script>
import HeaderComp from '@/blocks/HeaderComp.vue'
import IndexBannerComp from '@/blocks/IndexBannerComp.vue'
import IndexProjectComp from '@/blocks/IndexProjectComp.vue'
import IndexCounterComp from '@/blocks/IndexCounterComp.vue'
import IndexBlogComp from '@/blocks/IndexBlogComp.vue'
import FooterComp from '@/blocks/FooterComp.vue'

export default {
  name: 'IndexComp',
  components: {
    HeaderComp,
    IndexBannerComp,
    IndexProjectComp,
    IndexCounterComp,
    IndexBlogComp,
    FooterComp
  }
}
</script>

<template>
  <HeaderComp></HeaderComp>
  <IndexBannerComp></IndexBannerComp>
  <IndexProjectComp></IndexProjectComp>
  <IndexCounterComp></IndexCounterComp>
  <IndexBlogComp></IndexBlogComp>
  <FooterComp></FooterComp>
</template>

<style scoped lang="sass">

</style>
