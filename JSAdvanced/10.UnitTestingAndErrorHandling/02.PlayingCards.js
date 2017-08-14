/**
 * Created by vo13n on 10-Jul-17.
 */
function makeCard(face, suit) {
    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suits = ['S', 'H', 'D', 'C'];

    if(!faces.includes(face)){
        throw new Error('Invalid face!');
    }
    if(!suits.includes(suit)){
        throw new Error('Invalid suit!');
    }
    return {
        face : face,
        suit : suit,
        toString : function () {

            let suitsCode = {
                'S' : '\u2660',
                'H' : '\u2665',
                'D' : '\u2666',
                'C' : '\u2663'
            };
            return `${this.face}${suitsCode[this.suit] }`;
        }
    }
}
console.log('' + makeCard('A', 'S'));
console.log('' + makeCard('10', 'H'));
console.log('' + makeCard('1', 'C'));
