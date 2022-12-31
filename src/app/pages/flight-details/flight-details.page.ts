import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Flight} from "../../models/flight.model";
import {FlightService} from "../../services/flight.service";
import {ActivatedRoute} from "@angular/router";
import {LoadingController} from "@ionic/angular";
import * as L from 'leaflet';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.page.html',
  styleUrls: ['./flight-details.page.scss'],
})
export class FlightDetailsPage implements OnInit {
  id!: number;
  flight!: Flight;
  loaded = false;
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
    const deplon = this.flight.deplon;
    const deplat = this.flight.deplat;
    const arlon = this.flight.arlon;
    const arlat = this.flight.arlat;
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
      title: this.flight.departure,
      icon: departureIcon,
    });

    depMarker.addTo(this.map);
    depMarker
      .bindPopup(this.flight.departure, {
        autoClose: false,
        closeOnClick: false,
      })
      .openPopup();

    const arrMarker = L.marker([arlat, arlon], {
      title: this.flight.arrival,
      icon: arrivallIcon,
    });

    arrMarker.addTo(this.map);
    arrMarker
      .bindPopup(this.flight.arrival, { autoClose: false, closeOnClick: false })
      .openPopup();

    var polylinePoints = [
      [deplat, deplon],
      [arlat, arlon],
    ];

    // @ts-ignore
    var polyline = L.polyline(polylinePoints).addTo(this.map);
  }

  constructor(  private flightService: FlightService,
                private activatedRoute: ActivatedRoute,
                private loadingCtrl: LoadingController,) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.loadData();
  }

  async loadData() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();
    this.flightService.readFlight(this.id).subscribe((data) => {
      this.flight = data;
      this.loaded = true;
      loading.dismiss();
      this.initMap();
    });
  }
}
