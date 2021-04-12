import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

// non fonctionelle, en tout cas je n'ai aps reussi à l'implémenter
// Vue.prototype.$WEB_CALL_YELP = "https://cors-anywhere.herokuapp.com/";
// Vue.prototype.$API_KEY_YELP = "GDR-vk9Dv1X-OX1UF5CtpB2QJz14OqFcMJpXZTR-zKTYtaPrZF7TpB_Jlt20Oi_B9JQrp77JyNbtikZs0wzZ4Mi6qSHrwaRm7LvNGW8RW8HqUzpQ-_2RcDgeZxdbYHYx";
// Vue.prototype.$GOOGLE_MAPS_KEY = "AIzaSyDUEx13fhgEa-kE3huoTS-9iXRXtK0GFBI";