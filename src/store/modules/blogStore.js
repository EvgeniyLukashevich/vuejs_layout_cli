import { blogItems } from '@/services/inputData'
import { parseDate } from '@/utils/utils'

const state = {
  blogItemsList: null,
  chosenPost: null
}

const getters = {
  blogItemsList: state => state.blogItemsList,
  sortedByDateBlogItems: (state) => {
    try {
      return [...state.blogItemsList].sort((a, b) => {
        return parseDate(b.date) - parseDate(a.date)
      })
    } catch (error) {
      console.log('Подгружаем blog-данные')
      return null
    }
  },
  chosenPost: state => state.chosenPost
}

const mutations = {
  SET_BLOG_ITEMS (state, items) {
    state.blogItemsList = items
  },
  SET_CHOSEN_POST (state, post) {
    if (post) {
      state.chosenPost = post
    }
  }
}

const actions = {
  // имитация подгрузки данных с задержкой
  fetchBlogData ({ commit, state }) {
    if (!state.blogItemsList) {
      setTimeout(() => {
        commit('SET_BLOG_ITEMS', blogItems)
      }, 1500)
    }
  },
  async fetchChosenPost ({ commit, state }, postId) {
    // Ждем пока projectItemsList будет подгружен
    const waitForProjectItemsLoad = () => {
      return new Promise((resolve) => {
        const check = () => {
          if (state.blogItemsList) {
            resolve()
          } else {
            console.log('Ожидаем подгрузки данных поста')
            setTimeout(check, 200)
          }
        }
        check()
      })
    }

    await waitForProjectItemsLoad()

    const post = [...state.blogItemsList].find(item => item.id === postId)
    commit('SET_CHOSEN_POST', post)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
