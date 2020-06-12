var gy = $(".tr-nav-right span");
var img = $(".trimg")
var hp = $(".tr-hyp span");
var hpt = $(".tr-as ul");
var dada = $(".tr-right");
var da = $(".tr-hd");
var ind = 0;
var ind1 = 0;
var ind2 = 0;
gy.each(function(x,y){
    gy.eq(x).attr("index" , x);
})
gy.click(function(){
   var index = $(this).attr("index");
    gy.removeClass();
    $(this).addClass("op");
    img.fadeOut();
    img.eq(index).fadeIn();
    ind1 = index;
})
hp.click(function(){
    cr1();
})
var timeae1 = setInterval(function(){
   cr1();
},3000)
var timeae = setInterval(function(){
    cr();
},3000);
da.mouseenter(function(){
    clearInterval(timeae);
})
dada.mouseenter(function(){
    clearInterval(timeae1);
})
da.mouseleave(function(){
    timeae = setInterval(function(){
      cr();
    },3000);
})
dada.mouseleave(function(){
    timeae1 = setInterval(function(){
        cr1();
    },3000)
})
function cr(){
    ind1++;
    if(ind1 == img.length){
        ind1 = 0;
    }
    img.fadeOut(1000);
    img.eq(ind1).fadeIn(1000);
    gy.removeClass();
    gy.eq(ind1).addClass("op");
}
function cr1(){
    ind2++;
        if(ind2 == hpt.length){
            ind2 = 0;
        }
        hpt.fadeOut(1000);
        hpt.eq(ind2).fadeIn(1000);
}