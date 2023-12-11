//Script.js

$(document).ready(function() {

let bBall = ['Celtics', 'Nets', 'Knicks', '76ers', 'Raptors', 'Bulls', 'Cavaliers', 'Pistons', 'Pacers', 'Bucks', 'Nuggets', 'Timberwolves', 'Thunder', 'Trailblazers', 'Jazz', 'Warriors', 'Clippers', 'Lakers', 'Suns', 'Kings', 'Hawks', 'Hornets', 'Heat', 'Magic', 'Wizards', 'Mavericks', 'Rockets', 'Grizzlies', 'Pelicans', 'Spurs']
  
  // EVERYTHING GOES BELOW HERE
 function reRoll() {
    
    let basket = bBall[Math.floor(Math.random() * bBall.length)];
    let basket1 = bBall[Math.floor(Math.random() * bBall.length)];
    //You might need to move the variables into the function, try both
    document.getElementById("text").innerText=basket;
}
window.onload = reRoll(bBall);
 } 
  
  
  
  

  //call reroll 
  


  // EVERYTHING GOES ABOVE HERE
)
