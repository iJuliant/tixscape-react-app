import axios from 'axios'
require('dotenv').config()

const axiosApiInstances = axios.create({
  baseURL: 'http://localhost:3001/backend1/api/v1'
})

// interceptor request
axiosApiInstances.interceptors.request.use(
  function(config) {
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
    return config
  },

  function(error) {
    return Promise.reject(error)
  }
)

// interceptor response
axiosApiInstances.interceptors.response.use(
  function(response) {
    return response
  },

  function(error) {
    if (error.response.status === 403) {
      if (error.response.data.msg === 'jwt expired') {
        const refreshToken = localStorage.getItem('refreshToken')
        axiosApiInstances
        .post('auth/refresh-token', { refreshToken })
        .then((res) => {
          localStorage.setItem('token', res.data.data.token)
          window.location.reload()
        })
        .catch((error) => console.log(error))
      } else {
        localStorage.clear()
        alert('Please login and verify your account first')
        window.location.href='/login'
      }
    }
    return Promise.reject(error)
  }
)

export default axiosApiInstances
