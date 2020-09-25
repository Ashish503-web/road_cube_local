/*
 |--------------------------------------------------------------------------
 | Razmik
 |--------------------------------------------------------------------------
 | Global Mixins
 */
import globalFunctions from "./functions/globalFunctions";
import globalConstants from "./constants/globalConstants";
export default {
    data() {
        return globalConstants
    },
    methods: globalFunctions,
}
