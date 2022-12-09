export class Booking {
  departure: string;
  arrival: string;
  flightNumber: string;
  passengers: number;
  cargo: number;
  user: string;
  aircraft: string;
  specialCargo: string;
  deplat: number;
    deplon: number;
    arlat: number;
    arlon: number;

  constructor(
    departure: string,
    arrival: string,
    flightNumber: string,
    passengers: number,
    cargo: number,
    user: string,
    aircraft: string,
    specialCargo: string,
    deplat: number,
    deplon: number,
    arlat: number,
    arlon: number
  ) {
    this.departure = departure;
    this.arrival = arrival;
    this.flightNumber = flightNumber;
    this.passengers = passengers;
    this.cargo = cargo;
    this.user = user;
    this.aircraft = aircraft;
    this.specialCargo = specialCargo;
    this.deplat = deplat;
    this.deplon = deplon;
    this.arlat= arlat;
    this.arlon= arlon;
  }
}
