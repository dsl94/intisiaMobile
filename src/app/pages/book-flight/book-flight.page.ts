import { Component, OnInit } from '@angular/core';
import {Route} from "../../models/route.model";
import {AirlineAircraft} from "../../models/airline-aircraft.model";
import {RouteService} from "../../services/route.service";
import {TokenService} from "../../services/token.service";
import {AircraftService} from "../../services/aircraft.service";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.page.html',
  styleUrls: ['./book-flight.page.scss'],
})
export class BookFlightPage implements OnInit {

  routes: Route[] = [];
  aircrafts: AirlineAircraft[] = [];
  searchText = '';
  location: string = '';
  canBook: boolean = false;
  form: any = {
    aircraft: null,
  };
  selectedRoute: number = -1;
  loaded = false;
  isModalOpen = false;

  constructor(
    private routeService: RouteService,
    private tokenService: TokenService,
    private aircraftService: AircraftService,
    private userService: UserService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();
    this.userService.readLocation().subscribe((data) => {
      this.location = data;
      this.routeService.readRoutesForLocation().subscribe((data) => {
        this.routes = data;
        loading.dismiss();
        this.loaded = true;
      });
      this.aircraftService.readAirlineAircraftForLocation().subscribe((data) => {
        this.aircrafts = data;
      });
      this.routeService.canBook().subscribe((data) => {
        this.canBook = data;
      });
    });
  }

  setOpen(open: boolean, id: number) {
    if (open) {
      this.isModalOpen = true;
      this.selectedRoute = id;
    } else {
      this.isModalOpen = false;
      this.selectedRoute = -1;
    }
  }

  onSubmit() {
    this.routeService
      .bookFlight(this.selectedRoute, this.form.aircraft)
      .subscribe((data) => {
        this.tokenService.setBookedFlight();
        this.setOpen(false, -1);
        this.loadData();
      });
  }

}