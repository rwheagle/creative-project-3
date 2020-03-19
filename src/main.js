import Vue from 'vue'
import App from './App.vue'
import router from './router'
import rdata from './myData.js'

let data = {
  recipes: rdata,
  favorites: [],
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
