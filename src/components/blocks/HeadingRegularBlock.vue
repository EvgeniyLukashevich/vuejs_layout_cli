<script>
import TitleRegular from '@/components/partials/TitleRegular.vue'
import SubTitleRegular from '@/components/partials/SubTitleRegular.vue'

export default {
  name: 'HeadingRegularBlock',
  components: {
    TitleRegular,
    SubTitleRegular
  },
  props: ['titleText', 'subtitleText']
}
</script>

<template>
  <div class="heading-regular">
    <TitleRegular :title-text="titleText"></TitleRegular>
    <SubTitleRegular :subtitle-text="subtitleText"></SubTitleRegular>
  </div>
</template>

<style scoped lang="sass">
.heading-regular
  align-self: center
  width: 30rem
  display: flex
  flex-direction: column
  align-items: center
  gap: .5rem
</style>
