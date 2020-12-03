export default class TransactionProduct {
    constructor(item = {}) {
        this.product_id = item.product_id || null;
        this.reward_type_id = item.reward_type_id || null;
        this.name = item.name || { el: "", en: "", it: "" };
        this.retail_price = item.retail_price || null;
        this.quantity = item.quantity || 1;
        this.error = "";
        this.success = "";
    }
}
