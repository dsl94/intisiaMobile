import { Component } from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../models/user.model";
import {LoadingController} from "@ionic/angular";

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
    this.userService.readProfile().subscribe((data) => {
      this.pilot = data;
      loading.dismiss();
      this.loaded = true;
    });
  }
}
