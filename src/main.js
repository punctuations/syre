import Vue from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import VueMeta from "vue-meta";

Vue.use(VueMeta);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
