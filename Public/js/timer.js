const startTimer = (duration, display) => {
    //first parameter should take in minutes while 
    //second parameter takes the setting on the page
    console.log('Start time....')
      let start = Date.now(), diff, min, sec;
      
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
        ctx.fillStyle = 'orange';
        ctx.fillRect(20, 20, 150, 150)
    } else if (Math.round(diff) <= 5) {
        ctx.fillStyle = 'red';
        ctx.fillRect(20, 20, 150, 150)
    } 
    
    if (diff <= 0) {
      //check if time is lesser than or equal to 0
      //add one second so that the count 
      //starts at the full duration on the display
      clearInterval(go);
      window.removeEventListener('keydown',doKeyDown, true);
      makeWhite(0, 0, WIDTH, HEIGHT)
      ctx.font = '40px Arial'
      ctx.fillStyle = '#FF0000'
      ctx.fillRect(20, 20, 150, 150)
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(`Time's Up!`, WIDTH / 2, HEIGHT / 2);
      return;
    }
  };
  //we don't want to wait a full second before the timer starts right 
  //invoke the timer
  timer()
  //starts counting down every second the timer 
  let go = setInterval(timer, 1000);
  //clear the timer if it hits 10
 }

const createTimer = (sec) => {
  interval = setInterval(() => {
      makeWhite(WIDTH, 0, 0, HEIGHT);

      if (sec === 0) {
          clearInterval(interval);
          window.removeEventListener('keydown',doKeyDown, true);
          makeWhite(0, 0, WIDTH, HEIGHT)
          ctx.font = '40px Arial'
          ctx.fillStyle = '#FF0000'
          ctx.fillRect(20, 20, 150, 150)
          ctx.textAlign = 'center'
          ctx.textBaseline = 'middle'
          ctx.fillText(`Time's Up!`, WIDTH / 2, HEIGHT / 2);
          return;
      }
      ctx.font = '20px Arial';
      if (sec <= 10 && sec > 5) {
          ctx.fillStyle = 'orange';
          ctx.fillRect(20, 20, 150, 150)
      } else if (sec <= 5) {
          ctx.fillStyle = 'red';
          ctx.fillRect(20, 20, 150, 150)
      } 
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      let min = Math.floor(sec / 60);
      console.log(min)
      let secToDisplay = (sec - min * 60).toString();
      if (secToDisplay.length === 1) {
          secToDisplay = '0' + secToDisplay; //if the number of seconds if
          //5 for example, make sure that it's shown as '05'
      }
      ctx.fillText(min.toString() + ":" + secToDisplay, WIDTH + 30, HEIGHT / 2);
  }, 1000);
  
}
