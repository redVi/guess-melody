import Vue from 'vue';
import App from './app.vue';
import router from './router';
import i18n from './plugins/i18n';
import './registerServiceWorker';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  store,
  render: h => h(App),
}).$mount('#app');
