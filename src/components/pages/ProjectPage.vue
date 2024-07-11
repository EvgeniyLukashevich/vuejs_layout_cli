<script>
import RegularBannerSection from '@/components/sections/RegularBannerSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    RegularBannerSection,
    ProjectsSection
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
    window.scrollTo(0, 0)
  }
}
</script>

<template>
  <RegularBannerSection :is-crumbs="isCrumbs" :title="title" :crumbs-current-link="crumbsCurrentLink"
                        :crumbs-link="crumbsLink" :page-name="pageName"></RegularBannerSection>
  <ProjectsSection v-if="sortedByDateProjectItems" :items="sortedByDateProjectItems"></ProjectsSection>
</template>

<style scoped lang="sass">

</style>
