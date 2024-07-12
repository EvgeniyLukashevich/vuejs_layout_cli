<template>
  <div class="height-stretcher">
    <HeaderSection/>
    <router-view/>
    <FooterSection/>
  </div>
</template>

<script>

import HeaderSection from '@/components/sections/HeaderSection.vue'
import FooterSection from '@/components/sections/FooterSection.vue'

export default {
  name: 'App',
  components: {
    FooterSection,
    HeaderSection
  }
}
</script>

<style lang="sass" scoped>
.height-stretcher
  display: flex
  flex-direction: column
  justify-content: space-between
  min-height: 100vh
</style>
