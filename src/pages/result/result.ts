import { Component } from "@angular/core";
import { NavController, NavParams, PopoverController } from "ionic-angular";
import { RiscDetailPage } from "./risc-detail/risc-detail";
import { FonsDetailPage } from "./fons-detail/fons-detail";

@Component({
  selector: "page-result",
  templateUrl: "result.html"
})
export class ResultPage {
  singleValue: any = 10;

  current: number = 34;
  max: number = 100;
  stroke: number = 8;
  radius: number = 35;
  rounded: boolean = true;
  color: string = "#58669f";
  background: string = "rgb(229, 233, 234)";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController
  ) {}

  openRiscDetail($event) {
    let riscDetailPopup = this.popoverCtrl.create(RiscDetailPage);
    riscDetailPopup.present({});
  }

  openFonsDetail($event) {
    let fonsDetailPopup = this.popoverCtrl.create(FonsDetailPage);
    fonsDetailPopup.present({});
  }
}
