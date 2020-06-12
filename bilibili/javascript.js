var rt = ["最新","壹", "贰", "叁", "肆", "伍", "陆", "日"]
//此数组存放导航下蓝条的坐标位置
var po = [100,143,177,210,244,276,310,342]
//获取番剧导航的div伪数组
var fanjvNav = document.getElementsByClassName("fanjv-top-nav")[0].children;
//每个导航下的内容盒子
var fanjvBody = document.getElementsByClassName("fanjv-body");
//获取黑条
var tiao = document.getElementsByClassName("tiao")[0]
//遍历每个导航
for (var i = 0; i < fanjvNav.length; i++){
    //给每个导航 添加自定义属性index 它的值为 用来存放每个标签的索引值 给后面内容盒子用
    fanjvNav[i].setAttribute("index" , i);
    //并给每个导航标题添加鼠标事件
    // fanjvNav[i].onmouseenter = function (){
    fanjvNav[i].onclick = function (){
        for(var j = 0; j < fanjvNav.length; j++){
            //将所有导航 每个改为rt数组对应的元素
            fanjvNav[j].innerHTML = rt[j];
            fanjvNav[j].style = "";
        }
        //改为带过度时间的条条
        tiao.style = "bottom:9px;left:"+po[this.getAttribute('index')]+"px;";
        //如果点击除导航第一个 则加“周”字
        if(this.getAttribute('index') != 0){
             this.innerHTML = "周"+ rt[this.getAttribute('index')];
        }
        //如果点击导航第一个 则不加“周”字
        else{
            this.innerHTML =  rt[this.getAttribute('index')];
        }
         //单独鼠标单击的导航设置颜色 边框
        this.style = "color:rgb(0,161,214);";
        //所有内容盒子 设置为不可见 *可以和上面的清空style合并 前提是他们的长度相等
        for (var k = 0; k < fanjvBody.length; k++){
            fanjvBody[k].style = "display:none;";
        }
        //this.getAttribute('index')是每个标签对应的索引值
         fanjvBody[this.getAttribute('index')].style = "display:block;";
    }
}
//获取提示按钮的标签p
var tishi = document.getElementsByClassName("zz-tishi")[0].children[1];
console.log(tishi);
var tishi1 = document.getElementsByClassName("zz-tishi1")[0].children[1];
console.log(tishi1);
//添加鼠标事件
tishi.onclick = function(){
    this.parentNode.style = "display:none;"; 
    tishi1.parentNode.style = "displat:block;";
}
tishi1.onclick = function(){
    this.parentNode.parentNode.style = "display:none;";
}