<script>
import LinkFooterNav from '@/components/partials/LinkFooterNav.vue'

export default {
  name: 'NavFooterBlock',
  components: {
    LinkFooterNav
  },
  data () {
    return {
      title: 'Страницы',
      indexLinkData: {
        text: 'Домой',
        path: 'index.html'
      },
      blogLinkData: {
        text: 'Блог',
        path: 'blog.html'
      },
      projectLinkData: {
        text: 'Проект',
        path: 'project.html'
      }
    }
  },
  methods: {
    getIconClass (iconClass) {
      return `footer-social__links__link ${iconClass}`
    }
  }
}

</script>

<template>
  <div class="footer-pages">
    <h3 class="footer-pages__title">{{ title }}</h3>
    <nav class="footer-pages__nav">
      <link-footer-nav :link-text="indexLinkData.text" :link-path="indexLinkData.path"></link-footer-nav>
      <link-footer-nav :link-text="projectLinkData.text" :link-path="projectLinkData.path"></link-footer-nav>
      <link-footer-nav :link-text="blogLinkData.text" :link-path="blogLinkData.path"></link-footer-nav>
    </nav>
  </div>
</template>

<style scoped lang="sass">
@import '@/assets/styles/mixins'
@import '@/assets/styles/vars'

.footer-pages
  width: 12rem
  display: flex
  flex-direction: column

  &__title
    @include titleFont(1.2rem)
    padding-bottom: 0.7rem

  &__nav
    display: flex
    flex-direction: column

    &-link
      width: 100%
      padding: 0.7rem 0
      transition: all .3s

      &:hover
        color: $colorStylish

      &:active
        color: $colorStylishBright
</style>
