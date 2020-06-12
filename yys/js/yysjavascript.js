//拿到所有导航
var navsum = $(".nav-sum")[0];
var wei = window.getComputedStyle(navsum , "::after");
var nav = document.getElementsByClassName("navv")[0].children[0].children;
var navBody = document.getElementsByClassName("nav-content")[0].children;
var Nav = $(".navv");
var navbd = $(".nav-content");
window.onscroll = function(){
    if(document.documentElement.scrollTop >= 60){
        Nav.style = "position:fixed;top:0;z-index:100000; width:100%;"
        navbd.style= "position:fixed;top:60px;z-index:100000"
    }
    if(document.documentElement.scrollTop < 60){
        Nav.style ="";
        navbd.style= "";
    }
}
//给每个导航添加鼠标移上事件
for(var i = 0; i < nav.length; i++){
    nav[i].setAttribute("index" , i);
    nav[i].onmouseover = function(){
       for(var j = 0; j < nav.length; j++){
           //排他
            nav[j].style = "";
            navBody[j].style = "display:none;";
       }
       //最后一个div为搜索框 所以不用添加样式
       if(this.getAttribute('index') != 12){
            this.style = "background: url('img/nav_bg1_d44f09d.jpg') no-repeat; background-size: 98px 60px;color: black;"
            navBody[this.getAttribute("index")].style = "display:block;";
        }
    }
//移出导航事件
    nav[i].onmouseout = function(){
       for(var j = 0; j < nav.length; j++){
           nav[j].style = "";
           navBody[j].style = "display:none;";
       }
    }
}
//鼠标移出导航内容盒子
for(var i = 0; i < nav.length; i++){
    //添加索引值
    navBody[i].setAttribute('in', i);
    navBody[i].onmouseover = function(){
        var index = this.getAttribute('in');
        //移上内容时 显示
        this.style = "display:block";
        //移上内容盒子时 导航样式不变
        nav[index].style = "background: url('img/nav_bg1_d44f09d.jpg') no-repeat; background-size: 98px 60px;color: black;"
    }
//移出时
    navBody[i].onmouseout = function(){
        var index = this.getAttribute('in');
        //导航和 内容盒子都消失
        this.style = "display:none"; 
        nav[index].style = '';
    }
}
// “特邀测试服”
var cs = document.getElementsByClassName("csf")[0].children[0];
//特邀测试服对应的盒子
var csres = document.getElementsByClassName("csfgg")[0];
cs.onmouseover = function(){
    csres.style = "display:block";
}
cs.onmouseout = function (){
    csres.style = "display:none";
}
//所有三角箭头
var jt = document.getElementsByClassName("ccicon");
//所有新闻导航
var jt1 = document.getElementsByTagName("h2");
//每个新闻导航添加鼠标事件 移上新闻导航触发
for(var i = 0; i < jt.length; i++){
    jt1[i].setAttribute("dex" , i);
    //移上导航
    jt1[i].onmouseenter = function(){
        var dex = this.getAttribute("dex");
        //对应的箭头触发动画
        jt[dex].style = "animation: jt .5s linear;"
    }
    //移出    **bug 没等动画结束就移出的话 动画直接停止
    jt1[i].onmouseleave = function(){
        var dex = this.getAttribute("dex");
        jt[dex].style = ""
    }
}
//包所有轮播内容的大盒子
var cont = document.getElementsByClassName("cont-gdbox")[0];
//下一批
var down = document.getElementsByClassName("down")[0];
//上一批
var up = document.getElementsByClassName("up")[0];
//翻页次数 可改
var num = 0;
down.onclick = function(){
    //点击之后 上一批 按钮显示；
    up.style = "opacity:1;pointer-events: all;"
    //记录点击次数
    num++;
    //一共3页  当到达最后一页时 
    if(num == 2){
        //下一批按钮消失
        down.style = "opacity:0;pointer-events: none;"
        //上一批按钮，放在原来下一批按钮的位置上
        up.style = "left:0;opacity:1;pointer-events: all;";
      
    }
    else{
        down.style = "opacity:1;pointer-events: all;"
    }
    //点击之后大盒子 往左平移4个轮播图大小 
    cont.style = "transform:translate("+num*(-1020)+"px,0);";
}
//点击上一批
up.onclick = function(){
    num--;
    //当前为第一页时  上一批按钮消失
    if(num == 0){
        up.style = "opacity:0;pointer-events: none;"
    }
    //只有第二页 上一批和下一批按钮都显示
    if(num < 2 && num > 0){
        up.style = "left:-56px; opacity:1;pointer-events: all;";
        down.style = "opacity:1;pointer-events: all;"
    }
    cont.style = "transform:translate("+num*(-1020)+"px,0);";
}
//给轮播图添加定时器 每5秒触发一次
 var time = setInterval(function(){
    num++;
    //所有都显示
     if(num < 2 && num > 0){
        up.style = "left:-56px; opacity:1;pointer-events: all;";
        down.style = "opacity:1;pointer-events: all;"
    }
    //最后一页 只显示上一批
     if(num == 2){
        up.style = "left:0px; opacity:1;pointer-events: all;";
        down.style = "opacity:0;pointer-events: none;"
    }
    //第一页 只显示下一批
    if(num == 3){
        up.style = "opacity:0;pointer-events: none;"
        num = 0;
        down.style = "opacity:1;pointer-events: all;"
    } 
    //每次偏移距离
    cont.style = "transform:translate("+num*(-1020)+"px,0);";
},5000);


