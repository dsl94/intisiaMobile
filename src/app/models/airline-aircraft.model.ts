import {Flight} from "./flight.model";

export interface AirlineAircraft {
    id: number;
    name: string;
    location: string;
    type: string;
    capacity: number;
    registration: string;
    cargo: boolean;
    fuelOnBoard: number;
}
