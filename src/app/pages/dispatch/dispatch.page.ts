import { Component, OnInit } from '@angular/core';
import {RouteService} from "../../services/route.service";
import {TokenService} from "../../services/token.service";
import { Router} from "@angular/router";
import {Booking} from "../../models/booking.model";
import {LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-dispatch',
  templateUrl: './dispatch.page.html',
  styleUrls: ['./dispatch.page.scss'],
})
export class DispatchPage implements OnInit {

  booking!: Booking;
  loaded: boolean = false;

  constructor(
    private routeService: RouteService,
    private loadingCtrl: LoadingController,
    private router: Router,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
  }

  logout() {
    this.tokenService.signOut();
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
      loading.dismiss();
    });
  }

  cancelBooking() {
    this.routeService.cancelBooking().subscribe((data:any) => {
      this.loadData();
    });
  }

}
