<script>
import { parseDate } from '@/utils/utils.js'
import { blogItems } from '@/services/inputData.js'
import PostCardMiniBlock from '@/components/blocks/PostCardMiniBlock.vue'
import HeadingRegularBlock from '@/components/blocks/HeadingRegularBlock.vue'

export default {
  name: 'BlogCardsSection',
  components: {
    PostCardMiniBlock,
    HeadingRegularBlock
  },
  props: ['indexStart', 'indexEnd'],
  data () {
    return {
      title: 'Статьи & Новости',
      subTitle: 'Хорошо известно, что читатель будет отвлекаться на читабельный контент страницы',
      items: blogItems
    }
  },
  computed: {
    sortedByDateItems () {
      return [...this.items].sort((a, b) => {
        return parseDate(b.date) - parseDate(a.date)
      })
    }
  }
}
</script>

<template>
  <section class="blog center">
    <div class="blog-area container">
      <HeadingRegularBlock :title-text="title" :subtitle-text="subTitle"></HeadingRegularBlock>
      <div class="blog-items">
        <PostCardMiniBlock v-for="(item) in sortedByDateItems.slice(indexStart, indexEnd + 1)" :key="item.id"
                           :item="item"></PostCardMiniBlock>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
@import '@/assets/styles/mixins'
@import '@/assets/styles/vars'

.blog
  margin-top: 4.4rem

  &-area
    display: flex
    flex-direction: column
    gap: 2.4rem

  &-items
    display: flex
    justify-content: space-between
    flex-wrap: wrap
    gap: 1rem
</style>
