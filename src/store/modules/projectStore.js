import { projectItems } from '@/services/inputData'
import { parseDate } from '@/utils/utils'

const state = {
  projectItemsList: null
}

const getters = {
  projectItemsList: state => state.projectItemsList,
  sortedByDateProjectItems: (state) => {
    try {
      return [...state.projectItemsList].sort((a, b) => {
        return parseDate(b.date) - parseDate(a.date)
      })
    } catch (error) {
      console.log('Подгружаем project-данные')
      return null
    }
  },
  chosenProject: state => state.chosenProject
}

const mutations = {
  SET_PROJECT_ITEMS (state, items) {
    state.projectItemsList = items
  }
}

const actions = {
  // имитация подгрузки данных с задержкой
  fetchProjectData ({ commit }) {
    if (!state.projectItemsList) {
      setTimeout(() => {
        commit('SET_PROJECT_ITEMS', projectItems)
      }, 1000)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
