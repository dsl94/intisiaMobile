import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
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
      .get<AirlineAircraft[]>(this.baseUrl + '/booking/user/booking/aircrafts');
  }
}
