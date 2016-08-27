// 判断浏览器是否支持localStorage
if (window.localStorage) {
    // alert('你的浏览器支持localStorage!');
} else {
    alert('浏览器不支持localStorage!');
}
var aaa;
var colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00"];
var index = 0;
// 获得当前标签并改变主题色
var cla = document.getElementById("skin-btn");
var clb = document.getElementById("skinnn");
var clb1 = document.getElementById("skinn1");
var clb2 = document.getElementById("skinn2");
var clb3 = document.getElementById("skinn3");
var clb4 = document.getElementById("skinn4");
var clb5 = document.getElementById("skinn5");
var clb6 = document.getElementById("skinn6");
var clc = document.getElementById("topp");


// 如何localStorage有主题色值，则采用当前主题
console.log(window.localStorage.getItem('cla'));
if (window.localStorage.getItem('cla')) {
    aaa = window.localStorage.getItem('cla');

    cla.style.color = aaa;
    clb.style.backgroundColor = aaa;
    clb1.style.color = aaa;
    clb2.style.color = aaa;
    clb3.style.color = aaa;
    clb4.style.color = aaa;
    clb5.style.color = aaa;
    clb6.style.color = aaa;
    // 导航横线 背景色
    clc.style.borderColor = aaa;
}

// 点击换肤按钮的换色方法
function changeColor() {
    // 获取颜色代码
    aaa = colors[index++];

    // 改变背景颜色
    cla.style.color = aaa;
    cla.style.bgColor = aaa;
    clb.style.backgroundColor = aaa;
    clb1.style.color = aaa;
    clb2.style.color = aaa;
    clb3.style.color = aaa;
    clb4.style.color = aaa;
    clb5.style.color = aaa;
    clb6.style.color = aaa;
    // 导航横线 背景色
    clc.style.borderColor = aaa;
    console.log(clc);


    if (index == colors.length) {
        index = 0;
    };

    // 将当前的主题色值 存储到localStorage中
    window.localStorage.setItem('cla', aaa);
    console.log(window.localStorage.getItem('cla'));


}
