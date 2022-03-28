//我們引入了一個新的Node.js模組，child_process。之所以用它，是為了實現一個既簡單又實用的非阻塞動作：exec()。
var exec = require("child_process").exec;

function start(response) {
  console.log("Request handler 'start' was called.");

  exec("ls -lah", function (error, stdout, stderr) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(stdout);
    response.end();
  });
}

function upload(response) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello Upload");
  response.end();
}

exports.start = start;
exports.upload = upload;

// function start(){
//     console.log("Request handler 'start' was called.");
//     return "Hello Start";
// }

// function upload(){
//     console.log("Request handler 'upload' was called.");
//     return "Hello Upload";
// }

// exports.start = start;
// exports.upload = upload;
