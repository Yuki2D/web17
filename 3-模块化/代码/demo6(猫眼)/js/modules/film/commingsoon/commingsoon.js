define(["text!./commingsoon.html", "AT", "loadData"], function(html, AT, loadData) {
    function initView(){
        loadData.getData("/maoyancommingsoon").then(res=>{
            let arr = res.coming;
            let obj = {};
            let titles = [];    //所有不重复的comingTitle
            let myobj = [];     //存放整理好数据的数组
            arr.forEach(item=>{
                let title = item.comingTitle;
                titles.push(title);
                if(obj[title]){
                    obj[title].push(item);
                }else{
                    obj[title] = [item]
                }
            })
            let totalTitle = [...new Set(titles)];
            totalTitle.forEach(one=>{
                myobj.push({"title": one, "content": obj[one]})
            })
            console.log(myobj); //归类好的数据
            
            loadData.getData("/maoyanExpect").then(res =>{
                let data = {
                    coming: res.coming,  //最受期待
                    commingsoon: myobj
                }
                let newHtml = AT.render(html, data);
                $("#film_content").html(newHtml);
            })
        });
    }
    return {initView}
});