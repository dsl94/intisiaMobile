import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user.model";
import {LoadingController} from "@ionic/angular";
import {Route, Router} from "@angular/router";
import {TokenService} from "../../services/token.service";
import {changeLocation, resetBasicUserInfo} from "../../state/user/user.actions";
import {Store} from "@ngrx/store";
import {selectLocation} from "../../state/user/user.selectors";

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {
  form: any = {
    location: null,
  };
  location: string | undefined = '';
  pilot!: User;
  loaded = false;
  isModalOpen = false;
  constructor(
    private userService: UserService,
    private loadingCtrl: LoadingController,
    private router: Router,
    private tokenService: TokenService,
    private store: Store
  ) {}

  ngOnInit(): void {

  }

  onSubmit() {
    this.changeLocation();
  }

  logout() {
    this.tokenService.signOut();
    this.store.dispatch(resetBasicUserInfo());
    this.router.navigate(['/']);
  }

  ionViewDidEnter() {
    this.loadData();
    // @ts-ignore
    this.store.select(selectLocation).subscribe(location => {
      this.location = location;
    });
  }

  changeLocation() {
    this.store.dispatch(changeLocation(this.form));
    this.isModalOpen  = false;
    this.location = this.form.location;
    this.form = {
      location: null
    }
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
