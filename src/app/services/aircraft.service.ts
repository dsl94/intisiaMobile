import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { map } from 'rxjs/operators';
import {Aircraft} from "../models/aircraft.model";
import {AirlineAircraft} from "../models/airline-aircraft.model";

@Injectable({
  providedIn: 'root'
})
export class AircraftService {

  constructor(
    private http: HttpClient,
    @Inject('BASE_API_URL') private baseUrl: string
  ) {}

  readAirlineAircraftForLocation() {
    return this.http
      .get(this.baseUrl + '/booking/user/booking/aircrafts')
      .pipe(
        map((data: any) =>
          data.map((item: any) => this.createAirlineAircraftFromObject(item))
        )
      );
  }

  private createAirlineAircraftFromObject(item: any) {
    return new AirlineAircraft(
      item.id,
      item.name,
      item.location,
      item.type,
      item.capacity,
      item.registration,
      item.cargo,
      item.fuelOnBoard
    );
  }
}
