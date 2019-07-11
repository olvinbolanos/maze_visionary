const drawMazeAndTarget= (canvasX, canvasY) => {
    img.onload = () => { //when the image is loaded, draw the image,
      ctx.drawImage(img, 0, 0)
      ctx.beginPath()
      ctx.arc(canvasX, canvasY, 7, 0, 2 * Math.PI, false)
      ctx.closePath()
      ctx.fillStyle = 'red'
      ctx.fill()
    }
      x = 460;
      y = 115;
//   x = 120; //starting position for the square on X axis
//   y = 440; left this to test later
  minutes = 10;
  img.src = "images/easyMaze.gif"; 
}

const drawSecMazeAndTarget= (canvasX, canvasY) => {
    img.onload = () => { //when the image is loaded, draw the image,
      ctx.drawImage(img, 0, 0)
      ctx.beginPath()
      ctx.arc(canvasX, canvasY, 7, 0, 2 * Math.PI, false)
      ctx.closePath()
      ctx.fillStyle = 'red'
      ctx.fill()
    }
    x = 80; //starting position for the square on X axis
    y = 75;
    // x = 230; left this to test later
    // y = 380;
    minutes = 10;
    img.src = "images/pinocchio-maze.gif"; 
}

const drawThirdMazeAndTarget = (canvasX, canvasY) => {
    img.onload = () => {
        ctx.drawImage(img, 0, 0)
        ctx.beginPath()
        ctx.arc(canvasX, canvasY, 7, 0, 2 * Math.PI, false)
        ctx.closePath()
        ctx.fill()
    }
    x = 115;
    y = 265;
    minutes = 10;
    img.src = 'images/curiousGeorge.jpg';
}


