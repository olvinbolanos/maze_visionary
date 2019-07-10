const drawMazeAndTarget= () => {
    img.onload = () => { //when the image is loaded, draw the image,
      ctx.drawImage(img, 0, 0)
      ctx.beginPath()
      ctx.arc(120, 472, 7, 0, 2 * Math.PI, false)
      ctx.closePath()
      ctx.fillStyle = 'red'
      ctx.fill()
    }
  img.src = "images/easyMaze.gif"; 
}

const drawSecMazeAndTarget= () => {
    return 'draw second maze';
}


