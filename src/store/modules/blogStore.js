import { blogItems } from '@/services/inputData'
import { parseDate } from '@/utils/utils'

const state = {
  blogItemsList: null
}

const getters = {
  blogItemsList: state => state.blogItemsList,
  sortedByDateBlogItems: (state) => {
    try {
      return [...state.blogItemsList].sort((a, b) => {
        return parseDate(b.date) - parseDate(a.date)
      })
    } catch (error) {
      console.log(`ОШИБКА: ${error}`)
      return null
    }
  }
}

const mutations = {
  SET_BLOG_ITEMS (state, items) {
    state.blogItemsList = items
  }
}

const actions = {
  // имитация подгрузки данных с задержкой
  fetchBlogData ({ commit }) {
    setTimeout(() => {
      commit('SET_BLOG_ITEMS', blogItems)
    }, 1500)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
