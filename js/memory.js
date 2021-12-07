class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0; // initially had it at null, but then i realised i would need to be adding
    this.pairsGuessed = 0; 
  }

  shuffleCards() {
    // ... write your code here
  
    
    let i = this.cards.length, randomCard, tempCard   // 
  
    while (--i > 0) { // decrement the arrays length, starts from the end
      randomCard = Math.floor(Math.random() * (i +1) ) // random number generated each time the loop passes
      tempCard = this.cards[randomCard] //grab the random index position;
      this.cards[randomCard] = this.cards[i] //swap with the index position of the loop
      this.cards[i] = tempCard
    }


  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++
    if (card1 === card2 ) {
      this.pairsGuessed++
      return true
    } else {
      return false
    }
  }

  checkIfFinished() {
    // ... write your code here
    return this.pairsGuessed === this.cards.length/2

  }
}


// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
