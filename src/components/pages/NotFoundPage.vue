<script>
export default {
  name: 'NotFoundPage',
  data () {
    return {
      title: 'ERROR 404: Page Not Found',
      text: 'К сожалению, страница, которую вы ищете, не найдена'
    }
  }
}
</script>

<template>
<section class="not-found center">
  <div class="not-found-area container">
    <h1 class="not-found__title">{{title}}</h1>
    <p class="not-found__text">{{text}}</p>
    <i class="not-found__icon far fa-face-frown"></i>
  </div>
</section>
</template>

<style scoped lang="sass">
@import '@/assets/styles/mixins'
@import '@/assets/styles/vars'

.not-found
  &-area
    display: flex
    flex-direction: column
    align-items: center
    gap: 1rem
  &__icon
    font-size: 2.5rem
    color: $colorStylish
</style>