//获取游戏攻略 三个盒子
var gl = document.getElementsByClassName("glt");
//获取三个盒子上的字
var gltext = document.getElementsByClassName("glt-text");
//节流
var st = true;
//给每个盒子添加鼠标移上事件
var times;
for(var c = 0; c < gl.length; c++){
    gltext[c].style.top = 0;
    gl[c].setAttribute("iex" , c);
    gl[c].onmouseenter = function(){
        if(st){
            st = false;
            var iex = this.getAttribute("iex");
             times = setInterval(function(){
                var top = parseInt(gltext[iex].style.top);
                gltext[iex].style = "top:"+ (top-1) +"px";
                top = parseInt(gltext[iex].style.top); 
                if(top <= -10){
                    clearInterval(times);
                    st = true;
                }
            },10);
         }
    }
    gl[c].onmouseleave = function(){
            var iex = this.getAttribute("iex");
            var times = setInterval(function(){
                var top = parseInt(gltext[iex].style.top);
                gltext[iex].style = "top:"+ (top+1) +"px";
                top = parseInt(gltext[iex].style.top); 
                if(top >= 5){
                    clearInterval(times);
                }
            },10);
         }
}

//获取攻略内容
var glnr = $(".gl-1");
//获取攻略导航
var gl1 = document.getElementsByClassName("gl1");
//每个导航添加事件
for(var i = 0; i < gl1.length; i++){
    //索引值
    gl1[i].setAttribute("index" , i);
    gl1[i].onmouseenter = function(){
        var index = this.getAttribute("index");
        //排他
        for(var j = 0; j < gl1.length; j++){
            gl1[j].className = "gl1";
            glnr[j].style = "opacity:0;pointer-events: none;"
        }
        if(index !=0){
            this.className +=" on";
            glnr[index].style = "opacity:1;transition:all .3s;position:absolute;bottom:0;"
            }
            else{
                this.className +=" on";
                glnr[index].style = "opacity:1;transition:all .3s;"
            }
         }
}

var sx = $(".sg");

var glli = $(".gl-1 ul li");

for(var i = 0; i < glli.length; i++){
    glli[i].setAttribute("index" , i);
    glli[i].onmouseenter = function (){
        var index = this.getAttribute("index");
        sx[index].style = " width: 5px; background-color: rgb(119,191,151);"
    }
    glli[i].onmouseleave = function (){
        var index = this.getAttribute("index");
        sx[index].style = " width: 1px;"
    }
}


