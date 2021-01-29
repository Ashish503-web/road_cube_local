import paymentMethods from "./paymentMethods";
import storeSubscriptions from "./storeSubscriptions";
import registrationPlans from "./registrationPlans";


export default {
    namespaced: true,
    modules: {
        paymentMethods,
        storeSubscriptions,
        registrationPlans
    }
};
