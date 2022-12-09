export class Route {
    id: number;
    departure: string;
    arrival: string;
    flightNumber: string;
    ticketPrice: string;
    booked: boolean;


	constructor(id: number, departure: string, arrival: string, flightNumber: string, ticketPrice: string, booked: boolean) {
        this.id = id;
        this.departure = departure;
        this.arrival = arrival;
        this.flightNumber = flightNumber;
        this.ticketPrice = ticketPrice;
        this.booked = booked;
	}

}
