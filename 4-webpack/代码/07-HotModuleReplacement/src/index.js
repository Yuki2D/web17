import printMe from "./print.js";
import "./style.css";
function component(){
    let element = document.createElement("div");
    let btn = document.createElement("button");
    element.innerHTML = ["Hello", "webpack"].join(", ");
    btn.innerHTML = "点我";
    btn.onclick = printMe;
    element.classList.add("hello");
    element.appendChild(btn);
    return element;
}
document.body.appendChild(component());

if (module.hot) {   //模块更新时触发
    module.hot.accept('./print.js', function() {    //监听当print模块更新时, 触发函数
        console.log('接收到printMe模块更新了!');
        printMe();
    })
}