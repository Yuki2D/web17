const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",  //输出的文件名
        path: path.resolve(__dirname, "dist")
    }
}