<script>
import PostCardBlock from '@/components/blocks/PostCardBlock.vue'
import { blogItems } from '@/services/inputData'
import TitleRegular from '@/components/partials/TitleRegular.vue'

export default {
  name: 'BlogDetailsOtherSection',
  components: {
    TitleRegular,
    PostCardBlock
  },
  props: ['currentTag', 'sortedByDateItems'],
  data () {
    return {
      title: 'Другие статьи',
      items: blogItems
    }
  },
  computed: {
    filteredByTagItems () {
      if (this.currentTag) {
        return [...this.items].filter(item => item.tags.includes(this.currentTag))
      } else {
        return this.sortedByDateItems
      }
    }
  }
}
</script>

<template>
  <section class="blog-details-posts center">
    <div class="blog-details-posts-area container">
      <TitleRegular :title-text="title"></TitleRegular>
      <PostCardBlock v-for="(item) in filteredByTagItems" :key="item.id"
                     :item="item"></PostCardBlock>
    </div>
  </section>
</template>

<style scoped lang="sass">
.blog-details-posts
  &-area
    margin-top: 4rem
    display: flex
    flex-direction: column
    gap: 2rem
</style>
