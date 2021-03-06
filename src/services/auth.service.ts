import api from './api'

export const register = (username: string, email: string, password: string) => {
  return api.post('signup', {
    username,
    email,
    password,
  })
}

export const login = async (username: string, password: string) => {
  return await api
    .post('signin', {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data))
      }

      return response.data
    })
}

export const logout = () => {
  localStorage.removeItem('user')
}

export const getCurrentUser = () => {
  const userStr = localStorage.getItem('user')
  if (userStr) return JSON.parse(userStr)

  return null
}

export const isLoggedIn = () => {
  return getCurrentUser() ? true : false
}
