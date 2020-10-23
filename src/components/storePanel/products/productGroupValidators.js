export default {
    data() {
        return {
            success: {
                name: false,
                description: false,
                averagePrice: false,
                category: false
            },
            rules: {
                name: [
                    v => {
                        if (v) {
                            this.success.name = true;
                            return true;
                        } else return "Name is required";
                    }
                ],
                description: [
                    v => {
                        if (v) {
                            this.success.description = true;
                            return true;
                        } else return "Description is required";
                    }
                ],
                averagePrice: [
                    v => {
                        if (v) {
                            this.success.averagePrice = true;
                            return true;
                        } else return "Average Price is required";
                    },
                    v => v >= 0.1 || "Average Price must be minimum 0.1"
                ],
                category: [
                    v => {
                        if (v) {
                            this.success.category = true;
                            return true;
                        } else return "Category is required";
                    }
                ]
            }
        };
    }
};
