<script>
import HeaderSection from '@/components/sections/HeaderSection.vue'
import RegularBannerSection from '@/components/sections/RegularBannerSection.vue'
import BlogDetailsMainSection from '@/components/sections/BlogDetailsMainSection.vue'
import BlogDetailsOtherSection from '@/components/sections/BlogDetailsOtherSection.vue'
import FooterSection from '@/components/sections/FooterSection.vue'

export default {
  name: 'BlogDetailsPage',
  components: {
    HeaderSection,
    RegularBannerSection,
    BlogDetailsMainSection,
    BlogDetailsOtherSection,
    FooterSection
  },
  data () {
    return {
      isCrumbs: false,
      pageName: 'blog-details',
      currentTag: ''
    }
  },
  methods: {
    saveCurrentTag (tag) {
      this.currentTag = tag
    }
  }
}
</script>

<template>
  <HeaderSection></HeaderSection>
  <RegularBannerSection :is-crumbs="isCrumbs" :page-name="pageName"></RegularBannerSection>
  <BlogDetailsMainSection @saveCurrentTag="saveCurrentTag"></BlogDetailsMainSection>
  <BlogDetailsOtherSection :current-tag="currentTag"></BlogDetailsOtherSection>
  <FooterSection></FooterSection>
</template>

<style scoped lang="sass">

</style>
