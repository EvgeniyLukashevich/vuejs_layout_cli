<script>
import { projectItems } from '@/services/inputData'
import PlacesBoxBlock from '@/components/blocks/PlacesBoxBlock.vue'
import ProjectCardRegularBlock from '@/components/blocks/ProjectCardRegularBlock.vue'

export default {
  name: 'ProjectsSection',
  components: { ProjectCardRegularBlock, PlacesBoxBlock },
  data () {
    return {
      uniquePlaces: [],
      selectedPlace: '',
      items: projectItems,
      currentPage: 1,
      itemsPerPage: 4
    }
  },
  methods: {
    setUniquePlaces () {
      const places = this.items.flatMap(item => item.place)
      this.uniquePlaces = [...new Set(places)]
    },
    saveCurrentPlace (place) {
      this.selectedPlace = place
      this.currentPage = 1 // Reset the current page when a new place is selected
    },
    paginateItems (items) {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage
      return items.slice(startIndex, startIndex + this.itemsPerPage)
    },
    turnPage (page) {
      this.currentPage = page
      const projectsArea = document.querySelector('.projects-area')
      if (projectsArea) {
        projectsArea.scrollIntoView({ behavior: 'smooth' })
      }
    }
  },
  computed: {
    filteredItems () {
      let filtered = this.items
      if (this.selectedPlace) {
        filtered = filtered.filter(item => this.selectedPlace === item.place)
      }
      return filtered
    },
    paginatedProjects () {
      return this.paginateItems(this.filteredItems)
    },
    pageCount () {
      return Math.ceil(this.filteredItems.length / this.itemsPerPage)
    }
  },
  mounted () {
    this.setUniquePlaces()
  }
}
</script>

<template>
  <section class="projects center">
    <div class="projects-area container">
      <PlacesBoxBlock :places="uniquePlaces" @saveCurrentPlace="saveCurrentPlace"></PlacesBoxBlock>
      <div class="projects__items">
        <ProjectCardRegularBlock :projects="paginatedProjects"></ProjectCardRegularBlock>
      </div>
      <div class="projects__pagination">
        <button class="projects__pagination__page" v-for="page in pageCount" :key="page" :class="{'active-page': currentPage === page}"
                @click="turnPage(page)">{{ page }}
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
@import '@/assets/styles/mixins'
@import '@/assets/styles/vars'

.projects
  &-area
    margin-top: 9rem

  &__items
    margin-top: 2.7rem
    display: grid
    grid-template-rows: repeat(auto-fill, 1fr)
    grid-template-columns: repeat(2, 1fr)
    gap: 1.4rem
  &__pagination
    margin-top: 2.7rem
    display: flex
    justify-content: center
    gap: 1.2rem
    &__page
      cursor: pointer
      background-color: transparent
      font-size: .8rem
      width: 2.4rem
      height: 2.4rem
      border-radius: 1.2rem
      border: 1px solid $colorStylish
      transition: all .3s
      &:hover
        background-color: $colorStylish
        color: white

.active-page
  cursor: unset
  pointer-events: none
  background-color: $colorStylishBright
  border-color: $colorStylishBright
</style>
