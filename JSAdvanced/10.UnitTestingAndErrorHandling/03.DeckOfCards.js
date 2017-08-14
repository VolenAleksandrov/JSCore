/**
 * Created by vo13n on 10-Jul-17.
 */
function printDeckOfCards(cards) {
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
    let resultArr = [];
    let hasInvalid = false;
    for(let card of cards){
        let cardSuit = card[card.length - 1];
        let cardFace = card.substring(0, card.length - 1);
        try{
            resultArr.push(makeCard(cardFace, cardSuit));
        }
        catch(Error) {
            console.log(`Invalid card: ${card}`);
            hasInvalid = true;
            break;
        }
    }
    if(!hasInvalid){
        console.log(resultArr.join(' '));
    }
}
printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);
