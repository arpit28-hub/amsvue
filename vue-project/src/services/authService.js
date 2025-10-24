import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
})

const data = {
  username: 'My New Product',
  password: 99.99,
}

// apiClient.post("/", data)
//   .then(res => console.log(res.data))
//   .catch(err => console.error(err));

export default {
  async loginUser(username, password) {
    try {
      const response = await apiClient.post('/auth/login', { username, password })
      return response.data
    } catch (error) {
      throw error
    }
  },
}
