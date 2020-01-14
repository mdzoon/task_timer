import Vue from 'vue'
import App from './App.vue'
import store from './store/store.js'
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = true

Vue.use(Bootstrap)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
