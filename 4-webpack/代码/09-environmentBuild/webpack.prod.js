const merge = require('webpack-merge'); //用于合并的方法
const common = require('./webpack.common.js');  //通用配置文件

module.exports = merge(common, {
    mode: "production", //生产环境(treeShaking必须在生产环境下(会进行压缩), 且在package.json文件里面声明无副作用["sideEffects": false])
    devtool: "source-map"   //定位错误
})