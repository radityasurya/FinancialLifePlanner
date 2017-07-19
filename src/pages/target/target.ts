import { MonthlySavingsPage } from './../monthly-savings/monthly-savings';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-target',
  templateUrl: 'target.html'
})
export class TargetPage {
  constructor(public navCtrl: NavController) {

  }

  next() {
    this.navCtrl.setRoot(MonthlySavingsPage);
  }

}
