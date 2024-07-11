<template>
  <HeaderSection/>
  <router-view/>
  <FooterSection/>
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

<style lang="sass">

</style>
