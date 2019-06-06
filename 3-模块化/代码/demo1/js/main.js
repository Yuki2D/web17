require.config({    //基础配置
    baseUrl: "./js/libs",      //基础路径
    paths: {                //引入的依赖路径
        moduleA: "../module/moduleA",    //模块A的路径
        moduleB: "../module/moduleB"    //模块A的路径
    }
})

require(['moduleA', 'moduleB'], function(a, b){
    console.log(a);
    console.log(b);
})