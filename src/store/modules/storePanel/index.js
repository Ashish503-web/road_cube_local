import transactions from "./transactions";
import history from "./history";
import addContest from "./addContest";
import products from "./products";
import productGroups from "./productGroups";
import coupons from "./coupons";
import redeem from "./redeem";
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
        redeem,
        settings
    },

    state: () => ({
        loading: false,
        store: new Store()
    }),

    getters: {
        store: state => state.store
    },

    mutations: {
        setLoading(state, payload) {
            state.loading = payload;
        },

        setStore(state, payload) {
            payload.timetable = payload.timetable.map(day => new Weekday(day));
            state.store = payload;
        },

        setTransactionStatistics(state, payload) {
            state.store.statistics.total_transactions += 1;
            state.store.statistics.last_twelve_hours_payments.total_price += payload;
            state.store.statistics.last_twelve_hours_payments.total_transactions += 1;
            state.store.statistics.last_week_payments.total_price += payload;
            state.store.statistics.last_week_payments.total_transactions += 1;
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

        setFastPayment(state, payload) {
            state.store.flags.app_settings.fast_payment = payload;
        },

        setShoppingCart(state, payload) {
            state.store.shopping_cart = payload;
        },

        setRedemption(state, payload) {
            state.store.redemption_type_id = payload;
        },

        setDeliverySettings(state, payload) {
            state.store.delivery_settings = payload;
        },

        setSendPointsActivator(state, payload) {
            state.store.flags.reward.offline_transaction = payload;
        },

        setSendPoints(state, payload) {
            state.store.notify_customers.system_notification_id =
                payload.system_notification_id;
            state.store.flags.reward.offline_transaction_products =
                payload.offline_transaction_products;
            state.store.flags.reward.offline_transaction_receipt =
                payload.offline_transaction_receipt;
        },

        setPointDeliveryActivator(state, payload) {
            state.store.flags.reward.pos_points_delivery = payload;
        },

        setPointDelivery(state, payload) {
            state.store.flags.reward.pos_display_amount =
                payload.pos_display_amount;
            state.store.flags.reward.pos_goal_shopping =
                payload.pos_goal_shopping;
        },

        setMobilePayments(state, payload) {
            state.store.flags.reward.online_payment_processing = payload;
        },

        setScanReceiptActivator(state, payload) {
            state.store.flags.reward.open_receipt = payload;
        },

        setScanReceipt(state, payload) {
            state.store.billing_details.receipt_phone = payload.receipt_phone;
            state.store.billing_details.receipt_vat_number =
                payload.receipt_vat_number;
            state.store.billing_details.receipt_address =
                payload.receipt_address;
            state.store.billing_details.receipt_comp_name =
                payload.receipt_comp_name;
        },

        setRewardWithPresence(state, payload) {
            state.store.flags.reward.open_checkin = payload;
        },

        setOrders(state, payload) {
            state.store.flags.reward.orders_allowed = payload;
        }
    },

    actions: {
        async getStore({ commit }) {
            try {
                commit("setLoading", true);

                const { data } = await Store.get();

                console.log(data.data);

                localStorage.setItem("companyId", data.data.company.store_id);
                commit("setStore", data.data);
                commit("setLoading", false);
            } catch (ex) {
                console.error(ex.response.data);
            }
        }
    }
};
