let ball = document.querySelector("#ball");
let hole = document.querySelector("#hole");
let posX = 100;
let posY = 200;

var time = 0
let speedX;
let speedY;
window.onload = function() {
    secs = 0;
        var id = setInterval(function(){ 
            secs++; console.log(secs);
          if(time === 1){
            clearInterval(id);
           }
        }, 1000);
    };
function speed(e) {
    speedX=e.gamma/1000
    speedY=e.beta/1000
}
function movability() {
    if(posX + speedX < window.innerWidth-25 && posX + speedX > 0) {
        posX+=speedX;
        ball.style.left=posX+'px';        
    }

    if(posY + speedY < window.innerHeight-50 && posY + speedY > 0){
        posY+=speedY;
        ball.style.top=posY+'px';
    }

    if(posY>hole.offsetTop-30 && posY<hole.offsetTop+20){
        if(posX>hole.offsetLeft-40 && posX<hole.offsetLeft+10){
            posX = 0
            posY = 0
            speedY = 0
            speedX = 0
            alert('You win! Your time: ' +secs+'s')
            time = 1
        }
     }
        window.requestAnimationFrame(movability)

}
window.addEventListener('deviceorientation', movability)
window.addEventListener('deviceorientation', speed)