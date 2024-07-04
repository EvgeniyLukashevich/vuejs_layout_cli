<script>
export default {
  name: 'TitleRegular',
  props: ['titleText']
}
</script>

<template>
  <h2 class="title-regular">{{titleText}}</h2>
</template>

<style scoped lang="sass">
@import '@/assets/styles/mixins'
@import '@/assets/styles/vars'

.title-regular
  @include titleFont(2.3rem)
  line-height: 1.1
  text-align: center
</style>
