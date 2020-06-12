// //取出所有导航点
// var nav = document.getElementsByClassName("nav")[0].children;
// //取出所有轮播内容  大盒子
// var content = document.getElementsByClassName("content")[0].children[1];
// //上一个
// var up = document.getElementsByClassName("up")[0];
// //下一个
// var next = document.getElementsByClassName("next")[0];
// //计数器
// var add = 0;
// //步数  每次执行计数器图片偏移量px
// var seat = 15;
// //设置轮播大盒子初始位置
// content.style.marginLeft= "0px";
// //判断状态  节流
// var fk = true;
// //给所有导航点加鼠标事件
// for(var i = 0; i < nav.length; i++){
//     //设置索引值
//     nav[i].setAttribute("index",i);
//     //导航焦点点击事件
//     nav[i].onclick = function(){
//         //点击触发 进入函数体 将fk改为false 锁住 暴力点击无效
//         if(fk){
//             fk = false;
//         index = Number( this.getAttribute("index"));
//         add = index;
//         //目标动画
//             adm(content,index);
//         //排他 添加吃豆人
//              pt(nav,index);
//         }
//     }
// }
// //下一个
// var time;
// next.onclick = function(){
//     //函数防抖
//     clearInterval(time);
//     //每点击一次++
//     add++;
//     //特殊情况 到最后一张
//     if(add == content.children.length){
//         //克隆第一个元素
//         var item = content.children[0].cloneNode("content.children[0]");
//         //将克隆的元素添加至最后
//         content.appendChild(item);
//         //开启计时器
//         time = setInterval(function(){
//             //获取当前的marginleft 
//             var st = parseInt(content.style.marginLeft);
//             //每次执行 向左平移
//             content.style.marginLeft = st -15 + "px";
//             st = parseInt(content.style.marginLeft);
//             //到达最后一个位置
//             if (st < add*-440){
//                 //将索引值设置为0
//                 add = 0;
//                 //关闭计时器
//                 clearInterval(time);
//                 //删除克隆的元素
//                 content.removeChild(item);
//                 //调整位置到第一个
//                 content.style.marginLeft = 0;
//                 fk = true;
//                 }
//         },16);
//         //排他索引值为0 
//             pt(nav,0);
//     }
//         //正常情况 计点击次数0~4次时
//         else{
//         time = setInterval(function(){
//             //初始位置
//             var st = parseInt(content.style.marginLeft);
//             //每次执行计数器 偏移数
//                 content.style.marginLeft = st -15 + "px";
//                 //将偏移后的位置重新赋值给初始位置
//                 st = parseInt(content.style.marginLeft);
//                     //偏移到目标位置之后 可能会偏移过量
//                     if (st < add*-440){
//                         //打开函数节流
//                         fk = true;
//                         //停止偏移
//                         clearInterval(time);
//                         //将位置矫正
//                         content.style.marginLeft = add*-440+"px";
//                 }
//                 //步数为负 则向右平移 
//         },16);
//        pt(nav,add);
//     } 
// }
// //上一个
// up.onclick = function(){
//     clearInterval(time);
//         add--;
//         if(add == -1){ 
//             pt(nav,content.children.length-1);
//                 var item = content.children[content.children.length-1].cloneNode(true);
//                 console.log(item);
//                 content.insertBefore(item,content.children[0]);
//                 content.style.marginLeft = -440 + "px";
//                 time = setInterval(function(){
//                     var st = parseInt(content.style.marginLeft);
//                     content.style.marginLeft = st +15 + "px";
//                     st = parseInt(content.style.marginLeft); 
//                         if (st > 0){
//                             fk = true;
//                             clearInterval(time);
//                             add = content.children.length-2;
//                             content.style.marginLeft = -(content.children.length-2)*440+"px";
//                             content.removeChild(item);
//                         }
//                 },10);
//         }

//         else{  
//             pt(nav,add);
//             time = setInterval(function(){
//                 var st = parseInt(content.style.marginLeft);
//                 content.style.marginLeft = st +seat + "px";
//                 st = parseInt(content.style.marginLeft);
//                 if (st > add*-440){
//                     fk = true;
//                     clearInterval(time);
//                     content.style.marginLeft = add*-440+"px";

//                 }
//             },10);
//         }
// }
// //动画

