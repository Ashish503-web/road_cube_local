<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-card flat>
                <v-card-title>Basic Settings</v-card-title>

                <v-sheet class="b-dashed mx-3 pa-5">
                    <div class="setting-wrapper">
                        <div
                            v-for="setting in settings"
                            :key="setting.text"
                            class="pa-3 setting"
                        >
                            <h4
                                class="subtitle-2 mb-2"
                                v-text="setting.text"
                            ></h4>
                            <span class="text--secondary" v-text="setting.value"
                                >1 kanapes dwro</span
                            >
                        </div>
                    </div>
                </v-sheet>
            </v-card>

            <v-btn color="red" depressed dark class="my-5 mx-3 px-10"
                >delete</v-btn
            >
        </v-sheet>
    </v-container>
</template>

<script>
export default {
    name: "SerialShopping",

    data: () => ({
        settings: [
            { text: "Title", value: "1 kanapes dwro" },
            { text: "Description", value: "1 kanapes dwro" },
            { text: "Number of Vouchers", value: "1" },
            { text: "Number of Purchases", value: "2" },
            {
                text: "Minimum transaction limit in euro",
                value: "2"
            }
        ]
    })
};
</script>

<style scoped>
.b-dashed {
    border: 1px dashed grey;
}

.setting-wrapper {
    border: 1px solid #2a3042;
}

.setting {
    border-bottom: 1px solid #2a3042;
}

.setting:last-child {
    border-bottom: none;
}
</style>
