const axios = require('axios')


const axiosInstance = axios.create({
  baseURL:  process.env.VUE_APP_ENV_API_URL,
});

axiosInstance.interceptors.response.use( (response)=>{
  return response
}, (err)=>{
  window.location.href = `/error/${err.response.status}`
  return Promise.reject(err)
})

axiosInstance.interceptors.request.use( (config)=>{
  const credenciais = JSON.parse(localStorage.getItem('credenciais'))
  config.headers.token = credenciais ? credenciais.token : ''
  return config;
}, (err)=>{
  return Promise.reject(err);
});

module.exports = axiosInstance