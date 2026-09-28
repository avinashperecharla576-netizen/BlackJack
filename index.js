// document.getElementById("count-el").innerText = 5
// function increment(){
//     document.getElementById("count-el").innerText += 1
// }
// let countEl = document.getElementById("count-el");
// let count = 0;
// function increment(){
//     count = count + 1;
//     countEl.innerText = count;
// }

// // let bug = document.getElementById("error")
// // function reset(){
// //     bug.innerText = "Error occured,Please try again later";
// // }


// let prev = document.getElementById("save-entry");
// function save(){
//     countStr = count + " -";
//     prev.innerText += " "+countStr;
//     countEl.textContent = 0;
//     count = 0;
// } 


// let num1 = 8;
// let num2 = 4;

// document.getElementById("num1").textContent = num1;
// document.getElementById("num2").textContent = num2;

// let sumEl = document.getElementById("calculator");

// function add(){
//     let result = num1 + num2;
//     sumEl.textContent = "sum: "+result;
// }
// function multiply(){
//     let result = num1 * num2;
//     sumEl.textContent = "sum: "+result;
// }
// function subtract(){
//     let result = num1 - num2;
//     sumEl.textContent = "sum: "+result;
// }
// function divide(){
//     let result = num1/num2;
//     sumEl.textContent = "sum: "+result;
// }

let player = {
    name  : "Avinash",
    chips : 69
} 
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + " : " + "$" + player.chips;
function getrandomCard(){
    let num = Math.floor(Math.random()*13) + 1;
    if(num==1) return 11;
    if(num>10) return 10;

    return num;
}

function startGame(){
    if(sum==0){
        isAlive = true;
        let firstCard = getrandomCard();
        let secondCard = getrandomCard();
        cards.push(firstCard);
        cards.push(secondCard);
    
        sum += firstCard + secondCard;
    }
    renderGame();
}
function renderGame(){

    sumEl.textContent = "Sum: "+ sum;
    cardEl.textContent = "Cards: ";

    for(let i=0;i<cards.length;i++){
        cardEl.textContent += cards[i] + " ";
    }

    if(sum<=20){
        message = "Do you want to draw a new card?";
    }
    else if(sum==21){
        message = "you've got Blackjack!";
        hasBlackJack = true;
    }
    else {
        message = "you're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard(){
    if(isAlive && !hasBlackJack){
        let newCard = getrandomCard();
        cards.push(newCard);
        sum += newCard;
        renderGame();
    }
}

