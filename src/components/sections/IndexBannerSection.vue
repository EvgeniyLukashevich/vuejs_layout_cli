<script>
import ButtonRegular from '@/components/partials/ButtonRegular.vue'
import HeadingIndexBannerBlock from '@/components/blocks/HeadingIndexBannerBlock.vue'

export default {
  name: 'IndexBannerSection',
  components: {
    HeadingIndexBannerBlock,
    ButtonRegular
  },
  data () {
    return {
      startButtonText: 'Начать',
      title: 'Пусть ваш дом будет уникальным',
      subtitle: 'Существует много вариаций Lorem Ipsum, которые можно использовать'
    }
  }
}
</script>

<template>
  <section class="banner center">
    <div class="banner-area container">
      <HeadingIndexBannerBlock :title-text="title" :subtitle-text="subtitle"></HeadingIndexBannerBlock>
      <ButtonRegular :button-text="startButtonText"></ButtonRegular>
    </div>
  </section>
</template>

<style scoped lang="sass">
@import '@/assets/styles/mixins'
@import '@/assets/styles/vars'

.banner
  &-area
    padding-top: 9.5rem
    background-image: url("@/assets/images/index-banner.jpeg")
    background-size: cover
    background-position: center
    display: flex
    flex-direction: column
    gap: .9rem
    padding-left: 2.4rem
    border-radius: 2rem

</style>
