export default {
    data: () => ({
        rewardMethods: [
            {
                name: {
                    el: "",
                    en: "Cash Payments - Offline Transactions",
                    it: ""
                },
                description: {
                    el: "",
                    en:
                        "Send points manually either with phone number or with loyalty cards.",
                    it: ""
                },
                active: false,
                system_notification_id: null,
                component: "SendPoints",
                updateProp: "offline_transaction",
                loading: false,
                commit: "storePanel/setSendPointsActivator",
                successText: "send points activator"
            },
            {
                name: { el: "", en: "RoadCube POS", it: "" },
                description: {
                    el: "",
                    en:
                        "Let your customers get points via our IOT devices next to the cashier",
                    it: ""
                },
                active: false,
                component: "PointDelivery",
                updateProp: "pos_points_delivery",
                loading: false,
                commit: "storePanel/setPointDeliveryActivator",
                successText: "point delivery activator"
            },
            {
                name: { el: "", en: "Online Payment Processing", it: "" },
                description: {
                    el: "",
                    en:
                        "Reward your customers with online payments from your mobile app or the RoadCube",
                    it: ""
                },
                active: false,
                component: "MobilePayments",
                updateProp: "online_payment_processing",
                loading: false,
                commit: "storePanel/setMobilePayments",
                successText: "mobile payments"
            },
            {
                name: { el: "", en: "Receipt Scanning", it: "" },
                description: {
                    el: "",
                    en:
                        "Reward your customers with receipt scanning from your mobile app or the RoadCube app",
                    it: ""
                },
                active: false,
                component: "ScanReceipt",
                updateProp: "open_receipt",
                loading: false,
                commit: "storePanel/setScanReceiptActivator",
                successText: "scan receipt activator"
            },
            {
                name: { el: "", en: "Check In", it: "" },
                description: {
                    el: "",
                    en:
                        "Reward your customers with their presence in the store",
                    it: ""
                },
                active: false,
                component: "RewardWithPresence",
                updateProp: "open_checkin",
                loading: false,
                commit: "storePanel/setRewardWithPresence",
                successText: "reward with presence"
            },
            {
                name: {
                    el: "",
                    en: "Orders",
                    it: ""
                },
                description: {
                    el: "",
                    en:
                        "Activate or deactivate orders in your mobile application",
                    it: ""
                },
                active: false,
                updateProp: "orders_allowed",
                loading: false,
                commit: "storePanel/setOrders",
                successText: "orders activator"
            }
        ]
    })
};
