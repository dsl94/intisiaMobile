import { Component, OnInit } from '@angular/core';
import {Route} from "../../models/route.model";
import {AirlineAircraft} from "../../models/airline-aircraft.model";
import {RouteService} from "../../services/route.service";
import {TokenService} from "../../services/token.service";
import {AircraftService} from "../../services/aircraft.service";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {LoadingController} from "@ionic/angular";
import {refresh} from "ionicons/icons";
import {Store} from "@ngrx/store";
import {resetBasicUserInfo} from "../../state/user/user.actions";
import {selectLocation, selectUser} from "../../state/user/user.selectors";
import {AppState} from "../../state/app.state";

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.page.html',
  styleUrls: ['./book-flight.page.scss'],
})
export class BookFlightPage implements OnInit {

  routes: Route[] = [];
  aircrafts: AirlineAircraft[] = [];
  // @ts-ignore
  location: string | undefined = "";
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
    private loadingCtrl: LoadingController,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
  }

  ionViewDidEnter() {
    this.loadData();
    this.store.select(selectLocation).subscribe(location => {
      this.location = location;
    });
  }

  logout() {
    this.tokenService.signOut();
    this.store.dispatch(resetBasicUserInfo());
    this.router.navigate(['/']);
  }

  async loadData() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();
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