//获取勾玉导航
var dr = $(".tr-nav-right span");
var q = 0;
var index = 0;
//图片
var drimg = $(".trimg");
var cc = true;
//每个勾玉导航添加事件
for(var i = 0; i < dr.length; i++){
    //索引值
    dr[i].setAttribute("index" , i);
    dr[i].onclick = function (){
        //事件锁
      if(cc){
          cc = false;
           index = this.getAttribute("index");
          //排他
          for(var j = 0; j < dr.length; j++){
              dr[j].className = ""; 
            }
            //点击的勾玉变红
          this.className = "op";
          //点击的勾玉导航对应的图片z轴提高
          drimg[index].style.zIndex = 2;
          //计时器实现淡入淡出
         var  timea = setInterval(function(){
             //下一张的初始透明度
                var dq = +drimg[index].style.opacity;
                //每执行一次 透明度+0.01
                drimg[index].style.opacity = dq + 0.01;

                //上一张的初始透明度
                var qd = +drimg[q].style.opacity;
                //每执行一次 透明度-0.01   **上一张和下一张同时进行
                drimg[q].style.opacity = qd - 0.01;
                //目标的透明度到1  上一张的透明度到0 测停止计时
                if(dq >= 1 || qd < 0){
                    clearInterval(timea);
                    //索引值为上一张要消失的位置 
                    q = index;
                    //开锁
                    cc = true;
                }
            },16);
      }
    }
}
   //封装淡入淡出
function lb(){
    index++;
    //特殊情况 到达最后一个图片的时候 索引值重置
    if(index == dr.length){
        index = 0;
    }
    //排他添加红勾玉
    for(var i = 0; i < dr.length; i++){
        dr[i].className = "";
    }
    dr[index].className = "op";
   //淡入淡出
   var timea = setInterval(function(){
        var dq = +drimg[index].style.opacity;
        drimg[index].style.opacity = dq + 0.01;
        var qd = +drimg[q].style.opacity;
        drimg[q].style.opacity = qd - 0.01;
        if(dq >= 1 || qd < 0){
            clearInterval(timea);
            q = index;
            cc = true;
        }
    },16);
}
//开始轮播 每三秒执行一次
var ts = setInterval(lb,3000);
//包所有的导航和内容的大盒子
var da = $(".tr-hd");
//鼠标移上 计时器停止轮播
da.onmouseenter = function(){
    clearInterval(ts);
}
//移出 重新打开轮播 !!onmouseenter 和onmouseleave 配套使用！！！！！
//onmouseover 和 onmouseout 一起使用！！ 不可以混合！
da.onmouseleave = function(){
    //不能用var 重新声明 导致计时器叠加鬼畜
    ts = setInterval(lb,3000);
}

//拿到换一批
var ad = 0;
var zp = $(".tr-hyp");
//拿到所有轮播ul
var ull = $(".tr-as ul");
//添加点击事件
var ind = 0;
zp.onclick = function(){
    if(cc){
        cc = false;
        ind++;
        if(ind == 3){
            ind = 0;
        }
        ull[ind].style.zIndex = 2;
    // 利用定时器实现淡入淡出
         var tm = setInterval(function(){
        //+号 是转数据类型为数字
            var dsd = +ull[ind].style.opacity;
            ull[ind].style.opacity = dsd + 0.01;
            var dad = +ull[ad].style.opacity;
            ull[ad].style.opacity = dad - 0.01;
            if(dsd >= 1|| dad <= 0){
                clearInterval(tm);
                ad = ind;
                cc = true;
            }
         },16);
     }
};

var sda = setInterval(zp.onclick,3000);
var bod = $(".tr-r-cont");
bod.onmouseenter = function(){
    clearInterval(sda);
}
bod.onmouseleave = function(){
    sda = setInterval(zp.onclick,3000);
}
//所有的同人作者简介 的li
var tongrenjj = document.querySelectorAll(".tr_r li");
var quan = document.querySelectorAll(".quan");
for(var i = 0; i < tongrenjj.length; i++){
    //索引值
    tongrenjj[i].setAttribute("indexx" , i);
    //移上
    tongrenjj[i].onmouseenter = function(){
     var  indexx = this.getAttribute("indexx");
       quan[indexx].style = " transform: rotate(90deg);";
    }
    //移出
    tongrenjj[i].onmouseleave = function(){
        indexx = this.getAttribute("indexx");
        quan[indexx].style = " transform: rotate(0deg);";
     }
}

