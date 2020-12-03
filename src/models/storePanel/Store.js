import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = `${process.env.VUE_APP_DEFAULT_API_URL}/stores`;

export default class Store {
    constructor(item = {}) {
        this.billing_details = item.billing_details || {};
        this.company = item.company || {};
        this.flags = item.flags || {
            app_settings: {},
            general: {},
            reward: {}
        };
        this.notify_customers = item.notify_customers || {};
        this.category = item.category || {};
        this.country = item.country || {};
        this.order_settings = item.order_settings || {};
        this.timetable = [];
        this.statistics = item.statistics || {
            total_income: 0,
            views: {},
            last_twelve_hours_payments: [],
            last_week_payments: []
        };
    }

    static get = () =>
        axios.get(`${ApiEndpoint}/${localStorage.getItem("storeId")}`);
}
