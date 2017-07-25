import { TargetPage } from './../target/target';
import {Component, Input, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-savings',
  templateUrl: 'savings.html'
})

export class SavingsPage {
  @ViewChild('input') savingInput ;

  money: number = 56.500;
  constructor(public navCtrl: NavController) {

  }

  ionViewLoaded() {

    setTimeout(() => {
      this.savingInput.setFocus();
    },150);

 }


  next() {
    this.navCtrl.push(TargetPage);
  }

}
