export default class StoreDetails {
    constructor(item = {}) {
        this.name = item.name || "";
        this.address = item.address || "";
        this.lat = item.lat || 35.124233;
        this.lon = item.lon || 11.432112;
        this.zip = item.zip || null;
        this.vat_number = item.vat_number || null;
        this.email = item.email || "";
        this.primary_phone = item.primary_phone || null;
        this.parent_id = item.parent_id || 1;
        this.store_subscription_plan_id =
            item.store_subscription_plan_id || null;
        this.country_id = item.country_id || null;
        this.store_company_network_region_id = null;
    }
}
