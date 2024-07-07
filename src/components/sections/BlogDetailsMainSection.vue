<script>
import ChosenPostBlock from '@/components/blocks/ChosenPostBlock.vue'
import { blogItems } from '@/services/inputData'

export default {
  name: 'BlogDetailsMainSection',
  components: {
    ChosenPostBlock
  },
  props: ['currentTag'],
  data () {
    return {
      uniqueTags: [],
      selectedTag: '',
      items: blogItems
    }
  },
  methods: {
    setUniqueTags () {
      const tags = this.items.flatMap(item => item.tags)
      this.uniqueTags = [...new Set(tags)]
    },
    setCurrentTag (tag) {
      if (this.selectedTag === tag) {
        this.selectedTag = ''
        this.$emit('saveCurrentTag', '')
      } else {
        this.selectedTag = tag
        this.$emit('saveCurrentTag', tag)
      }
      const postsSection = document.querySelector('.blog-details-posts')
      if (postsSection) {
        postsSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  },
  mounted () {
    this.setUniqueTags()
  }
}
</script>

<template>
  <section class="blog-details center">
    <div class="blog-details-area container">
      <ChosenPostBlock :items="items"></ChosenPostBlock>

      <div class="blog-details__tags">
        <h3 class="blog-details__tags__title">Тэги</h3>
        <div class="blog-details__tags-box">
          <p class="blog-details__tags-box__tag"
             v-for="tag in uniqueTags" @click="setCurrentTag(tag)"
             :class="{ 'selected-tag': tag === selectedTag }"
             :key="tag">
            {{ tag }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped lang="sass">
@import '@/assets/styles/mixins'
@import '@/assets/styles/vars'

.blog-details
  &-area
    display: flex
    justify-content: space-between
    margin-top: 9rem

  &__tags
    width: 28%
    display: flex
    flex-direction: column
    gap: 1.1rem

    &__title
      @include titleFont(1.2rem)

    &-box
      display: flex
      flex-wrap: wrap
      gap: .5rem

      &__tag
        cursor: pointer
        padding: .5rem 1rem
        background-color: $colorStylishBright
        border-radius: 1rem
        border: 2px solid $colorStylishBright
        transition: all .3s

        &:hover
          background-color: $colorGeneral
          border-color: $colorGeneral
          color: #fff

        &:active
          border-color: $colorStylishBright
          color: $colorStylishBright

.selected-tag
  background-color: $colorGeneral
  border-color: $colorGeneral
  color: #fff
</style>
