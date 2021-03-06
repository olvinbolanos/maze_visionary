const startTimer = (duration, display) => {
  //first parameter should take in minutes while 
  //second parameter takes the setting on the page
  console.log('Start time....')
    let start = Date.now(), diff, min, sec, 
    warning = document.querySelector('#animate');
   
const timer = () => {    
  //get the number of seconds that have passed
  // immediately invoke startTimer() at the end
  //make this easy with just 8 lines of code
  diff = duration - (((Date.now() - start) / 1000 || 0))
  //Date.now return the number of milliseconds elapsed sinced Jan. 1. 1970
  //does the same job as parseInt truncates the float
  min = (diff / 60) | 0;
  sec = (diff % 60) | 0;
  
  min = min < 10 ? '0' + min : min; //this gives the minutes
  sec = sec < 10 ? '0' + sec : sec; //this gives the seconds
  //get the second parameter which will be an element
  //and display the minutes and seconds
  display.textContent = `${min} : ${sec}`;

  if (Math.round(diff) <= 10 && Math.round(diff) > 5) {
      //this sets a small part of the canvas to orange
      //when under 10 seconds
      warning.style.boxShadow = '2px 4px 5px orange'
  } else if (Math.round(diff) <= 5) {
      //this sets a small portion of the canvas to red
      //if under 5 seconds
      warning.style.boxShadow = '2px 4px 5px red'
  }
  
  if (diff <= 0) {
    //check if time is lesser than or equal to 0
    //add one second so that the count 
    //starts at the full duration on the display
    newPlayer = player[0];
    if(newPlayer.lives > 1) {
      timesUp()
      display = '';
    }  else {
      gameClosed()
      display = '';
      window.removeEventListener('keydown', doKeyDown, true)
    }
    return;
    };
  //we don't want to wait a full second before the timer starts right 
  //invoke the timer
  }
  timer()
  //starts counting down every second the timer 
  go = setInterval(timer, 1000);
  //clear the timer if it hits 10
}

const timesUp = () => {
  makeWhite(0, 0, WIDTH, HEIGHT)
  ctx.font = '40px Arial'
  ctx.fillStyle = '#FF0000'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(`Time's Up!`, WIDTH / 2, HEIGHT / 2);
  let curPlayer = player[0];
  curPlayer.lostRound()
  let playbutton = document.querySelector('#playButton');
  playbutton.style.visibility = 'visible'
  anotherRound()
  clearInterval(go)
  window.removeEventListener('keydown', doKeyDown, true)
}

const gameClosed= () => {
  makeWhite(0, 0, WIDTH, HEIGHT)
  ctx.font = '40px Arial'
  ctx.fillStyle = '#FF0000'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(`Game Over!`, WIDTH / 2, HEIGHT / 2);
  let life = document.querySelector('#lives');
  life.textContent = '0';
  clearInterval(go)
  window.removeEventListener('keydown', doKeyDown, true)
}


