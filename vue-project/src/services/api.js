// api.js
import axios from 'axios'

const api = axios.create({
  baseURL: process.env.VITE_API_BASE_URL,
})

// Add interceptor
api.interceptors.request.use(
  function (config) {
    console.log('Interceptor running for:', config.url)

    // Example: Add token to all requests except login
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  function (error) {
    return Promise.reject(error)
  },
  {
    // Only run this interceptor if the URL is NOT /login
    runWhen: (config) => !config.url.includes('/auth/login'),
  },
)

export default api
