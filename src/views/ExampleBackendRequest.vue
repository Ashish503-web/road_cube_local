<template>
    <div>
        <h1>Example Requests</h1>
        <p>open console</p>
    </div>
</template>
<script>
import {
    deleteExample,
    getExample,
    patchExample,
    postExample,
    putExample
} from "@/endponits/exampleBackendRequestEndpoints";
export default {
    created() {
        /**
         * Get Items Example
         */
        this.globalGetItem(getExample).then(response => {
            console.log("Get Items Example", response);
        });
        /**
         * Create post method Example
         */
        this.globalCreateItem(postExample).then(response => {
            console.log("Post update Item Example", response);
        });
        /**
         * Put update Item Example
         */
        this.globalEditItemWithPutMethod(putExample).then(response => {
            console.log("Put update Item Example", response);
        });
        /**
         * Patch update Item Example
         */
        this.globalEditItemWithPatchMethod(patchExample).then(response => {
            console.log("Patch update Item Example", response);
        });
        /**
         * Delete  Example
         */
        this.globalDeleteItem(deleteExample).then(response => {
            console.log("Delete Example", response);
        });
    }
};
</script>
