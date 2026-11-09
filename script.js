var timer = 60;
var score = 0;
var hitrn = 0;

function increseScore() {
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function getNewHit() {
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = hitrn;
}

function MakeBubble() {
     var clutter = "";

for (var i = 1; i <= 80; i++) {
      var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;

}

document.querySelector("#pbtm").innerHTML = clutter;
 }
 var timer = 6;
function runTimer() {
     var timerint = setInterval(function() {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerVal").innerHTML = timer;
        }
        else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1><h2>Your Score: ${score}</h2>`   ;
        }
    }, 1000);
}
   
     document.querySelector("#pbtm").addEventListener("click", function(dets) {
     var clickednum = Number(dets.target.textContent);
     if (clickednum === hitrn) {
            increseScore();
            MakeBubble();
            getNewHit();
     }
 });


runTimer();
 MakeBubble();
 getNewHit();
 increseScore();