var express = require('express');
var router = express.Router();
    http = require('http');
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

server.listen(3002);//... 

/* GET home page. */
router.get('/', function(req, res, next) {
	
	var path = require('path');

	res.sendFile(path.join(__dirname, '../views', 'index.html'));


});



io.on('connection', function(socket){
  console.log('a user connected');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
module.exports = router;
