module.exports = {
    entry: "./index.js",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist",
        libraryTarget: "commonjs2"
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
        }, {
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader",
                options: {
                    modules: true,
                    camelCase: true
                }
            }, {
                loader: "sass-loader",
                options: {
                    includePaths: [__dirname + "/node_modules"]
                }
            }]
        }]
    }
};