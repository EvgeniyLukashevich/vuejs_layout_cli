<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import LoadingSection from '@/components/sections/LoadingSection.vue'

export default {
  name: 'ProjectDetailsMainSection',
  components: { LoadingSection },
  data () {
    return {
      currentImageIndex: 0
    }
  },
  computed: {
    ...mapGetters('projectStore', ['chosenProject', 'projectItemsList']),
    images () {
      return this.chosenProject.images
    },
    currentImage () {
      return this.images[this.currentImageIndex]
    },
    totalImages () {
      return this.images.length
    }
  },
  methods: {
    ...mapActions('projectStore', ['fetchProjectData', 'fetchChosenProject']),
    ...mapMutations('projectStore', ['SET_CHOSEN_PROJECT']),
    prevImage () {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.totalImages) % this.totalImages
    },
    nextImage () {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.totalImages
    },
    selectImage (index) {
      this.currentImageIndex = index
    }
  },
  mounted () {
    if (!this.chosenProject) {
      this.fetchProjectData()
      const projectId = this.$route.params.id
      this.fetchChosenProject(projectId)
    }
  }
}
</script>

<template>
  <LoadingSection v-if="!chosenProject"></LoadingSection>
  <section class="project center" v-if="chosenProject">
    <div class="project-area container">
      <div class="project__content">
        <h2 class="project__content__title">{{ chosenProject.title }}</h2>
        <p class="project__content__text">{{ chosenProject.text }}</p>
      </div>
      <div class="project__slider">
        <div class="project__slider__image-box">
          <img :src="currentImage" :alt="chosenProject.title" class="project__slider__image-box__image">
          <div class="project__slider__controls">
            <button @click="prevImage"
                    class="project__slider__controls__control project__slider__controls__control-prev">&lt;
            </button>
            <button @click="nextImage"
                    class="project__slider__controls__control project__slider__controls__control-next">&gt;
            </button>
            <button class="project__slider__controls__zoom-button fas fa-magnifying-glass">
            </button>
          </div>
        </div>
        <div class="project__slider__indicator">
          <span
            v-for="(image, index) in images"
            :key="index"
            :class="(index === currentImageIndex) ? 'project__slider__indicator__item active-indicator' : 'project__slider__indicator__item'"
            @click="selectImage(index)">
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
@import '@/assets/styles/mixins'
@import '@/assets/styles/vars'
.project
  &-area
    display: flex
    flex-direction: column
    align-items: center
    gap: 5rem

  &__content
    display: flex
    flex-direction: column
    margin-top: 9rem
    width: 30rem
    gap: .5rem

    &__title
      font-size: 2.3rem

.project__slider
  position: relative
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column

  &__image-box
    position: relative
    width: 40rem
    height: 30rem
    overflow: hidden
    background-size: cover
    background-position: center
    border-radius: 1rem

    &:hover .project__slider__controls__zoom-button, &:hover .project__slider__controls__control
      opacity: 0.7

    &__image
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      width: 100%
      height: 100%
      object-fit: none
      filter: saturate(.8)
      transition: all .3s
      border-radius: 1rem

      &:hover
        filter: saturate(1)

  &__controls
    position: absolute
    top: 50%
    left: 0
    right: 0
    display: flex
    justify-content: space-between
    transform: translateY(-50%)

    &__control
      opacity: 0
      background: #fff
      border: none
      color: $colorStylish
      font-size: 1.5rem
      padding: 1em .5em
      cursor: pointer
      transition: all .3s

      &:hover
        background-color: $colorStylishBright

    &__zoom-button
      position: absolute
      top: 50%
      left: 50%
      width: 5rem
      height: 5rem
      border-radius: 50%
      background: #fff
      color: $colorStylish
      opacity: 0
      font-size: 1.5rem
      border: none
      cursor: pointer
      transform: translate(-50%, -50%)
      transition: all .3s

      &:hover
        background-color: $colorStylishBright
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2)

  &__indicator
    display: flex
    justify-content: center
    margin-top: 1em

    &__item
      width: 10px
      height: 10px
      margin: 0 5px
      border-radius: 50%
      border: 1px solid $colorGeneral
      background-color: transparent
      cursor: pointer
      transition: all .3s

      &:hover
        background-color: $colorStylish

.active-indicator
  cursor: default
  border: 1px solid $colorStylish
  background-color: $colorStylish

</style>
