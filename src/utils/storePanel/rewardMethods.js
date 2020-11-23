export default {
    data: () => ({
        rewardMethods: [
            {
                name: { el: "", en: "Loyalty Card Phone Number", it: "" },
                description: {
                    el: "",
                    en:
                        "Send points manually either with phone number or with loyalty cards.",
                    it: ""
                },
                active: false,
                component: "SendPoints",
                updateProp: "send_points_by_card_or_phone",
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
                name: { el: "", en: "Mobile Payments", it: "" },
                description: {
                    el: "",
                    en:
                        "Reward your customers with mobile payments from your mobile app or the RoadCube",
                    it: ""
                },
                active: false,
                component: "MobilePayments",
                updateProp: "online_payments",
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
                updateProp: "scan_receipt",
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
            }
        ]
    })
};
