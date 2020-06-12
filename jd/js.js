
for (var p = 0 ; p < 3; p++){
    var curl = document.getElementsByClassName("cont-1-4-l")[p];
    var curz = document.getElementsByClassName("cont-1-4-z")[p];
    var curr = document.getElementsByClassName("cont-1-4-r")[p];
    var i = 1;
    curr.onclick = function() {
        i++;
        this.previousElementSibling.innerHTML = "<span>" + i +"</span>";
        if (i > 200){
            alert("数量最大为199哦！")
            curz.innerHTML = "<span>" + 199 +"</span>" 
        }
    }
    curl.onclick = function() {
        i--;
        this.nextElementSibling.innerHTML = "<span>" + i +"</span>";
        if (i < 1){
            alert("数量最小为1哦！")
            curz.innerHTML = "<span>" + 1 +"</span>" 
        }
    }
}
var san = document.getElementsByClassName("fot-r-1")[0];
var isan = document.getElementsByClassName("icc")[0];
var dw = document.getElementsByClassName("fot-r-1-dw")[0];
var st = true;
    san.onclick = function(){
        if (st == true){
            isan.style = "transform: rotate(540deg);"
            dw.style = " display: block;"
            st = false;
        }
        else if(st == false){
            isan.style = "transform: rotate(-360deg);"
            dw.style = "display: none;"
            st = true;
        }
    }
    //获取head-1第一行全选的input *头部的选中
var check = document.getElementsByClassName("head-1")[0].getElementsByTagName("input")[0];
 //获取 cont中所有的 input *商品选中
var check1 = document.getElementsByClassName("cont")[0].getElementsByTagName("input");
 //获取fot-l 的input *末尾的全选
var check2 = document.getElementsByClassName("fot-l")[0].getElementsByTagName("input")[0];
 //获取所有cont-1 存放在cont1 伪数组中 
var cont1 = document.getElementsByClassName("cont-1");
console.log(check);
console.log(check1);
console.log(check2);
console.log(cont1);
console.log(cont1[0]);

var sct = true;
for (var pl = 0; pl < cont1.length; pl++){
    cont1[pl].onclick = function () {
        if( sct == true){
            //该cont1 中 所有的 input 
            console.log(this.firstElementChild.firstElementChild);
            // sct 为 true 后  将该cont1 中 所有的 input 改为 选中（true）
            this.firstElementChild.firstElementChild.checked = true;
            //  cont1中所有的子元素背景改颜色
             this.firstElementChild.parentNode.style = "background-color: rgb(255,244,232);";
             //要求重复点击 所以将状态sct 改为false
             sct = false;
             var sstt = true;
             for (var o1 = 0 ; o1 < check1.length ; o1++){
                 if (check1[o1].checked == false){
                     sstt = false;
                 }
             }
             if (sstt == false){
                 check.checked = false;
                 check2.checked = false;
             }
             else{
                 check.checked = true;
                 check2.checked = true;
             }
         }
            else if(sct == false){
                this.firstElementChild.firstElementChild.checked = false;
                this.firstElementChild.parentNode.style = "background-color: rgb(255,255,255);";
                sct = true;
                var sstt = true;
            for (var o1 = 0 ; o1 < check1.length ; o1++){
                if (check1[o1].checked == false){
                    sstt = false;
                }
            }
            console.log(sstt);
            if (sstt == false){
                check.checked = false;
                check2.checked = false;
            }
            else{
                check.checked = true;
                check2.checked = true;
            }
        }
    }
}

check.onclick = function () {
   var opo = this.parentNode.parentNode.nextElementSibling.children
    if (check.checked == true){
        check2.checked = true;
        for (var l = 0; l < check1.length; l++){
            check1[l].checked = true;
            opo[l].style = "background-color: rgb(255,244,232);";  
        }
    }
    else if (check.checked == false){
        check2.checked = false;
        for (var l = 0; l < check1.length; l++){
            check1[l].checked = false;
            opo[l].style = "background-color: rgb(255,255,255);";
        }
    }
}
check2.onclick = function () {
    console.log(this.parentNode.parentElement.previousElementSibling.children);
     var opo = this.parentNode.parentElement.previousElementSibling.children
    if (check2.checked == true){
        check.checked = true;
        for (var lp = 0 ; lp < check1.length; lp++){
            check1[lp].checked = true;
             opo[lp].style = "background-color: rgb(255,244,232);";  
        }
    }else if(check2.checked == false){
        check.checked = false;
        for (var lp = 0; lp < check1.length; lp++){
            check1[lp].checked = false;
             opo[lp].style = "background-color: rgb(255,255,255);"; 
        }
    }
}



   
