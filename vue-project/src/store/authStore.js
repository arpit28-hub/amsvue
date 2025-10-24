// store/index.js
import { createStore } from "vuex";
import ApiService from "@/services/ApiService";

export default createStore({
  state() {
    return {
      user: null, // store logged-in user
    };
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    // Login action
    async login({ commit }, { username, password }) {
      try {
        // Call the API from ApiService
        const userData = await ApiService.loginUser(username, password);

        // Commit the mutation to store user data
        commit("SET_USER", userData);

        return userData; // optional: useful for the component
      } catch (error) {
        // Handle or re-throw the error to the component
        console.error("Login failed:", error.response ? error.response.data : error.message);
        throw error;
      }
    },
  },
  getters: {
    isLoggedIn(state) {
      return !!state.user;
    },
  },
});
