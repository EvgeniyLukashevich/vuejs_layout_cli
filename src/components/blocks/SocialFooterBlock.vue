<script>
import LogoMain from '@/components/partials/LogoMain.vue'
import { socialItems } from '@/services/inputData'

export default {
  name: 'SocialFooterBlock',
  components: {
    LogoMain
  },
  data () {
    return {
      socialItems: socialItems
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
  <div class="footer-social">
    <LogoMain></LogoMain>
    <div class="footer-social__links">
      <a v-for="item in socialItems" :class="getIconClass(item.iconClass)" :href="item.href" :key="item.id"></a>
    </div>
  </div>
</template>

<style scoped lang="sass">
@import '@/assets/styles/mixins'
@import '@/assets/styles/vars'

.footer-social
  width: 12rem
  display: flex
  flex-direction: column
  gap: 1.4rem

  &__links
    display: flex
    gap: 2.5rem

    &__link
      transition: all .3s

      &:hover
        color: $colorStylish
</style>
