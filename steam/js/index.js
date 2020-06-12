//商店
var shop = $(".h-nav ul li").eq(0);
//商店对应的二级导航
var nowshop = $(".shop");
//社区
var shop1 = $(".h-nav > ul li").eq(5);
var nowshop1 = $(".shop1");
//语言
var leng = $(".leng");
var le = $(".le");
var body = $("html")
//精选
var jxbox = $(".jx-box");
//轮播图焦点导航
var lbnav = $(".lbnav");
//创建div
var div = $("<div>");
jxbox.each(function(x,y){
    //克隆div
    var kl = div.clone(true);
    //添加
    lbnav.append(kl);
})
var lbbox = $(".lb-box");
var lbnavdiv = $(".lbnav>div");
var index1 = 0;
lbnavdiv.eq(0).addClass("on");
lbnavdiv.each(function(x,y){
    lbnavdiv.eq(x).attr("index" , x);
})
lbnavdiv.click(function(){
    var ind =  $(this).attr("index")
    lbnavdiv.removeClass("on");
    $(this).addClass("on");
    jxbox.eq(ind).stop(true,true).fadeIn(400)
    jxbox.eq(index1).stop(true,true).fadeOut(400)
    index1 = ind;
    index = index1;
})
//轮播图 向右
var right = $(".lb-r");
//轮播图 向左
var left = $(".lb-l");
var index = 0;
var index1 = 0;
right.click(function(){
    index++;
    if(index == jxbox.length){
        index = 0;
    }
    next(index);
})
left.click(function(){
    index--;
    if(index == -1){
        index = jxbox.length-1;
    }
    next(index);
})
dr(shop,nowshop);
dc(shop,nowshop);
dr(shop1,nowshop1);
dc(shop1,nowshop1);
leng.mouseup(function(){
    le.fadeIn(100);
})
body.mousedown(function(){
    le.fadeOut(100);
})
// //定时轮播
// var time = setInterval(function(){
//     index++;
//     if(index == jxbox.length){
//         index = 0;
//     }
//     next(index);
// },2000);
// //移上停止
// lbbox.onmouseenter = function(){
//     clearInterval(time);
//     console.log(1);
// }
// //移出打开
// // lbbox.onmouseleave = function(){
// //     time = setInterval(function(){
// //         index++;
// //         if(index == jxbox.length){
// //             index = 0;
// //         }
// //         next(index);
// //     },2000);
// // }
// //淡入
function dr(mous,tomous){
    mous.mouseenter(function(){
        tomous.stop(true,true).fadeIn(100);
    });
}
//淡出
function dc(mous,tomous){
    mous.mouseleave(function(){
        tomous.stop(true,true).fadeOut(100);
    });
}
//下一张
function next(cc){
    jxbox.eq(cc).fadeIn(400);
    jxbox.eq(index1).fadeOut(400);
    index1 = cc;
    lbnavdiv.removeClass("on");
    lbnavdiv.eq(cc).addClass("on");
}