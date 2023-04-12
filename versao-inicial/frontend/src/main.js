import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORARIO!!!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkRhaW5hcmEgS3Jld2VyIiwiZW1haWwiOiJkYWluYXJhX2tyZXdlckBob3RtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE2ODEzMjAyNzQsImV4cCI6MTY4MTU3OTQ3NH0.b3Nz5ai5A_t8RqcI3vOC-On9vTEzCUfoe7nZeHZab-o'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')