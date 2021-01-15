export default class UserDetails {
    constructor(item = {}) {
        this.app_provider_id = item.app_provider_id || null;
        this.full_name = item.full_name || "";
        this.mobile = item.mobile || null;
        this.referral = item.referral || "Other";
        this.tos = item.tos || false;
        this.marketing = item.marketing || false;
    }
}
