<script>
export default {
  name: 'PlacesBoxBlock',
  props: ['places'],
  data () {
    return {
      selectedPlace: ''
    }
  },
  methods: {
    setCurrentPlace (place) {
      if (this.selectedPlace === place) {
        this.$emit('saveCurrentPlace', '')
        this.selectedPlace = ''
      } else {
        this.$emit('saveCurrentPlace', place)
        this.selectedPlace = place
      }
    }
  }
}
</script>

<template>
  <div class="places-box">
    <div class="places-box__wrapper">
      <div class="places-box__place" v-for="place in places" :key="place" @click="setCurrentPlace(place)"
           :class="{ 'selected-place': place === selectedPlace }">{{ place }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
@import '@/assets/styles/mixins'
@import '@/assets/styles/vars'

.places-box
  width: 100%
  display: flex
  justify-content: center

  &__wrapper
    display: flex
    //gap: 2rem
    flex-wrap: wrap
    border: 1px solid $colorStylish
    border-radius: 1rem

  &__place
    cursor: pointer
    color: $colorGeneral
    background-color: transparent
    padding: 1rem 3rem
    border-radius: .8rem
    transition: all .3s

    &:hover
      //background-color: $colorStylish
      color: $colorStylish

.selected-place
  background-color: $colorStylish
  color: #fff
  &:hover
    color: #fff
</style>
