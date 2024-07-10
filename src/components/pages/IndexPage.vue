<script>
import HeaderSection from '@/components/sections/HeaderSection.vue'
import IndexBannerSection from '@/components/sections/IndexBannerSection.vue'
import IndexProjectSection from '@/components/sections/IndexProjectSection.vue'
import MetricsSection from '@/components/sections/MetricsSection.vue'
import FooterSection from '@/components/sections/FooterSection.vue'
import BlogCardsSection from '@/components/sections/BlogCardsSection.vue'
import { mapActions, mapGetters } from 'vuex'

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
  }
}
</script>

<template>
  <HeaderSection></HeaderSection>
  <IndexBannerSection></IndexBannerSection>
  <IndexProjectSection v-if="sortedByDateProjectItems" :sorted-by-date-items="sortedByDateProjectItems"></IndexProjectSection>
  <MetricsSection></MetricsSection>
  <BlogCardsSection v-if="sortedByDateBlogItems" :index-start="firstCardIndex" :index-end="lastCardIndex"
                    :sorted-by-date-items="sortedByDateBlogItems"></BlogCardsSection>
  <FooterSection></FooterSection>
</template>

<style scoped lang="sass">

</style>
