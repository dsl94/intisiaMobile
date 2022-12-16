import {Flight} from "./flight.model";

export class AirlineAircraft {
    id: number;
    name: string;
    location: string;
    type: string;
    capacity: number;
    registration: string;
    cargo: boolean;
    fuelOnBoard: number;

    constructor(id: number, name: string, location: string, type: string, capacity: number, registration: string, cargo: boolean, fuelOnBoard: number) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.type = type;
        this.capacity = capacity;
        this.registration = registration;
        this.cargo = cargo;
        this.fuelOnBoard = fuelOnBoard;
    }
}
