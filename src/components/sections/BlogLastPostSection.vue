<script>
import PostCardBlock from '@/components/blocks/PostCardBlock.vue'
// import TitleRegular from '@/components/partials/TitleRegular.vue'
import { blogItems } from '@/services/inputData'
import { parseDate } from '@/utils/utils'

export default {
  name: 'BlogLastPostSection',
  components: {
    PostCardBlock
    // TitleRegular
  },
  data () {
    return {
      items: blogItems,
      title: 'Последний пост'
    }
  },
  computed: {
    sortedByDateItems () {
      return [...this.items].sort((a, b) => {
        return parseDate(b.date) - parseDate(a.date)
      })
    },
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
<!--      <TitleRegular :title-text="title"></TitleRegular>-->
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
