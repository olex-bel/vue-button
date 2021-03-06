import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vue-material/dist/vue-material.min.css'
import './assets/css/global.css'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueMaterial)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
