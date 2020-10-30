import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = `https://api.roadcube.tk/v1/stores`;

export default class User {
    constructor(item = {}) {
        this.mobile = item.mobile || "";
        this.password = item.password || "";
        this.permissions = item.permissions || {
            homepage: false,
            transactions: {
                open: false,
                create: true,
                pending: true,
                paid: true,
                open_digital_payments: true,
                fund_closure: true,
                download_transactions: true
            },
            redemption: {
                open: false,
                redeem_voucher: true,
                coupons_overview: true,
                multiple_coupons: true
            },
            history: {
                open: false,
                points_analysis: true,
                monthly_points: true
            },
            contests: {
                open: false,
                create: true,
                update: true,
                delete: true,
                participants: true
            },
            products: {
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
            },
            coupons: {
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
            },
            settings: {
                open: false,
                profile: false,
                reward: true,
                product_points: true,
                cleaners: true,
                payment_routing: true,
                cards: true,
                subscriptions: true
            }
        };
    }

    static getModeratorPermissions = () =>
        axios.get(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/users/default-store-moderator-permissions`
        );

    static get = () =>
        axios.get(
            `${ApiEndpoint}/${localStorage.getItem("storeId")}/users/all`
        );

    static getItem = id =>
        axios.get(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/users/${id}/profile`
        );

    static enablePermissions = id =>
        axios.put(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/users/${id}/enable-permissions`
        );

    static disablePermissions = id =>
        axios.delete(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/users/${id}/disable-permissions`
        );

    static create = item =>
        axios.post(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/users/create-store-moderator`,
            item
        );

    static update = (id, item) =>
        axios.put(
            `${ApiEndpoint}/${localStorage.getItem("storeId")}/products/${id}`,
            item
        );

    static delete = id =>
        axios.delete(
            `${ApiEndpoint}/${localStorage.getItem("storeId")}/products/${id}`
        );
}
