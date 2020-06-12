// var a = [];
// for (var i = 0; i < 5; i++) {
//     a[i] = Number(prompt("输入5个数，自动为您从小到大排序"));
// }
// console.log(a);
// for (var j = 0; j < a.length; j++) {
//     for (var k = 0; k < a.length; k++){
//         if(a[k] > a[k + 1]){
//             var p = a[k];
//             a[k] = a[k + 1];
//             a[k + 1] = p;
//         }
//     }
// }
// console.log(a);
// //删除数组中的元素 第一个参数为起始位置，第二个为要删除的个数
// //后面的为新添加的元素
// //splice返回删除的元素{返回一个数组}
//  var res =  a.splice(0,3);
// console.log(res);
// //删除数组中最后一个元素  返回值为该元素
// a.pop();
// //向数组最后一个加入一个元素 返回新的数组长度
// a.push(123132);
// //删除数组的第一个元素 返回值为该元素
// a.shift()
// //在数组的第一个元素之前添加一个元素 返回新的数组长度
// a.unshift()
// //切片不会改变原数组 将切片返回
// //可以用来访问数组中任意值
// a.slice(0,2);       //月 日 年   时 分 秒
//  var add = new Date("09/30/2020 19:20:55");
//  console.log(add);
//  console.log(add.getFullYear());
//  console.log(add.getMonth());
//  console.log(add.getHours());

//随机十六进制颜色
function randmcolor(){
    var nub = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    var color = "#";
    for (var i = 0; i < 6; i++ ){
        var c = Math.round(Math.random()*15);
        color += nub[c];
    }
    return color;
 }        
console.log(randmcolor());
// document.write("<div style = 'width:900px; height:2000px; margin:0 auto; background-color: "+ color +"';'></div>")

x = document.getElementsByClassName("cc");
x1 = document.getElementsByTagName("p");
// for(var i = 0; i < x.length; i++){
//     x1[i].onclick = function(){
//         for(var i = 0; i < x.length; i++){
//             x1[i].style = 'color:' + randmcolor() +';'
//         }
//     }
// }
//点击切换类名
    pp = document.getElementsByClassName("ss")[0];
    var str = true;
    var sa = 1;
    pp.onclick = function() {
        if (str == true){
            pp.className = "ss1";
            str = false;
        }
        else if (str == false){
            pp.className = "ss";
            str = true;
        }
    }
    pp1 = document.getElementsByClassName("cc")[0];
    pp2 = document.getElementsByClassName("cc1")[0];
    pp3 = document.getElementsByClassName("cc1")[1];
    var str = true;
    pp1.onclick = function() {
        if (str == true){
            pp2.className = "cc2";
            str = false;
        }
        else if (str == false){
            pp2.className = "cc1";
            str = true;
        }
    }
    //按钮
    submit = $(".c2")[0];
    //图
    img = $(".cc2-1 img");
    var i1=Number('');
    var num = [];
    submit.onclick = function(){
        for( var j = 0; j < img.length; j++){
            num[j] = -220*j; 
        }
       for( var i = 0; i < img.length; i++){
           for( var k = 0 ; k < img.length; k++){
           img[i].style = "transform:translate:("+ num[i] + "px , 0px);";
        }
       }
    }
//封装获取节点 获取id 类 以及标签
function $(x){
    if (x.indexOf("#") != -1 && x.indexOf(" ") == -1){
        x = x.replace("#" , "");
        return document.getElementById(x);
    }
    else if(x.indexOf(".") != -1 && x.indexOf(" ") == -1){
        x = x.replace("." , "");
        return document.getElementsByClassName(x);
    }
    else if(x.indexOf(".") == -1 && x.indexOf(".") == -1){
        return document.getElementsByTagName(x);
    }
    else if(x.indexOf('.') != -1 && x.indexOf(' ') != -1){
        var x1 = x.substring(x.indexOf('.') + 1,x.indexOf(' '));
        x1 = document.getElementsByClassName(x1)[0];
        var x2 = x.substr(x.indexOf(' ') + 1);
        x2 = x1.getElementsByTagName(x2);
       return x2;
    }
}

//当前时间到 未来预设时间剩下的时间
function date(){
    var nowtime = new Date();
    var futuretime = new Date("04/18/2020 18:00:00");
    var datime = futuretime - nowtime;
    var s = parseInt(datime / 1000 % 60 ) + "秒";
    var min = parseInt(datime / 1000 / 60 % 60) + "分";
    var h = parseInt(datime / 1000 / 60 / 60 % 24) + "时";
    var day = parseInt(datime / 1000 / 60 / 60 / 24 % 365) + "天";
    var year = parseInt(datime / 1000 / 60 / 60 / 24 / 365)+ "年";
    if (datime == 0){
        window.close();
    }
    ppap = ("现在距离2020年4月18日18点下班还有"+year+day+h+min+s);
    return ppap;
}
//随机5位0~20数字 去重排序
function suiji(){
    var awardNumberClass = [];
    while(true){
        //随机0-20的数字 
        var awardNumber = Math.floor(Math.random() * 21);
        //存放5位互不相同的随机数 
        if (awardNumberClass.indexOf(awardNumber) == -1){
            awardNumberClass.push(awardNumber);
        }
        if (awardNumberClass.length == 5){
                break;
        }
    }
    for (var j = 0; j < awardNumberClass.length; j++){
        for (var k = 0; k < awardNumberClass.length; k++){
            if (awardNumberClass[k] > awardNumberClass[k+1]){
                c = awardNumberClass[k];
                awardNumberClass[k] = awardNumberClass[k+1];
                awardNumberClass[k+1] = c;
            }
        }
    }
       return awardNumberClass;
}
//去重排序
function qvchongpaixv(){
    var arr1 = [];
    var c = "";
    var arr = [2, 3, 8, 5, 4, 6, 2, 4, 6, 7, 8, 5];
    for (var i = 0; i < arr.length; i++){
        if (arr1.indexOf(arr[i]) == -1){
            arr1.push(arr[i]);
        }
    }
    for (var j = 0; j < arr1.length; j++){
        for (var k = 0; k < arr1.length; k++){
            if (arr1[k] > arr1[k+1]){
                c = arr1[k];
                arr1[k] = arr1[k+1];
                arr1[k+1] = c;
            }
        }
    }
    return(arr1);
}
//字符串转换数组
function str(){
    var st = [];
    var strr = prompt("输入字符串");
    for(var i = 0; i < strr.length; i++ ){
        st.push(strr[i]);
      // st[i] =  strr[i];
    }
    return st;
    
}
//网页字符串转换对象
function str1(x){
    var object = new Object();
    var x = prompt ("输入字符串");
    var dd = x.indexOf("?")+1;
     x = x.substr(dd);
   var x1 = x.split("&");
    for ( var i = 0 ; i < x1.length ; i++){
        x11 = x1[i].split("=");
        object[x11[0]] = x11[1];
    }
    return object;
}

var check = $("input")[0];
var form = $("form")[0].getElementsByTagName("input");
check.onclick = function() {
   checkmov = check.checked;
    if (checkmov == true){
        for (var i = 0 ; i < form.length; i++){
          form[i].checked  = true;
        }
    }
    else if(checkmov == false) {
        for (var i = 0 ; i < form.length; i++){
            form[i].checked  = false;
          }
    }
}
 for (var k = 0 ; k < form.length; k++){
    form[k].onclick = function() {
        var st = true;
        for (var p = 0; p < form.length; p++){
            if (form[p].checked == false){
                st = false;
            }
        }
        console.log(st);
        if (st == false){
            check.checked = false;
        }
        else {
            check.checked = true;
        }
    }
    
}
