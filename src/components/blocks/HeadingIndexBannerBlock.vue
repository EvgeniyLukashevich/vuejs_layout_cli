<script>
import TitleIndexBanner from '@/components/partials/TitleIndexBanner.vue'
import SubTitleIndexBanner from '@/components/partials/SubTitleIndexBanner.vue'

export default {
  name: 'HeadingIndexBannerBlock',
  props: ['titleText', 'subtitleText'],
  components: {
    TitleIndexBanner,
    SubTitleIndexBanner
  }
}
</script>

<template>
  <TitleIndexBanner :title-text="titleText"></TitleIndexBanner>
  <SubTitleIndexBanner :subtitle-text="subtitleText"></SubTitleIndexBanner>
</template>

<style scoped lang="sass">

</style>
