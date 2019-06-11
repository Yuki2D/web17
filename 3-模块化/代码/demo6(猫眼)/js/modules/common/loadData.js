define(function(){
    let getData = function(url){
        let baseUrl = "https://www.easy-mock.com/mock/5ba06ec82ee5a7654dc13dd7/example";
        let promise = new Promise((resolve, reject)=>{
            $.get(baseUrl+url, res=>{
                resolve(res);
            })
        })
        return promise;
    }
    return {getData};
})