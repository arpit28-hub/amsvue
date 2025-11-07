import { createStore } from 'vuex'
import authStore from './authStore'
import dashBoardStore from './dashBoardStore'
export default createStore({
  modules: {
    authStore,
    dashBoardStore
  },
})
