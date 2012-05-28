var http = require('http'),
    io = require('socket.io'),
 
server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Sample server created with NodeJS.</h1>');
    res.end();
});
server.listen(8080);
 
// socket.io
var socket = io.listen(server);
socket.on('connection', function(client){
  client.send('Hello client');
  client.on('message', function(){
     client.send((new Date()).getTime());
  })
});