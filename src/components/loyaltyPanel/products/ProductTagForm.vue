<template>
    <b-card
        :title="title"
        :loading="loading"
        :error-message="errorMessage"
        @cancel="$emit('cancel')"
        @submit="mode === 1 ? create() : update()"
    >
        <b-text-field v-model="productTag.name" label="Name"></b-text-field>

        <b-text-field v-model="productTag.code" label="Code"></b-text-field>
    </b-card>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
    name: "ProductTagForm",

    props: {
        mode: Number,
    },

    computed: {
        ...mapState([
            "loading",
            "errorMessage",
            "resetSuccess",
            "resetValidation",
        ]),
        ...mapState("loyaltyPanel/productsTags", ["categories", "productTag"]),

        lang() {
            return this.$route.params.lang;
        },

        title() {
            return this.mode === 1 ? "New Product Tag" : "Update Product Tag";
        },
    },

    methods: {
        ...mapMutations(["setResetSuccess", "setResetValidation"]),
        ...mapActions("loyaltyPanel/productsTags", ["create", "update"]),
    },
};
</script>
