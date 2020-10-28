import profile from "./profile";
import productCategories from "./productCategories";
import reward from "./reward";
import productPoints from "./productPoints";
import users from "./users";
import cleanerManagement from "./cleanerManagement";

export default {
    namespaced: true,
    modules: {
        profile,
        productCategories,
        reward,
        productPoints,
        users,
        cleanerManagement
    }
};
