//從'server'模組中匯入server物件
let server = require('./server');
let router = require('./router');
let requestHandlers = require('./requestHandlers');

//物件建置
var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

//啟動伺服器
server.start(router.route, handle);