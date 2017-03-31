module.exports = {
    entry: "./index.js",
    output: {
        filename: "bundle.js",
        library: "materialComponentMithril",
        libraryTarget: "umd",
        path: __dirname + "/dist"
    },
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