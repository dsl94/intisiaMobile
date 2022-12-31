import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';
import { Flight } from '../models/flight.model';
import * as url from "url";
import {Location} from "../models/location.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, @Inject('BASE_API_URL') private baseUrl: string) { }

  readProfile() {
    var url = this.baseUrl + '/user/profile';
    return this.http.get<User>(url);
  }

  changeLocation(location: string) {
    return this.http.put(this.baseUrl + '/user/profile/' + location.toUpperCase(), null);
  }

  readLocation() {
    return this.http.get<Location>(this.baseUrl + '/user/profile/location');
  }
}
