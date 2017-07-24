import { MonthlySavingsPage } from './../monthly-savings/monthly-savings';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-target',
  templateUrl: 'target.html'
})
export class TargetPage {

  year: Number = 2018;

  timelines = [];

  constructor(public navCtrl: NavController) {
    
    for (var index = 0; index < 9; index++) {
      this.timelines.push({
        name: "L’any que ve",
        year: 2018 + index,
        selected: false,
        active: false,
      });
    }

    this.timelines[0].selected = true;
    this.timelines[0].active = true;
  }

  next() {
    this.navCtrl.push(MonthlySavingsPage);
  }

  selectTime(t) {
    console.log('select', t);
    this.resetTimeline();
    for (var index = 0; index < this.timelines.length; index++) {
      this.timelines[index].selected = false;
      this.timelines[index].active = true;
      
      if (t.year == this.timelines[index].year) {
        this.timelines[index].selected = true;
        break;
      }
    }    
  }

  resetTimeline() {
    this.timelines.map(function(t) {
      t.selected = false;
      t.active = false;
    });
  }

}
