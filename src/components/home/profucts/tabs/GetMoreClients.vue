<template>
    <div class="getMoreClients">
        <v-container>
            <v-row class="d-flex align-center justify-center py-0 px-2 px-md-4">
                <v-col cols="12" md="7" class="py-0 px-2 px-md-4">
                    <v-img src="../../../../assets/home/img-petins.png" max-width="542px" width="100%" height="auto" class="mx-auto mx-md-0"></v-img>
                </v-col>
                <v-col cols="12" md="5" class="py-0 px-2 px-md-4">
                    <v-img
                            src="../../../../assets/home/icon-pet.png"
                            max-width="71px"
                            width="100%"
                            height="auto"
                            class="mb-6"
                    ></v-img>
                    <h2 class="mb-6">Synergies Tool</h2>
                    <p class="mb-12">Bring partners companies on your loyalty system  with a simple e-mail invite and share common clients from both loyalties with our synergy tool. Seting up a synergy takes 5 minutes without development costs and long delays.Let your competitors work for months to compete you.</p>
                    <v-btn
                            class="text-capitalize pr-1 pl-0 btn-hover"
                            height="auto"
                            rounded
                    >
                        <p class="ma-0" style="padding: 15px 70px 15px 20px; font-size: 17px; line-height: normal; text-transform: none">Order your POS</p>
                        <v-avatar size="38" class="icon-hover">
                            <v-icon
                                    size="24"
                                    color="#fff"
                                    v-text="icons.mdiArrowRight"
                                    class="right-icon"
                            ></v-icon>
                            <v-icon
                                    size="24"
                                    color="#001266"
                                    v-text="icons.mdiArrowRight"
                                    class="right-icon"
                            ></v-icon>

                        </v-avatar>
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import { mdiArrowRight } from "@mdi/js";

    export default {
        name: "GetMoreClients",
        data: () => ({
            icons: {
                mdiArrowRight,
            }
        })
    };
</script>

<style scoped>
    .getMoreClients{
        padding-top: 100px;
    }
    h2{
        color: #142752;
        font-size: 2.176em;
        line-height: 1.3em;
    }
    p{
        font-size: 17px;
        line-height: 1.9em;
    }
    /*Hovered btn*/
    .btn-hover {
        font-size: 1em;
        background-color: white !important;
        border-radius: 150px;
        transition: all .3s ease;
        overflow: hidden;
        box-shadow: none;
        border: 1px solid #e8eaee;
    }

    .btn-hover:hover {
        border: 1px solid #142752;
        background-color: #142752 !important;
    }

    .icon-hover {
        position: absolute;
        right: 0;
        display: flex;
        width: 40px !important;
        height: 40px !important;
        background-color: #c8f2fd !important;
        transition: all .3s ease;
        justify-items: center;
        justify-content: flex-end;
    }

    .icon-hover .right-icon {
        width: 40px !important;
    }

    .btn-hover:hover .icon-hover .right-icon {
        transform: translateX(100%);
    }

    .btn-hover:hover .icon-hover {
        background-color: #0089f3 !important;
    }

    .btn-hover:hover p {
        color: white;
    }

    /*Hovered btn*/
</style>