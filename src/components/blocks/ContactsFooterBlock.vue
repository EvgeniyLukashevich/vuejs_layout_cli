<script>
import LinkFooterNav from '@/components/partials/LinkFooterNav.vue'

export default {
  name: 'ContactsFooterBlock',
  components: {
    LinkFooterNav
  },
  data () {
    return {
      title: 'Контакты',
      address: '55 East Birchwood Ave. Brooklyn, New York 11201',
      telephoneNumber: {
        text: '(123) 456 - 7890',
        path: 'tel:+1234567890'
      },
      email: {
        text: 'contact@interno.com',
        path: 'mailto:contact@interno.com'
      }
    }
  }
}

</script>

<template>
  <div class="footer-contacts">
    <h3 class="footer-contacts__title">{{ title }}</h3>
    <div class="footer-contacts__box">
      <address class="footer-contacts__box-item">{{ address }}</address>
      <link-footer-nav :link-text="telephoneNumber.text" :link-path="telephoneNumber.path"></link-footer-nav>
      <link-footer-nav :link-text="email.text" :link-path="email.path"></link-footer-nav>
    </div>
  </div>
</template>

<style scoped lang="sass">
@import '@/assets/styles/mixins'
@import '@/assets/styles/vars'

.footer-contacts
  width: 12rem
  display: flex
  flex-direction: column

  &__title
    @include titleFont(1.2rem)
    padding-bottom: 0.7rem

  &__box
    display: flex
    flex-direction: column

    &-item
      width: 100%
      padding: 0.7rem 0
      transition: all .3s
</style>
