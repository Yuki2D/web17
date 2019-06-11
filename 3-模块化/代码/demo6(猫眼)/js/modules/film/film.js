require.config({
    paths: {
        nav: "../modules/film/nav/nav"  //导航切换
    }
})
define(["text!./film.html", "AT", "nav"], function(html, AT, nav) {
    function initView(){
        let data = {
            title: "电影"
        }
        let newHtml = AT.render(html, data);
        $("#main").html(newHtml);
        nav.initView();
    }
    return {initView}   //是{initView: initView}的解构简写
});