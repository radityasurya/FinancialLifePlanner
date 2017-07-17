import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public menu: MenuController) {
    this.menu.get().enable(false)
  }

  ionViewWillEnter() {
    this.menu.get().enable(false)
  }


  ionViewWillLeave() {
    this.menu.get().enable(true)
  }

  toHome() {
    this.navCtrl.setRoot(HomePage);
  }

}
