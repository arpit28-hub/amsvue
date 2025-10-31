import { createStore } from 'vuex'
import authStore from './authStore'

export default createStore({
  modules: {
    authStore,
  },
})
