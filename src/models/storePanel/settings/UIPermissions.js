export default class UIPermissions {
    constructor(item = {}) {
        this.homepage = { open: false, ...item.homepage } || {
            open: false,
            read: true
        };
        this.transactions = { open: false, ...item.transactions } || {
            open: false,
            read: true,
            create: true,
            pending: true,
            paid: true,
            open_digital_payments: true,
            fund_closure: true,
            download_transactions: true
        };
        this.redemption = { open: false, ...item.redemption } || {
            open: false,
            read: true,
            redeem_voucher: true,
            coupons_overview: true,
            multiple_coupons: true
        };
        this.history = { open: false, ...item.history } || {
            open: false,
            read: true,
            points_analysis: true,
            monthly_points: true
        };
        this.contests = { open: false, ...item.contests } || {
            open: false,
            read: true,
            create: true,
            update: true,
            delete: true,
            participants: true
        };
        this.products = {
            open: false,
            ...item.products,
            group: { open: false, ...item.products.group },
            categories: { open: false, ...item.products.categories }
        } || {
            open: false,
            read: true,
            create: true,
            update: true,
            delete: true,
            order: true,
            group: {
                open: false,
                read: true,
                create: true,
                update: true,
                delete: true
            },
            categories: {
                open: false,
                read: true,
                create: true,
                update: true,
                delete: true
            }
        };
        this.coupons = {
            open: false,
            goal: { open: false, ...item.coupons.goal },
            voucher: { open: false, ...item.coupons.voucher },
            product: { open: false, ...item.coupons.product },
            visit: { open: false, ...item.coupons.visit },
            discount: { open: false, ...item.coupons.discount },
            multiple: { open: false, ...item.coupons.multiple }
        } || {
            goal: {
                read: true,
                create: true,
                delete: true
            },
            voucher: {
                read: true,
                create: true,
                update: true,
                delete: true
            },
            product: {
                read: true,
                create: true,
                update: true,
                delete: true
            },
            visit: {
                read: true,
                create: true,
                update: true,
                delete: true
            },
            discount: {
                read: true,
                create: true,
                update: true,
                delete: true
            },
            multiple: {
                read: false,
                create: false,
                update: false,
                delete: false
            }
        };
        this.settings = {
            open: false,
            ...item.settings
        } || {
            open: false,
            read: true,
            profile: true,
            reward: true,
            product_points: true,
            cleaners: true,
            payment_routing: true,
            cards: true,
            subscriptions: true
        };
    }
}
