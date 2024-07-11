<script>
import { savePostId } from '@/utils/utils'

export default {
  name: 'PostCardBlock',
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  methods: {
    saveChosenPostId (id) {
      savePostId(id)
      window.location.reload()
    }
  }
}

</script>

<template>
  <router-link :to="'/blog-details'" @click="saveChosenPostId(item.id)" class="card" replace>
    <div class="card__image-box">
      <img :src="item.image" :alt="item.tag" class="card__image-box__image">
    </div>
    <div class="card__text-box">
      <h3 class="card__text-box__title">
        {{ item.title }}
      </h3>
      <p class="card__text-box__text">
        {{ item.text }}
      </p>
      <div class="card__tags-box__tags">
        <p class="card__tags-box__tags__tag" v-for="tag in item.tags" :key="tag.id">{{ tag }}</p>
      </div>
      <div class="card__text-box__bottom-box">
        <p class="card__text-box__bottom-box__date">
          {{ item.date }}
        </p>
        <div class="card__text-box__bottom-box__button fas fa-chevron-right"></div>
      </div>
    </div>
  </router-link>
</template>

<style scoped lang="sass">
@import '@/assets/styles/mixins'
@import '@/assets/styles/vars'

.card
  width: 100%
  border: solid 1px $colorStylishBright
  border-radius: 3rem
  padding: 1rem
  display: flex
  gap: 3rem
  transition: all .3s

  &__image-box
    width: 50%
    height: 22rem
    position: relative
    overflow: hidden
    align-self: center
    border-radius: 2.5rem

    &__image
      width: 100%
      height: 100%
      object-fit: cover
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)

  &__text-box
    width: 41%
    display: flex
    flex-direction: column
    justify-content: space-between
    gap: 1rem

    &__title
      @include titleFont(1.14rem)

    &__bottom-box
      display: flex
      justify-content: space-between
      align-items: center
      font-size: .7rem
      padding-top: 0.8rem

      &__button
        display: flex
        justify-content: center
        align-items: center
        width: 2rem
        height: 2rem
        border-radius: 1rem
        background-color: $colorStylishBright
        transition: all .3s

  &__tags-box
    display: flex
    justify-content: space-between
    font-size: 0.73rem

    &__tags
      display: flex
      padding-right: 2rem

      &__tag
        font-size: 0.73rem

        &::after
          content: "/"
          margin: 0 0.5rem

        &:last-child::after
          content: none

  &:hover
    background-color: $colorStylishBright

  &:hover &__text-box__bottom-box__button
    background-color: #fff
</style>
