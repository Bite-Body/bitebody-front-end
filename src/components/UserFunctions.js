import axios from 'axios'
//THIS IS WHERE THE LINKAGE HAPPENS, YO!
axios.defaults.baseURL = 'https://gentle-inlet-25364.herokuapp.com'

export const register = newUser => {
  return axios
    .post('users', {
      username: newUser.username,
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const login = user => {
  return axios
    .post('users/login', { 
      username_or_email: user.username_or_email,
      password: user.password
    })
    .then(response => {
      try{
        if(response.data["Allow"] === "no"){
          return response.data
        }
        localStorage.setItem('usertoken', response.data)

        return response.data
      }
      catch(error){
        console.log(error)
      }
    })
    .catch(err => {
      console.log(err)
    })
}

export const forgotPass = cluelessUser => {
  return axios
  .post('users/forgot-password', {
    email: cluelessUser.email
  })
  .then(response => {
    return response.data
  })
  .catch(err => {
    console.log(err)
  })
}

export const resetPass = resetUser => {
  return axios
  .post('users/reset-password', {
    email: resetUser.email,
    password: resetUser.password,
    confirmed_password: resetUser.confirmed_password,
    reset_key: resetUser.reset_key
  })
  .then(response => {
    return response.data
  })
  .catch(err => {
    console.log(err)
  })
}

export const registerKey = registeringUser => {
  return axios
  .post('users/finalize-registration', {
    regKey: registeringUser.RegKey
  })
  .then(response => {
    return response.data
  })
  .catch(err => {
    console.log(err)
  })
}

export const calorieCalc = payload => {
  console.log(payload)
  return axios
    .post('calories', payload)
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err)
      return err
    })
}

