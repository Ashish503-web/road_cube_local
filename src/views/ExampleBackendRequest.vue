<template>
    <div>
        <h1>Example Requests</h1>
        <p>open console</p>
        <p>{{examples}}</p>
        <button @click="changeHandler">change store</button>
    </div>
</template>
<script>
    import {
        deleteExample,
        getExample,
        patchExample,
        postExample,
        putExample
    } from '@/endponits/exampleBackendRequestEndpoints'
    import {mapActions, mapGetters, mapState} from "vuex";
    export default {
        created() {
            /**
             * Get Items Example
             */
            this.globalGetItem(getExample).then(response => {
                console.log('Get Items Example', response)
            });
            /**
             * Create post method Example
             */
            this.globalCreateItem(postExample).then(response => {
                console.log('Post update Item Example', response)
            });
            /**
             * Put update Item Example
             */
            this.globalEditItemWithPutMethod(putExample).then(response => {
                console.log('Put update Item Example', response)
            });
            /**
             * Patch update Item Example
             */
            this.globalEditItemWithPatchMethod(patchExample).then(response => {
                console.log('Patch update Item Example', response)
            });
            /**
             * Delete  Example
             */
            this.globalDeleteItem(deleteExample).then(response => {
                console.log('Delete Example', response)
            });
        },
        methods:{
            ...mapActions({setExamples:'exampleModule/setExamples'}),
            changeHandler(){
                const data={
                    url:getExample,
                    componentThis:this
                }
               this.setExamples(data)
            }
        },
        computed: {
            ...mapState({examples: state => state.exampleModule.examples}),
        },

    }
</script>