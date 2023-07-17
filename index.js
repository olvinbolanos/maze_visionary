const express = require('express'),
         app  = express(),
         PORT = 5050,
         http = require('http');
   
app.use(express.static('Public'))
         
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/Public/main.html');
});

app.listen(PORT || 5000)
console.log('Maze Visionary is running on http://127.0.0.1:' + PORT)



