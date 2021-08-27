class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }
}

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
        
        //Create each card in the deck by looping over the suits and ranks. 
        //Values assigned from rank index low to high
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                this.deck.push(new Card(ranks[j], j + 2, suits[i]));
            }
        }

    }

    // Shuffle in place method using the Durstenfeld shuffle randomly swapping card indexes
    shuffle() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            let randomIndex = Math.floor(Math.random() * (i + 1));
            let currentIndex = this.deck[i];
            this.deck[i] = this.deck[randomIndex];
            this.deck[randomIndex] = currentIndex;
        }

        return this.deck;
    }

    deal(firstPlayer, secondPlayer) {
        firstPlayer.hand = [...this.deck.slice(0,26)];
        secondPlayer.hand = [...this.deck.slice(26, 52)];
    }
}

const testDeck = new Deck;
console.dir(testDeck);
