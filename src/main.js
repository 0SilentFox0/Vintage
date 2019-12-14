import Vue from "vue";
import App from "./App.vue";
import * as VueGoogleMaps from "vue2-google-maps";
import VueMask from "v-mask";

Vue.use(VueMask);
Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyC5KtjqzxGzaXuFH2g331j7Y7oOl1QqNWM",
    libraries: "places" // necessary for places input
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");
