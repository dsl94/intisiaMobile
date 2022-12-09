import { Booking } from './booking.model';
import { Flight } from './flight.model';

export class Dashboard {
  name: string;
  icao: string;
  numberOfFlights: number;
  numberOfPilots: number;
  balance: number;
  numberOfPlanes: number;
  lastFiveFlights: Flight[];
  bookings: Booking[];

  constructor(
    name: string,
    icao: string,
    numberOfFlights: number,
    numberOfPilots: number,
    balance: number,
    numberOfPlanes: number,
    lastFiveFlights: Flight[],
    bookings: Booking[]
  ) {
    this.name = name;
    this.icao = icao;
    this.numberOfFlights = numberOfFlights;
    this.numberOfPilots = numberOfPilots;
    this.balance = balance;
    this.numberOfPlanes = numberOfPlanes;
    this.lastFiveFlights = lastFiveFlights;
    this.bookings = bookings;
  }
}
