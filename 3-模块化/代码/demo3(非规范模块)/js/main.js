require.config({    //基础配置
    baseUrl: "./js/libs",      //基础路径
    paths: {                //引入的依赖路径
        moduleA: "../module/moduleA",    //模块A的路径
        moduleB: "../module/moduleB",    //模块B的路径
        moduleC: "../module/moduleC",    //模块C的路径
        moduleD: "../module/moduleD",    //模块D的路径
        jquery: "./jq"      //jq的路径
    },  
    shim: {     //用于加载非规范模块
        'moduleD': {
            deps: ['jquery'],
            exports: 'myname'
        }
    }
})

require(['moduleA', 'moduleB', 'moduleC', 'moduleD'], function(a, b, c, d){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
})