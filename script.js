var i=0;
var level = 1;
var stickman = document.getElementById("stickman");
var obstacle = document.getElementById("obstacle");
function jump(){
    if(stickman.classList == "animate"){
        return
    }
    stickman.classList.add("animate");
    setTimeout(function(){
        stickman.classList.remove("animate");
    },300);
}
var lost = setInterval(function()
{
    var BottomContact = parseInt(window.getComputedStyle(stickman).getPropertyValue("top"));
    var ObstacleLeftContact = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    if(ObstacleLeftContact<40 && ObstacleLeftContact>0 && BottomContact >= 260){
        obstacle.style.animation = "none";
        obstacle.style.display = "none";
        alert("You reached level: " + level + " Your score: " + Math.floor(i/100) +   "                                                         Reload the page to restart!");
        i="end";
        return
    }
    else{
        i++;
        document.getElementById("ScoreBoard").innerHTML = Math.floor(i/100);
        if(Math.floor(i/100) < 10){
        level = 1; 
        document.getElementById("LEVEL").innerHTML = level;
        }
        
        if ((Math.floor(i/100) >= 10) && (Math.floor(i/100) < 20)){
        level = 2;
        document.getElementById("LEVEL").innerHTML = level;
        }
        else if ((Math.floor(i/100) >= 20) && (Math.floor(i/100) < 30)){
        level = 3;
        obstacle.style.left = "1000px";
        obstacle.style.animation = "none";
        obstacle.style.animation = "obstacle 900ms infinite linear";
        document.getElementById("LEVEL").innerHTML = level;
        }
        else if ((Math.floor(i/100) >= 30) && (Math.floor(i/100) < 40)){
        level = 4;
        obstacle.style.left = "1000px";
        obstacle.style.animation = "none";
        obstacle.style.animation = "none";
        obstacle.style.animation = "obstacle 850ms infinite linear";
        document.getElementById("LEVEL").innerHTML = level;
        }
        else if ((Math.floor(i/100) >= 40) && (Math.floor(i/100) < 50)){
        level = 5;
        obstacle.style.left = "1000px";
        obstacle.style.animation = "none";
        obstacle.style.animation = "obstacle 800ms infinite linear";
        document.getElementById("LEVEL").innerHTML = level;
        }
        else if ((Math.floor(i/100) >= 50) && (Math.floor(i/100) < 60)){
        level = 6;
        obstacle.style.left = "1000px";
        obstacle.style.animation = "none";
        obstacle.style.animation = "obstacle 700ms infinite linear";
        document.getElementById("LEVEL").innerHTML = level;
        }
        else if ((Math.floor(i/100) >= 60) && (Math.floor(i/100) < 75)){
        level = 7;
        document.getElementById("LEVEL").innerHTML = level;
        }
        else if ((Math.floor(i/100) == 75)){
        obstacle.style.animation = "none";
        if( obstacle.style.display != "none"){
          alert("You reached level: " + level + " Your score: " + Math.floor(i/100) +   "                                                         This is the end of the levels, well done! Reload the page to play more.");
        }
        i="end";
        }
        
    }},10)