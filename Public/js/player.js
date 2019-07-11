class Player {
    constructor(name) {
      this.name = name;
      this.status = 0;
      this.lives = 3;
    }

    initPlayer() {
        let ctx = document.querySelector('canvas').getContext('2d');
        let img = document.createElement('img');
        img.src = `images/${this.character}`;
        let spriteW = 10, spriteH= 10;
        img.addEventListener('load', () => {
            let cycle = 0;
            setInterval(() => {
                ctx.clearRect(0, 0, spriteW, spriteH);
                ctx.drawImage(img, 
                    //source rectangle
                    cycle * spriteW, 0, spriteW, spriteH, 
                    //destination flag
                    0,  0,  spriteW, spriteH);
                cycle = (cycle + 1) % 8 // count how many sprites there are in the image 
            }, 120);
        });

    }


    getName() {
        let playerName = document.querySelectorAll('.player')
        for (let i = 0; i < playerName.length; i++) {
            playerName[i].textContent = `${this.name}`
        }
    }

    showLife() {
        //let the player see their life at the beginning of the game
        let livesLeft = document.querySelector('#lives');
        livesLeft.textContent = `${this.lives}`;
    }
    
    lostRound() {
      //let the player start over again and press the playagain button to start the round 
      //over again. Display the playAgain button again and call its visibility to visible
      let livesLeft = document.querySelector('#lives');
      --this.lives;
      livesLeft.textContent = `${this.lives}`;
    }

    updateRound(count) {
      let updateRound = document.querySelector('#round');
      updateRound.textContent = `${count}`;
    }

    wonGame() {
        let heading = document.querySelector('h1')[1];
        heading.removeAttribute('class', 'hide');
        heading.setAttribute('class', 'show');
    }
}


