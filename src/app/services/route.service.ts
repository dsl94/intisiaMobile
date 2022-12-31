import {Inject, Injectable} from '@angular/core';
import {Booking} from "../models/booking.model";
import {Route} from "../models/route.model";
import {map} from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(
    private http: HttpClient,
    @Inject('BASE_API_URL') private baseUrl: string
  ) {}

  bookFlight(routeId: number, aircraftId: number) {
    return this.http.post(this.baseUrl + "/booking/user/book", {routeId: routeId, aircraftId: aircraftId});
  }

  getUserBooking() {
    return this.http.get<Booking>(this.baseUrl + '/' + 'booking/user/all');
  }

  readRoutesForLocation() {
    return this.http
      .get<Route[]>(this.baseUrl + '/route/user/all/location');
  }

  cancelBooking() {
    return this.http.delete(this.baseUrl + '/booking/user/booking/cancel');
  }

  canBook() {
    return this.http.get(this.baseUrl + "/booking/user/check").pipe(map((data: any) => data.canBook));
  }
}
