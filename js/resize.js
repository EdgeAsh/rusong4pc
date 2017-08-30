// 现在以iPhone5为基准，分辨率为640
var bWidth;
var bHeight;
var h = document.querySelector("html");
function setSize() {

    bWidth = document.documentElement.clientWidth || document.body.clientWidth;
    bHeight = document.documentElement.clientHeight || document.body.clientHeight;
    bWidth = bWidth > 750 ? 750 : bWidth;
    console.log(bWidth)
    h.style.fontSize = Math.round(bWidth / 750 * 100) + "px";

}
setSize();
window.onresize = setSize;