//     function adm(target,index){
//         var end = -440*index;
//         //初始位置
//         var seat = 15;
//         var st = parseInt(target.style.marginLeft);
//         //如果初始位置大于目标位置 既需要向左平移 
//         //如果初始位置小于目标位置 既需要向右平移
//         //只需要改变步数的正负值就可以改变 向右向左平移
//         seat =  st > end ? seat:-seat;
//         //开启计数器
//        time = setInterval(function(){
//             //初始位置
//             var st = parseInt(target.style.marginLeft);
//             //每次执行计数器 偏移数
//                 content.style.marginLeft = st -seat + "px";
//                 //将偏移后的位置重新赋值给初始位置
//                 st = parseInt(target.style.marginLeft);
//                 //步数为正 则向左平移 
//                 if(seat > 0){
//                     //偏移到目标位置之后 可能会偏移过量
//                     if (st < end){
//                         //打开函数节流
//                         fk = true;
//                         //停止偏移
//                         clearInterval(time);
//                         //将位置矫正
//                         target.style.marginLeft = index*-440+"px";
//                     }
//                 }
//                 //步数为负 则向右平移 
//                 else{
//                     if (st > end){
//                         fk = true;
//                         clearInterval(time);
//                         target.style.marginLeft = index*-440+"px";
//                     }
//                 }
//         },10);
//     }
//     //排他
//     function pt(target,index){
//         for(var j = 0; j < nav.length; j++){
//             target[j].style = "";
//         }
//         target[index].style = "background: url('img/icon.png')no-repeat -855px -726px;"
//     }


// var c = document.querySelector(".content");
// console.log(c);

// c.onmousedown = function(e){
//     document.onmousemove = function(e){
//         x = e.offsetX;
//         console.log(x);
//         c.style.marginLeft = e.offsetX+"px";
//     }
// }
// document.onmouseup = function(e){
//     document.onmousemove = null;
// }
//所有图片的大盒子
var bd = $(".imgs");
console.log(bd);
//下一个
var next = $(".next");
console.log(next);
//上一个
var up = $(".up");
console.log(up);
//吃豆豆
var dd = $(".nav span");
console.log(dd)
//计数
var index = 0;
//点击下一个
next.click(function () {
    //计数器+1
    index++;
    //特殊情况  无缝轮播
    //如果到最后一张
    if (index == bd.children().length) {
        //克隆第一张
        var kl = bd.children().eq(0).clone();
        //添加到大盒子最后一个位置
        bd.append(kl);
        //动画  stop()函数防抖
        bd.stop(true,true).animate({
            marginLeft: -index * 440 + 'px'
            //fn()为动画结束后执行的函数
        }, function () {
            //将index调回到0
            index = 0;
            //将大盒子挪到初始位置
            bd.css({
                marginLeft: 0 + 'px'
            });
            //删除克隆的元素
            kl.remove();
        })
        //排他
        dd.css({
            background: ""
        })
        //克隆元素的索引豆豆的样式
        dd.eq(0).css({
            background: "url('img/icon.png')no-repeat -855px -726px"
        });
    }
    //正常情况
    else{
        bd.stop(true,true).animate({
            marginLeft: -index * 440 + 'px'
        })
        dd.css({
            background: ""
        })
        dd.eq(index).css({
            background: "url('img/icon.png')no-repeat -855px -726px"
        })
    }

})
up.click(function () {
    index--;
    //特殊情况
    if (index == -1) {
        //提前将大盒子整体向右挪一个图片位置 为将要克隆的元素腾出位置
        bd.css({
            marginLeft: -440 + 'px'
        });
        //克隆最后一张
        var kl1 = bd.children().eq(-1).clone();
        //添加到大盒子之前
        bd.prepend(kl1);
        //动画
        bd.stop(true,true).animate({
            //因为整体盒子挪了-440  所以这里要多减440
            marginLeft: (-index * 440)-440 + 'px'
        }, function () {
            //先删除克隆元素
            kl1.remove();
            //将index调整为最后一个元素
            index = bd.children().length - 1;
            //调整大盒子位置
            bd.css({
                marginLeft: -440*(bd.children().length-1) + 'px'
            });
        })
        dd.css({
            background: ""
        })
        dd.eq(-1).css({
            background: "url('img/icon.png')no-repeat -855px -726px"
        })
    }
    else{
        bd.stop(true,true).animate({
            marginLeft: -index * 440 + 'px'
        })
        dd.css({
            background: ""
        })
        dd.eq(index).css({
            background: "url('img/icon.png')no-repeat -855px -726px"
        })
    }
})

dd.each(function (x, y) {
    console.log(x, y);
    dd.eq(x).attr("index", x);
})
dd.click(function () {
    var index1 = $(this).attr("index");
    index = index1;
    bd.stop(true,true).animate({
        marginLeft: -index1 * 440 + 'px'
    })
    dd.css({
        background: ""
    })
    $(this).css({
        background: "url('img/icon.png')no-repeat -855px -726px"
    })
})


