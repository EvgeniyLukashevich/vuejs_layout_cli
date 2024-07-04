<script>
import LogoMain from '@/components/partials/LogoMain.vue'
import NavHeaderBlock from '@/components/blocks/NavHeaderBlock.vue'

export default {
  name: 'HeaderSection',
  components: {
    LogoMain,
    NavHeaderBlock
  }
}
</script>

<template>
  <header class="header center">
    <div class="header-area container">
      <LogoMain></LogoMain>
      <NavHeaderBlock></NavHeaderBlock>
    </div>
  </header>
</template>

<style scoped lang="sass">
.header
  &-area
    width: 100%
    display: flex
    justify-content: space-between
    align-items: center
    height: 6.8rem
</style>
