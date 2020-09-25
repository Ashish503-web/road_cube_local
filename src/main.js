import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import vuetify from "./plugins/vuetify";
import VueMask from "v-mask";

Vue.use(VueMask);

Vue.config.productionTip = false;
/**
 * Axios
 */
require('./axios');
/**
 * mixins
 */
import globalMixin from "./mixins/globalMixin";
Vue.mixin(globalMixin);
new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount("#app");
