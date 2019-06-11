define(["text!./mine.html", "AT"], function(html, AT) {
    function initView(){
        let data = {
            title: "我的"
        }
        let newHtml = AT.render(html, data);
        $("#main").html(newHtml);
    }
    return {
        initView
    }
});