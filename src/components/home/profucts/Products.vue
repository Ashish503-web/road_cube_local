<template>
    <section id="products" class="products">
        <div class="b-product-tabs-wrapper" :hidden="$vuetify.breakpoint.mdAndDown">
            <ul class="py-5 px-0 d-flex align-center justify-center">
                <li class="py-1 px-5 nav-item">
                    <a href="#Tab1" class="py-2 px-2 px-md-4 d-flex align-center">
                        <v-img src="../../../assets/home/icon-heart-tab.png" max-width="100%" width="25px" height="23px"
                               class="mr-2"></v-img>
                        <p class="ma-0">Loyalty Without Building</p>
                    </a>
                </li>
                <li class="py-1 px-5 nav-item">
                    <a href="#Tab2" class="py-2 px-2 px-md-4 d-flex align-center">
                        <v-img src="../../../assets/home/icon-plane-tab.png" max-width="100%" width="51px" height="16px"
                               class="mr-2"></v-img>
                        <p class="ma-0">Synergies Tool</p>
                    </a>
                </li>
                <li class="py-1 px-5 nav-item">
                    <a href="#Tab3" class="py-2 px-2 px-md-4-4 d-flex align-center">
                        <v-img src="../../../assets/home/icon-pet-tab.png" max-width="100%" width="29px" height="23px"
                               class="mr-2"></v-img>
                        <p class="ma-0">Get More Clients</p>
                    </a>
                </li>
            </ul>
        </div>
        <div class="b-scrollspy-tabs">
            <LoyaltyWithoutBuilding id="Tab1"/>
            <SynergiesTool id="Tab2"/>
            <GetMoreClients id="Tab3"/>
        </div>
    </section>
</template>

<script>
    import LoyaltyWithoutBuilding from "./tabs/LoyaltyWithoutBuilding";
    import SynergiesTool from "./tabs/SynergiesTool";
    import GetMoreClients from "./tabs/GetMoreClients";

    export default {
        name: "Products",
        components: { GetMoreClients, SynergiesTool, LoyaltyWithoutBuilding }
    };
</script>

<style scoped>
    p {
        font-size: 17px;
    }

    .products {
        position: relative;
        scroll-behavior: smooth;
        padding-bottom: 100px;
    }

    .b-product-tabs-wrapper {
        background-color: white;
        position: sticky;
        z-index: 100;
        margin: 0;
        top: 71px;
    }

    .b-product-tabs-wrapper ul {
        list-style-type: none;
        border-top: 1px solid #e8eaee;
        border-bottom: 1px solid #e8eaee;
    }

    .b-product-tabs-wrapper ul .nav-item {
        position: relative;
    }

    .b-product-tabs-wrapper ul .nav-item::after {
        content: '';
        display: inline-block;
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        width: 1px;
        background-color: #e8eaee;
    }

    .b-product-tabs-wrapper ul .nav-item:last-child::after {
        content: '';
        display: none;
    }

    .b-product-tabs-wrapper ul li a {
        text-decoration: none;
        color: #142752;
    }

    @media (max-width: 769px) {
        .b-product-tabs-wrapper ul .nav-item::after {
            content: '';
            display: none;
        }
    }

    .nav-item:hover p{
        color: #007bff;
    }
</style>