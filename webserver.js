//requirements for socket.io
const server = require('http').createServer();
const io = require('socket.io')(server);
io.on('connection', client => {
  client.on('event', data => { /* … */ });
  client.on('disconnect', () => { /* … */ });
});


//requirements axios
const axios = require('axios').default;

axios({
  method: 'post',
  url: '/navigation',
  data: {
  }
});


//requirements express
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})


//TODO: send message start/stop to hardware

//TODO: post request from frontend button to backend

//TODO: get request for frontend (submit message)


app.listen(3000)
server.listen(3000);