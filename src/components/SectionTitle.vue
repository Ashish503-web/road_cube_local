<template>
    <v-toolbar flat outlined height="92">
        <v-toolbar-title class="text-h5 secondary--text">
            {{ $route.name }}
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-icon color="secondary" size="60" v-text="icon"></v-icon>
    </v-toolbar>
</template>

<script>
import {
    mdiViewList,
    mdiGift,
    mdiTrophyVariant,
    mdiPackageVariantClosed
} from "@mdi/js";

export default {
    name: "SectionTitle",

    data: () => ({
        icons: {
            mdiViewList,
            mdiGift,
            mdiTrophyVariant,
            mdiPackageVariantClosed
        }
    }),

    computed: {
        icon() {
            let icon = "mdi";

            switch (this.$route.name) {
                case "Category Management":
                    icon += "ViewList";
                    break;
                case "Gift Status":
                    icon += "Gift";
                    break;
                case "Catalog Management":
                    icon += "TrophyVariant";
                    break;
                case "Supplier Management":
                    icon += "PackageVariantClosed";
            }

            return this.icons[icon];
        }
    }
};
</script>
