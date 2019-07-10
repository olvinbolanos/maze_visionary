let canvas;
let ctx;
let time = document.querySelector('#time');
let minute = 15;
let dx = 5; 
let dy = 5;
let x = 460; //starting position for the square on X axis
let y = 115; //starting position for the square on Y axis
//create the image element outside
// let flag = new Image()
let img = new Image()
// flag.src = 'images/small-red-flag.jpg'
let collision = 0;
//make the canvas size the same as the image size
const WIDTH = 482;
const HEIGHT = 482;
const displayTime = document.querySelector('#time');


//area canvas display
const drawMazeAndTarget= () => {
    img.onload = () => { //when the image is loaded, draw the image,
      ctx.drawImage(img, 0, 0)
      ctx.beginPath()
      ctx.arc(120, 472, 7, 0, 2 * Math.PI, false)
      ctx.closePath()
      ctx.fillStyle = 'red'
      ctx.fill()
      // startTimer(minute, time)
    }
  img.src = "images/easyMaze.gif"; 
}


//stops here

//this will be our small rec piece moving
//across the board.
const rect = (x, y, w, h) => {
  //create a new path for the rectangle
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  //add a straight line from the current point 
  //to the start of the current sub-path
  ctx.closePath();
  //or fill the contents of the rect directly
  //to the path
  ctx.fill();
}

//ctx.drawImage(var holding the img, X coordinate of the top left
//of the img, Y coordinate of the top left of the image)
const clear = () =>{
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  //this controls how much of the image to draw
  //basically putting the image in the canvas
  ctx.drawImage(img, 0, 0);
}

//this init function start everything by making 
//the canvas a 2d element and rendering the image
//on the body
const init = () => {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  drawMazeAndTarget()
  return setInterval(draw, 100);
}


//Put an event listener on all the keys on the 
//window and check if they are up,down,left, right buttons
//best way to do this is switch statement
const doKeyDown = (evt) => {
  switch (evt.keyCode) {
    case 38:  /* Up arrow was pressed */
      if (y - dy > 0){
        y -= dy;
        clear();
        checkcollision();
        if (collision == 1){
          y += dy;
          collision = 0;
        }
      }
    break;

    case 40:  /* Down arrow was pressed */
      if (y + dy < HEIGHT ){
        y += dy;
        clear();
        checkcollision();
        if (collision == 1){
          y -= dy;
          collision = 0;
        }
      }
    break;

    case 37:  /* Left arrow was pressed */
      if (x - dx > 0){
        x -= dx;
        clear();
        checkcollision();
        if (collision == 1){
          x += dx;
          collision = 0;
        }
      }
    break;

    case 39:  /* Right arrow was pressed */
    if ((x + dx < WIDTH)){
      x += dx;
      clear();
      checkcollision();
      if (collision == 1){
        x -= dx;
        collision = 0;
      }
    }
    break;
    }
}
//this moves the rectangle within the canvas by checking its
//bounds
const checkcollision = () => {
    let imgd = ctx.getImageData(x, y, 15, 15);
    let pix = imgd.data;
    console.log(pix[1])
    for (let i = 0; i < pix.length; i += 4) {
        if (pix[i] == 0) {
            collision = 1; //this means the rectangle can move
        }
    }
    return imgd;
}

const makeWhite = (x, y, w, h) => {
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.closePath();
    ctx.fillStyle = 'white';
    ctx.fill();
}
// this is the drawing of our rectangle
//filled with the color purple
const draw = () => {
  ctx.fillStyle = "green";
  rect(x, y, 10, 10);
}
//instatiate the function init()
init();
checkcollision()
//create my timer
window.addEventListener('keydown', doKeyDown, true)
