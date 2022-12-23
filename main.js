// 当网页向下滑动 40px 出现"返回顶部" 按钮

/*window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {console.log(121);
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById("tool").style.display = "block";
    } else {
        document.getElementById("tool").style.display = "none";
    }
}
*/
// 点击按钮，返回顶部
function totop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
//图片换源

//显示设置
var set=document.getElementById("set")
function showset(){
    set.style.display="block"
}
function hideset(){
    set.style.display="none"
}
//字体替换
//document.cookie="cokia1=null; expires=Thu, 23 Dec 3022 12:00:00 GMT; path=/";