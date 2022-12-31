import { Flight } from "./flight.model";

export interface User {
    userName: string;
    fullName: string;
    email: string;
    secretCode: string;
    airline: string;
    location: string;
    minutes: number;
    lastFiveFlights: Flight[];
}
