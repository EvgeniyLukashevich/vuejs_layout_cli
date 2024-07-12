<script>
import IndexBannerSection from '@/components/sections/IndexBannerSection.vue'
import IndexProjectSection from '@/components/sections/IndexProjectSection.vue'
import MetricsSection from '@/components/sections/MetricsSection.vue'
import BlogCardsSection from '@/components/sections/BlogCardsSection.vue'
import { mapActions, mapGetters } from 'vuex'
import LoadingSection from '@/components/sections/LoadingSection.vue'

export default {
  name: 'IndexPage',
  components: {
    LoadingSection,
    IndexBannerSection,
    IndexProjectSection,
    MetricsSection,
    BlogCardsSection
  },
  data () {
    return {
      firstCardIndex: 0,
      lastCardIndex: 2
    }
  },
  computed: {
    ...mapGetters('blogStore', ['sortedByDateBlogItems']),
    ...mapGetters('projectStore', ['sortedByDateProjectItems'])
  },
  methods: {
    ...mapActions('blogStore', ['fetchBlogData']),
    ...mapActions('projectStore', ['fetchProjectData'])
  },
  mounted () {
    this.fetchBlogData()
    this.fetchProjectData()
    window.scrollTo(0, 0)
  }
}
</script>

<template>
  <IndexBannerSection></IndexBannerSection>
  <LoadingSection v-if="!sortedByDateProjectItems"></LoadingSection>
  <IndexProjectSection v-if="sortedByDateProjectItems"
                       :sorted-by-date-items="sortedByDateProjectItems"></IndexProjectSection>
  <MetricsSection></MetricsSection>
  <LoadingSection v-if="!sortedByDateBlogItems"></LoadingSection>
  <BlogCardsSection v-if="sortedByDateBlogItems" :index-start="firstCardIndex" :index-end="lastCardIndex"
                    :sorted-by-date-items="sortedByDateBlogItems"></BlogCardsSection>
</template>

<style scoped lang="sass">

</style>
