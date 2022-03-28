const http= require("http");

http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("Hello World 2022/03/28 :>");
    response.end();
}).listen(8888);

//亦可以用箭頭函數
/*
let http=require("http");

let onRequest=(request,response)=>{
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("Hello World 2022/03/28 :> HAHA");
    response.end();
}

http.createServer(onRequest).listen(8888); //把函數當作參數傳遞
console.log("在瀏覽器中開啟localhost:8888吧")
*/ 