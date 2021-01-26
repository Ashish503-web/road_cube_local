export default class UIPermissions {
    constructor(item = {}) {
        this.campaigns = { open: false, ...item.campaigns } || {
            open: false,
            read: true,
            create: true,
            delete: true,
            update: true
        };
        this.company = { open: false, settings: { open: false, ...item.company.settings }, } || {
            open: false,
            settings: {
                read: true,
                create: true,
                delete: true,
                update: true
            },
        };
        this.connections = { open: false, ...item.connections } || {
            open: false,
            read: true
        };
        this.contests = { open: false, ...item.contests } || {
            open: false,
            read: true,
            create: true,
            delete: true,
            update: true,
            participants: true
        };
        this.coupons = {
            open: false,
            goal: { open: false, ...item.coupons.goal },
            voucher: { open: false, ...item.coupons.voucher },
            product: { open: false, ...item.coupons.product },
            visit: { open: false, ...item.coupons.visit },
            multiple: { open: false, ...item.coupons.multiple },
            receipt_scan: { open: false, ...item.coupons.receipt_scan }
        } || {
            open: false,
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
            receipt_scan: {
                read: true,
                create: true,
                delete: true
            },
            multiple: {
                read: false,
                create: false,
                update: false,
                delete: false
            }
        };
        this.products = {
            open: false,
            ...item.products,
            tag: { open: false, ...item.products.tag },
            categories: { open: false, ...item.products.categories }
        } || {
            open: false,
            read: true,
            create: true,
            update: true,
            delete: true,
            order: true,
            products_per_store: true,
            tag: {
                read: true,
                create: true,
                update: true,
                delete: true
            },
            categories: {
                read: true,
                create: true,
                update: true,
                delete: true
            }
        };
        this.customers = {
            open: false,
            ...item.customers,
            filters: { open: false, ...item.customers.filters }
        } || {
            open: false,
            read: true,
            create: true,
            update: true,
            delete: true,
            filters: {
                create: true
            }
        };
        this.gift_categories = {
            open: false,
            ...item.gift_categories,
            status: { open: false, ...item.gift_categories.status }
        } || {
            open: false,
            read: true,
            create: true,
            update: true,
            delete: true,
            status: {
                pending: true,
                sent: true
            }
        };
        this.gifts = {
            open: false,
            ...item.gifts,
            status: { open: false, ...item.gifts.supplier }
        } || {
            open: false,
            read: true,
            create: true,
            update: true,
            delete: true,
            supplier: {
                create: true
            }
        };
        this.homepage = { open: false, ...item.homepage } || {
            open: false,
            read: true
        };
        this.profile = { open: false, ...item.profile } || {
            open: false,
            read: true
        };
        this.statistics = { open: false, ...item.statistics } || {
            open: false,
            read: true
        };
        this.stores = {
            open: false,
            ...item.stores,
            debts: { open: false, ...item.stores.debts },
            financial_limits: { open: false, ...item.stores.financial_limits },
            network_regions: { open: false, ...item.stores.network_regions }
        } || {
            open: false,
            read: true,
            create: true,
            update: true,
            delete: true,
            financial: true,
            app: true,
            admin_panel: true,
            debts: {
                read: true,
                monthly_invoice: true,
                redemption_invoice: true
            },
            financial_limits: {
                read: true,
                update: true
            },
            network_regions: {
                read: true,
                update: true,
                create: true,
                delete: true
            }
        };
        this.subscriptions = {
            open: false,
            ...item.subscriptions,
            payment_methods: { open: false, ...item.subscriptions.payment_methods },
            plans: { open: false, ...item.subscriptions.plans }
        } || {
            open: false,
            stores: true,
            payment_methods: {
                create: true,
                delete: true
            },
            plans: {
                read: true,
                update: true,
                create: true,
                delete: true
            }
        };
        this.users = { open: false, ...item.users } || {
            open: false,
            create: true,
            delete: true,
            read: true,
            update: true
        };
    }
}
