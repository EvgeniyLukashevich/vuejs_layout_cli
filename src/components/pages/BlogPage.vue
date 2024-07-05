<script>
import HeaderSection from '@/components/sections/HeaderSection.vue'
import FooterSection from '@/components/sections/FooterSection.vue'
import BlogLastPostSection from '@/components/sections/BlogLastPostSection.vue'
import BlogCardsSection from '@/components/sections/BlogCardsSection.vue'
import RegularBannerSection from '@/components/sections/RegularBannerSection.vue'

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
  }
}
</script>

<template>
  <HeaderSection></HeaderSection>
  <RegularBannerSection :is-crumbs="isCrumbs" :title="title" :crumbs-current-link="crumbsCurrentLink"
                        :crumbs-link="crumbsLink" :page-name="pageName"></RegularBannerSection>
  <BlogLastPostSection></BlogLastPostSection>
  <BlogCardsSection :index-start="firstCardIndex" :index-end="lastCardIndex"></BlogCardsSection>
  <FooterSection></FooterSection>
</template>

<style scoped lang="sass">

</style>
