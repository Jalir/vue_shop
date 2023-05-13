import Vue from 'vue'
import App from './App.vue'
import router  from '@/router'
import '@/assets/css/normalize.css'
import '@/assets/css/common.less'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
