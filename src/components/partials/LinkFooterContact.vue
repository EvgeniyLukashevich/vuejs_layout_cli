<script>
export default {
  name: 'LinkFooterContact',
  props: ['linkText', 'linkPath']
}
</script>

<template>
  <a :to="linkPath" class="nav-link">{{ linkText }}</a>
</template>

<style scoped lang="sass">
@import '@/assets/styles/_mixins.sass'
@import '@/assets/styles/_vars.sass'

.nav-link
  width: 100%
  padding: 0.7rem 0
  transition: all .3s

  &:hover
    color: $colorStylish

  &:active
    color: $colorStylishBright
</style>
