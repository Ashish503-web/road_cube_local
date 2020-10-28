import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = `https://api.roadcube.tk/v1/stores`;

export default class User {
    constructor(item = {}) {
        this.mobile = item.mobile || "48";
        this.password = item.password || "secret";
        this.permissions = item.permissions || [
            {
                homepage: true,
                transactions: {
                    create: true,
                    pending: true,
                    paid: true,
                    open_digital_payments: false,
                    fund_closure: true,
                    download_transactions: true
                },
                redemption: {
                    redeem_voucher: true,
                    coupons_overview: true,
                    multiple_coupons: true
                },
                history: {
                    points_analysis: true,
                    monthly_points: true
                },
                contests: {
                    create: true,
                    update: true,
                    delete: false,
                    participants: true
                },
                products: {
                    create: true,
                    update: true,
                    delete: true,
                    order: true,
                    group: {
                        create: true,
                        update: true,
                        delete: true
                    }
                },
                coupons: {
                    goal: {
                        create: true,
                        delete: true
                    },
                    voucher: {
                        create: true,
                        update: true,
                        delete: true
                    },
                    product: {
                        create: true,
                        update: true,
                        delete: true
                    },
                    visit: {
                        create: true,
                        update: true,
                        delete: true
                    },
                    discount: {
                        create: true,
                        update: true,
                        delete: true
                    },
                    multiple: {
                        create: true,
                        update: true,
                        delete: true
                    }
                },
                settings: {
                    profile: false,
                    reward: true,
                    product_points: true,
                    cleaners: true,
                    payment_routing: true,
                    cards: true,
                    subscriptions: true
                }
            }
        ];
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

    static create = item =>
        axios.post(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/users/create-store-moderator`,
            item
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

    static update = item =>
        axios.put(
            `${ApiEndpoint}/${localStorage.getItem("storeId")}/products/${
                item.product_id
            }`,
            item
        );

    static delete = id =>
        axios.delete(
            `${ApiEndpoint}/${localStorage.getItem("storeId")}/products/${id}`
        );
}
