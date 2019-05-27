const axios = require('axios')

const axiosInstance = axios.create({
  baseURL:  process.env.VUE_APP_ENV_API_URL,
});

module.exports = axiosInstance