define(["text!./film.html", "AT"], function(html, AT) {
    function initView(){
        let data = {
            title: "电影"
        }
        let newHtml = AT.render(html, data);
        $("#main").html(newHtml);
    }
    return {
        initView: initView
    }
});