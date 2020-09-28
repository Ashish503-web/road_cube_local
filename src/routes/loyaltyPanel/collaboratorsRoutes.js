export default  {
    path: "collaborators",
    name: "Collaborators",
    component: () =>
        import(
            /* webpackChunkName: "collaborators" */ "@/views/loyaltyPanel/Collaborators/Collaborators.vue"
            )
}