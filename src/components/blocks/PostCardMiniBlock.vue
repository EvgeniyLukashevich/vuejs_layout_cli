<script>
import { savePostId } from '@/utils/utils.js'
export default {
  name: 'PostCardMiniBlock',
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  methods: {
    saveChosenPostId: savePostId
  }
}
</script>

<template>
  <router-link :to="'blog-details'" @click="saveChosenPostId(item.id)" :key="item.id"
     class="card-mini">
    <div class="card-mini__image-box">
      <img :src="item.image" :alt="item.tag" class="card-mini__image-box__image">
      <div class="card-mini__image-box__tags">
        <p v-for="tag in item.tags" :key="tag">{{ tag }} </p>
      </div>
    </div>
    <h3 class="card-mini__title">
      {{ item.title }}
    </h3>
    <div class="card-mini__bottom-box">
      <p class="card-mini__bottom-box__date">
        {{ item.date }}
      </p>
      <div class="card-mini__bottom-box__button fas fa-chevron-right"></div>
    </div>
  </router-link>
</template>

<style scoped lang="sass">
@import '@/assets/styles/mixins'
@import '@/assets/styles/vars'

.card-mini
  width: 32%
  padding: 1rem
  border: solid 1px $colorStylishBright
  border-radius: 3rem
  transition: all .3s
  display: flex
  flex-direction: column
  justify-content: space-between

  &__image-box
    position: relative
    width: 100%
    height: 13.2rem
    overflow: hidden

    &__image
      width: 100%
      border-top-left-radius: 2rem
      border-top-right-radius: 2rem
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      height: 100%
      object-fit: none
      filter: saturate(.7)
      transition: all .3s

    &__tags
      position: absolute
      bottom: 1rem
      left: 1rem
      background-color: #fff
      font-size: .7rem
      width: 7.5rem
      padding: 0.5rem
      display: flex
      flex-wrap: wrap
      align-items: center
      line-height: 1
      gap: .3rem
      border-top-left-radius: .5rem
      border-top-right-radius: .5rem
      border-bottom-right-radius: .5rem

  &__title
    @include titleFont(1.2rem)
    max-width: 13.9rem
    line-height: 1.1
    padding-top: 1rem
    padding-bottom: 1.4rem

  &__bottom-box
    display: flex
    justify-content: space-between
    align-items: center
    font-size: .7rem
    padding-bottom: 1.2rem

    &__button
      display: flex
      justify-content: center
      align-items: center
      width: 2rem
      height: 2rem
      border-radius: 1rem
      background-color: $colorStylishBright
      transition: all .3s

  &:hover
    background-color: $colorStylishBright

  &:hover &__bottom-box__button
    background-color: #fff
  &:hover &__image-box__image
    filter: saturate(1)
</style>
