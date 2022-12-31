import { max } from 'rxjs/operators';

export interface Aircraft {
  id: number;
  icao: string;
  name: string;
  price: number;
  maxPassengers: number;
  maxCargo: number;
  cargo: boolean;
}
