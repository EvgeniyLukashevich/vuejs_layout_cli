<script>
export default {
  name: 'MetricsItemBlock',
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<template>
  <article class="metric">
    <h3 class="metric__value">{{data.value}}</h3>
    <p class="metric__caption">{{data.caption}}</p>
  </article>
</template>

<style scoped lang="sass">
@import '@/assets/styles/mixins'
@import '@/assets/styles/vars'

.metric
  width: 25%
  display: flex
  flex-direction: column
  gap: 1rem
  border-right: solid 1px
  border-color: $colorStylish
  align-items: center

  &:last-child
    border: none

  &__value
    @include titleFont(3.9rem)
    color: $colorStylish
    line-height: 1
</style>
