const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/app/index.js",
    devtool: "inline-source-map",
    devServer: {
        static: "./dist",
        watchFiles: ["./src/app/*.html"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Todo List",
            template: "./src/app/index.html",
        }),
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    optimization: {
        runtimeChunk: "single",
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, "src"),
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
        ],
    },
};
