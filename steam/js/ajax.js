
var html = new XMLHttpRequest();
var muban = $("#lbmuban");
var imgya = $(".jx-img img");
//给四个小图添加索引值
imgya.each(function(x,y){
    imgya.eq(x).attr("u" , x);
})
var span = $("span");
var warp = $(".warp");
//规划路线
html.open("get", "https://pujie1213.top:424/rcGame");
//发送
html.send();
html.onreadystatechange = function(){
    if(html.readyState == 4){
        if(html.status == 200){
           var dat= JSON.parse(html.responseText);
            console.log(dat);
            dat.forEach(function(x,y){
                var clone = muban.clone();
                clone.attr("id","");
                //渲染左边的图
                clone.find(".jx1-l img").attr("src", x.imgUrl[0]);
                //渲染游戏名字
                clone.find(".jx-name").html(x.name);
                //右边四个小图
                clone.find(".jx-img img").each(function(x1,y1){
                    clone.find(".jx-img img").eq(x1).attr("src",x.imgUrl[x1]);
                });
                //移上右边四个小图 改变左边大的展示栏的图片
                clone.find(".jx-img img").mouseenter(function(){
                    var u = $(this).attr("u");
                    clone.find(".jx1-l img").attr("src" , x.imgUrl[parseInt(u)]);
                    console.log(parseInt(u));
                    })
                //移出左边4个小图时  变成第一张
                clone.find(".jx-img").mouseleave(function(){
                    clone.find(".jx1-l img").attr("src", x.imgUrl[0]);
                    })
                //判断是否有折扣
                if(x.isSale){
                    clone.find(".zhe").html("￥"+x.originPrice);
                    clone.find(".bai").html((x.discount)*100+"%");
                }
                //价格
                clone.find(".nowmoney").html("￥"+x.price);
                //判断是否为ios
                if(x.platform.indexOf("Mac OS") != -1){
                    clone.find(".ios").css({display:"inline-block"});
                }
                //windows
                if(x.platform.indexOf("Windows") != -1){
                    clone.find(".windows").css({display:"inline-block"});
                }
                //steam
                if(x.platform.indexOf("Steam") != -1){
                    clone.find(".stm").css({display:"inline-block"});
                }
                warp.append(clone);
            })
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
            var jxbox = $(".lb-box .jx-box");
            //轮播图焦点导航
            var lbnav = $(".lbnav");
            //创建div
            var div = $("<div>");
            jxbox.each(function(x,y){
                //克隆div
                var kl = div.clone(true);
                //添加
                if(x<jxbox.length-1){
                lbnav.append(kl);
                }
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
            //定时轮播
            var time = setInterval(function(){
                index++;
                if(index == jxbox.length){
                    index = 0;
                }
                next(index);
            },2000);
            //移上停止
            lbbox.mouseenter(function(){
                clearInterval(time);
            })
            // //移出打开
            lbbox.mouseleave (function(){
                time = setInterval(function(){
                    index++;
                    if(index == jxbox.length){
                        index = 0;
                    }
                    next(index);
                },2000);
            })
            //淡入
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
        }
    }


}


// let c = ()=>{
//     console.log(this);
// }
// c();

var s = x=>x*x;
// var s = function(x){
//     return x*x;
// }
console.log(s(7));