//拿到换一批
var zp1 = $(".tr_huan");
var tongrenjj1 = document.querySelectorAll(".tr_r");
//添加点击事件
var js1 = 0;
var jj = 0;
var timeq;
zp1.onclick = function(){
    clearInterval(timeq);
    js1++;
    if(js1 == tongrenjj1.length){
        js1 = 0;
    }
    for(var i = 0; i < tongrenjj1.length; i++){
        tongrenjj1[i].style.pointerEvents = "none";
    }
    tongrenjj1[js1].style.zIndex = 2;
    tongrenjj1[js1].style.pointerEvents = "all";
     timeq = setInterval(function(){
        var yx = +tongrenjj1[js1].style.opacity;
        tongrenjj1[js1].style.opacity = yx+0.05;
        var yxx = +tongrenjj1[jj].style.opacity;
        tongrenjj1[jj].style.opacity = yxx-0.05;
        if(yx >= 1 && yxx <= 0){
            clearInterval(timeq);
            jj = js1;
        }
    },16);
}
//下一个
var nnext = $(".fan-next");
var uup = $(".fan-up");
var fylbox = $(".fl-body");
var ii = 0;
var st1 = true;
var stime;
nnext.onclick = function(){
    clearInterval(stime);
        ii++;
       stime = setInterval(function(){
            var nowml = parseInt(fylbox.style.marginLeft);
            fylbox.style.marginLeft = nowml - 10 + "px";
            nowml = parseInt(fylbox.style.marginLeft);
            if(nowml <= ii * -230){
                clearInterval(stime);
                fylbox.style.marginLeft = ii*-230 + "px";
            }
        },16);
        if(ii == 4){
            nnext.style = "display:none";
        }
        else if(ii < 4){
            uup.style = "display:block";
        }
}

uup.onclick = function(){
    clearInterval(stime);
        ii--;
       stime = setInterval(function(){
            var nowml = parseInt(fylbox.style.marginLeft);
            fylbox.style.marginLeft = nowml + 10 + "px";
            nowml = parseInt(fylbox.style.marginLeft);
            if(nowml >= ii * -230){
                clearInterval(stime);
                fylbox.style.marginLeft = ii*-230 + "px";
            }
        },16);
       
        if(ii > 0){
            nnext.style = "display:block";
        }
        if(ii == 0){
            uup.style = "display:none";
        }
}
//整体大盒子
var syjbig = $(".syj-box-right");
//拖动条
var tuo = $(".tuo");
//装图的ul
var syjbox = $(".syj-box-right ul");
//每个图
var boxli = $(".syj-box-right ul li");
//条条的宽啊
var jl = $(".syj-tiao").offsetWidth;
//拖动条的宽
var jl1 = $(".tuo").offsetWidth;
//移动的最大距离
var jlt = jl-jl1;
//里面有boxli.length个内容 乘以它每个内容所占的宽度 就是总宽度
// 再减它本身的宽度 再减去最后一个内容的margin-right
//就是上面内容挪到最后的长度
// 再除以下面滚动条的最大距离 就是他们之间的倍数
var end = (boxli.length*274-jl-24)/jlt;
//鼠标按下
tuo.onmousedown = function(e){
    //盒子距离当前游览器的左边距
    var a = tuo.offsetParent.offsetParent.offsetLeft;
  //鼠标距离当前盒子的左边距离
   var a1 = e.pageX-a-tuo.offsetLeft;
    document.onmousemove = function(e){
        //鼠标距离游览器最左边的距离
       var a3 = e.pageX;
        var sc = a3-a1-a;
        sc = sc <= 0 ? 0:sc;
        sc = sc >= jlt ? jlt : sc
        tuo.style.marginLeft = sc +"px";
        //内容挪动的距离为负 且内容挪动的距离 为拖快的end倍数
        syjbox.style.marginLeft = -sc*end +"px";
        sc1 = sc;
    }

}
//在页面任意位置弹起的时候 关闭移动
document.onmouseup = function(e){
    document.onmousemove = null;
}
var sc1 = 0;
syjbig.onmousewheel = function(e){
   event.preventDefault();
    if(e.deltaY > 0){
        sc1 += 13;
        tuo.style.marginLeft = sc1 +"px";
        sc1 = sc1 >= jlt ? jlt : sc1;
        syjbox.style.marginLeft = -sc1*end +"px";
    }else{
        sc1 -= 13;
        tuo.style.marginLeft = sc1 +"px";
       sc1 = sc1 <= 0 ? 0 : sc1;
       syjbox.style.marginLeft = -sc1*end +"px";

    }
}
var shenle = $(".sl");
var zuo = $(".sl-z");
var pzuo = $(".sl-zp");
var op = $(".sl-o");
zuo[0].onmousemove = function(){
    shenle.style.backgroundPosition = "0px 0px"
}
zuo[1].onmousemove = function(){
   shenle.style.backgroundPosition = "-812px 0px"
}
pzuo[0].onmousemove = function(){
    shenle.style.backgroundPosition = "-203px 0px"
}
pzuo[1].onmousemove = function(){
    shenle.style.backgroundPosition = "-609px 0px"
}
op.onmousemove = function(){
    shenle.style.backgroundPosition = "-406px 0px"
}

