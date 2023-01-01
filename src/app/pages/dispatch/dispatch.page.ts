import { Component, OnInit } from '@angular/core';
import {RouteService} from "../../services/route.service";
import {TokenService} from "../../services/token.service";
import { Router} from "@angular/router";
import {Booking} from "../../models/booking.model";
import {LoadingController} from "@ionic/angular";
import * as L from "leaflet";
import {resetBasicUserInfo} from "../../state/user/user.actions";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-dispatch',
  templateUrl: './dispatch.page.html',
  styleUrls: ['./dispatch.page.scss'],
})
export class DispatchPage implements OnInit {

  booking!: Booking;
  loaded: boolean = false;

  private map: any;

  private initMap(): void {
    const departureIcon = L.divIcon({
      html:
        '<ion-text color="success"><i class="fas fa-plane-departure fa-3x"></i></ion-text>',
      iconSize: [20, 20],
      className: 'myDivIcon',
    });
    const arrivallIcon = L.divIcon({
      html:
        '<ion-text color="danger"><i class="fas fa-plane-arrival fa-3x"></i></ion-text>',
      iconSize: [20, 20],
      className: 'myDivIcon',
    });
    const deplon = this.booking.deplon;
    const deplat = this.booking.deplat;
    const arlon = this.booking.arlon;
    const arlat = this.booking.arlat;
    this.map = L.map('map', {
      center: [deplat, deplon],
      zoom: 3,
    }).fitBounds(
      [
        [deplat, deplon],
        [arlat, arlon],
      ],
      { padding: [50, 50] }
    );


    const tiles = L.tileLayer(
      'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
      }
    );

    tiles.addTo(this.map);

    const depMarker = L.marker([deplat, deplon], {
      title: this.booking.departure,
      icon: departureIcon,
    });

    depMarker.addTo(this.map);
    depMarker
      .bindPopup(this.booking.departure, {
        autoClose: false,
        closeOnClick: false,
      })
      .openPopup();

    const arrMarker = L.marker([arlat, arlon], {
      title: this.booking.arrival,
      icon: arrivallIcon,
    });

    arrMarker.addTo(this.map);
    arrMarker
      .bindPopup(this.booking.arrival, { autoClose: false, closeOnClick: false })
      .openPopup();

    var polylinePoints = [
      [deplat, deplon],
      [arlat, arlon],
    ];

    // @ts-ignore
    var polyline = L.polyline(polylinePoints).addTo(this.map);
  }

  constructor(
    private routeService: RouteService,
    private loadingCtrl: LoadingController,
    private router: Router,
    private tokenService: TokenService,
    private store: Store
  ) {}

  ngOnInit(): void {
  }

  logout() {
    this.tokenService.signOut();
    this.store.dispatch(resetBasicUserInfo());
    this.router.navigate(['/']);
  }

  ionViewDidEnter() {
    this.loadData();
  }

  async loadData() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();
    this.routeService.getUserBooking().subscribe((data: any) => {
      this.booking = data;
      this.loaded = true;
      if (this.booking.departure != undefined) {
        this.initMap();
      }
      loading.dismiss();
    });
  }

  cancelBooking() {
    this.routeService.cancelBooking().subscribe((data:any) => {
      this.loadData();
    });
  }

}
