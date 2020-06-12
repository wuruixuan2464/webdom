function Snk(e){
    //分数
    this.num = document.querySelector(".num");
    //游戏盒子
    this.snkmap = document.querySelector(e);
    //蛇的初始长度
    this.snklength = 5;
    //装蛇身体
    this.snkbody = [];
    //豆豆的坐标
    this.douxy = {
        x : 0,
        y : 0
    };
    //生成一个豆豆
    this.dou = document.createElement("i");
    //放颜色
    this.color = "";
    //随机颜色
    this.snkcolor = function(){
        var nub = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
        var color = "#";
        for (var i = 0; i < 6; i++ ){
            var c = Math.round(Math.random()*15);
                color += nub[c];
                this.color = color;
        }
     }
     //豆豆
     this.doudou = function(){
         //随机x轴
         this.dou.style.left = 20 * (Math.round(Math.random()*29)) + "px";
         //随机Y轴
         this.dou.style.top = 20 * (Math.round(Math.random()*29)) + "px";
         //随机颜色
         this.dou.style.backgroundColor = this.color;
         //将坐标赋值
        this.douxy.x = this.dou.style.left;
        this.douxy.y = this.dou.style.top;
        this.snkmap.appendChild(this.dou);
        for(var i = 0; i < this.allsnkx.length; i++){
            if((this.allsnkx[i].indexOf(this.dou.style.left) != -1) && (this.allsnky[i].indexOf(this.dou.style.top) != -1)){
                console.log(1);
            }
        }
     }
    //初始蛇
    this.newsnk = function(){
        var span;
        for(var i = 0; i < this.snklength; i++){
            //创建span标签
            span = document.createElement("span");
            //每个标签排位置
            span.style.left = 20 * i + "px";
            span.style.top = 0;
            //将创建好的span添加到游戏盒子中
            this.snkmap.appendChild(span);
            //将所有span放到装蛇身体的数组中
            this.snkbody.push(span);
        }
    }
    //蛇默认方向
    this.snkdir = "right";
    //蛇移动
    this.snkmov = function(){
        //蛇尾
        var foot = this.snkbody[0];
        //蛇头
        var head = this.snkbody[this.snkbody.length-1];
        //向右走将蛇尾放到蛇头前面
        if(this.snkdir == "right"){
            foot.style.left = parseInt(head.style.left) + 20 + "px";
            foot.style.top = head.style.top;
        }else if(this.snkdir == "down"){
            foot.style.top = parseInt(head.style.top) + 20 + "px";
            foot.style.left = head.style.left;
        }else if(this.snkdir == "left"){
            foot.style.left = parseInt(head.style.left) - 20 + "px";
            foot.style.top = head.style.top;
        }else if(this.snkdir == "up"){
            foot.style.top = parseInt(head.style.top) - 20 + "px";
            foot.style.left = head.style.left;
        }
        //删除蛇尾 重新排序数组 
       var del =  this.snkbody.shift(foot);
       //将原来的蛇尾 变成蛇头
       this.snkbody.push(del);
       //调用蛇吃豆
       this.snkeat();
      // 结束条件
        this.gmover();
    }
    //结束条件
    this.gmover = function(){
        if((parseInt(this.snkbody[this.snkbody.length-1].style.left) == 600) || (parseInt(this.snkbody[this.snkbody.length-1].style.left) == -20 )||parseInt(this.snkbody[this.snkbody.length-1].style.top) == -20 || parseInt(this.snkbody[this.snkbody.length-1].style.top) == 600){
            alert("游戏结束,你的分数为"+this.num.innerHTML +"重新开始？");
            //初始化蛇身体
            //初始分数
            this.num.innerHTML = 5;
            //初始身体
            this.snkbody = [];
            //清空游戏盒子
            this.snkmap.innerHTML = "";
            //重新调用初始蛇
            this.newsnk();
            //重新调整默认位置
            this.snkdir = "right";
            //初始豆豆位置和颜色
            c.doudou();
            c.snkcolor();
        }
    }
    this.allsnkx = ["0px" , "20px" , "40px" , "80px" , "100px"];
    this.allsnky = ["0px" ,"0px" ,"0px" ,"0px" ,"0px"];
    //蛇吃豆
    this.snkeat = function(){
          //蛇头
        var head = this.snkbody[this.snkbody.length-1];
        //克隆蛇头
        
        var addsnk = this.snkbody[this.snkbody.length-1].cloneNode("this.snkbody[this.snkbody.length-1]");
        //吃到豆豆时
         if((head.style.left == this.douxy.x)&&(head.style.top == this.douxy.y)){
            this.doudou();
            this.snkcolor();
            //将克隆的蛇头添加到数组尾部
            this.snkbody.push(addsnk);
            //将克隆的蛇头添加到画布
            this.snkmap.appendChild(addsnk);
            //计分数
            this.num.innerHTML = String(this.snkbody.length);
            for(var i = 0; i < this.snkbody.length; i++){
                this.allsnkx[i] = this.snkbody[i].style.left;
                this.allsnky[i] = this.snkbody[i].style.top;
            }
        };
    }
    //自动寻路
    this.xun = function(){
        var head = this.snkbody[this.snkbody.length-1];
        if( parseInt(head.style.top) > parseInt(this.douxy.y) && this.snkdir != "up"){
            this.snkdir = "up";
        }
        if( parseInt(head.style.top) <parseInt(this.douxy.y) && this.snkdir != "down"){
            this.snkdir = "down";
        }
        if( parseInt(head.style.left) < parseInt(this.douxy.x) && this.snkdir != "right"){
            this.snkdir = "right";
        }
        if( parseInt(head.style.left) > parseInt(this.douxy.x) && this.snkdir != "left"){
            this.snkdir = "left";
        } 
        this.snkmov(); 
    }
    //w 119  W  87
    //s 115  S  83
    //a 97   A  65
    //d 100  D  68
    _this = this;
    //绑定按键
    document.onkeypress = function(e){
        if((e.keyCode == 119 || e.keyCode == 87) && (_this.snkdir != "down")){
            _this.snkdir = "up";
        }
        if((e.keyCode == 115 || e.keyCode == 83) && (_this.snkdir != "up")){
            _this.snkdir = "down";
        }
        if((e.keyCode == 97 || e.keyCode == 65) && (_this.snkdir != "right")){
            _this.snkdir = "left";
        }
        if((e.keyCode == 100 || e.keyCode == 68) && (_this.snkdir != "left")){
            _this.snkdir = "right";
        }
    }
}
var add = 0;
var c = new Snk(".box");
c.newsnk();
c.doudou();
c.snkcolor();
var time;
var sc = 0;
var ks = document.querySelector(".move");
ks.onclick = function(){
    sc++;
    if(sc%2 != 0){
    clearInterval(time);
    time =  setInterval(function(){
        c.xun();
    },50);}
    else{
        clearInterval(time);
    }
}
// document.onmousedown = function(){
//     c.snkmov();
// }\



//