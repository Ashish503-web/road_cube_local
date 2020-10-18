<template>
    <v-tab-item :value="$route.path">
        <h2 class="text-center mt-5 mb-5">Change the order</h2>
        <v-card class="mx-auto mt-5 mb-5" max-width="800">
            <div class="mb-5 pt-5 text-right">
                <v-btn class="mr-5" color="primary" depressed>Update</v-btn>
            </div>
            <v-list class="pr-3 pl-3" max-width="70%">
                <v-list-item-group>
                    <v-list-item
                        class="grey lighten-3 mb-1"
                        v-for="(item, i) in items"
                        :key="i"
                    >
                        <v-list-item-icon>
                            <v-icon v-text="icons.mdiSwapVerticalBold"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title
                                v-text="item.text"
                            ></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
            <div class="mb-5 pb-5 text-right">
                <v-btn class="mr-5" color="primary" depressed>Update</v-btn>
            </div>
        </v-card>
    </v-tab-item>
</template>

<script>
import { mdiSwapVerticalBold } from "@mdi/js";

export default {
    name: "ProductsSeries",
    data: () => ({
        icons: {
            mdiSwapVerticalBold
        },
        items: [
            {
                text: "dd444"
            },
            {
                text: "kst2"
            },
            {
                icon: "mdi-send",
                text: "Send"
            },
            {
                text: "Drafts"
            }
        ]
    })
};
</script>
