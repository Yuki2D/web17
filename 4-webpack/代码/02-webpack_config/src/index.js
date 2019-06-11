import _ from "lodash";     //从lodash里面导出_
function component(){
    var elemenet = document.createElement("div");
    elemenet.innerHTML = _.join(["Hello", "webpack"], ", ");    //_来自于lodash库暴露出的符号
    return elemenet;
}

document.body.appendChild(component());