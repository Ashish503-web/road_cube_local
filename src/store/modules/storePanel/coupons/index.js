import couponsWithCode from "./couponsWithCode";
import couponsOnProducts from "./couponsOnProducts";
import couponsWithDiscount from "./couponsWithDiscount";
import couponsWithTransactions from "./couponsWithTransactions";

export default {
    namespaced: true,
    modules: {
        couponsWithCode,
        couponsOnProducts,
        couponsWithDiscount,
        couponsWithTransactions
    }
};
