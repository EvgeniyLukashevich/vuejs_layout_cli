<script>
import LinkHeaderNav from '@/components/partials/LinkHeaderNav.vue'

export default {
  name: 'NavHeaderBlock',
  components: {
    LinkHeaderNav
  },
  data () {
    return {
      indexLinkData: { text: 'Домой', path: 'index.html' },
      blogLinkData: { text: 'Блог', path: 'blog.html' },
      projectLinkData: { text: 'Проект', path: 'project.html' }
    }
  }
}
</script>

<template>
<div class="header-nav">
  <LinkHeaderNav :link-path="indexLinkData.path" :link-text="indexLinkData.text"></LinkHeaderNav>
  <LinkHeaderNav :link-path="projectLinkData.path" :link-text="projectLinkData.text"></LinkHeaderNav>
  <LinkHeaderNav :link-path="blogLinkData.path" :link-text="blogLinkData.text"></LinkHeaderNav>
</div>
</template>

<style scoped lang="sass">

</style>
