export default {
    path: "collaborators",
    name: "Collaborators",
    component: () =>
        import(
            /* webpackChunkName: "collaborators" */ "@/views/loyaltyPanel/collaborators/Collaborators.vue"
        )
};
