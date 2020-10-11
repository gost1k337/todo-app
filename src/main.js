import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Loader from "./components/Loader";
import ApiService from "./common/api.service";
Vue.config.productionTip = false;

ApiService.init();

Vue.component("Loader", Loader);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
