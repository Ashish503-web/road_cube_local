export default class Permissions {
    constructor(item = {}) {
        this.homepage = {
            read: item.homepage.read
        };
        this.transactions = {
            read: item.transactions.read,
            create: item.transactions.create,
            pending: item.transactions.pending,
            paid: item.transactions.paid,
            open_digital_payments: item.transactions.open_digital_payments,
            fund_closure: item.transactions.fund_closure,
            download_transactions: item.transactions.download_transactions
        };
        this.redemption = {
            read: item.redemption.read,
            redeem_voucher: item.redemption.redeem_voucher,
            coupons_overview: item.redemption.coupons_overview,
            multiple_coupons: item.redemption.multiple_coupons
        };
        this.history = {
            read: item.history.read,
            points_analysis: item.history.points_analysis,
            monthly_points: item.history.monthly_points
        };
        this.contests = {
            read: item.contests.read,
            create: item.contests.create,
            update: item.contests.update,
            delete: item.contests.delete,
            participants: item.contests.participants
        };
        this.products = {
            read: item.products.read,
            create: item.products.create,
            update: item.products.update,
            delete: item.products.delete,
            order: item.products.order,
            group: {
                read: item.products.group.read,
                create: item.products.group.create,
                update: item.products.group.update,
                delete: item.products.group.delete
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
            discount: {
                read: item.coupons.discount.read,
                create: item.coupons.discount.create,
                update: item.coupons.discount.update,
                delete: item.coupons.discount.delete
            },
            multiple: {
                read: item.coupons.multiple.read,
                create: item.coupons.multiple.create,
                update: item.coupons.multiple.update,
                delete: item.coupons.multiple.delete
            }
        };
        this.settings = {
            read: item.settings.read,
            profile: item.settings.profile,
            reward: item.settings.reward,
            product_points: item.settings.product_points,
            cleaners: item.settings.cleaners,
            payment_routing: item.settings.payment_routing,
            cards: item.settings.cards,
            subscriptions: item.settings.subscriptions
        };
    }
}
