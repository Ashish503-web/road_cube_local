export default class TransactionProduct {
    constructor(item = {}) {
        this.product_id = item.product_id || null;
        this.reward_type_id = item.reward_type_id || null;
        this.name = item.name || { el: "", en: "", it: "" };
        this.retail_price = item.retail_price || null;
        this.quantity = item.quantity || null;
        this.success = false;
        if (this.reward_type_id === 4) {
            this.rules = [
                v => {
                    if (v >= 0.1) {
                        this.success = true;
                        return true;
                    } else if (!v) {
                        this.success = false;
                        return "Purchase price is required";
                    } else return "Purchase Price must be minimum 0.1";
                }
            ];
        } else {
            this.rules = [
                v => {
                    if (v >= 1) {
                        this.success = true;
                        return true;
                    } else if (!v) {
                        this.success = false;
                        return "Quantity is required";
                    } else return "Quantity must be minimum 1";
                }
            ];
        }
    }
}
