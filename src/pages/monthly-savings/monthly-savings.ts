import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ResultPage } from "../result/result";

@Component({
  selector: 'page-monthly-savings',
  templateUrl: 'monthly-savings.html'
})
export class MonthlySavingsPage {
  moneyValue: any = 5000;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  next() {
    this.navCtrl.push(ResultPage);
  }
}
