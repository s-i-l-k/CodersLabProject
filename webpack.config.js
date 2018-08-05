const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    watch:	true,
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    }
}