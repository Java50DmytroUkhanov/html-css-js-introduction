//references to HTML elements
const questionElement = document.getElementById("question");
const wordInputElement = document.getElementById("word-input");
const remainedLettersElement = document.getElementById("letters-remainder");
const letterInputElement = document.getElementById("letter-input");
const wordElement = document.querySelector(".word");
const resultMessage = document.getElementById("result-message");
const playAgain = document.getElementById("play-again");
let wordLettersElement;
//global variables
const questionsWords = [["What name is our teacher", "Yury"], ["question2", "answer2"]];
let currentIndex = 0;
let initialLettersNumber;
let remainedLettersNumber;
let finishMessage ;
//functions
function startGame(){
   
    wordInputElement.value = '';
    wordInputElement.readOnly = true;
    questionElement.innerHTML = questionsWords[currentIndex][0];
    playAgain.style.display = 'none';
    resultMessage.innerHTML ='';
    wordElement.innerHTML = getWordDivs();
    remainedLettersElement.innerHTML = Math.round(questionsWords[currentIndex][1].length * 0.3);
   
    
}
function getWordDivs(){
   const array = Array.from(questionsWords[currentIndex][1]);
   const res = array.reduce(function(a, b){
        return a + `<div class="letter">${b}</div>`;

   }, "" );

   return res;
}


function checkWord(){
    const answer = questionsWords[currentIndex][1].toUpperCase();
    const res = wordInputElement.value.toUpperCase();
  

  if(res === answer){
        finishMessage = "You Winner!!!";
    }else{
        finishMessage = "Opps.... try again";
    }
    finishGame();
    
}
function processLetter(){
   //TODO
}
function takeChance(){
    wordInputElement.readOnly = false;
    letterInputElement.disabled = true;
    

}
function finishGame(){
    resultMessage.innerHTML = finishMessage;
    playAgain.style.display = 'block';
    

}
//action
startGame();
