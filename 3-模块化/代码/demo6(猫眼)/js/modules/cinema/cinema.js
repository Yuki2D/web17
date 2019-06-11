define(["text!./cinema.html", "AT"], function(html, AT) {
    function initView(){
        let data = {
            title: "影院"
        }
        let newHtml = AT.render(html, data);
        $("#main").html(newHtml);
    }
    return {
        initView
    }
});