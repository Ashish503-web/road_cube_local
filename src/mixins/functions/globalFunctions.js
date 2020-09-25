export default {
    /**
     *  Get Items
     * @param url
     * @param showSuccessMessage
     * @param successMessage
     * @param loader
     * @returns {Promise<any>}
     */
    async globalGetItem(url, showSuccessMessage = false, successMessage = null,loader=true) {
        return await new Promise((resolve, reject) => {
            window.axios.get(url).then(response => {
                resolve(response);
                showSuccessMessage ? console.log(successMessage) : null;
            }).catch(error => {
                console.log(error.message)
            }).finally(() => {

            });
        });
    },
    /**
     * Create Post method
     * @param url
     * @param data
     * @param successMessage
     * @returns {Promise<any>}
     */
    async globalCreateItem(url, data, successMessage) {
        return await new Promise((resolve, reject) => {
            window.axios.post(url, data).then(response => {
                if (response.data) {
                    resolve(response);
                    if(response.data.message){
                        successMessage = response.data.message;
                    }
                    console.log(successMessage)
                } else {
                    console.log(response.message)
                }
            }).catch(error => {
                console.log(error.message)

            }).finally(() => [
            ]);
        });
    },
    /**
     * Edit Put method
     * @param url
     * @param data
     * @param successMessage
     * @returns {Promise<any>}
     */
    async globalEditItemWithPutMethod(url,data,successMessage){
        return await new Promise((resolve, reject) => {
            window.axios.put(url, data).then(response => {
                if (response.data) {
                    resolve(response);
                } else {
                    console.log(response.message)
                }
            }).catch(error => {
                console.log(error.message)
            }).finally(() => [
            ]);
        });
    },
    /**
     * Edit Patch method
     * @param url
     * @param data
     * @param successMessage
     * @returns {Promise<any>}
     */
    async globalEditItemWithPatchMethod(url,data,successMessage){
        return await new Promise((resolve, reject) => {
            window.axios.patch(url, data).then(response => {
                if (response.data) {
                    resolve(response);
                    if(response.data.message){
                        successMessage = response.data.message;
                    }
                    console.log(successMessage)
                } else {
                    console.log(response.message)
                }
            }).catch(error => {
                console.log( error.message)
            }).finally(() => [
            ]);
        });
    },
    /**
     * Delete Item
     * @param url
     * @param showSuccessMessage
     * @param successMessage
     * @param data
     * @returns {Promise<any>}
     */
    async globalDeleteItem(url, showSuccessMessage = false, successMessage , data = {}) {
        return await new Promise((resolve, reject) => {
            window.axios.delete(url,data).then(response => {
                resolve(response);
                showSuccessMessage ? console.log(successMessage) : null;
            }).catch(error => {
                console.log(error.message)
            }).finally(() => {

            });
        });
    },
}