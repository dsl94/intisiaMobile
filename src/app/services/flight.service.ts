import { Flight } from 'src/app/models/flight.model';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  constructor(
    private http: HttpClient,
    @Inject('BASE_API_URL') private baseUrl: string
  ) {}

  readFlight(id: number) {
    return this.http.get(this.baseUrl + '/flight/info/' + id).pipe(map((data: any) => this.convertObjectToFlight(data)));
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
