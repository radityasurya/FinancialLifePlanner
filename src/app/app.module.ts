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

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    MonthlySavingsPage,
    SavingsPage,
    TargetPage,
    ResultPage,
  ],
  imports: [
    BrowserModule,
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
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
