const express = require('express'),
         app  = express(),
         port = 2020,
         http = require('http');
   
app.use(express.static('Public'))
         
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/Public/main.html');
});

app.listen(port)
console.log('Squares of Success is running on http://127.0.0.1:' + port)



