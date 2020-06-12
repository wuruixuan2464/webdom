


// //所有主角导航
// var sslist1 = $(".ss-list-nav1 ul li");
// //拿到所有主角box
// var zjbox = $(".zhujvebox>div");
// //所有主角名字
// var zjname = $(".zj-name");
// //所有主角图像
// var zjh = $(".zj-h");
// //定时器
// //上一张的索引值
// var dq1 = 0;
// var dq2 = 0;
// var dq3 = 0;
// var r1 = true;
// for(var i = 0; i < sslist1.length; i++){
//     sslist1[i].setAttribute("index2" , i);
//     sslist1[i].onclick = function(){
//         if(r1){
//             r1 = false;
//             index2 = this.getAttribute("index2");
//             //排他
//             index3 = index2;
//             for(var j = 0; j < sslist1.length; j++){
//                 sslist1[j].style = "";
//             } 
//             zjbox[index2].style.zIndex = 2;
//             danchupingyi(index2);
//         //排他添加背景
//         this.style = "color: rgb(190,157,94);";}
//     }
// }
// var zjnext = $(".zj-next");
// var zjup = $(".zj-up");
// var index3  = 0;
// zjnext.onclick = function(){
//     if(r1){
//         index3++;
//         r1 = false;
//     //排他
//     for(var j = 0; j < sslist1.length; j++){
//         sslist1[j].style = "";
//     } 
//     if(index3 == sslist1.length){
//         index3 = 0;
//     } 
//     zjbox[index3].style.zIndex = 2;
//     danchupingyi(index3);
//     sslist1[index3].style = "color: rgb(190,157,94);";}
// }
// zjup.onclick = function(){
//     if(r1){
//         index3--;
//         r1 = false;
//     //排他
//     for(var j = 0; j < sslist1.length; j++){
//         sslist1[j].style = "";
//     } 
//     if(index3 == -1){
//         index3 = sslist1.length-1;
//     } 
//     zjbox[index3].style.zIndex = 2;
//     danchupingyi(index3);
//     sslist1[index3].style = "color: rgb(190,157,94);";}
// }
// //封装淡入平移
// var  zjdh;
// function danchupingyi(e){
//       zjdh = setInterval(function(){
//         //当前点击的导航对应的内容盒子的透明度
//         var zjbody = +zjbox[e].style.opacity;
//         zjbox[e].style.opacity = zjbody + 0.04;
//         //上一张的内容盒子的透明度
//         var upzjbody = +zjbox[dq1].style.opacity;
//         zjbox[dq1].style.opacity = upzjbody - 0.04;
//         //移动名字
//         var zjtext = setInterval(function(){
//             //当前点击的主角的名字图片位置
//             var nowname = parseInt(zjname[e].style.left);
//             //进 往右
//             zjname[e].style.left = nowname + 1 + "px";
//             //上一张主角的名字图片位置
//             var agoname = parseInt(zjname[dq2].style.left);
//             //出 往左
//             zjname[dq2].style.left = agoname - 1 + "px";
//             //-100为终止位置
//             if(nowname >= -100){
//                 clearInterval(zjtext);
//                 //更新上一张索引值
//                 dq2 = e;
//                 //纠正位置
//                 zjname[e].style.left = "-100px";
//             }
//         },16);
//         //移动画
//         var zjimg = setInterval(function(){
//             //当前点击的主角画
//             var nowh = parseInt(zjh[e].style.left);
//             //画往左  进
//             zjh[e].style.left = nowh - 2 + "px";
//             //上一张的主角画
//             var agoh = parseInt(zjh[dq3].style.left);
//             //画往右出
//             zjh[dq3].style.left = agoh + 2 + "px";
//             //终止
//             if(nowh <= -100){
//                 clearInterval(zjimg);
//                 //更新上一张索引值
//                 dq3 = e;
//                 zjh[e].style.left = "-100px";
//             }
//         },16); 
//         //透明度为1 停止  
//         if(zjbody >= 1){
//             r1 = true;
//             clearInterval(zjdh);
//             //更新上一张索引值
//             dq1 = e;
//         }
//     },16);
// }