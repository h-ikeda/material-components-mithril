module.exports = {
    entry: "./test_import.js",
    output: {
        filename: "bundle_test.js",
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
    }
};