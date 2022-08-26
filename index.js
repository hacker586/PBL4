// 20 mins = 20 x 60 secs = 1200;
var counter = 1200;
var pauseFor = 20;
var alternater = 0;
const audio = document.querySelector("audio");

document.getElementById("start").onclick=function(){
    alternater = 1;
    interval();
};
document.getElementById("stop").onclick=function(){
    alternater = -1;
    interval();
};
// function for 1200 seconds
function interval(){
if(alternater==1){
    setInterval(function(){
        if(alternater ==1){
        counter--;    
        if(counter >= 0){
            document.getElementById("timer").innerHTML = counter;
        }else{
            document.getElementById("timer").innerHTML = pauseFor;
            alternater =0;
            pauseInterval();
        }
    }
    }, 1000);
} else{
    counter = 0;
    document.getElementById("timer").innerHTML = "Timer is Stopped!";
    document.getElementById("statement").innerHTML = "";
}
}
//function for 20 seconds
function pauseInterval(){
    if(alternater ==0){
        setInterval(function(){
            pauseFor--;
            if(pauseFor>=0){
                document.getElementById("timer").innerHTML = pauseFor;
                audio.play();

            }else{
                document.getElementById("timer").innerHTML = counter;
                audio.pause();
                alternater=1;
                counter = 1200;
                interval();
            }
        },1000);
    };
};

