import { Component, OnInit } from '@angular/core';
import {Flight} from "../../models/flight.model";
import {FlightService} from "../../services/flight.service";
import {ActivatedRoute} from "@angular/router";
import {LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.page.html',
  styleUrls: ['./flight-details.page.scss'],
})
export class FlightDetailsPage implements OnInit {
  id!: number;
  flight!: Flight;
  loaded = false;

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
    });
  }
}
