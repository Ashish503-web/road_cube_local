<template>
    <v-btn
        :type="type"
        class="b-btn pl-5 pr-1"
        :class="small ? 'b-font-small' : ''"
        :height="small ? 40 : 50"
        light
        rounded
        depressed
        :loading="loading"
        :disabled="disabled"
        :to="to"
        :href="href"
    >
        <template v-slot:loader>
            <v-progress-circular
                color="secondary"
                size="24"
                width="2"
                indeterminate
            ></v-progress-circular>
        </template>

        {{ text }}
        <v-avatar
            :size="small ? 30 : 38"
            class="b-avatar"
            :class="small ? 'b-avatar--small' : 'b-avatar--normal'"
        >
            <v-icon
                size="24"
                color="#fff"
                v-text="icons[icon]"
                :class="small ? 'right-icon--small' : 'right-icon'"
            ></v-icon>
            <v-icon
                size="24"
                color="#001266"
                v-text="icons[icon]"
                :class="small ? 'right-icon--small' : 'right-icon'"
            ></v-icon>
        </v-avatar>
    </v-btn>
</template>

<script>
import { mdiArrowRight, mdiEmail, mdiPhoneInTalkOutline } from "@mdi/js";

export default {
    name: "BAnimatingBtn",

    props: {
        small: Boolean,
        type: String,
        text: String,
        icon: String,
        to: String,
        href: String,
        loading: Boolean,
        disabled: Boolean
    },

    data: () => ({
        icons: { mdiArrowRight, mdiEmail, mdiPhoneInTalkOutline }
    })
};
</script>

<style scoped>
.b-btn {
    border: 1px solid #e8eaee;
    background-color: white !important;
    color: rgba(20, 39, 82);
    font-size: 17px !important;
    font-weight: bold;
    line-height: 22px;
    text-transform: none;
    transition: all 0.3s ease;
    overflow: hidden;
}

.b-font-small {
    font-size: 16px !important;
}

.b-btn:hover {
    border: 1px solid #142752;
    background-color: #142752 !important;
    color: white;
}

.b-avatar {
    margin-left: 24px;
    background-color: #c8f2fd !important;
    transition: all 0.3s ease;
    justify-content: flex-end;
}

.b-avatar--normal {
    width: 40px !important;
    height: 40px !important;
}

.b-avatar--small {
    width: 30px !important;
    height: 30px !important;
}

.right-icon {
    width: 40px !important;
}

.right-icon--small {
    width: 30px !important;
}

.b-btn:hover .b-avatar .right-icon {
    transform: translateX(100%);
}

.b-btn:hover .b-avatar .right-icon--small {
    transform: translateX(100%);
}

.b-btn:hover .b-avatar {
    background-color: #0089f3 !important;
}
</style>
