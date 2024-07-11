<script>
import RegularBannerSection from '@/components/sections/RegularBannerSection.vue'
import ProjectDetailsMainSection from '@/components/sections/ProjectDetailsMainSection.vue'

export default {
  components: { ProjectDetailsMainSection, RegularBannerSection },
  data () {
    return {
      pageName: 'project-details',
      isCrumbs: false
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  }

}
</script>

<template>
  <RegularBannerSection :page-name="pageName" :is-crumbs="isCrumbs"></RegularBannerSection>
  <ProjectDetailsMainSection></ProjectDetailsMainSection>
</template>

<style scoped lang="sass">

</style>
