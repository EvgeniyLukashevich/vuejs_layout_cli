import { projectItems } from '@/services/inputData'
import { parseDate } from '@/utils/utils'

const state = {
  projectItemsList: null,
  chosenProject: null
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
  },
  SET_CHOSEN_PROJECT (state, project) {
    if (project) {
      state.chosenProject = project
    }
  }
}

const actions = {
  // имитация подгрузки данных с задержкой
  fetchProjectData ({
    commit,
    state
  }) {
    if (!state.projectItemsList) {
      setTimeout(() => {
        commit('SET_PROJECT_ITEMS', projectItems)
      }, 1700)
    }
  },
  async fetchChosenProject ({
    commit,
    state
  }, projectId) {
    // Ждем пока projectItemsList будет подгружен
    const waitForProjectItemsLoad = () => {
      return new Promise((resolve) => {
        const check = () => {
          if (state.projectItemsList) {
            resolve()
          } else {
            console.log('Ожидаем подгрузки данных проекта')
            setTimeout(check, 200)
          }
        }
        check()
      })
    }

    await waitForProjectItemsLoad()

    const project = [...state.projectItemsList].find(item => item.id === projectId)
    commit('SET_CHOSEN_PROJECT', project)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
