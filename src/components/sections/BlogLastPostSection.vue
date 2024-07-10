<script>
import PostCardBlock from '@/components/blocks/PostCardBlock.vue'

export default {
  name: 'BlogLastPostSection',
  components: {
    PostCardBlock
    // TitleRegular
  },
  props: ['sortedByDateItems'],
  data () {
    return {
      title: 'Последний пост'
    }
  },
  computed: {
    lastItem () {
      return this.sortedByDateItems[0]
    }
  }
}
</script>

<template>
  <section class="blog-last-post center">
    <div class="blog-last-post-area container">
      <h2 class="blog-last-post__title">{{ title }}</h2>
      <PostCardBlock :item="lastItem"></PostCardBlock>
    </div>
  </section>
</template>

<style scoped lang="sass">
@import '@/assets/styles/mixins'
@import '@/assets/styles/vars'

.blog-last-post
  &-area
    margin-top: 8rem
    display: flex
    flex-direction: column
    gap: 1.2rem

  &__title
    @include titleFont(2.3rem)

</style>
