import _ from "lodash";     //从lodash里面导出_
import "./style.css";
import icon from "../asset/webpack_logo.jpg";

function component(){
    var elemenet = document.createElement("div");
    elemenet.innerHTML = _.join(["Hello", "webpack"], ", ");    //_来自于lodash库暴露出的符号
    elemenet.classList.add("hello");    //给元素的class列表添加一个"hello"
    var img = new Image();  //创建图片
    img.src = icon;
    elemenet.appendChild(img);
    return elemenet;
}

document.body.appendChild(component());