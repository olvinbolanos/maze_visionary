const express = require('express'),
         app  = express(),
         PORT = 3000,
         http = require('http');
   
app.use(express.static('Public'))
         
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/Public/main.html');
});

app.listen(process.env.PORT || PORT)
console.log('Maze Visionary is running on http://128.0.0.1:' + PORT)



