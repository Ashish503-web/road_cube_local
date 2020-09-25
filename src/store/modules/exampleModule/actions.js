export default {
    setExamples({ commit, state },{componentThis,url}) {
        componentThis.globalGetItem(url).then(response => {
            console.log('Get Items Example', response)
            commit('SET_EXAMPLE',response.data)
        });
    }
}