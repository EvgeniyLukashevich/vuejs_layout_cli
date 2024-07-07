<script>
import HeaderSection from '@/components/sections/HeaderSection.vue'
import RegularBannerSection from '@/components/sections/RegularBannerSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import FooterSection from '@/components/sections/FooterSection.vue'

export default {
  components: {
    HeaderSection,
    RegularBannerSection,
    ProjectsSection,
    FooterSection
  },
  data () {
    return {
      title: 'Наши проекты',
      pageName: 'project',
      isCrumbs: true,
      crumbsLink: {
        href: 'index.html',
        text: 'Домой'
      },
      crumbsCurrentLink: {
        href: 'project.html',
        text: 'Проект'
      }
    }
  }
}
</script>

<template>
  <HeaderSection></HeaderSection>
  <RegularBannerSection :is-crumbs="isCrumbs" :title="title" :crumbs-current-link="crumbsCurrentLink"
                        :crumbs-link="crumbsLink" :page-name="pageName"></RegularBannerSection>
  <ProjectsSection></ProjectsSection>
  <FooterSection></FooterSection>
</template>

<style scoped lang="sass">

</style>
