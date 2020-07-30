import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/tailwind.css'
import fontIcons from './fontawesome'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(fontIcons)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
