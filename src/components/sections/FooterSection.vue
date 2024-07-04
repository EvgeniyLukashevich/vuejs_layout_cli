<script>
import SocialFooterBlock from '@/components/blocks/SocialFooterBlock.vue'
import NavFooterBlock from '@/components/blocks/NavFooterBlock.vue'
import ContactsFooterBlock from '@/components/blocks/ContactsFooterBlock.vue'

export default {
  name: 'FooterSection',
  components: {
    SocialFooterBlock,
    NavFooterBlock,
    ContactsFooterBlock
  }
}
</script>

<template>
  <footer class="footer center">
    <div class="footer-area container">
      <SocialFooterBlock></SocialFooterBlock>
      <NavFooterBlock></NavFooterBlock>
      <ContactsFooterBlock></ContactsFooterBlock>
    </div>
  </footer>
</template>

<style scoped lang="sass">
@import '@/assets/styles/mixins'
@import '@/assets/styles/vars'

.footer
  margin-top: 4.4rem
  margin-bottom: 4rem

  &-area
    display: flex
    justify-content: space-between
</style>
