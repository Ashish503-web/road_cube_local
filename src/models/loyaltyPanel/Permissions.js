export default class Permissions {
    constructor(item = {}) {
        this.homepage = {
            read: item.homepage.read
        };
        this.stores = {
            read: item.stores.read,
            create: item.stores.create,
            update: item.stores.update,
            delete: item.stores.delete,
            financial: item.stores.financial,
            app: item.stores.app,
            admin_panel: item.stores.admin_panel,
            debts: {
                read: item.stores.debts.read,
                monthly_invoice: item.stores.debts.monthly_invoice,
                redemption_invoice: item.stores.debts.redemption_invoice
            },
            financial_limits: {
                read: item.stores.financial_limits.read,
                update: item.stores.financial_limits.update
            },
            network_regions: {
                read: item.stores.network_regions.read,
                update: item.stores.network_regions.update,
                create: item.stores.network_regions.create,
                delete: item.stores.network_regions.delete
            }
        };
        this.company = {
            settings: {
                read: item.company.settings.read,
                create: item.company.settings.create,
                delete: item.company.settings.delete,
                update: item.company.settings.update
            }
        };
        this.subscriptions = {
            stores: item.subscriptions.stores,
            plans: {
                read: item.subscriptions.plans.read,
                update: item.subscriptions.plans.update,
                create: item.subscriptions.plans.create,
                delete: item.subscriptions.plans.delete
            },
            payment_methods: {
                create: item.subscriptions.payment_methods.create,
                delete: item.subscriptions.payment_methods.delete
            }
        };
        this.connections = {
            read: item.connections.read
        };
        this.products = {
            read: item.products.read,
            create: item.products.create,
            update: item.products.update,
            delete: item.products.delete,
            order: item.products.order,
            products_per_store: item.products.products_per_store,
            tag: {
                read: item.products.tag.read,
                create: item.products.tag.create,
                update: item.products.tag.update,
                delete: item.products.tag.delete
            },
            categories: {
                read: item.products.categories.read,
                create: item.products.categories.create,
                update: item.products.categories.update,
                delete: item.products.categories.delete
            }
        };
        this.customers = {
            read: item.customers.read,
            create: item.customers.create,
            update: item.customers.update,
            delete: item.customers.delete,
            filters: {
                create: item.customers.filters.create,
            }
        };
        this.users = {
            create: item.users.create,
            delete: item.users.delete,
            read: item.users.read,
            update: item.users.update
        };
        this.profile = {
            read: item.profile.read
        };
        this.statistics = {
            read: item.statistics.read
        };
        this.gift_categories = {
            read: item.gift_categories.read,
            create: item.gift_categories.create,
            update: item.gift_categories.update,
            delete: item.gift_categories.delete,
            status: {
                pending: item.gift_categories.status.pending,
                sent: item.gift_categories.status.sent
            }
        };
        this.gifts = {
            read: item.gifts.read,
            create: item.gifts.create,
            update: item.gifts.update,
            delete: item.gifts.delete,
            supplier: {
                create: item.gifts.supplier.create
            }
        };
        this.coupons = {
            goal: {
                read: item.coupons.goal.read,
                create: item.coupons.goal.create,
                delete: item.coupons.goal.delete
            },
            voucher: {
                read: item.coupons.voucher.read,
                create: item.coupons.voucher.create,
                update: item.coupons.voucher.update,
                delete: item.coupons.voucher.delete
            },
            product: {
                read: item.coupons.product.read,
                create: item.coupons.product.create,
                update: item.coupons.product.update,
                delete: item.coupons.product.delete
            },
            visit: {
                read: item.coupons.visit.read,
                create: item.coupons.visit.create,
                update: item.coupons.visit.update,
                delete: item.coupons.visit.delete
            },
            receipt_scan: {
                read: item.coupons.receipt_scan.read,
                create: item.coupons.receipt_scan.create,
                delete: item.coupons.receipt_scan.delete
            },
            multiple: {
                read: item.coupons.multiple.read,
                create: item.coupons.multiple.create,
                update: item.coupons.multiple.update,
                delete: item.coupons.multiple.delete
            }
        };
        this.contests = {
            read: item.contests.read,
            create: item.contests.create,
            delete: item.contests.delete,
            update: item.contests.update,
            participants: item.contests.participants
        };
        this.campaigns = {
            read: item.campaigns.read,
            create: item.campaigns.create,
            delete: item.campaigns.delete,
            update: item.campaigns.update
        };
    }
}
