//模組化
//匯出'server'物件，物件包含了start函數
//物件格式為
/*
{
    start
}
*/
//這個物件匯入其他檔案中即可使用。可用任意名字來接收這物件
const http= require("http");
const url= require("url");

const start= (route, handle) =>{
    const onRequest=(request,response)=>{
        const pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + "received. :O");
        route(handle, pathname);

        response.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});
        var content = route(handle, pathname);
        response.write(content);
        response.end();
    }
    //把函數當作參數傳遞
    http.createServer(onRequest).listen(8888);

    console.log("Server has started...");
}


exports.start=start;


/* 原本寫法(非模組化)
const http= require("http");

http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("Hello World 2022/03/28 :>");
    response.end();
}).listen(8888); */

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