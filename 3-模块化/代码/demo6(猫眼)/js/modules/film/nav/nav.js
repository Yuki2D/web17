require.config({
    paths: {
        nowplaying: "../modules/film/nowplaying/nowplaying",
        commingsoon: "../modules/film/commingsoon/commingsoon",
    }
})
define(["text!./nav.html", "AT", "nowplaying", "commingsoon"], function(html, AT, nowplaying, commingsoon) {
    function initView(){
        let data = {
            position: "深圳",
            list: [
                {"name": "正在热映"},
                {"name": "即将上映"},
            ]
        };
        // 1.将数据渲染到模板
        let newHtml = AT.render(html, data);
        $("#nav").html(newHtml);

        $("#nav li").eq(0).addClass("active");   //初始化电影激活样式
        nowplaying.initView();    //初始化电影视图
    
        // 绑定点击事件
        $("#nav li").click(function(){
            $(this).addClass("active").siblings().removeClass();    //点击切换class
            // 渲染对应的模块
            console.log($(this).index())
            switch($(this).index()){
                case 0: nowplaying.initView();
                break;
                case 1: commingsoon.initView(); //即将上映视图初始化
                break;
            }
        })
    }
    return {initView}
});