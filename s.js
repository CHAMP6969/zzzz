'use strict';
//# for id
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent='Correct Number !!!!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=20;

// document.querySelector('.guess').nodeValue=23;
// console.log(document.querySelector('.guess').nodeValue);

let highscore=0;
var audio=new Audio('m.mp3');

const numberr=Math.trunc(Math.random()*20)+1;
let score=20;

document.querySelector('.check').addEventListener('click',function(){
   const guess=Number(document.querySelector('.guess').value);
   console.log(typeof guess);
//for null input 
   if(!guess){
       document.querySelector('.message').textContent='Please Try Again❌  ';
   }
   else if(guess===numberr){
    document.querySelector('.message').textContent= '✔️ Bingo ';
    //when player wins 
    audio.play();
    document.querySelector('body').style.backgroundColor= '#60b347';
 
document.querySelector('.number').textContent=numberr;
    document.querySelector('.number').style.width='30rem';
    if(score>highscore){
        highscore=score;
        document.querySelector('.highscore').textContent=highscore;
    }
    


   }
   //for high 
   else if(guess>numberr){
       if(score>1){
        document.querySelector('.message').textContent='too high ➜!';
        score--;
        document.querySelector('.s').textContent=score;
       }
       else{
        document.querySelector('.message').textContent='🙆‍♂️ Loss the Game';
       }
  
   }
   //for low 
   else if(guess<numberr){

    if(score>1){
        document.querySelector('.message').textContent='👈🏻 too low';
    score--;
    document.querySelector('.s').textContent=score;
    }
    else{
        document.querySelector('.message').textContent='🙆‍♂️ Loss the Game ';
       }
   }
})


////reseeting buttonm

document.querySelector('.again').addEventListener('click',function(){
    audio.pause();
    document.querySelector('.s').textContent='20';
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor= '#222';


})

