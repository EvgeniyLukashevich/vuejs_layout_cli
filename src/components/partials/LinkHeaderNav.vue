<script>
export default {
  name: 'LinkHeaderNav',
  props: ['linkText', 'linkPath']
}
</script>

<template>
  <a :href="linkPath" class="nav-link">{{ linkText }}</a>
</template>

<style scoped lang="sass">
@import '@/assets/styles/_mixins.sass'
@import '@/assets/styles/_vars.sass'

.nav-link
  display: inline-block
  font-size: 0.9rem
  padding: 2rem 1rem
  color: $colorGeneral
  transition: all .3s

  &:last-child
    padding-right: 0

  &:hover
    color: $colorStylish

  &:active
    color: $colorStylishBright
</style>
