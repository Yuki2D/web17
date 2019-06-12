import {cube} from "./print.js";
import "./style.css";
function component(){
    let element = document.createElement("pre");
    element.innerHTML = ["Hello webpack", "5 cubed is equal to " + cube(5)].join(", "); //(n=5; n*n*n)
    element.classList.add("hello");
    return element;
}
document.body.appendChild(component());