/**
 * Created by unnKoel on 2015/8/29.
 */

var http = require('http');
http.createServer(function (require, response) {
    response.writeHead(200, {'Content-Type': 'text-plain'});
    response.end('Hello World\n');
}).listen(8124);