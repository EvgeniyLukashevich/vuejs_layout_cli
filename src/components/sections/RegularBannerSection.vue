<script>
import TitleRegular from '@/components/partials/TitleRegular.vue'

export default {
  name: 'RegularBannerSection',
  components: {
    TitleRegular
  },
  props: ['title', 'pageName', 'isCrumbs', 'crumbsCurrentLink', 'crumbsLink'],
  computed: {
    bannerSectionClass () {
      return `regular-banner regular-banner-${this.pageName} center`
    }
  }
}
</script>

<template>
  <section :class="bannerSectionClass">
    <div class="regular-banner-area container">
      <div class="regular-banner__title-box" v-if="isCrumbs">
        <TitleRegular :title-text="title"></TitleRegular>
        <div class="regular-banner__title-box__nav">
          <router-link :to="crumbsLink.href" class="regular-banner__title-box__nav__link">{{ crumbsLink.text }}</router-link> /
          <router-link :to="crumbsCurrentLink.href"
             class="regular-banner__title-box__nav__link current-link">{{ crumbsCurrentLink.text }}</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
@import '@/assets/styles/mixins'
@import '@/assets/styles/_vars'

.regular-banner
  background-position: center center
  background-repeat: no-repeat
  background-size: cover

  &-blog
    background-image: url("@/assets/images/blog-banner.jpeg")

  &-blog-details
    background-image: url("@/assets/images/blog-banner-details.jpeg")

  &-project
    background-image: url("@/assets/images/project-banner.jpeg")

  &-project-details
    background-image: url("@/assets/images/project-banner-details.jpeg")

  &-area
    position: relative
    height: 16.2rem

  &__title-box
    position: absolute
    bottom: -14%
    left: 50%
    transform: translateX(-50%)
    width: 22.9rem
    background-color: #fff
    padding: 1.8rem 2rem 0 2rem
    border-radius: 1.1rem
    display: flex
    flex-direction: column
    align-items: center
    gap: .5rem
    //box-shadow: 0.3rem 0.3rem 1rem rgba(0, 0, 0, 0.3)
    &__title
      @include titleFont(2.3rem)
      line-height: 1.1

    &__nav
      &__link
        &:hover
          color: $colorStylish
</style>
