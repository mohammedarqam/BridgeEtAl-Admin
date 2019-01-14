import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import * as firebase from 'firebase';
import { LoginPage } from '../pages/Auth/login/login';
import { DashboardPage } from '../pages/Main Pages/dashboard/dashboard';
import { ForgotPassPage } from '../pages/Auth/forgot-pass/forgot-pass';
import { ContactUsPage } from '../pages/Main Pages/contact-us/contact-us';
import { SubscriptionsPage } from '../pages/Main Pages/subscriptions/subscriptions';
import { AllUsersPage } from '../pages/Main Pages/all-users/all-users';


export const firebaseCred = {
  apiKey: "AIzaSyBdR8iHLCNUhjaWWj6cvzXWw5laH0pdyl4",
  authDomain: "bridgeetal-ebani.firebaseapp.com",
  databaseURL: "https://bridgeetal-ebani.firebaseio.com",
  projectId: "bridgeetal-ebani",
  storageBucket: "bridgeetal-ebani.appspot.com",
  messagingSenderId: "588176108758"
};
firebase.initializeApp(firebaseCred);


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    DashboardPage,
    ForgotPassPage,
    ContactUsPage,
    SubscriptionsPage,
    AllUsersPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseCred),
    AngularFirestoreModule.enablePersistence(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    DashboardPage,
    ForgotPassPage,
    ContactUsPage,
    SubscriptionsPage,
    AllUsersPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}

  ]
})
export class AppModule {}
