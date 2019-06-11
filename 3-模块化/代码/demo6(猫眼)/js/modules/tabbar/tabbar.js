require.config({
    paths: {    //需要在tabbar模块引入的模块路径
        film: "../modules/film/film",   //电影
        cinema: "../modules/cinema/cinema", //影院
        mine: "../modules/mine/mine",   //我的
    }
})

define(["text!./tabbar.html", "AT","jquery", "film", "cinema", "mine"], function(html, AT, $, film, cinema, mine){
    let data = {
        tablist: [
            {name: "电影", icon: "icon-dianying"},
            {name: "影院", icon: "icon-yingyuana"},
            {name: "我的", icon: "icon-wode"},
        ]
    }
    let myhtml = AT.render(html, data);
    $("#tabbar").html(myhtml);
    $("#tabbar li").eq(0).addClass("active");   //初始化电影激活样式
    film.initView();    //初始化电影视图

    // 绑定点击事件
    $("#tabbar li").click(function(){
        $(this).addClass("active").siblings().removeClass();    //点击切换class
        // 渲染对应的模块
        switch($(this).index()){
            case 1: film.initView();
            break;
            case 2: cinema.initView();
            break;
            case 3: mine.initView();
            break;
        }
    })
});