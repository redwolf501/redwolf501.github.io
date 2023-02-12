// 点击按钮，返回顶部
function totop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
//图片换源

//显示设置
var set=document.getElementById("set");
function showset(){
    set.style.display="block"
}
function hideset(){
    set.style.display="none"
}
//字体替换(erjian)
function seta(){
    var setce=document.getElementById("seta").checked;
    var bodyf=document.getElementsByTagName("body")[0];
    if (setce==true){bodyf.style.fontFamily='erjian';}else{bodyf.style.fontFamily='';}
}
document.cookie="seta=ture;"