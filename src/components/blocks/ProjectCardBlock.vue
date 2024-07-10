<script>

import { saveProjectId } from '@/utils/utils'


export default {
  name: 'ProjectCardBlock',
  methods: {
    getImageBoxClass (index) {
      return `project-card__image-box project-card__image-box${index}`
    },
    saveChosenProjectId: saveProjectId
  },
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      }
    },
    cardNum: {
      type: Number,
      default: 0
    }
  }
}
</script>

<template>
  <a class="project-card" :href="item.href" @click="saveChosenProjectId(project.id)">
    <div :class="getImageBoxClass(cardNum)">
      <img :src="item.image" :alt="item.title" class="project-card__image-box__image">
    </div>
    <div class="project-card__content">
      <div class="project-card__content__textbox">
        <h3 class="project-card__content__textbox__title">
          {{ item.title }}
        </h3>
        <p class="project-card__content__textbox__text">
          {{ item.tags[0] || 'Планировка' }} / {{ item.tags[1] || 'Дизайн' }}
        </p>
      </div>
      <div class="project-card__content__button fas fa-chevron-right"></div>
    </div>
  </a>
</template>

<style scoped lang="sass">
@import '@/assets/styles/mixins'
@import '@/assets/styles/vars'

.project-card
  display: flex
  flex-direction: column

  &:hover &__content__textbox__title, &:hover &__content__textbox__text
    color: $colorStylish

  &:hover &__content__button
    color: #fff
    background-color: $colorStylish

  &:hover &__image-box__image
    filter: saturate(1)

  &:active &__content__button
    background-color: $colorStylishBright

  &__image-box
    position: relative
    width: 24rem
    height: 25rem
    overflow: hidden
    background-size: cover
    background-position: center

    &__image
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      width: 100%
      height: 100%
      object-fit: none
      filter: saturate(.5)
      transition: all .3s

  &__content
    padding-top: 1rem
    display: flex
    justify-content: space-between
    align-items: center

    &__textbox
      &__title
        @include titleFont(1.14rem)
        transition: all .3s

      &__text
        color: $colorText
        transition: all .3s

    &__button
      display: flex
      justify-content: center
      align-items: center
      background-color: $colorStylishBright
      width: 3.18rem
      height: 3.18rem
      border-radius: 1.59rem
      color: $colorGeneral
      transition: all .3s

.project-card
  &__image-box1
    border-top-right-radius: 4rem

  &__image-box2
    border-top-left-radius: 4rem

  &__image-box3
    border-bottom-right-radius: 4rem

  &__image-box4
    border-bottom-left-radius: 4rem
</style>
