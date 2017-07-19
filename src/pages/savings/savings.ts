import { TargetPage } from './../target/target';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-savings',
  templateUrl: 'savings.html'
})

export class SavingsPage {
  constructor(public navCtrl: NavController) {

  }

  next() {
    this.navCtrl.setRoot(TargetPage);
  }

}
