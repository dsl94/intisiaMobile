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

  readAllRoutes() {
    return this.http
      .get(this.baseUrl + '/route/user/all')
      .pipe(
        map((data: any) =>
          data.map((item: any) => this.convertObjectToRoute(item))
        )
      );
  }

  bookFlight(routeId: number, aircraftId: number) {
    return this.http.post(this.baseUrl + "/booking/user/book", {routeId: routeId, aircraftId: aircraftId});
  }

  getUserBooking() {
    return this.http.get(this.baseUrl + '/' + 'booking/user/all').pipe(map((data: any) => this.convertObjectToBooking(data)));
  }

  readRoutesForLocation() {
    return this.http
      .get(this.baseUrl + '/route/user/all/location')
      .pipe(
        map((data: any) =>
          data.map((item: any) => this.convertObjectToRoute(item))
        )
      );
  }

  createRoute(departure: string, arrival: string, returnFlight: boolean){
    return this.http.post(this.baseUrl + "/route/admin/create", {departure: departure, arrival: arrival, returnFlight: returnFlight});
  }

  cancelBooking() {
    return this.http.delete(this.baseUrl + '/booking/user/booking/cancel');
  }

  cancelBookingForUser(username: string) {
    return this.http.delete(this.baseUrl + '/booking/user/booking/cancel/' + username);
  }

  canBook() {
    return this.http.get(this.baseUrl + "/booking/user/check").pipe(map((data: any) => data.canBook));
  }

  private convertObjectToRoute(item: any) {
    return new Route(
      item.id,
      item.departure,
      item.arrival,
      item.flightNumber,
      item.ticketPrice,
      item.booked
    );
  }

  private convertObjectToBooking(item: any) {
    return new Booking(
      item.departure,
      item.arrival,
      item.flightNumber,
      item.passengers,
      item.cargo,
      item.user,
      item.aircraft,
      item.specialCargo,
      item.deplat,
      item.deplon,
      item.arlat,
      item.arlon
    );
  }
}