var shenle = $(".sl");
var sltext = $(".slt div");
shenle.onclick = function(){
    var rand = Math.round(Math.random()*5);
    for(var i = 0; i < sltext.length; i++){
        sltext[i].style = "";
        sltext[rand].style = " animation: duihua 3s ;";
    }
}


//最大的三个导航  式神主角声优
var panav = $(".pa-nav ul li");
//对应三个大导航的盒子
var bigbox = $(".ss-list > div");

for(var i = 0 ; i < panav.length; i++){
    panav[i].setAttribute("index1" , i);
    panav[i].onclick = function(){
        var index1 = this.getAttribute("index1");
        for(var j = 0; j < panav.length; j++){
            panav[j].style = "";
            bigbox[j].style = "opacity: 0;pointer-events: none;"; 
        }
        this.style = "background-color: rgb(190,157,94);color:#fff;";
        bigbox[index1].style = "opacity: 1;pointer-events:all;"
    }
}
//上一批
var ssup = $(".ss-list-box .ss-up");
//下一批
var ssnext = $(".ss-list-box .ss-next");
//装所有ul的长盒子
var ssall = $(".ss-list-box .ss-all");
//一个ul盒子的长度
var ssallul = $(".ss-list-box .ss-all ul")[0].offsetWidth;
//获取所有ul
var ssallul1 = $(".ss-list-box .ss-all ul");
//定义初始marginLeft为0
ssall.style.marginLeft = 0;
//函数防抖
var dsq;
//计数器
var add_1 = 0;
//点击下一批
ssnext.onclick = function(){
    add_1++;
    clearInterval(dsq);
   dsq =  setInterval(function(){
        var ssallml = parseInt(ssall.style.marginLeft);
        ssall.style.marginLeft = ssallml-20 + "px";
       if(ssallml <= -add_1*ssallul){
           clearInterval(dsq);
           ssall.style.marginLeft = -add_1*ssallul + "px";
       }
    },16);
    if(add_1 == ssallul1.length-1){
        ssnext.style = "display:none;";
    }
    else{
        ssup.style = "display:block;";
    }
}
//点击上一批
ssup.onclick = function(){
    add_1--;
    clearInterval(dsq);
   dsq =  setInterval(function(){
        var ssallml = parseInt(ssall.style.marginLeft);
        ssall.style.marginLeft = ssallml+20 + "px";
       if(ssallml >= -add_1*ssallul){
           clearInterval(dsq);
           ssall.style.marginLeft = -add_1*ssallul + "px";
       }
    },16);
    if(add_1 == 0){
        ssup.style = "display:none;";
    }
    else{
        ssnext.style = "display:block;";
    }
}
//所有式神导航标签
var sslist = $(".ss-list-nav ul li");
//拿所有内容盒子
var ssbox = $(".ssbox > div");
//给所有导航标签添加点击事件
for(var i = 0; i < sslist.length; i++){
    sslist[i].setAttribute("index" , i);
    sslist[i].onclick = function(){
        clearInterval(dsq);
        var index = this.getAttribute("index");
        //排他
        for(var j = 0; j < sslist.length; j++){
            sslist[j].style = "";
            ssbox[j].style = "";
        } 
        // //调回
        // ssall.style.marginLeft = 0; 

        ssbox[index].style = "opacity:1;"
        this.style = "color: rgb(190,157,94);";
    }
}



