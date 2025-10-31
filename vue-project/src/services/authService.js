import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})


export default {
  signin: async (credentials) => {
    try {
      const response = await apiClient.post('http://localhost:3001/login', credentials)
      return response.data
    } catch (error) {
      throw error
    }
  },
  signup: async (regInfo) => {
    try {
      const response = await apiClient.post('http://localhost:3001/signup', regInfo)
      return response.data
    } catch (error) {
      throw error
    }
  },
}
