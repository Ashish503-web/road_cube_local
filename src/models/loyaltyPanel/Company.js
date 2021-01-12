// import API from "@/models/API";

export default class Company {
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

    // static get = () =>
    //     API().get(`/companies/${localStorage.getItem("storeId")}`);
}
