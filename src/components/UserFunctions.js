import axios from 'axios'

axios.defaults.baseURL = 'http://api.bitebody.xyz'

export const register = newUser => {
  return axios
    .post('users', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered')
    })
}

export const login = user => {
  return axios
    .post('users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      if(response.data["error"] === "nah"){
        localStorage.setItem('usertoken', response.data)
        console.log(response.data)
        return response.data
      }
      console.log(response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}



