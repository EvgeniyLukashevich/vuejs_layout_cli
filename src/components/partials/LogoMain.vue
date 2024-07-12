<script>
export default {
  name: 'LogoMain'
}
</script>

<template>
  <router-link class="logo" to="/home">
    <img
      src="@/assets/images/Logo.png"
      alt=""
      class="logo__image"
    />
    <p class="logo__name">Interno</p>
  </router-link>
</template>

<style scoped lang="sass">
@import "@/assets/styles/_mixins.sass"
@import "@/assets/styles/_vars.sass"

.logo
  display: flex
  gap: 10px
  align-items: center
  &:hover &__name
    color: $colorStylish

  &__image
    width: 1.55rem
    height: 1.55rem

  &__name
    @include titleFont(40px)
    color: $colorGeneral
    transition: color .3s
</style>
