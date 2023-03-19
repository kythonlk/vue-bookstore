import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/modules';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';

Vue.config.productionTip = false;

Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
