import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user.model";
import {LoadingController} from "@ionic/angular";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {
  pilot!: User;
  loaded = false;

  constructor(
    private userService: UserService,
    private loadingCtrl: LoadingController,
    private router: Router
  ) {}

  ngOnInit(): void {
      console.log("Usao")
      this.loadData();
  }

  async loadData() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();
    this.userService.readProfile().subscribe((data) => {
      this.pilot = data;
      loading.dismiss();
      this.loaded = true;
    });
  }

  goToFlightDetail(id: any) {
    console.log("Kliknuo da item: ", id);
    this.router.navigate(['/app/tabs/profile/flight/', id]);
  }
}