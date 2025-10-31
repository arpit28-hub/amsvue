// store/index.js
import authService from '@/services/authService'

export default {
  namespaced: true,
  state() {
    return {
      user: null, // store logged-in user
    }
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
    },
  },
  actions: {
    // Login action
    async login({ commit }, credentials) {
      try {
        const userData = await authService.signin(credentials)
        commit('SET_USER', userData)
        return userData
      } catch (error) {
        console.error('Login failed:', error.response ? error.response.data : error.message)
        throw error
      }
    },
    async register({ commit }, regInfo) {
      alert(regInfo.password)
      try {
        const userData = await authService.signup(regInfo)
        // commit('SET_USER', userData)
        return userData
      } catch (error) {
        console.error('registration failed:', error.response ? error.response.data : error.message)
        throw error
      }
    },
  },
  getters: {},
}
