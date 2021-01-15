import stores from "./stores";
import products from "./products";
import productsTags from "./productsTags";
import customers from "./customers";
import catalogManagement from "./catalogManagement";
import userRights from "./userRights";
import businessProfile from "./businessProfile";

import Company from "@/models/loyaltyPanel/Company.js";

export default {
    namespaced: true,
    modules: {
        stores,
        products,
        productsTags,
        customers,
        userRights,
        businessProfile,
        catalogManagement
    },

    state: () => ({
        loading: false,
        company: new Company()
    }),

    getters: {
        store: state => state.store
    },

    mutations: {
        setLoading(state, payload) {
            state.loading = payload;
        },

        setCompany(state, payload) {
            state.company = payload;
        },

        setLogo(state, payload) {
            state.company.logo = payload;
        },

        setMapLogo(state, payload) {
            state.company.map_logo = payload;
        },

        setBusinessInformation(state, payload) {
            state.store.name = payload.name;
            state.store.address = payload.address;
            state.store.category.store_category_id = payload.store_category_id;
            state.store.billing_details.activity = payload.activity;
            state.store.country.country_id = payload.country_id;
            state.store.primary_phone = payload.primary_phone;
            state.store.secondary_phone = payload.secondary_phone;
            state.store.billing_details.mobile = payload.mobile;
            state.store.billing_details.full_name = payload.full_name;
            state.store.email = payload.email;
        },

        setInvoicing(state, payload) {
            state.store.billing_details.comp_name = payload.comp_name;
            state.store.billing_details.vat_number = payload.vat_number;
            state.store.billing_details.city = payload.city;
            state.store.billing_details.occupation = payload.occupation;
            state.store.billing_details.tax_office = payload.tax_office;
            state.store.billing_details.country_id = payload.country_id;
        },

        setQuickPayment(state, payload) {
            state.store.flags.general.quick_payment = payload;
        },

        setOrders(state, payload) {
            state.store.order_settings = payload;
        },

        setRedemption(state, payload) {
            state.store.redemption_type_id = payload;
        },

        setScanReceipt(state, payload) {
            state.store.flags.reward.scan_receipt = payload;
        },

        setRewardWithPresence(state, payload) {
            state.store.flags.reward.open_checkin = payload;
        },

        setMobilePayments(state, payload) {
            state.store.flags.reward.online_payments = payload;
        }
    },

    actions: {
        async getCompany({ commit }) {
            try {
                commit("setLoading", true);

                const { data } = await Company.get();

                console.log(data.data);

                commit("setCompany", data.data);
                commit("setLoading", false);
            } catch (ex) {
                console.error(ex.response.data.message);
            }
        }
    }
};
