import Store from "@/models/storePanel/Store.js";
import addContest from "./addContest";
import products from "./products";
import productGroups from "./productGroups";
import settings from "./settings";
import transactions from "./transactions";

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
        addContest,
        transactions,
        products,
        productGroups,
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

        setQuickPayment(state, payload) {
            state.store.flags.general.quick_payment = payload;
        },

        setOrderSettings(state, payload) {
            state.store.order_settings = payload;
        },

        setRedemption(state, payload) {
            state.store.redemption_type_id = payload;
        },

        setSystemNotificationId(state, payload) {
            state.store.notify_customers.system_notification_id = payload;
        },

        setScanReceipt(state, payload) {
            state.store.flags.reward.scan_receipt = payload;
        },

        setRewardWithPresence(state, payload) {
            state.store.flags.reward.open_checkin = payload;
        },

        setMobilePayments(state, payload) {
            state.store.flags.reward.online_payments = payload;
        },

        setTimetable(state, payload) {
            payload = payload.map(day => new Weekday(day));
            state.store.timetable = payload;
        },

        setName(state, payload) {
            state.store.name = payload;
        },

        setAddress(state, payload) {
            state.store.address = payload;
        },

        setCategory(state, payload) {
            state.store.category.store_category_id = payload;
        },

        setActivity(state, payload) {
            state.store.billing_details.activity = payload;
        },

        setCountry(state, payload) {
            state.store.country.country_id = payload;
        },

        setPrimaryPhone(state, payload) {
            state.store.primary_phone = payload;
        },

        setSecondaryPhone(state, payload) {
            state.store.secondary_phone = payload;
        },

        setMobile(state, payload) {
            state.store.billing_details.mobile = payload;
        },

        setFullname(state, payload) {
            state.store.billing_details.full_name = payload;
        },

        setEmail(state, payload) {
            state.store.email = payload;
        }
    },

    actions: {
        async getStore({ commit, rootState }) {
            try {
                const { data } = await Store.get(
                    rootState.storeToken,
                    rootState.storeId
                );
                console.log(data.data,'data55555');
                commit("setStore", data.data);
            } catch (ex) {
                console.error(ex.response.data);
            }
        }
    }
};
