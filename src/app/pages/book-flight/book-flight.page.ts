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
import {bookFlight, resetBasicUserInfo} from "../../state/user/user.actions";
import {selectHasBookedFlight, selectLocation, selectUser} from "../../state/user/user.selectors";
import {AppState} from "../../state/app.state";
import {selectAllRoutes} from "../../state/route/routes.selectors";

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.page.html',
  styleUrls: ['./book-flight.page.scss'],
})
export class BookFlightPage implements OnInit {

  routes$ = this.store.select(selectAllRoutes);
  aircrafts: AirlineAircraft[] = [];
  location: string | undefined = "";
  canBook: boolean | undefined = false;
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
      this.aircraftService.readAirlineAircraftForLocation().subscribe((data) => {
        this.aircrafts = data;
        this.loaded = true;
      });
      this.store.select(selectHasBookedFlight).subscribe((data) => {
        this.canBook = !data;
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
        this.store.dispatch(bookFlight({booked: true}));
        this.setOpen(false, -1);
        this.loadData();
      });
  }

}
