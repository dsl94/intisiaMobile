import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {TokenService} from "../../services/token.service";
import {Router} from "@angular/router";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private tokenService: TokenService, private router: Router,
              private alertController: AlertController) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenService.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe(
        (data: { token: any; }) => {
        this.tokenService.saveToken(data.token);
        this.tokenService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenService.getUser().roles;
        this.router.navigate(['/app/tabs/profile']);
      },
        (err: any) => {
        this.isLoginFailed = true;
        this.presentAlert().then();
      }
    );
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Bad credentials',
      message: 'Please check your credentials',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
