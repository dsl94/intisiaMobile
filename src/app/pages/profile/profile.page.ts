import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user.model";
import {LoadingController} from "@ionic/angular";
import {Route, Router} from "@angular/router";
import {TokenService} from "../../services/token.service";
import {resetBasicUserInfo} from "../../state/user/user.actions";
import {Store} from "@ngrx/store";

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
    this.userService.readProfile().subscribe((data) => {
      this.pilot = data;
      loading.dismiss();
      this.loaded = true;
    });
  }

  goToFlightDetail(id: any) {
    this.router.navigate(['/app/tabs/profile/flight/', id]);
  }
}
