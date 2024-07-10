import { createStore } from 'vuex'
import blogStore from '@/store/modules/blogStore.js'
import projectStore from '@/store/modules/projectStore.js'

export default createStore({
  state: {
    // состояние
  },
  getters: {
    // методы для чтения состояния
  },
  mutations: {
    // методы для изменения состояния
    // (по сути сеттеры)
  },
  actions: {
    // методы для асинхронных операций
  },
  modules: {
    blogStore,
    projectStore
  }
})
