import { createStore } from 'vuex'
import authStore from './authStore'
import dashBoardStore from './dashBoardStore'
import counterStore from './counterStore'
export default createStore({
  modules: {
    authStore,
    dashBoardStore,
    counterStore,
  },
})
