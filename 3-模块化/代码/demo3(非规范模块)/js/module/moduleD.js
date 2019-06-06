(function(){
    let myname = $.trim("  小红   ");
    window.myname = myname;     //不能直接将值return出去, 而应该赋值给window对象
})()