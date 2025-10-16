import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      user: null, // store logged-in user
      isAuthenticated: !!localStorage.getItem('token'),
      loading: false,
      errorMessage: null,
    }
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
    },
    SET_LOADING(state, loading) {
      state.loading = loading
    },
    SET_AUTH(state, auth) {
      state.isAuthenticated = auth
    },
    SET_ERROR(state, message) {
      state.errorMessage = message
    },
  },
  actions: {
    async login({commit},{email,password}){
      commit('SET_LOADING', true);
      commit('SET_ERROR', null);
      try{
        const
      }
    }
  },
  getters: {
    doubleCount(state) {
      return state.count * 2
    },
  },
})
