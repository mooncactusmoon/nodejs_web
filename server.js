//模組化
//匯出'server'物件，物件包含了start函數
//物件格式為
/*
{
    start
}
*/
//這個物件匯入其他檔案中即可使用。可用任意名字來接收這物件
const http = require("http");
const url = require("url");

const start = (route, handle) => {
  //箭頭函數
  let onRequest = (request, response) => {

    let postData = "";
    let pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    // 設定接收資料的解碼格式
    request.setEncoding("utf8");
    // 登錄data事件監聽器
    request.addListener("data", function (postDataChunk) {
      // 將接收到的資料給予值給postData變數
      postData += postDataChunk;
      // 輸出日志
      console.log("Received POST data chunk '" + postDataChunk + "'.");
    });
    // 登錄end事件監聽器
    request.addListener("end", function () {
      // 將postData傳遞給請求路由
      route(handle, pathname, response, postData);
    });
  }
  //把函數當作參數傳遞
  http.createServer(onRequest).listen(8888);

  console.log("Server has started.");
}

exports.start = start;


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