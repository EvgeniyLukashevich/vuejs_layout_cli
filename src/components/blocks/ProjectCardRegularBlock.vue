<script>

import { saveProjectId } from '@/utils/utils'

export default {
  name: 'ProjectCardRegularBlock',
  props: ['projects'],
  methods: {
    saveChosenProjectId: saveProjectId,
    getCardClass (index) {
      return index % 2 !== 0 ? 'project-card-small' : 'project-card-large'
    }
  }
}
</script>

<template>
  <router-link :class="getCardClass(index)" :to="'project-details'" v-for="(project, index) in projects" :key="project.id"
     @click="saveChosenProjectId(project.id)">
    <div class="image-box">
      <img class="image" :src="project.image" :alt="project.title">
    </div>
    <div class="content">
      <div class="content__textbox">
        <h3 class="content__textbox__title">
          {{ project.title }}
        </h3>
        <p class="content__textbox__text">
          {{ project.tags[0] || 'Планировка' }} / {{ project.tags[1] || 'Дизайн' }}
        </p>
      </div>
      <div class="content__button fas fa-chevron-right"></div>
    </div>
  </router-link>
</template>

<style scoped lang="sass">
@import '@/assets/styles/mixins'
@import '@/assets/styles/vars'

.project-card-small
  grid-row: span 2
  height: 24rem

  &:hover .image
    filter: saturate(1)

  &:hover .content__textbox__title, &:hover .content__textbox__text
    color: $colorStylish

  &:hover .content__button
    color: #fff
    background-color: $colorStylish

.project-card-small .image-box
  position: relative
  width: 100%
  height: 19rem
  overflow: hidden
  background-size: cover
  background-position: center

.image
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  width: 100%
  height: 100%
  object-fit: none
  filter: saturate(.5)
  transition: all .3s

.project-card-large
  grid-row: span 3
  height: 36rem

  &:hover .image
    filter: saturate(1)

  &:hover .content__textbox__title, &:hover .content__textbox__text
    color: $colorStylish

  &:hover .content__button
    color: #fff
    background-color: $colorStylish

.project-card-large .image-box
  position: relative
  width: 100%
  height: 31rem
  overflow: hidden
  background-size: cover
  background-position: center

.content
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
</style>
