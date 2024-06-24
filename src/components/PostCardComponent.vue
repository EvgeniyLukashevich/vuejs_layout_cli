<script>
import { savePostId } from '@/utils/utils.js'
export default {
  props: ['item'],
  methods: {
    saveChosenPostId: savePostId
  }
}
</script>

<template>
  <a :href="item.href" @click="saveChosenPostId(item.id)" :key="item.id"
     class="blog-items__item">
    <div class="blog-items__item__image-box">
      <img :src="item.image" :alt="item.tag" class="blog-items__item__image-box__image">
      <div class="blog-items__item__image-box__tags">
        <p v-for="tag in item.tags" :key="tag">{{ tag }} </p>
      </div>
    </div>
    <h3 class="blog-items__item__title">
      {{ item.title }}
    </h3>
    <div class="blog-items__item__bottom-box">
      <p class="blog-items__item__bottom-box__date">
        {{ item.date }}
      </p>
      <div class="blog-items__item__bottom-box__button fas fa-chevron-right"></div>
    </div>
  </a>
</template>

<style scoped lang="sass">

</style>
