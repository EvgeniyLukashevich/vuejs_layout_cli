<script>
import { getChosenPostId } from '@/utils/utils'

export default {
  name: 'ChosenPostBlock',
  props: ['items'],
  computed: {
    chosenPost () {
      return this.items.find((item) => item.id === getChosenPostId()) || this.items[0]
    }
  }

}
</script>

<template>
  <div class="post" v-if="chosenPost">
    <h3 class="post__title">{{ chosenPost.title }}</h3>
    <div class="post__image-box">
      <img :src="chosenPost.image" :alt="chosenPost.title" class="post__image-box__image">
    </div>
    <div class="post__tags-box">
      <p class="post__tags-box__date">{{ chosenPost.date }}</p>
      <div class="post__tags-box__tags">
        <p class="post__tags-box__tags__tag" v-for="tag in chosenPost.tags" :key="tag.id"> {{ tag }}</p>
      </div>
    </div>
    <p class="post__text">{{ chosenPost.text }}</p>
    <div class="post__quote-box">
      <p class="post__quote-box__icon fas fa-quote-right"></p>
      <p class="post__quote-box__quote ">{{ chosenPost.quote }}</p>
    </div>
  </div>
</template>

<style scoped lang="sass">
@import '@/assets/styles/mixins'
@import '@/assets/styles/vars'

.post
  width: 67%
  display: flex
  flex-direction: column
  gap: 1.6rem

  &__title
    @include titleFont(2.27rem)

  &__image-box
    width: 100%
    height: 24rem
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

  &__quote-box
    background-color: $colorStylishBright
    width: 100%
    padding: 2.4rem
    border-radius: 2rem
    display: flex
    flex-direction: column
    justify-content: end
    align-items: center
    @include titleFont(4rem)
    font-style: italic
    color: $colorStylish

    &__quote
      font-size: 1.2rem
      text-align: center
</style>
