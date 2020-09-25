export default {
    path: "business-profile",
    name: "BusinessProfile",
    component: () =>
        import(
            /* webpackChunkName: "businessProfile" */ "@/views/loyaltyPanel/BusinessProfile/BusinessProfile.vue"
            )
}