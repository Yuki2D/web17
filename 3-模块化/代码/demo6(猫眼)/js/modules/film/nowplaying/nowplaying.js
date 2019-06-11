define(["text!./nowplaying.html", "AT", "loadData"], function(html, AT, loadData) {
    function initView(){
        loadData.getData("/maoyan").then(res=>{
            // console.log(res);
            let newHtml = AT.render(html, res);
            $("#film_content").html(newHtml);
        });
    }
    return {initView}
});