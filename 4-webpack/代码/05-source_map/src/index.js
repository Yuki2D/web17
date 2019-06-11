import _ from "lodash";     //从lodash里面导出_
import "./style.css";
import printMe from "./print.js";

function component(){
    var elemenet = document.createElement("div");
    elemenet.innerHTML = _.join(["Hello", "webpack"], ", ");    //_来自于lodash库暴露出的符号
    elemenet.classList.add("hello");    //给元素的class列表添加一个"hello"

    var btn = document.createElement("button");
    btn.innerHTML = "点我";
    btn.onclick = printMe;

    elemenet.appendChild(btn);

    return elemenet;
}

document.body.appendChild(component());