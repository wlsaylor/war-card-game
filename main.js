class Card {
    constructor(rank, value, suit) {
        this.rank = rank;
        this.value = value;
        this.suit = suit;
    }
}

class Deck {
    constructor() {
        this.deck = [];

        const suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10',
        'Jack', 'Queen', 'King', 'Ace'];
        const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        
        //Create each card in the deck by looping over the suits, ranks, and values
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                this.deck.push(new Card(ranks[j], values[j], suits[i]));
            }
        }

    }

    // Shuffle in place using the Durstenfeld shuffle 
    shuffle() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            let randomCard = Math.floor(Math.random() * (i + 1));
            let currentCard = this.deck[i];
            this.deck[i] = this.deck[randomCard];
            this.deck[randomCard] = currentCard;
        }

        return this.deck;
    }
}

const testDeck = new Deck;
console.dir(testDeck);
