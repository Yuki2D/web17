require.config({
    baseUrl: "./js/libs",   //基础路径
    paths: {
        text: "./text",
        domReady: "./domReady",
        i18n: "./i18n",
        jquery: "./jq",
        AT: "./artTemplate"
    }
})

// 通过text!html文件路径可以获取到html文件
require(['text!../modules/film.html', 'domReady', 'jquery', 'AT'], function(html, domReady, $, AT){
    domReady(async function(){
        let oDiv = document.querySelector("#container");    //页面容器
        let myhtml = html;  //模板
        let res = await $.ajax("https://www.easy-mock.com/mock/5ba06ec82ee5a7654dc13dd7/example/movieInfo"); //数据
        let dataHTML = AT.render(myhtml, res);    //渲染好数据的模板(AT指的是artTemplate暴露出的template)
        oDiv.innerHTML = dataHTML;  //将渲染好数据的模板添加到页面容器
        document.querySelector("#lang").onchange = function(){  //下拉框的value对应语言包的目录名
            require([`i18n!../../nls/${this.value}/maoyan`], function(data){
                // console.log(data);
                let newHtml = AT.render(myhtml, data);  //data指的是对应语言包的数据, 将对应数据渲染到模板中
                oDiv.innerHTML = newHtml;   //将新数据渲染的模板覆盖掉原来的innerHTML
            })
        }
    })
})