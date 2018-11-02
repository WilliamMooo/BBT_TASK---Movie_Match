// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import VueClipboard from 'vue-clipboard2';
import App from './App';
import router from './router';
import global from './global';

Vue.use(VueClipboard);

Vue.prototype.axios = axios;

Vue.prototype.global = global;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
