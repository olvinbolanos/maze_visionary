// import { isContext } from "vm";

let canvas;
let ctx;
let dx = 5;
let dy = 5;
let x = 200;
let y = 5;
//create the image element outside
let img = new Image();
let collision = 0;
//make the canvas size the same as the image size
const WIDTH = 482;
const HEIGHT = 482;


//area canvas display
// const drawMazeandRectangle = (rectX, rectY) => {
//     makeWhite(0, 0, WIDTH, HEIGHT);
//     img.onload = () => { //when the image is loaded, draw the image,
//     //rectangle and circle
//     ctx.drawImage(img, 0, 0);
//     drawRectangle(rectX, rectY, '#0000FF', false, true);
//     ctx.beginPath()
//     ctx.arc(542, 122, 7, 0, 2 * Math.PI, false)
//     ctx.closePath()
//     ctx.fillStyle = '#00FF00'
//     ctx.fill()
//     }
//     img.src = "images/maze3.png";
// }

// const drawRectangle = (x, y, style) => {
//   makeWhite(currRectX, currRectY, 15, 15);
//   currRectX = x;
//   currRectY = y;
//   ctx.beginPath()
//   ctx.rect(x, y, 15, 15)
//   ctx.closePath()
//   ctx.fillstyle = style;
//   ctx.fill()
// }

// const makeWhie = (x, y, w, h) => {
//   ctx.beginPath()
//   ctx.rect(x, y, w, h)
//   ctx.closePath()
//   ctx.fillStyle = 'white'
//   ctx.fill()
// }

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

// const line = (x, z, startPoint, endPoint) = {}

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
  img.src = "images/maze3.png";
//   drawMazeandRectangle(425, 3)
  return setInterval(draw, 10);
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

const checkcollision = () => {
    let imgd = ctx.getImageData(x, y, 15, 15);
    let pix = imgd.data;
    for (let i = 0; i < pix.length; i += 4) {
      if (pix[i] == 0) {
      collision = 1;
      }
    }
}

// this is the drawing of our rectangle
//filled with the color purple
const draw = () => {
  clear();
  ctx.fillStyle = "purple";
  rect(x, y, 20, 20);
  
}

init();

//this is for the blue rectangle won't move anymore on
//the screen when the button is not pressed anymore
window.addEventListener('keydown',doKeyDown,true);