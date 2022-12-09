import { max } from 'rxjs/operators';

export class Aircraft {
  id: number;
  icao: string;
  name: string;
  price: number;
  maxPassengers: number;
  maxCargo: number;
  cargo: boolean;

  constructor(
    id: number,
    icao: string,
    name: string,
    price: number,
    maxPassengers: number,
    maxCargo: number,
    cargo: boolean
  ) {
    this.id = id;
    this.icao = icao;
    this.name = name;
    this.price = price;
    this.maxPassengers = maxPassengers;
    this.maxCargo = maxCargo;
    this.cargo = cargo;
  }
}
