<script>
import RegularBannerSection from '@/components/sections/RegularBannerSection.vue'
import BlogDetailsMainSection from '@/components/sections/BlogDetailsMainSection.vue'
import BlogDetailsOtherSection from '@/components/sections/BlogDetailsOtherSection.vue'
import { mapActions, mapGetters } from 'vuex'
import LoadingSection from '@/components/sections/LoadingSection.vue'

export default {
  name: 'BlogDetailsPage',
  components: {
    LoadingSection,
    RegularBannerSection,
    BlogDetailsMainSection,
    BlogDetailsOtherSection
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
    window.scrollTo(0, 0)
  }
}
</script>

<template>
    <RegularBannerSection :is-crumbs="isCrumbs" :page-name="pageName"></RegularBannerSection>
    <LoadingSection v-if="!sortedByDateBlogItems"></LoadingSection>
    <BlogDetailsMainSection v-if="sortedByDateBlogItems" @saveCurrentTag="saveCurrentTag"
                            :items="sortedByDateBlogItems"></BlogDetailsMainSection>
    <BlogDetailsOtherSection v-if="sortedByDateBlogItems" :current-tag="currentTag"
                             :sorted-by-date-items="sortedByDateBlogItems"></BlogDetailsOtherSection>
</template>

<style scoped lang="sass">

</style>
