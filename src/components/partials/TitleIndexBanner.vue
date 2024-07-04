<script>
export default {
  name: 'TitleIndexBanner',
  props: ['titleText']
}
</script>

<template>
  <h2 class="title">{{titleText}}</h2>
</template>

<style scoped lang="sass">
@import '@/assets/styles/mixins'
@import '@/assets/styles/vars'

.title
  @include titleFont(3rem)
  color: $colorGeneral
  width: 26rem
  line-height: 3.2rem
</style>
