//下一个
var next = $(".next");
//上一个
var up = $(".up");
//名字图片
var text = $(".box-l img");
//原画图片
var img = $(".box-r img");
//上一个主角的名字
var changename1 = $(".th span")
//下一个主角的名字
var changename2 = $(".th1 span")
//焦点导航
var nav = $(".nav ul li");
//用来判断是否点的相同导航
var c = 0;
//计数器
var index = 0;
//记录上一个图片的索引值
var index1 = 0;
//所有名字
var mz = ["晴明" ,"神乐","源博雅","八百比丘尼"]
//添加自定义属性
nav.each(function(x , y){
    nav.eq(x).attr("i" , x);
})
//点击下一个
next.click(function(){
    //计数器加一
    index++;
    //到达最后一个 下一个主角名字为mz[0] 数组第一个
    if(index == text.length-1){
        changename2.html(mz[0])
    }
    //到达最后一个再次点击时
    //累加器清空调回0
    if(index == text.length){
        index = 0;
        //上一个主角名字为数组最后一位
        changename1.html(mz[mz.length-1])
    }
    //上一个名字
    changename1.html(mz[index-1])
    //下一个名字
    changename2.html(mz[index+1])
    rctxt(index);
    rcimg(index);
    //排他
    nav.css({color:""});
    //点击添加颜色
    nav.eq(index).css({color:"#f99"});
    //防止再次点击
    c = index;
})
up.click(function(){
    index--;
    if(index == 0){
        changename1.html(mz[mz.length-1])
    }
    if(index == -1){
        index = text.length-1;
        changename2.html(mz[0])
    }
    changename1.html(mz[index-1])
    changename2.html(mz[index+1])
    rctxt(index);
    rcimg(index);
    nav.css({color:""});
    nav.eq(index).css({color:"#f99"});
    c = index;
})
nav.click(function(){
    //自定义属性
     i = $(this).attr("i");
     //判断是否点击相同的位置
    if(c != $(this).attr("i")){
        nav.css({color:""});
        $(this).css({color:"#f99"});
        rctxt(i);
        rcimg(i);
        if(i == 0){
            changename1.html(mz[mz.length-1])
        }
        if(i == nav.length-1){
            changename2.html(mz[0])
        }
        changename1.html(mz[i-1])
        //i为字符串 但是上面的i-1没有毛病 不知道为啥
        changename2.html(mz[parseInt(i)+1])
    }
    //记录上一个点击的位置
    c = i;
    //将改变之后的索引值重新赋值
    index = i;
})
function rctxt(e){
    //上一张的动画
    text.stop().eq(index1).animate({
        //出
        left:"-300px",
        //透明度0
        opacity:0
    },500,
    //下一张的动画
    function(){
        //改变上一张的索引值
        index1 = e;
        text.eq(e).animate({
            //入
            left:"-200px",
            //透明度调1
            opacity:1
        },500)
      
    })
    //当前点击的淡入
    text.eq(e).fadeIn(500);
    img.eq(e).fadeIn(500);
    //上一张淡出
    text.eq(index1).fadeOut(500);
    img.eq(index1).fadeOut(500);
}
function rcimg(e){
    img.stop().eq(index1).animate({
        right:"-300px",
         opacity:0
    },500,function(){
        index1 = e;
        img.eq(e).animate({
            right:"-200px",
            opacity:1
        },500)
    })
}