<script>
export default {
  name: 'SubTitleIndexBanner',
  props: ['subtitleText']
}
</script>

<template>
  <p class="subtitle">{{subtitleText}}</p>
</template>

<style scoped lang="sass">
@import '@/assets/styles/mixins'
@import '@/assets/styles/vars'

.subtitle
  width: 20rem
</style>
