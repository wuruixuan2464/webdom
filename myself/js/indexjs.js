
import { a } from "./mod.js"
console.log(a);
$(function(){
    var bd = $(".bd");
    console.log(bd[0])
    var st = true;
    var time = setInterval(function(){
        if(st){
            st = false;
            bd[0].className = "bd1";
        }else{
            bd[0].className = "bd";
            st = true;
        }
    },6000);
    var muc = $("audio");
    bd.mouseup(function(){
        muc[0].play()
    })
// //设置cookie
//     var data = new Date();
//     data.setTime(data.getTime()+200000);
//     var expires = "expires="+data.toGMTString();
//     document.cookie = "usename = rx;" + expires;  
//     document.cookie = "passowrd = 2464;" + expires; 
// //删除cookie
//     document.cookie = "username= rx; expires=Thu, 01 Jan 1970 00:00:00 GMT";
//     document.cookie = "password= 2464; expires=Thu, 01 Jan 1970 00:00:00 GMT";
// //获取cookie对象
//     var dataobj = {};
//     //替换空格为空
//     var dataa = document.cookie.replace(" ","");
//     //;分割为字符串
//     var data1 = dataa.split(';');
//     for (var i of data1) {
//         //=分割字符串为数组
//         let dt = i.split("=");
//         //数组的第一位为对象的名字
//         //第二位为对象值 
//         dataobj[dt[0]] = dt[1];
//     }
//    console.log(dataobj);


   class Cookie{
        constructor(){
            return 1.0;
        }
        setCookie(key,val,time){
            var date = new Date();
            date.setDate(date.getDate()+1);
            document.cookie = `${key}=${val};expires=${date.toGMTString()}`;
        }
        getCookie(){
            var dataobj = {};
            var dataa = document.cookie.replace(/\s/g,"");
            console.log(dataa);
            if(dataa.indexOf(";") !== -1){
                var data1 = dataa.split(';');
                for (var i of data1) {
                    let dt = i.split("=");
                    dataobj[dt[0]] = dt[1];
                 }
                return dataobj;
            }else{
                var data1 = dataa.split(';');
                let dt = data1.split("=");
                dataobj[dt[0]] = dt[1];
                return dataobj;
            }
        }
        removeCookie(kk){
            document.cookie = `${kk}=${""};expires= 01 Jan 1970 00:00:00 GMT";}`;
        }
   }

var cookie1 = new Cookie();
cookie1.setCookie("www","xxx");
cookie1.setCookie("www1","1xxx");
cookie1.removeCookie("www");
console.log(cookie1.getCookie());
})