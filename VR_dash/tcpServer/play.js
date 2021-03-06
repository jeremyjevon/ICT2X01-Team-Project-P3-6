/*
** Bluetooth Serial Connection to Web. **
 * Serve from port 8888
 Todo: 
 * Integration with vr dash app
*/

// Configuration for serial port connection
var serport      = "/dev/tty.HC-06";
var rate         = 9600;
var serports     = [];
var fs           = require('fs');
const SerialPort = require('serialport');

/* Play Server configuration */ 
var express = require('express');
var app    = express();
var server = require('http').Server(app);
var io     = require('socket.io')(server);
var port   = 8888;

server.listen(port, () => console.log('Server Listening on port' + port))

app.get('*', function(req, res){
  fs.readFile(__dirname + '/index.html','utf8', function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }
    res.writeHead(200, {'Content-Type' : "text/html; charset=utf-8"});
    var result = data.replace("Node Serial Connection","Node Serial Connection " + serports[0]);
    res.end(result);
  });
});


/* WebSocket Configuration to receive data from website */
io.on('connection', onConnection);
var connectedSocket = null;
function onConnection(socket) {  
  connectedSocket = socket;
  // console.log("Connected socket:", connectedSocket);
  connectedSocket.on('send', function (data) {
    console.log(data);
    serport.write(data.Data);
  });
  connectedSocket.on('test event', function (data) {
    console.log('serverserver data', data);
    socket.emit('test resp', data + "1")
  });
  connectedSocket.on('login', function(userdata){
    socket.handshake.session.userdata = userdata;
    socket.handshake.session.save()
    console.log(userdata)
  });
  connectedSocket.on('logout',function(userdata){
    if(socket.handshake.session.userdata){
      delete socket.handshake.session.userdata;
      socket.handshake.session.save(); 
      console.log(userdata)
    }
  })
}

/* Sending Data with Serial Port */ 
if (process.argv.length > 2) {
  console.log(process.argv);
  serports.push(process.argv[2]);
  if (process.argv.length > 3) rate = parseInt(process.argv[3]);
}

/* Serial Port Configurations for Server */ 
SerialPort.list().then(ports => {
  ports.forEach(function(port) {
    if (typeof port['manufacturer'] !== 'undefined') {
      serports.push(port.path);
      console.log(port);
    }
  });
  if (serports.length == 0) {
    console.log("Serial Port Not found.");
    process.exit();
  }
  serport = new SerialPort(serports[0], {  baudRate: rate })
  serport.on('error', function(err) {
    console.log('Error: ', err.message)
  })
  serport.on('data', function (data) {
    console.log(data.toString('utf8'));
    io.emit('data', { data: data.toString('utf8') });
  })
});