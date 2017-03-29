var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./test__index.js",
    output: {
        filename: './test__bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({
        title: "material-components-mithril | Examples"
    })],
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: "babel-loader",
                options: {
                    presets: ["env", "babili"]
                }
            }]
        }]
    }
};