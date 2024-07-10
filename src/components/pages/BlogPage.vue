<script>
import HeaderSection from '@/components/sections/HeaderSection.vue'
import FooterSection from '@/components/sections/FooterSection.vue'
import BlogLastPostSection from '@/components/sections/BlogLastPostSection.vue'
import BlogCardsSection from '@/components/sections/BlogCardsSection.vue'
import RegularBannerSection from '@/components/sections/RegularBannerSection.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'BlogPage',
  components: {
    HeaderSection,
    FooterSection,
    BlogLastPostSection,
    BlogCardsSection,
    RegularBannerSection
  },
  data () {
    return {
      title: 'Статьи & Новости',
      pageName: 'blog',
      isCrumbs: true,
      crumbsLink: {
        href: 'index.html',
        text: 'Домой'
      },
      crumbsCurrentLink: {
        href: 'blog.html',
        text: 'Блог'
      },
      firstCardIndex: 1,
      lastCardIndex: 6
    }
  },
  computed: {
    ...mapGetters('blogStore', ['blogItemsList', 'sortedByDateBlogItems'])
  },
  methods: {
    ...mapActions('blogStore', ['fetchBlogData'])
  },
  mounted () {
    this.fetchBlogData()
  }
}
</script>

<template>
  <HeaderSection></HeaderSection>
  <RegularBannerSection :is-crumbs="isCrumbs" :title="title" :crumbs-current-link="crumbsCurrentLink"
                        :crumbs-link="crumbsLink" :page-name="pageName"></RegularBannerSection>
  <BlogLastPostSection v-if="sortedByDateBlogItems" :sorted-by-date-items="sortedByDateBlogItems"></BlogLastPostSection>
  <BlogCardsSection v-if="sortedByDateBlogItems" :index-start="firstCardIndex" :index-end="lastCardIndex"
                    :sorted-by-date-items="sortedByDateBlogItems"></BlogCardsSection>
  <FooterSection></FooterSection>
</template>

<style scoped lang="sass">

</style>
