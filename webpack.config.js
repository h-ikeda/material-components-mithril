module.exports = {
    entry: "./index.js",
    output: {
        filename: "bundle.js",
        library: "materialComponentsMithril",
        libraryTarget: "umd",
        path: __dirname + "/dist"
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
        new (require("babili-webpack-plugin"))()
    ]
};