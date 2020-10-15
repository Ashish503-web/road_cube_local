import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import vuetify from "./plugins/vuetify";
import VueMask from "v-mask";
/**
 * Axios
 */
require("./axios");
Vue.use(VueMask);

/**
 * mixins
 */

import globalMixin from "./mixins/globalMixin";
Vue.mixin(globalMixin);
Vue.config.productionTip = false;

// removing focus from icons

Vue.prototype.$clearFocus = function() {
    let elems = document.getElementsByClassName(
        "v-icon notranslate v-icon--link v-icon--svg theme--light"
    );

    elems.forEach(elem => (elem.tabIndex = -1));
};

// automatic base components registration

import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

const requireComponent = require.context(
    "./components/base",
    true,
    /B[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName);

    const componentName = upperFirst(
        camelCase(
            fileName
                .split("/")
                .pop()
                .replace(/\.\w+$/, "")
        )
    );

    Vue.component(componentName, componentConfig.default || componentConfig);
});

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount("#app");
