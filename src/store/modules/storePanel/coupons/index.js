import couponsWithTransactions from "./couponsWithTransactions";
import couponsWithCode from "./couponsWithCode";
import couponsOnProducts from "./couponsOnProducts";
import couponsWithVisits from "./couponsWithVisits";
import couponsWithDiscount from "./couponsWithDiscount";

export default {
    namespaced: true,
    modules: {
        couponsWithTransactions,
        couponsWithCode,
        couponsOnProducts,
        couponsWithVisits,
        couponsWithDiscount
    }
};
