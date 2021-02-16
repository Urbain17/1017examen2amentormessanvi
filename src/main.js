import Vue from 'vue'
import App from './App.vue'

import router from './router'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
Vue.config.productionTip = false

Vue.directive("copyright-directive", {
  bind: function(el) {
    let date, year;
    date = new Date;
    year = date.getFullYear();
    el.innerHTML = 'Copyright &copy: ' +  +year + ' ' +  'Test.';

  },
});



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
