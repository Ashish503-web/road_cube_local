import Store from "@/models/storePanel/Store.js";
import products from "./products";
import productGroups from "./productGroups";
import settings from "./settings";

class Weekday {
    constructor(weekday = {}) {
        this.name = weekday.name || "";
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
        products,
        productGroups,
        settings
    },

    state: () => ({
        store: new Store()
    }),

    mutations: {
        setStore(state, payload) {
            payload.timetable = payload.timetable.map(day => new Weekday(day));
            state.store = payload;
        },

        setQuickPayment(state, payload) {
            state.store.flags.general.quick_payment = payload;
        },

        setRedemption(state, payload) {
            state.store.company.redemption_type_id = payload;
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
        }
    },

    actions: {
        async getStore({ commit, rootState }) {
            try {
                const { data } = await Store.get(
                    rootState.storeToken,
                    rootState.storeId
                );
                console.log(data.data);
                commit("setStore", data.data);
            } catch (ex) {
                console.error(ex.response.data);
            }
        }
    }
};
