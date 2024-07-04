<script>
import HeaderSection from '@/components/sections/HeaderSection.vue'
import FooterSection from '@/components/sections/FooterSection.vue'
import BlogCardsSection from '@/components/blocks/BlogCardsSection.vue'

export default {
  name: 'BlogPage',
  components: {
    HeaderSection,
    FooterSection,
    BlogCardsSection
  },
  data () {
    return {
      firstCardIndex: 1,
      lastCardIndex: 6
    }
  }
}
</script>

<template>
  <HeaderSection></HeaderSection>
  <BlogCardsSection :index-start="firstCardIndex" :index-end="lastCardIndex"></BlogCardsSection>
  <FooterSection></FooterSection>
</template>

<style scoped lang="sass">

</style>
