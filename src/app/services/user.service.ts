import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';
import { Flight } from '../models/flight.model';
import * as url from "url";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, @Inject('BASE_API_URL') private baseUrl: string) { }

  readProfile() {
    var url = this.baseUrl + '/user/profile';
    return this.http.get(url).pipe(
      map((data: any) => this.createUserFromObject(data))
    );
  }

  changeLocation(location: string) {
    return this.http.put(this.baseUrl + '/user/profile/' + location.toUpperCase(), null);
  }

  readLocation() {
    return this.http.get(this.baseUrl + '/user/profile/location').pipe(
      map((data: any) => data.icao)
    );
  }

  private createUserFromObject(item: any) {
     return new User(
        item.userName,
        item.fullName,
        item.email,
        item.secretCode,
        item.airline,
        item.location,
        item.minutes,
        item.lastFiveFlights.map((data: any) => this.convertObjectToFlight(data))
      );
  }

  private convertObjectToFlight(item: any) {
    return new Flight(
      item.id,
      item.departure,
      item.arrival,
      item.startTime,
      item.endTime,
      item.length,
      item.aircraft,
      item.user,
      item.fuelSpent,
      item.earning,
      item.fuelCost,
      item.profit,
      item.info,
      item.landingRate,
      item.fuelStart,
      item.fuelEnd,
      item.fuelBought,
      item.deplat,
      item.deplon,
      item.arlat,
      item.arlon
    );
  }
}
