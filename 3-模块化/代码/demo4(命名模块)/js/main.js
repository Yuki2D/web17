require.config({    //基础配置
    baseUrl: "./js/module",      //基础路径
    paths: {                //引入的依赖路径
        moduleA: "./moduleA",    //模块A的路径
        moduleB: "./moduleB",    //模块B的路径
        moduleC: "./moduleC",    //模块C的路径
        jquery: "../libs/jq"      //jq的路径
    }
})

require(['moduleA', 'moduleB', 'moduleC'], function(a, b, c, d){
    console.log(a);
    console.log(b);
    console.log(c);
})