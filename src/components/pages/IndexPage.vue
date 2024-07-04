<script>
import HeaderSection from '@/components/sections/HeaderSection.vue'
import IndexBannerSection from '@/components/sections/IndexBannerSection.vue'
import IndexProjectSection from '@/components/sections/IndexProjectSection.vue'
import MetricsSection from '@/components/sections/MetricsSection.vue'
import IndexBlogSection from '@/components/sections/IndexBlogSection.vue'
import FooterComp from '@/components/sections/FooterSection.vue'

export default {
  name: 'IndexPage',
  components: {
    HeaderSection,
    IndexBannerSection,
    IndexProjectSection,
    MetricsSection,
    IndexBlogSection,
    FooterComp
  }
}
</script>

<template>
  <HeaderSection></HeaderSection>
  <IndexBannerSection></IndexBannerSection>
  <IndexProjectSection></IndexProjectSection>
  <MetricsSection></MetricsSection>
  <IndexBlogSection></IndexBlogSection>
  <FooterComp></FooterComp>
</template>

<style scoped lang="sass">

</style>
