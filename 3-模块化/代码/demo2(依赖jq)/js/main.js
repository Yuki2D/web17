require.config({    //基础配置
    baseUrl: "./js/libs",      //基础路径
    paths: {                //引入的依赖路径
        moduleA: "../module/moduleA",    //模块A的路径
        moduleB: "../module/moduleB",    //模块A的路径
        moduleC: "../module/moduleC",    //模块A的路径
        jquery: "./jq"      //jq的路径
    }
})

require(['moduleA', 'moduleB', 'moduleC'], function(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
})