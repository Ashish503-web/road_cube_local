module.exports = {
    "transpileDependencies": [
        "vuetify"
    ],
    configureWebpack:{
        performance: {
            hints: false,
            maxAssetSize: 7500000,
            maxEntrypointSize: 7500000,
        },
        optimization: {
            splitChunks: {
                minSize: 10,
                maxSize: 7500000,
            }

        }
    }

};