//所有主角导航
var sslist1 = $(".ss-list-nav1 ul li");
//拿到所有主角box
var zjbox = $(".zhujvebox>div");
//所有主角名字
var zjname = $(".zj-name");
//所有主角图像
var zjh = $(".zj-h");
//定时器
//上一张的索引值
var dq1 = 0;
var dq2 = 0;
var dq3 = 0;
var r1 = true;
for(var i = 0; i < sslist1.length; i++){
    sslist1[i].setAttribute("index2" , i);
    sslist1[i].onclick = function(){
        if(r1){
            r1 = false;
            index2 = this.getAttribute("index2");
            //排他
            index3 = index2;
            for(var j = 0; j < sslist1.length; j++){
                sslist1[j].style = "";
            } 
            zjbox[index2].style.zIndex = 2;
            danchupingyi(index2);
        //排他添加背景
        this.style = "color: rgb(190,157,94);";}
    }
}
var zjnext = $(".zj-next");
var zjup = $(".zj-up");
var index3  = 0;
zjnext.onclick = function(){
    if(r1){
        index3++;
        r1 = false;
    //排他
    for(var j = 0; j < sslist1.length; j++){
        sslist1[j].style = "";
    } 
    if(index3 == sslist1.length){
        index3 = 0;
    } 
    zjbox[index3].style.zIndex = 2;
    danchupingyi(index3);
    sslist1[index3].style = "color: rgb(190,157,94);";}
}
zjup.onclick = function(){
    if(r1){
        index3--;
        r1 = false;
    //排他
    for(var j = 0; j < sslist1.length; j++){
        sslist1[j].style = "";
    } 
    if(index3 == -1){
        index3 = sslist1.length-1;
    } 
    zjbox[index3].style.zIndex = 2;
    danchupingyi(index3);
    sslist1[index3].style = "color: rgb(190,157,94);";}
}
//封装淡入平移
var  zjdh;
function danchupingyi(e){
      zjdh = setInterval(function(){
        //当前点击的导航对应的内容盒子的透明度
        var zjbody = +zjbox[e].style.opacity;
        zjbox[e].style.opacity = zjbody + 0.04;
        //上一张的内容盒子的透明度
        var upzjbody = +zjbox[dq1].style.opacity;
        zjbox[dq1].style.opacity = upzjbody - 0.04;
        //移动名字
        var zjtext = setInterval(function(){
            //当前点击的主角的名字图片位置
            var nowname = parseInt(zjname[e].style.left);
            //进 往右
            zjname[e].style.left = nowname + 1 + "px";
            //上一张主角的名字图片位置
            var agoname = parseInt(zjname[dq2].style.left);
            //出 往左
            zjname[dq2].style.left = agoname - 1 + "px";
            //-100为终止位置
            if(nowname >= -100){
                clearInterval(zjtext);
                //更新上一张索引值
                dq2 = e;
                //纠正位置
                zjname[e].style.left = "-100px";
            }
        },16);
        //移动画
        var zjimg = setInterval(function(){
            //当前点击的主角画
            var nowh = parseInt(zjh[e].style.left);
            //画往左  进
            zjh[e].style.left = nowh - 2 + "px";
            //上一张的主角画
            var agoh = parseInt(zjh[dq3].style.left);
            //画往右出
            zjh[dq3].style.left = agoh + 2 + "px";
            //终止
            if(nowh <= -100){
                clearInterval(zjimg);
                //更新上一张索引值
                dq3 = e;
                zjh[e].style.left = "-100px";
            }
        },16); 
        //透明度为1 停止  
        if(zjbody >= 1){
            r1 = true;
            clearInterval(zjdh);
            //更新上一张索引值
            dq1 = e;
        }
    },16);
}
//获得装所有广告的大盒子
var hr = $(".head-r-nav");
var hr1 = $(".head-r-nav").children;
//计数器
var inde = 0;
//定时器
var timee;
//每1秒执行一次
var ti = setInterval(function(){
    //函数防抖
    clearInterval(timee);
    //计数器+1
    inde++;
    //特殊情况 到达最后一张的时候
    if(inde == hr1.length){
        //克隆大盒子里第一个子元素
       var colnone = hr.children[0].cloneNode("hr.children[0]");
       //将克隆的元素添加到盒子末尾
        hr.appendChild(colnone);
        //动画
         timee = setInterval(function(){
            var nowtop = parseInt(hr.style.top);
            hr.style.top = nowtop-2 + "px";
            //结束条件
            if(nowtop <= -55*inde){
                //结束时将计数器清零
                inde = 0;
                //关闭计时器
                clearInterval(timee);
                //删除所克隆的元素
                hr.removeChild(colnone);
                //调整位置
                hr.style.top = -55*inde + "px";
            }
        },16);
    }
    //正常情况
    else{
         timee = setInterval(function(){
            var nowtop = parseInt(hr.style.top);
            hr.style.top = nowtop-2 + "px";
            if(nowtop <= -55*inde){
                clearInterval(timee);
                hr.style.top = -55*inde + "px";
            }
        },16);
    }
},1000);
//游戏目录导航
var headbox = $(".head-box");
//游戏目录盒子
var headnav = $(".head-left");
//定时器
var timew;
//鼠标移上
headnav.onmouseenter = function(){
    //函数防抖
    clearInterval(timew);
     timew = setInterval(function(){
        var nowheight = parseInt(headbox.style.height);
        headbox.style.height = nowheight+20 + "px";
        if(nowheight >= 500){
            clearInterval(timew);
        }
    },16)
}
//鼠标移出
headnav.onmouseleave = function(){
    clearInterval(timew);
     timew = setInterval(function(){
        var nowheight = parseInt(headbox.style.height);
        headbox.style.height = nowheight-20 + "px";
        if(nowheight <= 0){
            clearInterval(timew);
        }
    },16)
}
//更多
var gengduo = $(".gengduo");
//更多回来
var gengduoh = $(".gengduoh");

//对应的盒子
var gengduobox = $(".zhezhao");
//盖住的盒子
var gai = $(".zhegai");
//手机盖
var shoujigai = $(".shoujigai");
var sst;
gengduo.onclick = function(){
    clearInterval(sst);
   sst = setInterval(function(){
        var nowleft = parseInt(gengduobox.style.left);
        gengduobox.style.left = nowleft + 15 + "px";
        if(nowleft >= 300){
            clearInterval(sst);
            gengduobox.style.left = 300 + "px";
        }
    },16);
    shoujigai.style = "opacity:0;pointer-events:none;";
    gai.style = "opacity:1;pointer-events:all;";
    gengduo.style = "display:none";
    gengduoh.style = "display:block";
};
gengduoh.onclick = function(){
    clearInterval(sst);
   sst = setInterval(function(){
        var nowleft = parseInt(gengduobox.style.left);
        gengduobox.style.left = nowleft - 15 + "px";
        if(nowleft <= 125){
            clearInterval(sst);
            gengduobox.style.left = 125 + "px";
        }
    },16);
    shoujigai.style = "opacity:1;pointer-events:all;";
    gai.style = "opacity:0;pointer-events:none;";
    gengduo.style = "display:block";
    gengduoh.style = "display:none";
};