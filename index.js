// Declare and store player's info in a object called player
let player = {
    name: "Hemanth",
    chips: 500
}
// Declare a variable called cards and assign its value to an empty array
let cards = []

// Declare a variable called sum and assign its value to 0
let sum = 0

// Declare a variable called bet and assign its value to 20
let bet = 20

// Declare a variable called prize and assign its value to triple the bet
let prize = bet * 3

 // Declare a variable called hasBlackJack and assign its value to false
let hasBlackJack = false

// Declare a variable called isAlive and assign its value to false
let isAlive = false

// Declare a variable called message and assign its value to an empty string
let message = ""

// Store the message-el paragraph in a variable called messageEl
let messageEl = document.getElementById("message-el")

// Store the sum paragraph in a variable called sumEl
let sumEl = document.getElementById("sum-el")

// Store the cards paragraph in a variable called cardsEl
let cardsEl = document.getElementById("cards-el")

// Store the player's info in a variable called playerEl
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

// Store start button in a variable called buttonStartEL
let buttonStartEL = document.getElementById("btn-start-el")

// Store draw button in a variable called buttonDrawEL
let buttonNewEL = document.getElementById("btn-new-el")

// Create a function getRandomCard() that return a random number between 2-13
function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
     // if 1     -> return 11
    // if 11-13 -> return 10
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

// Create a new function called startGame() that assign the first 2 cards and calls renderGame()
function startGame() {
    if (player.chips >= bet){
        isAlive = true
        hasBlackJack = false
    // Call updateChips()
        updateChips()
        displayButtons()
    // Generate two random numbes
    // Use the getRandomCard() to set the value of first and second cards
         let firstCard = getRandomCard()
         let secondCard = getRandomCard()
// Re-assign the cards and sum variables so that the game can start
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        renderGame()
    } else {

    // Reassign the message variable
        message = "You don't have enough chips!"
        messageEl.textContent = message
    }
}   

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        isAlive = false
        updateChips()
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    displayButtons()
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}

//NEW FUNCTION 1.1
// Create a function updateChips() that
function updateChips() {
  if (hasBlackJack === true && isAlive === false) {
    // Add prize to player's chips everytime he gets Blackjack
    player.chips += prize;
    playerEl.textContent = player.name + ": $" + player.chips;
  } else if (hasBlackJack === false && isAlive === true) {
    // Remove bet to player's chips everytime he starts a new game
    player.chips -= bet;
    playerEl.textContent = player.name + ": $" + player.chips;
  }
}

//NEW FUNCTION 1.2
// Create a function displayButtons() that displays or hides buttons according to player's state
function displayButtons() {
  if (isAlive === false) {
    // Change display property to draw button hiding it when game is over
    buttonNewEL.style.display = "none";
  } else {
    buttonNewEL.style.display = "block";
  }
  if (player.chips < bet || isAlive === true) {
    // Change display property to start button hiding when player's chips are not enough
    buttonStartEL.style.display = "none";
  } else {
    // Change display property to start button displaying it otherwise
    buttonStartEL.style.display = "block";
  }
}