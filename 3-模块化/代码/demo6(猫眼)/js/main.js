require.config({
    baseUrl: "./js/libs",   //基础路径
    paths: {
        text: "./text",
        domReady: "./domReady",
        i18n: "./i18n",
        jquery: "./jq",
        AT: "./artTemplate",
        home: "../modules/home"
    }
})

// 通过text!html文件路径可以获取到html文件
require(['domReady','home'], function(domReady,home){
    domReady(async function(){
        // console.log(home);
    })
})