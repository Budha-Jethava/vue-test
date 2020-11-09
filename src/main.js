import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import routes from './routes';



Vue.config.productionTip = false
Vue.use(VueRouter)
const router = new VueRouter({routes});

new Vue({
 
  render: h => h(App),
  router,
}).$mount('#app')

Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

