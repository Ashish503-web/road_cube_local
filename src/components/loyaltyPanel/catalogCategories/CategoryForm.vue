<template>
    <b-card
        :title="title"
        :loading="loading"
        :error-message="errorMessage"
        @cancel="
                () => {
                    colorEdit = false
                    $emit('back')
                }
            " 
        @submit="
                () => {
                    mode === 1 ? updateItem(item) : createItem(item);
                    colorEdit = false
                }
    ">
        <b-text-field
            v-model="item.name[lang]"
            label="Category Name"
        >
            <template v-slot:append>
                <b-lang-menu v-model="lang" type="inner"></b-lang-menu>
            </template>
        </b-text-field>

        <v-row>
            <v-col cols="6" outlined>
                <div @click="colorEdit = !colorEdit">
                    <b-text-field label="Font Colour" no-top-margin v-model="item.text_color" disabled></b-text-field>
                </div>
                <v-expand-transition>
                    <v-color-picker
                    canvas-height="80"
                    hide-sliders
                    v-model="item.text_color"
                    v-show="colorEdit"
                    ></v-color-picker>
                </v-expand-transition>
            </v-col>
            
            <v-col cols="6">
                <div @click="colorEdit = !colorEdit">
                    <b-text-field label="Background Colour" no-top-margin v-model="item.bg_color" disabled></b-text-field>   
                </div>
                <v-expand-transition>
                    <v-color-picker
                    canvas-height="80"
                    hide-sliders
                    v-model="item.bg_color"
                    v-show="colorEdit"
                    ></v-color-picker>
                </v-expand-transition>
            </v-col>
        </v-row>

        <v-file-input
            label="Image Category"
            color="secondary"
            outlined
            dense
            hide-details
            v-model="item.upload"
        ></v-file-input>
        <div v-if="item.image">
            Last Uploaded <a :href="item.image">{{ item.image.substr(0, 40) }}...</a>
        </div>
    </b-card>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';

export default {
    name: "CategoryForm",
    props: ['mode', 'item', 'dialog'],
    data(){
        return{
            lang: "el",
            colorEdit: false,
            color: "#"
        }
    },
    computed: {
        ...mapState(["loading", "errorMessage"]),
        ...mapGetters({
            closeForm: "loyaltyPanel/catalogManagement/getCloseForm",
        }),
        title() {
            return this.mode === 1
                ? "Edit Category"
                : "New Category";
        },
    },
    watch:{
        closeForm(){
            this.$emit('back');
        }
    },
    methods: {
        ...mapActions({
            createItem: "loyaltyPanel/catalogManagement/create",
            updateItem: "loyaltyPanel/catalogManagement/update"
        })
    }
};
</script>
