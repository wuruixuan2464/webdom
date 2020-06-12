
let fs = require("fs");
//异步读取
// fs.readFile('aa.txt',(error,data)=>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log("读取成功",data.toString());
//     }
// });
//同步读取
// var da = fs.readFileSync("aa.txt");
// console.log(da.toString());

// fs.open('aa.txt' , 'r+' , (error,data)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//     console.log("dakaichengg");}
// })
// //创建目录
// fs.mkdir("cc",(error)=>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log("成功");
//     }
// })
//创建文件
// fs.writeFile("pp/tt.txt","ddasdawfjhgsegiuhabouhvbuydffgbuyBER7",(error)=>{
//     if(error){
//         console.log(error)
//     }
//     else{
//         console.log("成功")
//     }
// })
//追加写入
// fs.appendFile("cc/tt.txt","88484848484848484\n84848484848484",(error)=>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log("成功")
//     }
// })
//读取目录
// fs.readdir("cc",(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data);
//     }
// })
//改名
// fs.rename("cc","pp",(e,d)=>{
//     if(e){
//         console.log(e);
//     }else{
//         console.log(d);
//     }
// })

// 删除文件
// fs.unlink("./pp/tt.txt",(e)=>{
//     if(e){
//         console.log(e);
//     }else{
//         console.log("success");
//     }
// })
//删除目录 （目录必须为空才可以删除）
// fs.rmdir("pp",(e)=>{
//     if(e){
//         console.log(e)
//     }else{
//         console.log("success")
//     }
// })
let md5 = require("md5");
var i = "sd111"
console.log(md5(i));
const http = require("http");
let url = require("url");
// //将地址？后的key  val 转换成对象
// var s = url.parse("https://www.baidu.com/s?wd=nodejs%20%20url&rsv_spt=1&rsv_iqid=0xa60e8c3400104750&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&rqlang=cn&tn=baiduhome_pg&rsv_enter=1&rsv_dl=tb&oq=nodejs%2520fs&rsv_btype=t&inputT=3445&rsv_t=4aa8bwz1by2XJrvf6%2B3KXg6xYDM%2BONoil5fm65QHta6JRi7Gi9YJHn1skniW3ehxEm8Y&rsv_pq=fc5f92ad001594bb&rsv_sug3=18&rsv_sug1=14&rsv_sug7=100&rsv_sug2=0&rsv_sug4=4054",true).query;
// console.log(s);
 http.createServer((requset,response)=>{ 
     let u =url.parse(requset.url).pathname;
     if((u == "/ipp.html"||u == "/"||u == "/ipp")&&requset.method == "GET"){
         fs.readFile('./ipp.html',(error,data)=>{
             if(error){
                 console.log(error);
             } 
             response.writeHead(200, {"Content-Type":"text/html"});
             response.end(data);
         })
     }

     if(u == "/login" && requset.method == "POST"){
         let dat = "";
         requset.on("data" , (a)=>{
             dat += a; 
         })
         requset.on("end" , ()=>{
             console.log(dat);
         })
     }
 }).listen(80,()=>{
     console.log("port 80!");
 });
        
  

