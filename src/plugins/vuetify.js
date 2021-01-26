import Vue from "vue";
import Vuetify from "vuetify/lib";

// import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: { variations: false },
        themes: {
            light: {
                primary: "#3D6AFF",
                secondary: "#2a3042",
                accent: "#1bbae1"
                // anchor: "#8c9eff"
            }
        }
    },

    icons: {
        iconfont: "mdiSvg"
    }
});
