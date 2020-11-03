export default class Permissions {
    constructor(permissions = {}) {
        this.homepage = permissions.homepage || false;
        this.transactions = permissions.transactions || {
            open: false,
            create: true,
            pending: true,
            paid: true,
            open_digital_payments: true,
            fund_closure: true,
            download_transactions: true
        };
        this.redemption = permissions.redemption || {
            open: false,
            redeem_voucher: true,
            coupons_overview: true,
            multiple_coupons: true
        };
        this.history = permissions.history || {
            open: false,
            points_analysis: true,
            monthly_points: true
        };
        this.contests = permissions.contests || {
            open: false,
            create: true,
            update: true,
            delete: true,
            participants: true
        };
        this.products = permissions.products || {
            open: false,
            create: true,
            update: true,
            delete: true,
            order: true,
            group: {
                open: false,
                create: true,
                update: true,
                delete: true
            }
        };
        this.coupons = permissions.coupons || {
            open: false,
            goal: {
                open: false,
                create: true,
                delete: true
            },
            voucher: {
                open: false,
                create: true,
                update: true,
                delete: true
            },
            product: {
                open: false,
                create: true,
                update: true,
                delete: true
            },
            visit: {
                open: false,
                create: true,
                update: true,
                delete: true
            },
            discount: {
                open: false,
                create: true,
                update: true,
                delete: true
            },
            multiple: {
                open: false,
                create: true,
                update: true,
                delete: true
            }
        };
        this.settings = permissions.settings || {
            open: false,
            profile: false,
            reward: true,
            product_points: true,
            cleaners: true,
            payment_routing: true,
            cards: true,
            subscriptions: true
        };
    }
}
