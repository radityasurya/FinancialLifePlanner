import { SavingsPage } from './../savings/savings';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  toSavings() {
    this.navCtrl.setRoot(SavingsPage)
  }

}
