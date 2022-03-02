function startTimer(){
    var minutes = 1;
    var sec = 0;
    var interval = setInterval(function(){
        if(sec == 0 && minutes != 0){
            sec = 59;
            minutes = minutes - 1;
        }
        else{
            sec = sec - 1;
        }
        if (minutes < 10 && sec < 10){
            timerCtd.innerText =  "0" + minutes + ": 0" + sec;
        } else if(minutes < 10 && sec > 10) {
            timerCtd.innerText = "0" + minutes + " : " + sec;

        } else if(minutes == 0 && sec == 0){
            clearInterval(interval);
        } 
        else {
            timerCtd.innerText = minutes + " : " + sec;
        }
    }, 1000);
    
    
}

// function endTimer(){

// }

// function resetTimer(){


// }

// function startBreak(){

// }

// function startLBreak(){

// }

const startBtn = document.getElementById("startBtn");
const timerCtd = document.getElementById("timerCtd");
startBtn.addEventListener("click",function(){
    startTimer();
});