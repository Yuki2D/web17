const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",  //输出的文件名
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader"
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/, //匹配图片的正则表达式
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
}