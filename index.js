const express = require('express'),
          app = express(),
         port =  2020;
   
app.get('/', function(req, res) {
  res.render('main.html');
});

    
app.set('views', __dirname + '/Public');
app.engine('html', require('ejs').renderFile);
    
app.set('view engine', 'ejs'); 
app.use(express.static(__dirname + '/Public'));
app.use(express.static(__dirname + '/images'));

app.listen(port);
console.log('Squares of Success is running on http://127.0.0.1:' + port);