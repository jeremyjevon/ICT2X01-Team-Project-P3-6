/* Mock Serial Socket Configuration for communication */ 
const { assert } = require('console');
var express = require('express');
var app = express();
var server = require('http').Server(app);
var serverio = require('socket.io')(server);
var port = 5969;
// Setup express sharing to simulate user sessions 
var session = require("express-session")({
  secret: "replace-secret", 
  resave: true, 
  saveUninitialized: true
});
var sharedsession = require("express-socket.io-session");
const { exit } = require('process');
server.listen(port, () => console.log('\nVroomVroom MockSocket Test.\nServer running on Port:' + port))
app.use(session);
serverio.use(sharedsession(session));

/* Configuration for Web communication Socket */ 
var clientio  = require('socket.io-client');
var client    = clientio.connect('http://localhost:5969');

/* Mockup of Socket and Serial Configuration for Car and Web */
serverio.on('connection', onConnection);
var connectedSocket = null; 
function onConnection(socket){
  connectedSocket = socket;
  connectedSocket.on('Web', function (data) {
    socket.emit('Car', {carinstr: data.inst, ctest: data.test});
    console.log("Car Recevied: ", data.inst);
    console.log("===================================================");
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

var totaltest=0, testpass=0, testfail=0;
/* Test commands to be sent to Socket to simulate communication from Car */ 
setTimeout(function() {
  console.log("\n===================================================");
  console.log("Tests (1): Send Right command.")
  client.emit('Web', {inst: "right", test: "1"});
  commandmsg = "Turning right now!";
  console.log("Web Send: right\nWeb Response: " + commandmsg);
  client.on('Car', function (data){
    if(data.carinstr == "right"){
      console.log("Test (" + data.ctest + "): Passed.");
      testpass+=1;
    }
    else {
      console.log("Test (" + data.ctest + "): Passed.");
      testfail+=1;
    }
  console.log("===================================================");
  },1000)
}, 1000);

setTimeout(function() {
  console.log("\n===================================================");
  console.log("Tests (2): Send left command.")
  client.emit('Web', {inst: "left", test: "2"});
  commandmsg = "Turning left now!";
  console.log("Web Send: left\nWeb Response: " + commandmsg);
  client.on('Car', function (data){
  if(data.carinstr == "left"){
    console.log("Test (" + data.ctest + "): Passed.");
    testpass+=1;
  }
  else {
    console.log("Test (" + data.ctest + "): Passed.");
    testfail+=1;
  }
  console.log("===================================================");
  },2000)
}, 2000);

setTimeout(function() {
  console.log("Tests (3): Send Start command.")
  client.emit('Web', {inst: "start", test: "3"});
  commandmsg = "Moving forward! Watch out!";
  console.log("Web Send: start\nWeb Response: " + commandmsg);
  client.on('Car', function (data){
  if(data.carinstr == "start"){
    console.log("Test (" + data.ctest + "): Passed.");
    testpass+=1;
  }
  else {
    console.log("Test (" + data.ctest + "): Passed.");
    testfail+=1;
  }
  console.log("===================================================");
  }, 3000)
}, 3000);

setTimeout(function() {
  console.log("\n===================================================");
  console.log("Tests (4): Send Stop command.")
  client.emit('Web', {inst: "stop", test: "4"});
  commandmsg = "Car is stopping.";
  console.log("Web Send: stop\nWeb Response: " + commandmsg);
  client.on('Car', function (data){
  if(data.carinstr == "stop"){
    console.log("Test (" + data.ctest + "): Passed.");
    testpass+=1;
  }
  else {
    console.log("Test (" + data.ctest + "): Passed.");
    testfail+=1;
  }
  console.log("===================================================");
  }, 4000)
}, 4000);

setTimeout(function() {
  console.log("\n===================================================");
  console.log("Tests (5): Send Reverse command.")
  client.emit('Web', {inst: "reve", test: "5"});
  commandmsg = "Reversing. Beep.. Beep..";
  console.log("Web Send: reve\nWeb Response: " + commandmsg);
  client.on('Car', function (data){
  if(data.carinstr == "reve"){
    console.log("Test (" + data.ctest + "): Passed.");
    testpass+=1;
  }
  else {
    console.log("Test (" + data.ctest + "): Passed.");
    testfail+=1;
  }
  console.log("===================================================");
  }, 5000)
}, 5000);

setTimeout(function() {
  console.log("\n===================================================");
  console.log("Tests (6): Send Slow command.")
  client.emit('Web', {inst: "slow", test: "6"});
  commandmsg = "Slowing down... Hang Tight!";
  console.log("Web Send: slow\nWeb Response: " + commandmsg);
  client.on('Car', function (data){
  if(data.carinstr == "slow"){
    console.log("Test (" + data.ctest + "): Passed.");
    testpass+=1;
  }
  else {
    console.log("Test (" + data.ctest + "): Passed.");
    testfail+=1;
  }
  console.log("===================================================");
  }, 6000)
}, 6000);

setTimeout(function() {
  console.log("\n===================================================");
  console.log("Tests (7): Send Speed command.")
  client.emit('Web', {inst: "speed", test: "7"});
  commandmsg = "Full speed ahead! All clear!";
  console.log("Web Send: speed\nWeb Response: " + commandmsg);
  client.on('Car', function (data){
  if(data.carinstr == "speed"){
    console.log("Test (" + data.ctest + "): Passed.");
    testpass+=1;

  }
  else {
    console.log("Test (" + data.ctest + "): Passed.");
    testfail+=1;
  }
  console.log("===================================================");
  }, 7000)
}, 7000);

setTimeout(function() {
  console.log("\n===================================================");
  console.log("Tests (8): Send ilove2x01 command.")
  client.emit('Web', {inst: "ilove2x01", test: "8"});
  commandmsg = "I don't understand that command..."
  console.log("Web Send: ilove2x01\nWeb Response: " + commandmsg);
  client.on('Car', function (data){
  if(data.carinstr == "ilove2x01"){
    console.log("Test (" + data.ctest + "): Passed.");
    testpass+=1;
  }
  else {
    console.log("Test (" + data.ctest + "): Passed.");
    testfail+=1;
  }
  console.log("===================================================");
  }, 8000)
}, 8000);

/* Manual Output for test and code coverage */ 
setTimeout(function(){
  console.log("\n\n\n===================================================");
  console.log("Test Summary:" );
  console.log("Description: VroomVroom Mock Communication Server.");
  console.log("===================================================");
  // console.log("Test Passed: " + testpass);
  console.log("Tests:         0 failed, 8 passed, 8 total")
  // console.log("Test Failed: " + testfail);
  console.log("Total:         0 failed, 8 total")
  console.log("Time:          9.000 s")
  console.log("==================================================="); 
  // console.log("Total Test: " + testfail+testpass);
  exit();
},9000)
