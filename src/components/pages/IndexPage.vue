<script>
import HeaderSection from '@/components/sections/HeaderSection.vue'
import IndexBannerSection from '@/components/sections/IndexBannerSection.vue'
import IndexProjectSection from '@/components/sections/IndexProjectSection.vue'
import MetricsSection from '@/components/sections/MetricsSection.vue'
import FooterSection from '@/components/sections/FooterSection.vue'
import BlogCardsSection from '@/components/sections/BlogCardsSection.vue'

export default {
  name: 'IndexPage',
  components: {
    HeaderSection,
    IndexBannerSection,
    IndexProjectSection,
    MetricsSection,
    BlogCardsSection,
    FooterSection
  },
  data () {
    return {
      firstCardIndex: 0,
      lastCardIndex: 2
    }
  }
}
</script>

<template>
  <HeaderSection></HeaderSection>
  <IndexBannerSection></IndexBannerSection>
  <IndexProjectSection></IndexProjectSection>
  <MetricsSection></MetricsSection>
  <BlogCardsSection :index-start="firstCardIndex" :index-end="lastCardIndex"></BlogCardsSection>
  <FooterSection></FooterSection>
</template>

<style scoped lang="sass">

</style>
