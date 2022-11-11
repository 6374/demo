// 可视宽度/固定大小 * 1rem等于多少px 100px
// 打开网页时执行
window.onload = function () {
    getRem(750, 100)
}
// getRem(750,100)
// 实时监测浏览器的大小


window.onresize = function () {
    getRem(750, 100)
}

function getRem(pwidth, prem) {
    // 获取html元素
    var html = document.querySelector("html");
    // 浏览器宽度
    var obody = document.body.clientWidth || document.documentElement.clientHeight;
    // 改变html的字体大小
    num = obody / pwidth * prem
    if(num<100){
        html.style.fontSize = num + "px";
    }else{
        html.style.fontSize = 100 + "px";
    }
}

