import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { MonthlySavingsPage } from './../pages/monthly-savings/monthly-savings';
import { SavingsPage } from './../pages/savings/savings';
import { TargetPage } from './../pages/target/target';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ResultPage } from "../pages/result/result";
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { RiscDetailPage } from "../pages/result/risc-detail/risc-detail";
import { FonsDetailPage } from "../pages/result/fons-detail/fons-detail";

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    MonthlySavingsPage,
    SavingsPage,
    TargetPage,
    ResultPage,
    FonsDetailPage,
    RiscDetailPage
  ],
  imports: [
    BrowserModule,
    RoundProgressModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    MonthlySavingsPage,
    SavingsPage,
    TargetPage,
    ResultPage,
    FonsDetailPage,
    RiscDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    RoundProgressModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
