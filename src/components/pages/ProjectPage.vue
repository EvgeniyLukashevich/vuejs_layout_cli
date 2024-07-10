<script>
import HeaderSection from '@/components/sections/HeaderSection.vue'
import RegularBannerSection from '@/components/sections/RegularBannerSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import FooterSection from '@/components/sections/FooterSection.vue'
import { mapActions, mapGetters } from 'vuex'

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
  },
  computed: {
    ...mapGetters('projectStore', ['sortedByDateProjectItems'])
  },
  methods: {
    ...mapActions('projectStore', ['fetchProjectData'])
  },
  mounted () {
    this.fetchProjectData()
  }
}
</script>

<template>
  <HeaderSection></HeaderSection>
  <RegularBannerSection :is-crumbs="isCrumbs" :title="title" :crumbs-current-link="crumbsCurrentLink"
                        :crumbs-link="crumbsLink" :page-name="pageName"></RegularBannerSection>
  <ProjectsSection v-if="sortedByDateProjectItems" :items="sortedByDateProjectItems"></ProjectsSection>
  <FooterSection></FooterSection>
</template>

<style scoped lang="sass">

</style>
