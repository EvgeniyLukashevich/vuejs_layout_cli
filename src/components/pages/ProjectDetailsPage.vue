<script>
import HeaderSection from '@/components/sections/HeaderSection.vue'
import FooterSection from '@/components/sections/FooterSection.vue'
import RegularBannerSection from '@/components/sections/RegularBannerSection.vue'
import ProjectDetailsMainSection from '@/components/sections/ProjectDetailsMainSection.vue'

export default {
  components: { ProjectDetailsMainSection, FooterSection, RegularBannerSection, HeaderSection },
  data () {
    return {
      pageName: 'project-details',
      isCrumbs: false
    }
  }

}
</script>

<template>
  <HeaderSection></HeaderSection>
  <RegularBannerSection :page-name="pageName" :is-crumbs="isCrumbs"></RegularBannerSection>
  <ProjectDetailsMainSection></ProjectDetailsMainSection>
  <FooterSection></FooterSection>
</template>

<style scoped lang="sass">

</style>
