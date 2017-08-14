/**
 * Created by vo13n on 12-Jul-17.
 */
let myModule = (() => {
    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        toString() {
            return this._face + this.suit;
        }

        get face() {
            return this._face;
        }

        set face(value) {
            if (!Card.validFaces.includes(value)) {
                throw new Error("Invalid face!");
            }
            this._face = value;
        }

        get suit() {
            return this._suit;
        }

        set suit(value) {
            if (!Object.keys(Suits).map(k => Suits[k]).includes(value)) {
                throw new Error("Invalid suit!");
            }
            this._suit = value;
        }

        static get validFaces() {
            return Card._validFaces
        }
    }
    Card._validFaces = [
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'J',
        'Q',
        'K',
        'A'
    ];
    let Suits = {
        SPADES: '♠',
        HEARTS: '♥',
        DIAMONDS: '♦',
        CLUBS: '♣'
    };
    return {Suits, Card};
})();


let c1 = new myModule.Card('Q', myModule.Suits.SPADES);
console.log(c1 + '');