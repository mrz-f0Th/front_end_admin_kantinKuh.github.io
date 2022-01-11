import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueToast from "vue-toast-notification";
import store from './store'

import './index.css'
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.use(VueToast);
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
