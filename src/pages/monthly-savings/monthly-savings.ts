import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ResultPage } from "../result/result";

@Component({
  selector: 'page-monthly-savings',
  templateUrl: 'monthly-savings.html'
})
export class MonthlySavingsPage {
  dualValue2: any = {
    lower: 1000,
    upper: 5000
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  next() {
    this.navCtrl.setRoot(ResultPage);
  }
}
