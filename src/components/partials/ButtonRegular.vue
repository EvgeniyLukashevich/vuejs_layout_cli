<script>
export default {
  name: 'ButtonRegular',
  props: ['buttonText']
}
</script>

<template>
  <button class="button-regular">
    {{buttonText}}
    <i class="button-regular-icon fas fa-arrow-right"></i>
  </button>
</template>

<style scoped lang="sass">
@import '@/assets/styles/mixins'
@import '@/assets/styles/vars'

.button-regular
  cursor: pointer
  display: flex
  justify-content: center
  align-items: center
  gap: .45rem
  width: 8rem
  padding: 1.18rem
  color: #fff
  background-color: $colorGeneral
  border: none
  border-radius: .8rem
  font-size: .8rem
  margin-bottom: 9.5rem
  transition: all .3s

  &:hover
    background-color: $colorStylishBright
    color: $colorGeneral
    box-shadow: 0.2rem 0.2rem 0.8rem rgba(0, 0, 0, .4)

  &:active
    transform: scale(.9)

  &-icon
    color: $colorStylish
</style>
