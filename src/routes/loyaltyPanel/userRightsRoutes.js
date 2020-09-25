export default {
    path: "user-rights",
    name: "UserRights",
    component: () =>
        import(
            /* webpackChunkName: "userRights" */ "@/views/loyaltyPanel/UserRights.vue"
            )
}