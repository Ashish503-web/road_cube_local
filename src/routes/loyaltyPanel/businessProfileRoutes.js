export default {
    path: "business-profile",
    name: "BusinessProfile",
    component: () =>
        import(
            /* webpackChunkName: "businessProfile" */ "@/views/loyaltyPanel/BusinessProfile.vue"
        )
};
