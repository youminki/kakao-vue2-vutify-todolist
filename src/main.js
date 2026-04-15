import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import store from './store'

Vue.use(Vuetify);

Vue.config.productionTip = false;

const vuetify = new Vuetify();

new Vue({
  vuetify,
  store,
  render: (h) => h(App)
}).$mount("#app");
