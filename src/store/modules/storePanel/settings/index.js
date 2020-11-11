import profile from "./profile";
import productCategories from "./productCategories";
import reward from "./reward";
import productPoints from "./productPoints";
import users from "./users";
import paymentProviders from "./paymentProviders";
import paymentProcessing from "./paymentProcessing";
import paymentHistory from "./paymentHistory";

export default {
    namespaced: true,
    modules: {
        profile,
        productCategories,
        reward,
        productPoints,
        users,
        paymentProviders,
        paymentProcessing,
        paymentHistory
    }
};
