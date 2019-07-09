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



// const catchColor = () => {
  //     if (this.value == '#') {
  //     } else if (this.value == ' ') {
  //         return 'white'
  //     } else if (this.value == 'w') {
  //         return 'green'
  //     } else if (this.value == 'a') {
  //         return 'yellow'
  //     } else if (this.value == 'd') {
  //         return 'lightpurple'
  //     } else if (this.value == 's') {
  //         return 'black'
  //     } else {
  //         return 'blue'
  //     }
  // }
  
  // const startAt = (row, col) => {
  //    let row = row;
  //    let col = col;
  // };
  
  // const setDistance = (distance) => {
  //    let distance = distance;
  // };
  
  // const getDistance = () => {
  //     return distance;
  // };
  
  // const getCurrentColor = () =>{
  //      catchColor()
  // };
  