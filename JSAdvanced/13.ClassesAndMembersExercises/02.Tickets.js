/**
 * Created by vo13n on 13-Jul-17.
 */
function manage(ticketsData, sortCriteria) {
    let tickets = [];
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    for(let ticketData of ticketsData){
        let tokens = ticketData.split('|');
        let destination = tokens[0];
        let price = tokens[1];
        let status = tokens[2];
        tickets.push(new Ticket(destination, price, status));
    }
    return tickets.sort((a, b) => a[sortCriteria] > b[sortCriteria]);
}

console.log(manage(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'

));