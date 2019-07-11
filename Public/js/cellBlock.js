let canvas;
let ctx;
let time = document.querySelector('#time');
let minutes = 0;
let dx = 5; 
let dy = 5;
let x = 0; //starting position for the square on X axis
let y = 0; //starting position for the square on Y axis
//create the image element outside
let flag = new Image()
let img = new Image()
let collision = 0;
let checkered = false;
let round = 1;
let go;
//make the canvas size the same as the image size
const WIDTH = 482;
const HEIGHT = 482;
const displayTime = document.querySelector('#time');
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
  if(round === 1) {
    drawMazeAndTarget(120, 472)
    console.log('congrats you passed round one')
  } else if (round === 2) {
      drawSecMazeAndTarget(240, 410)
    } else {
      drawThirdMazeAndTarget(380, 240)
    }
  startTimer(60 * minutes, time)
  return setInterval(draw, 100);
}

//reach target
const target = (x , y) => {
  flag.src = 'images/red-small-flag.jpg'
  ctx.drawImage(flag,  x, y);
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
        checkTarget()
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
        checkTarget()
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
        checkTarget()
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
      checkTarget()
      checkcollision();
      if (collision == 1){
        x -= dx;
        collision = 0;
      }
    }
    break;
    }
}

//check target rounds and run function
const checkTarget = () => {
  if (round === 1) {
    target(115, 460)
  } else if ( round === 2) {
      target(230, 410,)
    } else if (round === 3) {
      target(365, 235)
      }
}
//this moves the rectangle within the canvas by checking its
//bounds

const checkcollision = () => {
    let imgd = ctx.getImageData(x, y, 15, 15);
    let pix = imgd.data;
    for (let i = 0; i < pix.length; i += 4) {
        if (pix[i] == 0) {
            collision = 1; //this means the rectangle can move
        } 
    }
    if (pix[1] === 26 || pix[1] === 137 || pix[1] === 251) {
      wonRound()
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
//create my timer
window.addEventListener('keydown', doKeyDown, true)
