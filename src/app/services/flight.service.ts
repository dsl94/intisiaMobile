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
    return this.http.get<Flight>(this.baseUrl + '/flight/info/' + id);
  }
}
