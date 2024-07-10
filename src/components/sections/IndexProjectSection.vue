<script>
import HeadingRegularBlock from '@/components/blocks/HeadingRegularBlock.vue'
import ProjectCardBlock from '@/components/blocks/ProjectCardBlock.vue'

export default {
  name: 'IndexProjectSection',
  components: {
    HeadingRegularBlock,
    ProjectCardBlock
  },
  props: ['sortedByDateItems'],
  data () {
    return {
      title: 'Следите за нашими проектами',
      subtitle: 'Хорошо известно, что читатель будет отвлекаться на читабельный контент страницы'
    }
  }
}
</script>

<template>
  <section class="project center">
    <div class="project-area container">
      <HeadingRegularBlock :title-text="title" :subtitle-text="subtitle"></HeadingRegularBlock>
      <div class="project-items">
        <ProjectCardBlock v-for="(item, index) in sortedByDateItems.slice(0, 4)" :item="item" :card-num="index + 1"
                          :key="item.id"></ProjectCardBlock>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
@import '@/assets/styles/mixins'
@import '@/assets/styles/vars'

.project
  &-area
    margin-top: 4.4rem
    display: flex
    flex-direction: column
    gap: 4.3rem

  &-heading
    display: flex
    flex-direction: column
    align-items: center
    gap: 0.4rem

    &__title
      @include titleFont(2.27rem)

    &__text
      width: 22rem
      text-align: center

  &-items
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    gap: 2.55rem

    &__item
      display: flex
      flex-direction: column

      &:hover &-content__textbox-title, &:hover &-content__textbox-text
        color: $colorStylish

      &:hover &-content__button
        color: #fff
        background-color: $colorStylish

      &:hover &-image
        filter: saturate(1)

      &:active &-content__button
        background-color: $colorStylishBright

      &-image
        width: 24rem
        height: 25rem
        background-size: cover
        background-position: center
        filter: saturate(.5)
        transition: all .3s

      &-content
        padding-top: 1rem
        display: flex
        justify-content: space-between
        align-items: center

        &__textbox
          &-title
            @include titleFont(1.14rem)
            transition: all .3s

          &-text
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

  .project
    &-image1
      background-image: url("@/assets/images/index-project1.jpeg")
      border-top-right-radius: 4rem

    &-image2
      background-image: url("@/assets/images/index-project2.jpeg")
      border-top-left-radius: 4rem

    &-image3
      background-image: url("@/assets/images/index-project3.jpeg")
      border-bottom-right-radius: 4rem

    &-image4
      background-image: url("@/assets/images/index-project4.jpeg")
      border-bottom-left-radius: 4rem
</style>
