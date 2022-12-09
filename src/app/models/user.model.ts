import { Flight } from "./flight.model";

export class User {
    userName: string;
    fullName: string;
    email: string;
    secretCode: string;
    airline: string;
    location: string;
    minutes: number;
    flights: Flight[];

    constructor(userName: string, fullName: string, email: string, secreCode: string, airline: string, location: string, minutes: number, flights: Flight[]) {
        this.userName = userName;
        this.fullName = fullName;
        this.email = email;
        this.secretCode = secreCode;
        this.airline = airline;
        this.location = location;
        this.minutes = minutes;
        this.flights = flights;
    }
}
