import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
        temp: "Arpit"
    }
  },
  mutations: {
    CHANGE_NAME(state,temp){
        state.temp=temp;
    }
  },
  actions: {
  
  },

  getters: {
  
  },
})

export default store;
