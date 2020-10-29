import transactions from "./transactions";
import history from "./history";
import addContest from "./addContest";
import products from "./products";
import productGroups from "./productGroups";
import coupons from "./coupons";
import settings from "./settings";

import Store from "@/models/storePanel/Store.js";

class Weekday {
    constructor(weekday = {}) {
        this.open = false;
        if (weekday.day === 0) this.day = 0;
        else this.day = weekday.day || null;
        this.type = weekday.type || "";
        if (weekday.type === "regular") {
            weekday.shifts.push([]);
            this.shifts = weekday.shifts;
        } else {
            this.shifts = weekday.shifts || [[], []];
        }
    }
}

export default {
    namespaced: true,
    modules: {
        transactions,
        history,
        addContest,
        products,
        productGroups,
        coupons,
        settings
    },

    state: () => ({
        store: new Store()
    }),

    getters: {
        store: state => state.store
    },

    mutations: {
        setStore(state, payload) {
            payload.timetable = payload.timetable.map(day => new Weekday(day));
            state.store = payload;
        },

        setLogo(state, payload) {
            state.store.logo = payload;
        },

        setMapLogo(state, payload) {
            state.store.map_logo = payload;
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

        setTimetable(state, payload) {
            payload = payload.map(day => new Weekday(day));
            state.store.timetable = payload;
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
        async getStore({ commit }) {
            try {
                const { data } = await Store.get();

                console.log(data.data);

                localStorage.setItem("companyId", data.data.company.store_id);
                commit("setStore", data.data);
            } catch (ex) {
                console.error(ex.response.data);
            }
        }
    }
};
