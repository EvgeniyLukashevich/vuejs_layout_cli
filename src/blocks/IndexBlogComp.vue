<script>
import { parseDate } from '@/utils/utils.js'
import { blogItems } from '@/services/inputData'
import PostCardComponent from '@/components/PostCardComponent.vue'

export default {
  name: 'IndexBlogComp',
  components: {
    PostCardComponent
  },
  data () {
    return {
      title: 'Статьи & Новости',
      preTitle: 'Хорошо известно, что читатель будет отвлекаться на читабельный контент страницы',
      items: blogItems,
      currentTag: '',
      uniqueTags: []
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
  <section id="blog_app" class="blog center">
    <div class="blog-area container">
      <div class="blog-heading">
        <h2 class="blog-heading__title">{{ title }}</h2>
        <p class="blog-heading__text">
          {{ preTitle }}
        </p>
      </div>

      <div class="blog-items">
        <PostCardComponent v-for="(item) in sortedByDateItems.slice(0,3)" :key="item.id"
                   :item="item"></PostCardComponent>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">

</style>
