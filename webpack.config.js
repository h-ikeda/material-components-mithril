/*eslint-env node */

var babiliWebpackPlugin = require("babili-webpack-plugin");

module.exports = {
    entry: {
        dist: "./index.js",
        "test/temp": "./test/index.js",
        "docs/script": "./examples/index.js"
    },
    output: {
        filename: "[name]/bundle.js",
        library: "materialComponentsMithril",
        libraryTarget: "umd",
        path: __dirname
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: "babel-loader",
                options: {
                    presets: ["env"]
                }
            }]
        }]
    },
    plugins: [
        new babiliWebpackPlugin()
    ]
};