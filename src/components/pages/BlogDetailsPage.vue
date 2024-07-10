<script>
import HeaderSection from '@/components/sections/HeaderSection.vue'
import RegularBannerSection from '@/components/sections/RegularBannerSection.vue'
import BlogDetailsMainSection from '@/components/sections/BlogDetailsMainSection.vue'
import BlogDetailsOtherSection from '@/components/sections/BlogDetailsOtherSection.vue'
import FooterSection from '@/components/sections/FooterSection.vue'
import { mapActions, mapGetters } from 'vuex'

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
  computed: {
    ...mapGetters('blogStore', ['sortedByDateBlogItems', 'blogItemsList'])
  },
  methods: {
    ...mapActions('blogStore', ['fetchBlogData']),
    saveCurrentTag (tag) {
      this.currentTag = tag
    }
  },
  mounted () {
    this.fetchBlogData()
  }
}
</script>

<template>
    <HeaderSection></HeaderSection>
    <RegularBannerSection :is-crumbs="isCrumbs" :page-name="pageName"></RegularBannerSection>
    <BlogDetailsMainSection v-if="sortedByDateBlogItems" @saveCurrentTag="saveCurrentTag"
                            :items="sortedByDateBlogItems"></BlogDetailsMainSection>
    <BlogDetailsOtherSection v-if="sortedByDateBlogItems" :current-tag="currentTag"
                             :sorted-by-date-items="sortedByDateBlogItems"></BlogDetailsOtherSection>
    <FooterSection></FooterSection>
</template>

<style scoped lang="sass">

</style>
